import React, { useEffect, useMemo, useRef, useState } from "react";
import "../MenuOptionsStyles.css";
import {
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Chip,
  Drawer,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  OutlinedInput,
  rgbToHex,
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
  benefits,
  curencySelStyle,
  erToast,
  gender,
  htmlStrDef,
  inpStye,
  isDarkColor,
  isDarkHex,
  methods,
  numSizes,
  productCategories,
  rgbaToHex,
  sampleProducts,
  selStyle,
  sizes,
  sneakTemp,
  successToast,
  targets,
  templates,
  wholeColors,
} from "../../Components/utils";
import { MuiColorInput } from "mui-color-input";
import { AiOutlineCheck } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { RiImageEditLine } from "react-icons/ri";

import toast, { Toaster } from "react-hot-toast";
import { saveProduct } from "../../../Api/UsersService";

const AddProduct = () => {
  const navigation = useNavigate();
  const [flags, setFlags] = useState({
    addProduct: false,
    showVariants: false,
  });

  const imageUploadRef = useRef(null);
  const colorImgUploadRef = useRef(null);

  const imgBtInd = useRef(null);
  const colImgBtInd = useRef(null);

  const imageTemplate = {
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
  };

  const [prodImages, setProdImages] = useState(imageTemplate);

  const [hover, setHover] = useState(null);

  const [validate, setValidate] = useState(false);
  const [colValid, setColValid] = useState(false);

  const [newColor, setNewColor] = useState({ name: "", rgb: "" });
  const [fullColors, setFullColors] = useState(wholeColors);
  const [tempName, setTempName] = useState("Default");

  const prodTemplate = {
    category: "",
    name: {},
    typedName: "",
    description: "",
    about: templates.Default,
    abtName: "Default",
    gender: "",
    target: [],
    size: [],
    sizeNum: [],
    colors: [],
    benef: [],
    quantity: "",
    price: "",
    priceCur: "₹",
    comPrice: "",
    comPriceCur: "₹",
    methods: methods,
  };

  const [product, setProduct] = useState(prodTemplate);

  const currencies = ["$", "₹"];

  const joEditRef = useRef(null);
  const joEditOptions = [
    "bold",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "hr",
    "|",
    {
      name: "Templates",
      text: "Templates",
      list: {
        "Art & Craft": "Art & Craft",
        Book: "Book",
        Electronic: "Electronic",
        Food: "Food",
        Furniture: "Furniture",
        Health: "Health",
        "Home Appliance": "Home Appliance",
        KitchenWare: "KitchenWare",
        Sneaker: "Sneaker",
        "Skin & Beauty": "Skin & Beauty",
        Tshirt: "Tshirt",
        Default: "Default",
      },
      exec: (e, t, { control }) => {
        console.log("changed template :", control.name);
        const actTemp =
          control.name !== "Templates"
            ? templates[control.name]
            : templates.Default;

        const name = control.name !== "Templates" ? control.name : "Default";

        setProduct((preProd) => ({
          ...preProd,
          about: actTemp,
          abtName: name,
        }));
      },
    },
  ];

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
      toolbarAdaptive: false,
      toolbarSticky: false,
      removeEmptyElements: true,
      addNewLine: false,
      cleanHTML: {
        timeout: 1,
        removeEmptyElements: true,
        removeEmptyTags: true,
        // allowTags: {
        //   strong: false,
        //   b: true,
        // },
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
      imgPaths[imgBtInd.current.slice(0, 4)] = file;

      setProdImages(imgPaths);
    }
  };

  const onColImgUploadClick = (ind) => {
    colImgBtInd.current = ind;
    colorImgUploadRef.current.click();
  };

  const onColorImgChosen = (e) => {
    console.log("onColorImgChosen e : ", e);
    const file = e.target.files[0];
    if (file) {
      const imgPath = URL.createObjectURL(file);

      const cols = [...product.colors];
      // cols[colImgBtInd.current]["id"] = product.colors.length;
      cols[colImgBtInd.current]["path"] = imgPath;
      cols[colImgBtInd.current]["imgFile"] = file;

      setProduct({ ...product, colors: cols });
    }
  };

  const addProdClick = () => {
    setValidate(true);

    console.log("addProdClick : ", product);
    console.log("prodImages : ", prodImages);

    const imageFiles = [
      prodImages.img1Path,
      prodImages.img2Path,
      prodImages.img3Path,
      prodImages.img4Path,
      prodImages.img5Path,
    ];

    console.log("Obj Name  ", product.abtName);

    console.log("html string temVal  ", templates[product.abtName]?.trim());

    console.log("html string temVal  ", product.about?.trim());

    const makeValid = {
      "Product Category": product.category,
      "Product Name": product.name?.product || product.typedName,
      "Product Description": product.description,
      "Product Details":
        templates[product.abtName]?.trim() !== product.about?.trim(),
      Gender: product.gender,
      Targets: product.target.length,
      "Product Images": !imageFiles.some((ite) => ite === ""),
    };

    if (product.colors.length !== 0) {
      makeValid["Color Images"] = !product.colors.some(
        (item) => item.path === ""
      );

      console.log("check color vaidation :", makeValid["Color Images"]);
      console.log("imconirm :", product.colors);
    }

    makeValid["Price"] = product.price;
    makeValid["Highlights"] = product.benef.join("");
    makeValid["Payment Mathods"] = product.methods.length;

    const isValidate = Object.entries(makeValid).some(([key, val]) => {
      if (!val) {
        erToast(`Please Fill The ${key}`);
        return true;
      }
      return false;
    });

    console.log("is validated properly :", !isValidate);

    if (isValidate) return true;

    toast.success("Validation Success");
    // saveProductItem();
  };

  const saveProductItem = () => {
    const cleanDesc = product.about.replace(/<[\S]+?><\/[\S]+>/gim, "");

    const imageFiles = [
      prodImages.img1,
      prodImages.img2,
      prodImages.img3,
      prodImages.img4,
      prodImages.img5,
    ];

    console.log("imageFiles : ", imageFiles);

    const req = new FormData();

    product.colors?.forEach((item, ind) => {
      // req.append("colorsObj", { ...item, id: ind });
      req.append(`colorsObj[${ind}].id`, ind);
      req.append(`colorsObj[${ind}].color`, item.color);
      req.append(`colorsObj[${ind}].hex`, item.hex);
      req.append(`colorsObj[${ind}].imgFile`, item.imgFile);
      req.append(`colorsObj[${ind}].path`, "");
    });

    imageFiles.forEach((item) => {
      req.append("imageFile", item);
    });

    req.append("userId", 1);
    req.append("category", product.category);
    req.append("name", product.name.product || product.typedName);
    req.append("userName", "Azam");
    req.append("description", product.description);
    req.append("about", cleanDesc);
    req.append("size", product.size?.join(",") || product.sizeNum?.join(","));
    req.append("gender", product.gender);
    req.append("target", product.target.join(","));
    req.append("methods", product.methods.map((ite) => ite.id).join(","));
    // req.append("colors", );
    req.append("variants", "");
    req.append("benefits", product.benef.join(","));
    req.append("price", product.price + product.priceCur);
    req.append("comPrice", product.comPrice + product.comPriceCur);

    saveProduct(req)
      .then((res) => {
        console.log("saveProduct res: ", res);

        if (res.data.status === 1) {
          successToast("Product saved successfully ");
          setProduct({ ...prodTemplate, colors: [] });
          setProdImages(imageTemplate);

          const fineWholeCol = wholeColors.map((item) => {
            delete item?.["imgFile"];
            delete item?.["path"];
            return item;
          });

          setFullColors(fineWholeCol);
          setValidate(false);
        } else {
          erToast("Please try again");
        }
      })
      .catch((err) => {
        console.log("saveProduct err : ", err);
      });
  };

  const onNewColSave = () => {
    setColValid(true);

    if (!newColor.name) {
      erToast("Enter new color name");
    } else if (!newColor.rgb) {
      erToast("Choose color");
    } else {
      console.log("rgbToHex  common: ", rgbToHex(newColor.rgb));

      const addedCol = rgbToHex(newColor.rgb);

      console.log("lenght of whole colors : ", wholeColors.length);
      const madeCol = {
        id: Math.floor(Math.random() * (1000 - 92 + 1)) + 92,
        color: newColor.name,
        hex: addedCol,
        path: "",
      };

      const isHaveCol = fullColors?.find(
        (item) =>
          item.color?.toLowerCase() === newColor.name?.toLowerCase() ||
          item.hex === addedCol
      );

      if (Object.keys(isHaveCol || {}).length === 0) {
        setFullColors([...fullColors, madeCol]);
        setProduct({ ...product, colors: [...product.colors, madeCol] });
        setNewColor({ name: "", rgb: "" });
        setColValid(false);
      } else {
        erToast("color already exist");
      }
    }
  };

  return (
    <div className="baseContainer">
      <Row className="addProdBodyCont">
        <Col className="productElementCont" sm={12} md={12} lg={12} xl={12}>
          <div className="backContent">
            <Button
              variant="outlined"
              style={{ border: "1px solid #DADADA" }}
              onClick={() => navigation(-1)}
            >
              <GoArrowLeft size={20} color="black" />
            </Button>

            <div className="backTexts">
              <span className="prevScrenText">Back to product list</span>
              <span className="screenTitle">Add New Product</span>
            </div>
          </div>
        </Col>

        <Col className="productElementCont" sm={12} md={12} lg={6} xl={6}>
          <div className="inputGroup">
            <div className="groupHeadTxt">Category</div>

            <div className="inputItems">
              <FormControl size="small" sx={{ marginTop: "8px" }}>
                <InputLabel id="select-label">Product Category</InputLabel>

                <Select
                  labelId="select-label"
                  size="small"
                  value={product.category}
                  sx={selStyle}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Product Category"
                      variant="filled"
                    />
                  }
                  onChange={(e) => {
                    console.log("onChange category :", e.target.value);
                    setProduct({ ...product, category: e.target.value });
                  }}
                  error={validate && !product.category}
                >
                  {productCategories.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="inputGroup">
            <div className="groupHeadTxt">Description</div>

            <div className="inputItems">
              <FormControl size="small">
                <Autocomplete
                  freeSolo
                  options={sampleProducts}
                  size="small"
                  getOptionLabel={(option) =>
                    option.product ? option.product : ""
                  }
                  renderInput={(param) => (
                    <TextField
                      {...param}
                      size="small"
                      label="Product Name"
                      fullWidth
                      variant="standard"
                      placeholder="Choose or type"
                      sx={inpStye}
                      error={
                        validate && !product.name?.product && !product.typedName
                      }
                    />
                  )}
                  value={product.name}
                  onInputChange={(e, val) => {
                    console.log("onInputChange : ", val);
                    setProduct({
                      ...product,
                      typedName: val,
                    });
                  }}
                  onChange={(e, val) => {
                    console.log("onChange : ", val);
                    setProduct({
                      ...product,
                      name: val,
                    });
                  }}
                />
              </FormControl>

              <TextField
                size="small"
                label="Product Description"
                fullWidth
                multiline
                variant="standard"
                sx={inpStye}
                style={{ paddingBottom: "5px" }}
                error={validate && !product.description}
                onChange={(e, val) =>
                  setProduct({
                    ...product,
                    description: e.target.value,
                  })
                }
                value={product.description}
              />

              <JoditEditor
                ref={joEditRef}
                value={product.about}
                // onBlur={(newContent) =>
                //   console.log(newContent.replaceAll("<([^>]*)></\\1>", ""))
                // }
                onBlur={(htmlStr) =>
                  setProduct((prevProd) => ({
                    ...prevProd,
                    about: htmlStr,
                  }))
                }
                config={joEditorConfig}
              />
            </div>
          </div>

          <div className="inputGroup">
            <div className="groupHeadTxt">Gender & Targets</div>

            <div
              className="inputItems"
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <FormControl size="small" fullWidth sx={{ marginTop: "8px" }}>
                <InputLabel id="select-label">Gender</InputLabel>

                <Select
                  labelId="select-label"
                  size="small"
                  sx={selStyle}
                  value={product.gender}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Gender"
                      variant="filled"
                    />
                  }
                  onChange={(e) => {
                    console.log("onChange gender : ", e.target.value);
                    setProduct({ ...product, gender: e.target.value });
                  }}
                  error={validate && !product.gender}
                >
                  {gender.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl size="small" fullWidth sx={{ marginTop: "8px" }}>
                <InputLabel id="select-label">Target</InputLabel>

                <Select
                  multiple
                  multiline
                  labelId="select-label"
                  size="small"
                  sx={selStyle}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Target"
                      variant="filled"
                    />
                  }
                  value={product.target}
                  onChange={(e) => {
                    console.log("ontarget Change :", e.target.value);
                    setProduct({ ...product, target: e.target.value });
                  }}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  error={validate && product.target.length === 0}
                >
                  {targets.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="inputGroup">
            <div className="groupHeadTxt">
              Product Images
              <OverlayTrigger
                placement="top"
                overlay={
                  <Tooltip id="button-tooltip-2">
                    Upload an approriate image size with matched grey background
                    or png
                  </Tooltip>
                }
              >
                <div>
                  <IoInformationCircleOutline />
                </div>
              </OverlayTrigger>
            </div>
            <div
              className="inputItems"
              style={{ height: "100%", width: "100%" }}
            >
              <div className="imagesUploadHolder">
                <div
                  className="mainImageHolder"
                  onClick={onImageUploadClick.bind(this, "img1Path")}
                  style={{
                    // backgroundImage: `url(${prodImages.img1Path})`,
                    border:
                      validate && !prodImages.img1Path
                        ? "1px dashed red"
                        : prodImages.img1Path
                        ? "1px solid transparent"
                        : "",
                  }}
                >
                  <div className="imageIconHolder">
                    {prodImages.img1Path ? (
                      <>
                        <FcEditImage size={24} className="editImgIcon" />
                        <img
                          className="prodActImage"
                          src={prodImages.img1Path}
                        />
                      </>
                    ) : (
                      <CiImageOn size={24} />
                    )}
                  </div>
                </div>

                <div className="subImages">
                  <div
                    className="subImageItems"
                    onClick={onImageUploadClick.bind(this, "img2Path")}
                    style={{
                      // backgroundImage: `url(${prodImages.img2Path})`,
                      border:
                        validate && !prodImages.img2Path
                          ? "1px dashed red"
                          : prodImages.img2Path
                          ? "1px solid transparent"
                          : "",
                    }}
                  >
                    <div className="imageIconHolder">
                      {prodImages.img2Path ? (
                        <>
                          <FcEditImage size={24} className="editImgIcon" />
                          <img
                            className="prodActImage"
                            src={prodImages.img2Path}
                          />
                        </>
                      ) : (
                        <CiImageOn size={24} />
                      )}
                    </div>
                  </div>
                  <div
                    className="subImageItems"
                    onClick={onImageUploadClick.bind(this, "img3Path")}
                    style={{
                      // backgroundImage: `url(${prodImages.img3Path})`,
                      border:
                        validate && !prodImages.img3Path
                          ? "1px dashed red"
                          : prodImages.img3Path
                          ? "1px solid transparent"
                          : "",
                    }}
                  >
                    <div className="imageIconHolder">
                      {prodImages.img3Path ? (
                        <>
                          <FcEditImage size={24} className="editImgIcon" />
                          <img
                            className="prodActImage"
                            src={prodImages.img3Path}
                          />
                        </>
                      ) : (
                        <CiImageOn size={24} />
                      )}
                    </div>
                  </div>
                  <div
                    className="subImageItems"
                    onClick={onImageUploadClick.bind(this, "img4Path")}
                    style={{
                      // backgroundImage: `url(${prodImages.img4Path})`,
                      border:
                        validate && !prodImages.img4Path
                          ? "1px dashed red"
                          : prodImages.img4Path
                          ? "1px solid transparent"
                          : "",
                    }}
                  >
                    <div className="imageIconHolder">
                      {prodImages.img4Path ? (
                        <>
                          <FcEditImage size={24} className="editImgIcon" />
                          <img
                            className="prodActImage"
                            src={prodImages.img4Path}
                          />
                        </>
                      ) : (
                        <CiImageOn size={24} />
                      )}
                    </div>
                  </div>
                  <div
                    className="subImageItems"
                    onClick={onImageUploadClick.bind(this, "img5Path")}
                    style={{
                      // backgroundImage: `url(${prodImages.img5Path})`,
                      border:
                        validate && !prodImages.img5Path
                          ? "1px dashed red"
                          : prodImages.img5Path
                          ? "1px solid transparent"
                          : "",
                    }}
                  >
                    <div className="imageIconHolder">
                      {prodImages.img5Path ? (
                        <>
                          <FcEditImage size={24} className="editImgIcon" />
                          <img
                            className="prodActImage"
                            src={prodImages.img5Path}
                          />
                        </>
                      ) : (
                        <CiImageOn size={24} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col className="productElementCont" sm={12} md={12} lg={6} xl={6}>
          <div className="inputGroup">
            <div className="groupHeadTxt">Size & Colors</div>

            <div
              className="inputItems"
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <FormControl size="small" fullWidth sx={{ marginTop: "8px" }}>
                <InputLabel id="select-label">Size</InputLabel>

                <Select
                  multiple
                  multiline
                  labelId="select-label"
                  size="small"
                  sx={selStyle}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Size"
                      variant="filled"
                    />
                  }
                  value={product.size}
                  onChange={(e) =>
                    setProduct({ ...product, size: e.target.value })
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {sizes.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <span style={{ color: "#666666" }}>Or</span>

              <FormControl size="small" fullWidth sx={{ marginTop: "8px" }}>
                <InputLabel id="select-label">Number</InputLabel>

                <Select
                  multiple
                  multiline
                  labelId="select-label"
                  size="small"
                  sx={selStyle}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Number"
                      variant="filled"
                      placeholder="Size in number"
                    />
                  }
                  value={product.sizeNum}
                  onChange={(e) =>
                    setProduct({ ...product, sizeNum: e.target.value })
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {numSizes.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div
              className="inputItems"
              style={{ paddingBlock: "15px", marginTop: "10px" }}
            >
              <FormControl size="small">
                <Autocomplete
                  multiple
                  options={fullColors}
                  value={product.colors}
                  size="small"
                  onChange={(e, val) => {
                    console.log("onChange :", { e, val });
                    setProduct({ ...product, colors: val });
                  }}
                  getOptionLabel={(option) => option.color}
                  renderInput={(param) => (
                    <TextField
                      {...param}
                      size="small"
                      label="Available Colors"
                      fullWidth
                      variant="standard"
                      placeholder="Search"
                      sx={inpStye}
                    />
                  )}
                  renderTags={(val, prop, state) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {val.map((value) => (
                        <Chip
                          key={value.id}
                          label={value.color}
                          style={{
                            marginBlock: "1.5px",
                            backgroundColor: value.hex,
                            color: value.color == "White" ? "black" : "white",
                            boxShadow:
                              value.color == "White"
                                ? "rgba(0, 0, 0, 0.10) 0px 1px 5px"
                                : "",
                          }}
                        />
                      ))}
                    </Box>
                  )}
                  renderOption={(props, item, { selected }) => (
                    <div
                      {...props}
                      onMouseEnter={() => setHover(item?.id)}
                      onMouseLeave={() => setHover(null)}
                      style={{
                        backgroundColor: selected
                          ? "#e2e2e2"
                          : hover === item?.id
                          ? item.hex
                          : "white",
                        color: selected
                          ? "#8f8f8f"
                          : hover === item?.id
                          ? isDarkHex(item.hex)
                            ? "white"
                            : "black"
                          : "black",
                      }}
                      key={item.id}
                      selected={selected}
                    >
                      {item.color}
                    </div>
                  )}
                />
              </FormControl>
            </div>

            <div className="inputItems">
              <div
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <TextField
                  size="small"
                  label="New Color"
                  variant="standard"
                  fullWidth
                  sx={inpStye}
                  onChange={(e) =>
                    setNewColor({ ...newColor, name: e.target.value })
                  }
                  value={newColor.name}
                  error={colValid && !newColor.name}
                />

                <MuiColorInput
                  size="small"
                  label="Pick Color"
                  variant="standard"
                  onChange={(col) => {
                    setNewColor({ ...newColor, rgb: col });
                  }}
                  value={newColor.rgb}
                  fullWidth
                  sx={inpStye}
                  isAlphaHidden={false}
                  error={colValid && !newColor.rgb}
                />

                <IconButton
                  style={{
                    backgroundColor: newColor.rgb,
                    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                  }}
                  onClick={onNewColSave}
                >
                  <AiOutlineCheck
                    size={17}
                    color={isDarkColor(newColor.rgb) ? "white" : "black"}
                  />
                </IconButton>
              </div>

              <div className="imagesUploadHolder" style={{ marginTop: "10px" }}>
                <div className="colorImages">
                  {product.colors.map((item, ind) => (
                    <div
                      key={ind}
                      className="colImageItems"
                      onClick={onColImgUploadClick.bind(this, ind)}
                      style={{
                        // backgroundImage: `url(${item?.path})`,
                        backgroundColor: item.hex,
                        border: item?.path ? "1px solid transparent" : "",
                      }}
                    >
                      <div className="imageIconHolder">
                        {item?.path ? (
                          <>
                            <FcEditImage size={24} className="editImgIcon" />
                            <img className="prodActImage" src={item.path} />
                          </>
                        ) : (
                          <CiImageOn
                            size={24}
                            color={isDarkHex(item.hex) ? "white" : "black"}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="inputGroup">
            <div className="groupHeadTxt">Variants</div>

            <div className="inputItems" style={{ flexDirection: "row" }}>
              <Button
                style={{ textTransform: "none" }}
                variant="outlined"
                onClick={() => setFlags({ ...flags, showVariants: true })}
              >
                Add Variants
              </Button>
            </div>
          </div>

          <div className="inputGroup">
            <div className="groupHeadTxt">Buying Benefits</div>

            <div className="inputItems">
              <FormControl size="small" sx={{ marginTop: "8px" }}>
                <InputLabel id="select-label">Highlights</InputLabel>

                <Select
                  multiple
                  multiline
                  labelId="select-label"
                  size="small"
                  value={product.benef}
                  sx={selStyle}
                  input={
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Highlights"
                      variant="filled"
                    />
                  }
                  onChange={(e) => {
                    console.log("onChange hightlights : ", product.benef);
                    setProduct({ ...product, benef: e.target.value });
                  }}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  error={validate && product.benef.length === 0}
                >
                  {benefits.map((item) => (
                    <MenuItem key={item.benefit} value={item.benefit}>
                      {item.benefit}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="inputGroup">
            <div className="groupHeadTxt">Inventory</div>

            <div className="inputItems" style={{ flexDirection: "row" }}>
              <TextField
                size="small"
                label="Quantity"
                variant="standard"
                fullWidth
                sx={inpStye}
                type="number"
                value={product.quantity}
                onChange={(e) =>
                  setProduct({ ...product, quantity: e.target.value })
                }
              />

              <TextField
                size="small"
                label="SKU (optional)"
                variant="standard"
                fullWidth
                sx={inpStye}
              />
            </div>
          </div>

          <div className="inputGroup">
            <div className="groupHeadTxt">Pricing & Methods</div>

            <div className="inputItems" style={{ flexDirection: "row" }}>
              <TextField
                size="small"
                label="Price"
                variant="standard"
                sx={inpStye}
                fullWidth
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Select
                        labelId="select-label"
                        size="small"
                        sx={curencySelStyle}
                        defaultValue={"₹"}
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Product Category"
                            variant="filled"
                          />
                        }
                        value={product.priceCur}
                        onChange={(e) =>
                          setProduct({ ...product, priceCur: e.target.value })
                        }
                      >
                        {currencies.map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </InputAdornment>
                  ),
                }}
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                error={validate && !product.price}
              />

              <TextField
                size="small"
                label="Compare Price"
                variant="standard"
                sx={inpStye}
                fullWidth
                type="number"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Select
                        labelId="select-label"
                        size="small"
                        sx={curencySelStyle}
                        defaultValue={"₹"}
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Product Category"
                            variant="filled"
                          />
                        }
                        value={product.comPriceCur}
                        onChange={(e) =>
                          setProduct({
                            ...product,
                            comPriceCur: e.target.value,
                          })
                        }
                      >
                        {currencies.map((item) => (
                          <MenuItem key={item} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </InputAdornment>
                  ),
                }}
                value={product.comPrice}
                onChange={(e) =>
                  setProduct({ ...product, comPrice: e.target.value })
                }
              />
            </div>

            <div className="inputItems" style={{ marginTop: "15px" }}>
              <FormControl size="small">
                <Autocomplete
                  multiple
                  options={methods}
                  value={product.methods}
                  size="small"
                  onChange={(e, val) => {
                    console.log("onChange payments:", { e, val });
                    setProduct({ ...product, methods: val });
                  }}
                  getOptionLabel={(option) => option.method}
                  renderInput={(param) => (
                    <TextField
                      {...param}
                      size="small"
                      label="Payment Methods"
                      fullWidth
                      variant="standard"
                      sx={inpStye}
                    />
                  )}
                  renderTags={(val, prop, state) => (
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.5,
                        paddingBlock: "2px",
                        backgroundColor: "white",
                      }}
                    >
                      {val.map((value) => (
                        <Chip
                          icon={
                            value.id === 1 ? (
                              <FcGoogle size={22} />
                            ) : (
                              <FcMoneyTransfer size={22} />
                            )
                          }
                          key={value.id}
                          label={value.method}
                          style={{
                            backgroundColor: "white",
                            boxShadow:
                              "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
                          }}
                        />
                      ))}
                    </Box>
                  )}
                />
              </FormControl>
            </div>
          </div>

          <input
            style={{ display: "none" }}
            ref={imageUploadRef}
            type="file"
            accept="image/jpeg, image/png,image/jpg"
            onChange={onChosenFile}
          />

          <input
            style={{ display: "none" }}
            ref={colorImgUploadRef}
            type="file"
            accept="image/jpeg, image/png,image/jpg"
            onChange={onColorImgChosen}
          />
        </Col>

        <div
          className="inputGroup"
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            gap: "15px",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          <Button className="addProductBt" variant="outlined">
            Cancel
          </Button>

          <Button
            className="addProductBt"
            variant="contained"
            onClick={addProdClick}
          >
            Add Product
          </Button>
        </div>
      </Row>

      <Drawer anchor="right" open={flags.showVariants}></Drawer>
    </div>
  );
};

export default AddProduct;
