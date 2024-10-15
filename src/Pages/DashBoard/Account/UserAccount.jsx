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

const inpStye = {
  "& .MuiInput-underline:after": {
    borderWidth: "1px !important",
  },
  "&:hover .MuiInput-underline:before": {
    borderWidth: "1px !important",
  },
  "& .MuiInputLabel-root": {
    borderWidth: "1px !important",
  },
};

const selStyle = {
  color: "black",
  ".MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
  },
};

const curencySelStyle = {
  color: "black",
  ".MuiOutlinedInput-notchedOutline": {
    borderWidth: "0px",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderWidth: "0px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderWidth: "0px",
  },
};

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
      <div className="userProductHolder">
        <div className="addProductHolder">
          <span className="noProductText">No products added yet</span>
          <Button
            className="addProductBt"
            variant="outlined"
            // onClick={() => setFlags({ ...flags, addProduct: true })}
            onClick={() => navigation("/dashboard/addProduct")}
          >
            Add Product
          </Button>
        </div>
      </div>

      <div className="userAccDetailsHolder">
        <UserDetails />
      </div>

      <Modal
        size="xl"
        show={flags.addProduct}
        // show={true}
        onHide={() => setFlags({ ...flags, addProduct: false })}
        scrollable
      >
        <Modal.Header closeButton closeVariant="success">
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>

        <Modal.Body as={Row} className="addProdBodyCont">
          <Col className="productElementCont" sm={12} md={12} lg={6} xl={6}>
            <div className="inputGroup">
              <div className="groupHeadTxt">Category</div>

              <div className="inputItems">
                <FormControl size="small" sx={{ marginTop: "8px" }}>
                  <InputLabel id="select-label">Product Category</InputLabel>

                  <Select
                    multiple
                    multiline
                    labelId="select-label"
                    size="small"
                    value={chosenCats}
                    sx={selStyle}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Product Category"
                        variant="filled"
                      />
                    }
                    onChange={(e) => setChosenCats(e.target.value)}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {chosenCats.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                  >
                    {categories.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
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
                    getOptionLabel={(option) => option.product}
                    renderInput={(param) => (
                      <TextField
                        {...param}
                        size="small"
                        label="Product Name"
                        fullWidth
                        variant="standard"
                        placeholder="Choose or type"
                        sx={inpStye}
                      />
                    )}
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
                />

                <JoditEditor
                  ref={joEditRef}
                  value={htmlStr}
                  onBlur={(newContent) =>
                    console.log(newContent.replaceAll("<([^>]*)></\\1>", ""))
                  }
                  onChange={(htmlStr) => setHtmlStr(htmlStr)}
                  config={joEditorConfig}
                />
              </div>
            </div>
          </Col>

          <Col className="productElementCont" sm={12} md={12} lg={6} xl={6}>
            <div className="inputGroup">
              <div className="groupHeadTxt">
                Product Images
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      Upload PNG format for better quality
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
                      backgroundImage: `url(${prodImages.img1Path})`,
                      border: prodImages.img1Path
                        ? "1px solid transparent"
                        : "",
                    }}
                  >
                    <div className="imageIconHolder">
                      {prodImages.img1Path ? (
                        <FcEditImage size={24} />
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
                        backgroundImage: `url(${prodImages.img2Path})`,
                        border: prodImages.img2Path
                          ? "1px solid transparent"
                          : "",
                      }}
                    >
                      <div className="imageIconHolder">
                        {prodImages.img2Path ? (
                          <FcEditImage size={24} />
                        ) : (
                          <CiImageOn size={24} />
                        )}
                      </div>
                    </div>
                    <div
                      className="subImageItems"
                      onClick={onImageUploadClick.bind(this, "img3Path")}
                      style={{
                        backgroundImage: `url(${prodImages.img3Path})`,
                        border: prodImages.img3Path
                          ? "1px solid transparent"
                          : "",
                      }}
                    >
                      <div className="imageIconHolder">
                        {prodImages.img3Path ? (
                          <FcEditImage size={24} />
                        ) : (
                          <CiImageOn size={24} />
                        )}
                      </div>
                    </div>
                    <div
                      className="subImageItems"
                      onClick={onImageUploadClick.bind(this, "img4Path")}
                      style={{
                        backgroundImage: `url(${prodImages.img4Path})`,
                        border: prodImages.img4Path
                          ? "1px solid transparent"
                          : "",
                      }}
                    >
                      <div className="imageIconHolder">
                        {prodImages.img4Path ? (
                          <FcEditImage size={24} />
                        ) : (
                          <CiImageOn size={24} />
                        )}
                      </div>
                    </div>
                    <div
                      className="subImageItems"
                      onClick={onImageUploadClick.bind(this, "img5Path")}
                      style={{
                        backgroundImage: `url(${prodImages.img5Path})`,
                        border: prodImages.img5Path
                          ? "1px solid transparent"
                          : "",
                      }}
                    >
                      <div className="imageIconHolder">
                        {prodImages.img5Path ? (
                          <FcEditImage size={24} />
                        ) : (
                          <CiImageOn size={24} />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                    value={chosenSize}
                    sx={selStyle}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Size"
                        variant="filled"
                      />
                    }
                    onChange={(e) => setChosenSize(e.target.value)}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {chosenSize.map((value) => (
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
                    value={chosenSize}
                    sx={selStyle}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Number"
                        variant="filled"
                        placeholder="Size in number"
                      />
                    }
                    onChange={(e) => setChosenSize(e.target.value)}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {chosenSize.map((value) => (
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
              </div>

              <div
                className="inputItems"
                style={{ paddingBlock: "15px", marginTop: "10px" }}
              >
                <FormControl size="small">
                  {/* <InputLabel id="select-label">Available Colors</InputLabel> */}
                  {/* <Select
                    multiple
                    multiline
                    labelId="select-label"
                    size="small"
                    value={chosenColors?.map((ite) => ite.id)}
                    sx={selStyle}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Available Colors"
                        variant="filled"
                      />
                    }
                    MenuProps={{
                      style: {
                        maxHeight: 400,
                      },
                    }}
                    onChange={handleColorsChange}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {chosenColors.map((value) => (
                          <Chip
                            key={value.id}
                            label={value.color}
                            style={{
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
                  >
                    {wholeColors.map((item) => (
                      <MenuItem
                        key={item.id}
                        value={item.id}
                        hex={item.hex}
                        sx={{
                          "&:hover": {
                            backgroundColor: item.hex,
                            color: item.color !== "White" ? "white" : "black",
                          },
                        }}
                      >
                        {item.color}
                      </MenuItem>
                    ))}
                  </Select>  */}

                  <Autocomplete
                    multiple
                    options={wholeColors}
                    value={chosenColors}
                    size="small"
                    onChange={(e, vak) => {
                      console.log("onChange :", { e, vak });
                      setChosenColors(vak);
                    }}
                    getOptionLabel={(option) => option.color}
                    renderInput={(param) => (
                      <TextField
                        {...param}
                        size="small"
                        label="Available Colors"
                        fullWidth
                        variant="standard"
                        placeholder="Choose or type"
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
                    // border: "1px solid black",
                  }}
                >
                  <TextField
                    size="small"
                    label="New Color"
                    variant="standard"
                    fullWidth
                    sx={inpStye}
                  />

                  <MuiColorInput
                    size="small"
                    label="Pick Color"
                    variant="standard"
                    // format="hex"
                    onChange={(col) => {
                      console.log("chosen color : ", col);
                      setNewColor(col);

                      console.log("isDark : ", isDarkColor(col));
                    }}
                    value={newColor}
                    fullWidth
                    sx={inpStye}
                    isAlphaHidden={false}
                  />

                  <IconButton
                    style={{
                      backgroundColor: newColor,
                      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                    }}
                  >
                    <AiOutlineCheck
                      size={17}
                      color={isDarkColor(newColor) ? "white" : "black"}
                    />
                  </IconButton>
                </div>

                <div
                  className="imagesUploadHolder"
                  style={{ marginTop: "10px" }}
                >
                  <div className="colorImages">
                    {chosenColors.map((item, ind) => (
                      <div
                        key={ind}
                        className="colImageItems"
                        onClick={onImageUploadClick.bind(this, "img2Path")}
                        style={{
                          backgroundImage: `url(${prodImages.img2Path})`,
                          backgroundColor: item.hex,
                          border: prodImages.img2Path
                            ? "1px solid transparent"
                            : "",
                        }}
                      >
                        <div className="imageIconHolder">
                          {prodImages.img2Path ? (
                            <FcEditImage size={24} />
                          ) : (
                            <CiImageOn size={24} />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                    value={chosenBens}
                    sx={selStyle}
                    input={
                      <OutlinedInput
                        id="select-multiple-chip"
                        label="Highlights"
                        variant="filled"
                      />
                    }
                    onChange={(e) => setChosenBens(e.target.value)}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {chosenBens.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                  >
                    {benefits.map((item) => (
                      <MenuItem key={item.benfit} value={item.benfit}>
                        {item.benfit}
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
              <div className="groupHeadTxt">Pricing</div>

              <div className="inputItems" style={{ flexDirection: "row" }}>
                <TextField
                  size="small"
                  label="Price"
                  variant="standard"
                  sx={inpStye}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Select
                          labelId="select-label"
                          size="small"
                          sx={curencySelStyle}
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="Product Category"
                              variant="filled"
                            />
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
                />

                <TextField
                  size="small"
                  label="Compare Price"
                  variant="standard"
                  sx={inpStye}
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Select
                          labelId="select-label"
                          size="small"
                          sx={curencySelStyle}
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="Product Category"
                              variant="filled"
                            />
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
                />
              </div>
            </div>
          </Col>

          <div
            className="inputGroup"
            style={{
              // border: "1px solid red",
              flexDirection: "row",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              gap: "15px",
              marginTop: "30px",
              // paddingTop: "30px",
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

          <input
            style={{ display: "none" }}
            ref={imageUploadRef}
            type="file"
            accept="image/jpeg, image/png,image/jpg"
            onChange={onChosenFile}
          />
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserAccount;
