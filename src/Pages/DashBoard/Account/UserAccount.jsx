import React, { useMemo, useRef, useState } from "react";
import "../MenuOptionsStyles.css";

import UserDetails from "../../Components/UserDetails";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { Col, Modal, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { IoInformationCircleOutline } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import { useTheme } from "@emotion/react";
import { FcEditImage } from "react-icons/fc";
import JoditEditor from "jodit-react";
import {
  htmlStrDef,
  sampleProducts,
  wholeColors,
} from "../../Components/utils";
import { MuiColorInput } from "mui-color-input";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Home from "../../Home/Home";
import "../../Home/styles.css";

const UserAccount = (props) => {
  const navigation = useNavigate();
  const [flags, setFlags] = useState({ addProduct: false });
  const [chosenCats, setChosenCats] = useState([]);

  const imageUploadRef = useRef(null);
  const imgBtInd = useRef(null);

  const [prodImages, setProdImages] = useState({
    img1Path: "",
    img1: {},
    img2Path: "",
    img2: {},
    img3Path: "",
    img3: {},
    img4Path: "",
    img4: {},
    img5Path: "",
    img5: {},
  });

  const categories = [
    "Electronics",
    "Clothing & Apparel",
    "Home & Kitchen",
    "Beauty & Personal Care",
    "Sports & Outdoors",
    "Books & Stationery",
    "Toys & Games",
    "Health & Wellness",
    "Automotive",
    "Pet Supplies",
  ];

  const [hover, setHover] = useState(null);

  const benefits = [
    { id: 1, benfit: "Pay on Delivery" },
    { id: 2, benfit: "Free Delivery" },
    { id: 3, benfit: "Top Brand" },
    { id: 4, benfit: "Secure Transaction" },
  ];

  const sizes = ["S", "M", "L", "XL", "XXL", "Slim", "Baggy"];

  const [chosenBens, setChosenBens] = useState([]);
  const [chosenSize, setChosenSize] = useState([]);
  const [chosenColors, setChosenColors] = useState([]);

  const [newColor, setNewColor] = useState("");

  const currencies = ["$", "₹"];

  const joEditRef = useRef(null);
  const [htmlStr, setHtmlStr] = useState(htmlStrDef);
  const joEditOptions = ["bold", "italic", "|", "ul", "ol", "|", "hr", "|"];

  const joEditorConfig = useMemo(
    () => ({
      readOnly: false,
      placeholder: "Product Details",
      defaultActionOnPaste: "insert_as_html",
      enter: "div",
      buttons: joEditOptions,
      buttonsMD: joEditOptions,
      buttonsSM: joEditOptions,
      buttonsXS: joEditOptions,
      statusbar: false,
      sizeLG: 900,
      sizeMD: 700,
      sizeSM: 400,
      processPasteHTML: true,
      askBeforePasteHTML: false,
      toolbarAdaptive: true,
      toolbarSticky: false,
      removeEmptyElements: true,
      addNewLine: false,
      cleanHTML: {
        timeout: 1,
        removeEmptyElements: true,
        removeEmptyTags: true,
      },
    }),
    []
  );

  const onImageUploadClick = (val) => {
    imgBtInd.current = val;
    imageUploadRef.current.click();
  };

  const onChosenFile = (e) => {
    console.log("onChosen file : ", e);
    console.log("onChosen file : ", imgBtInd.current);
    const file = e.target.files[0];
    if (file) {
      const imgPath = URL.createObjectURL(file);
      const imgPaths = { ...prodImages };
      imgPaths[imgBtInd.current] = imgPath;
      setProdImages(imgPaths);
    }
  };

  const addProdClick = () => {
    const cleanDesc = htmlStr.replace(/<[\S]+?><\/[\S]+>/gim, "");
  };

  const handleColorsChange = (event) => {
    const { value } = event.target;
    const newChosenColors = value
      .map((id) => {
        // Find the color object by id
        const colorObj = wholeColors.find((color) => color.id === id);
        return colorObj ? { ...colorObj } : null;
      })
      .filter(Boolean);

    setChosenColors(newChosenColors);
  };

  const isDarkColor = (val) => {
    const rgb = val.replace("rgb(", "").replace(")", "").split(",");
    // console.log("rgb raw : ", rgb);
    const r = parseInt(rgb[0]);
    const g = parseInt(rgb[1]);
    const b = parseInt(rgb[2]);
    const brightness = 0.299 * r + 0.587 * g + 0.144 * b;
    return brightness < 128 || false;
  };

  const isDarkHex = (rgb) => {
    const r = parseInt(rgb.slice(1, 3));
    const g = parseInt(rgb.slice(3, 5));
    const b = parseInt(rgb.slice(5, 7));
    const brightness = 0.299 * r + 0.587 * g + 0.144 * b;
    return brightness < 128 || false;
  };

  return (
    <div className="screenContainer">
      <div className="rowHolder">
        <div className="userProductHolder">
          <div className="homeCont">
            <Home noTopBar={true} />
          </div>
        </div>

        <div className="userAccDetailsHolder">
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
