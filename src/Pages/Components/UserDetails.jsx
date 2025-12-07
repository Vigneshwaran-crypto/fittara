import React, { useEffect, useRef, useState } from "react";
import "../DashBoard/MenuOptionsStyles.css";
import userImage from "../../Assets/auth/userProfile.png";
import { Button, InputAdornment, styled, TextField } from "@mui/material";
import { FloatingLabel, Form } from "react-bootstrap";
import { CiTrophy } from "react-icons/ci";
import { CiMedal } from "react-icons/ci";
import { CiShoppingBasket } from "react-icons/ci";
import { useSelector } from "react-redux";
import { updateUser } from "../../Api/UsersService";

const UserDetails = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const usrInpImgRef = useRef(null);

  const usr = useSelector(({ main }) => main.user);

  const [userData, setUserData] = useState({
    email: "Vickytata619@gmail.com",
    userName: "Viki_Ricardo",
    bio: "Software development for stores",
    phone: "8807207198",
    address:
      "4/7 Narayana swamy street, Thiruvottiyur , chennai - 19 , tamilnadu , india",
    profile: userImage,
    imgFile: {},
  });

  const lableSize = {
    "&:not(.Mui-focused):not(.MuiInputLabel-shrink)": {
      fontSize: "14.9px",
    },
  };

  const inpStyle = {
    "& .MuiInputBase-root": {
      // border: "1px solid red",
      // padding: 0,
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
      fontSize: "15px !important",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: isEdit ? "#96A0B2" : "transparent",
      borderBottomWidth: "1px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: isEdit ? "#96A0B2" : "transparent",
      borderBottomWidth: "1px",
    },
    "&:hover .MuiInput-underline:before": {
      borderBottomWidth: "1px !important",
      borderBottomColor: isEdit
        ? "#96A0B2  !important"
        : "transparent  !important",
    },
    "& .MuiInputLabel-root": {
      fontFamily: "sans-serif",
      borderBottomWidth: "1px",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#96A0B2",
    },
    "& .MuiInputLabel-root.MuiFormLabel-filled": {
      fontSize: "18px",
    },

    "& .MuiInputLabel-root:not(.Mui-focused)": {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#96A0B2",
    },
    "&:not(.Mui-focused):not(.MuiInputLabel-shrink)": {
      fontSize: "10px",
    },
  };

  useEffect(() => {
    console.log("usr details comp :", usr);
  }, [usr]);

  const onChosenImg = (e) => {
    console.log("onChosenImg :", e);
    if (e.target.files.length > 0) {
      setUserData({
        ...userData,
        imgFile: e.target.files[0],
        profile: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const onUpdateClick = () => {
    setIsEdit(!isEdit);

    if (isEdit) {
      console.log("onUpdateClick :", userData);

      const formReq = new FormData();
      formReq.append("id", usr.id);
      formReq.append("userName", userData.userName);
      formReq.append("email", usr.email);
      formReq.append("bio", userData.bio);
      formReq.append("phoneNumber", userData.phone);
      formReq.append("address", userData.address);
      formReq.append("profileImageFile", userData.imgFile);

      updateUser(formReq)
        .then((res) => {
          console.log("updateUser res :", res);
        })
        .catch((err) => {
          console.log("updateUser catch :", err);
        });
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="userProfileContainer">
        <div className="userImageWrapper">
          <div className="userImgHolder">
            <img
              style={{
                height: "25dvh",
                width: "25dvh",
                objectFit: "fill",
              }}
              className="userImage"
              src={userData.profile}
              alt="inage"
              onClick={isEdit ? () => usrInpImgRef.current?.click() : null}
            />
          </div>
        </div>

        <div className="profileIconsHolder">
          <div className="iconTxtCombo">
            <CiShoppingBasket size={25} />
            <div className="iconNumTxt">53</div>
          </div>
          <div className="iconTxtCombo">
            <CiMedal size={25} />
            <div className="iconNumTxt">53</div>
          </div>
        </div>
      </div>

      <hr />

      <div className="userDetailsContainer">
        <div className="detailsInputsCont">
          <TextField
            sx={inpStyle}
            label="User Name"
            placeholder={userData.userName || "Store username"}
            variant="standard"
            inputMode="email"
            fullWidth
            InputProps={{ readOnly: !isEdit }}
            InputLabelProps={{
              sx: lableSize,
            }}
            value={userData.userName}
            onChange={(e) =>
              setUserData({ ...userData, userName: e.target.value })
            }
          />
          <TextField
            sx={inpStyle}
            label="Email"
            placeholder={userData.email || "Store official email"}
            variant="standard"
            fullWidth
            multiline
            // error
            InputProps={{ readOnly: !isEdit }}
            InputLabelProps={{
              sx: lableSize,
            }}
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <TextField
            sx={inpStyle}
            label="Bio"
            placeholder={userData.bio || "Single term about your store"}
            variant="standard"
            inputMode="email"
            fullWidth
            inputProps={{ maxLength: 10 }}
            InputProps={{ readOnly: !isEdit }}
            InputLabelProps={{
              sx: lableSize,
            }}
            value={userData.bio}
            onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
          />

          <TextField
            sx={inpStyle}
            label="Phone Number"
            placeholder={userData.phone || "Store contact number"}
            variant="standard"
            inputMode="email"
            fullWidth
            InputProps={{ readOnly: !isEdit }}
            InputLabelProps={{
              sx: lableSize,
            }}
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          />

          <TextField
            sx={inpStyle}
            label="Address"
            placeholder={userData.address || "Store address"}
            variant="standard"
            fullWidth
            multiline
            InputProps={{ readOnly: !isEdit }}
            InputLabelProps={{
              sx: lableSize,
            }}
            value={userData.address}
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
          />
        </div>

        <input
          type="file"
          accept="image/png, image/gif, image/jpeg"
          style={{ display: "none" }}
          ref={usrInpImgRef}
          onChange={onChosenImg}
        />

        <Button
          sx={{
            //   backgroundColor: "#70B0FF",
            alignSelf: "center",
            textTransform: "none",
          }}
          variant="contained"
          onClick={onUpdateClick}
        >
          {isEdit ? "Save" : "Update"}
        </Button>
      </div>
    </div>
  );
};

export default UserDetails;
