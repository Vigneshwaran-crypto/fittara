import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./auth.css";
// const axios = require("axios").default;
import { useGoogleLogin } from "@react-oauth/google";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { authenticateUser, signup, verifyUser } from "../../Api/UsersService";
import { emailValidate } from "../../Common/Validations";
import Loader from "../../Component/Loader";
import { infoToast, inputErrorToast } from "../Components/Toasts";
import CustomSwitch from "./CustomSwitch";
import axios from "axios";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [seller, setSeller] = useState(true);
  const [otp, setOtp] = useState("");

  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(false);
  const [isReg, setIsReg] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
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
          console.log("Google auth user : ", res);
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
            })
            .catch((err) => {
              console.log("authenticateUser gAuth err : ", err);
            })
            .finally(() => setLoader(false));
        })
        .catch((err) => {
          console.log("Google auth user err : ", err);
        });
    }
  }, [user]);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const onGLogClick = useGoogleLogin({
    onSuccess: (usr) => {
      console.log("user details :");
      setUser(usr);
    },
    onError: (err) => console.log("onGLogError : ", err),
  });

  const hanleSwicth = (flag) => {
    console.log("hanleSwicth : ", flag);
    setSeller(flag);
  };

  const onRegClick = () => {
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
        isSeller: seller,
      };

      setLoader(true);
      signup(req)
        .then((res) => {
          console.log("signup res :", res);
          if (res.data.status === 1) {
            toast.success("Check your inbox");
            setIsReg(false);
          } else {
            toast.error("Please try again");
          }
        })
        .catch((err) => {
          console.log("signup catch :", err);
          toast.error("Something went wrong");
        })
        .finally(() => setLoader(false));
    }
  };

  const onVerifyClick = () => {
    const req = {
      email: email,
      verificationCode: otp,
    };

    setLoader(true);
    verifyUser(req)
      .then((res) => {
        console.log("verifyUser res :", res);
        if (res.data.status === 1) {
          navigation("/dashboard/products");
          toast.success("Login successfully");
        } else {
          console.log("verifyUser err : ");
          toast.error("Wrong OTP");
        }
      })
      .catch((err) => {
        console.log("signup catch :", err);
        toast.error("Something went wrong");
      })
      .finally(() => setLoader(false));
  };

  // buyer
  //   Discover the Best Deals, All in One Place.
  // Log in to shop your favorite brands and uncover new treasures!

  // seller
  // Boost Your Business with Us.
  // Log in to reach more customers and grow your brand!

  // Log in to expand your reach, boost your sales, and grow your business like never before!

  return (
    <Container
      className="registerContainer"
      style={{ flexDirection: "column" }}
      fluid
    >
      {loader && <Loader />}
      <Toaster />

      {isReg ? (
        <Row md={12} sm={12} lg={12} xl={12} className="registerBigCardHolder">
          <Col md={6} sm={8} lg={6} xl={4} className="registerBigCard">
            <div className="loginTitle">
              Register as <CustomSwitch curSwitch={hanleSwicth} />
            </div>

            {seller ? (
              <div className="loginSubText">Boost Your Business with Us.</div>
            ) : (
              <div className="loginSubText">
                Discover the Best Deals, All in One Place.
              </div>
            )}

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

              <Button
                style={{ textTransform: "none" }}
                variant="contained"
                onClick={onRegClick}
              >
                Register
              </Button>

              <div className="orTextHolder">
                <hr className="divider" />
                <div className="orText">Or signup with</div>

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
                Already have an account ?
                <b>
                  <a
                    className="loginTroubleLinkText"
                    href="#"
                    onClick={() => navigation("/login")}
                  >
                    {" "}
                    Signin
                  </a>
                </b>
              </div>
            </div>
          </Col>
        </Row>
      ) : (
        <Row className="registerBigCardHolder fadeInUp-animation">
          <Col md={6} sm={8} lg={6} xl={4} className="registerBigCard">
            <div className="loginTitle">Verify Email</div>

            <div className="loginSubText">Check your email inbox</div>

            <div className="inputsHolder">
              <TextField
                label={"OTP"}
                type="tel"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                size="small"
              />

              <Button
                style={{ textTransform: "none" }}
                variant="contained"
                onClick={onVerifyClick}
              >
                Verify
              </Button>

              <div className="orTextHolder">
                <hr className="divider" />
              </div>

              <Button
                style={{ textTransform: "none", fontSize: "15px" }}
                variant="outlined"
              >
                Resend
              </Button>
            </div>
          </Col>
        </Row>
      )}

      <div className="copyRightsHolder">
        <div className="copyRightText">Copyright @shopzape2024</div>|
        <div className="copyRightText">Privacy policy</div>
      </div>
    </Container>
  );
};

export default Register;
