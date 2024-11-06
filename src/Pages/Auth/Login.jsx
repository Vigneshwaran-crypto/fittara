import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./auth.css";
// const axios = require("axios").default;
import { useGoogleLogin } from "@react-oauth/google";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { authenticateUser, updateUser } from "../../Api/UsersService";
import { emailValidate } from "../../Common/Validations";
import Loader from "../../Component/Loader";
import { infoToast, inputErrorToast } from "../Components/Toasts";
import CustomSwitch from "./CustomSwitch";
import axios from "axios";
import { useDispatch } from "react-redux";
import { reduxStore } from "../../ReduxToolKit/MainSlice";
import { saveUser } from "../../ReduxToolKit/Actions";
import { setUserToken } from "../../Common/SessionHandler";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LogIn = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("oraisa@mailinator.com");
  const [pass, setPass] = useState("pass12!@");

  const [seller, setSeller] = useState(true);

  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [isLogin, setIsLogin] = useState(true);

  const [userData, setUserData] = useState({});

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const onSigInClick = () => {
    if (!email) {
      toast.error("Enter email");
    } else if (!emailValidate(email)) {
      toast.error("Enter valid email");
    } else if (!pass) {
      toast.error("Enter password");
    } else {
      const req = {
        email,
        password: pass,
        loginType: 0,
      };

      setLoader(true);
      authenticateUser(req)
        .then((res) => {
          console.log("authenticateUser res :", res);
          if (res.data.status === 1) {
            dispatch(reduxStore(saveUser(res.data.data)));
            setUserToken(res.data.data.token);
            navigation("/dashboard/products");
            toast.success("Login successfully");
          } else {
            console.log("authenticateUser err : ");
            toast.error("Invalid credential");
          }
        })
        .catch((err) => {
          console.log("authenticateUser catch :", err);
          setLoader(true);
        })
        .finally(() => setLoader(false));
    }
  };

  const makeUserGAuth = (user) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log("Google auth USER : ", res);
        const val = res.data;

        const req = {
          email: val.email,
          gAuthId: val.id,
          profileImage: val.picture,
          loginType: 1,
        };
        setLoader(true);
        authenticateUser(req)
          .then((res) => {
            console.log("authenticateUser gAuth res: ", res);
            if (res.data.status !== 0) {
              dispatch(reduxStore(saveUser(res.data.data)));
              setUserToken(res.data.data.token);
              navigation("/dashboard/products");
              toast.success("Login successfully");
            } else {
              //first time Gauth user
              // setIsLogin(false);
              // setUserData(res.data.data);
              toast.error("Something went wrong");
            }
          })
          .catch((err) => {
            console.log("authenticateUser gAuth err : ", err);
          })
          .finally(() => setLoader(false));
      })
      .catch((err) => {
        console.log("Google auth user err : ", err);
        setIsLogin(false);
      });
  };

  const onGLogClick = useGoogleLogin({
    onSuccess: (usr) => {
      console.log("user Token Details :", usr);
      makeUserGAuth(usr);
    },
    onError: (err) => console.log("onGLogError : ", err),
  });

  const onContinueClick = () => {
    console.log("userData in onContinueClick : ", userData);

    const changedUser = { ...userData };
    changedUser.isSeller = seller;

    console.log("updated user data : ", changedUser);

    updateUser(changedUser)
      .then((res) => {
        console.log("user updated successfully : ", res);
        if (res.data.status === 1) {
          dispatch(reduxStore(saveUser(changedUser)));
          setUserToken(changedUser.token);
          navigation("/dashboard/products");
        } else {
          console.log("authenticateUser err : ");
          toast.error("Something went wrong");
        }
      })
      .catch((err) => {
        console.log("userUpdate failed");
      });
  };

  return (
    <Container
      className="registerContainer"
      style={{ flexDirection: "column" }}
      fluid
    >
      {loader && <Loader />}
      <Toaster />

      {/* {isLogin ? ( */}
      <Row md={12} sm={12} lg={12} xl={12} className="registerBigCardHolder">
        <Col md={6} sm={8} lg={6} xl={4} className="registerBigCard">
          <div className="loginTitle">Login</div>

          <div className="loginSubText">
            Login and grow your business in a minimalist way
          </div>

          <div className="inputsHolder">
            <TextField
              label={"Email"}
              size="small"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label={"Password"}
              size="small"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <a className="loginTroubleLinkText" href="#">
              Having trouble in login ?
            </a>

            <Button
              style={{ textTransform: "none" }}
              variant="contained"
              onClick={onSigInClick}
            >
              Sign in
            </Button>

            <div className="orTextHolder">
              <hr className="divider" />
              <div className="orText">Or signin with</div>

              <hr className="divider" />
            </div>

            <Button
              startIcon={<FcGoogle />}
              style={{ textTransform: "none", fontSize: "15px" }}
              variant="outlined"
              onClick={onGLogClick}
            >
              Google
            </Button>

            <div className="regText">
              Don't have an account ?
              <b>
                <a
                  className="loginTroubleLinkText"
                  href="#"
                  onClick={() => navigation("/register")}
                >
                  {" "}
                  Register Now
                </a>
              </b>
            </div>
          </div>
        </Col>
      </Row>
      {/* // ) : (
      //   <Row className="registerBigCardHolder fadeInUp-animation">
      //     <Col md={6} sm={8} lg={6} xl={4} className="registerBigCard">
      //       <div className="loginTitle">Welcome to our app</div>

      //       {seller ? (
      //         <div className="loginSubText">Boost Your Business with Us.</div>
      //       ) : (
      //         <div className="loginSubText">
      //           Discover the Best Deals, All in One Place.
      //         </div>
      //       )}

      //       <div className="inputsHolder">
      //         <CustomSwitch curSwitch={(flag) => setSeller(flag)} />

      //         <Button
      //           style={{ textTransform: "none" }}
      //           variant="contained"
      //           onClick={onContinueClick}
      //         >
      //           Continue
      //         </Button>
      //       </div>
      //     </Col>
      //   </Row>
      // )} */}

      <div className="copyRightsHolder">
        <div className="copyRightText">Copyright @shopzape2024</div>|
        <div className="copyRightText">Privacy policy</div>
      </div>
    </Container>
  );
};

export default LogIn;
