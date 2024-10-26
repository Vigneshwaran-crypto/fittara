import React, { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import modelObj from "../../Assets/3dFiles/swater.glb";
import {
  AccumulativeShadows,
  Bounds,
  ContactShadows,
  Decal,
  Environment,
  Float,
  OrbitControls,
  PerspectiveCamera,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";

import frontSide from "../../Assets/sides/front2.png";
import backSide from "../../Assets/sides/back.png";
import leftSide from "../../Assets/sides/left.png";
import rightSide from "../../Assets/sides/right.png";

import { CanvasTexture, LinearFilter, NearestFilter } from "three";
import { SketchPicker } from "react-color";
import "./MenuOptionsStyles.css";
import * as THREE from "three";
import { Container } from "react-bootstrap";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControl,
  hexToRgb,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  rgbToHex,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import { LuImagePlus } from "react-icons/lu";
import {
  fontColors,
  fonts,
  hexToRgba,
  inpStye,
  isDarkHex,
  rgbaToHex,
  sampleProducts,
  selStyle,
  sliderStyle,
  wholeColors,
} from "../Components/utils";
import { AiOutlineCheck } from "react-icons/ai";
import { easing } from "maath";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";
import {
  buttonClasses,
  Tab,
  tabClasses,
  TabPanel,
  Tabs,
  TabsList,
} from "@mui/base";
import { IoText } from "react-icons/io5";
import { FaImage } from "react-icons/fa6";
import {
  Avatar,
  FormLabel,
  Radio,
  radioClasses,
  RadioGroup,
  Sheet,
} from "@mui/joy";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import TitleIcon from "@mui/icons-material/Title";
import Done from "@mui/icons-material/Done";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import { Joystick } from "react-joystick-component";

const Editor = (w) => {
  const { nodes, materials } = useGLTF(modelObj);

  const canvasRef = useRef(null);
  const [geometry, setGeometry] = useState(nodes.g_Hoodie_Hoodie_0_3.geometry);
  const uv = geometry.attributes.uv.array;

  const [incre, setIncre] = useState(0);

  const [printTxt, setPrintTxt] = useState("");
  const [printFont, setPrintFont] = useState({
    id: 1,
    name: "Arial",
  });
  const [fontStyle, setFontStyle] = useState("");
  const [fontColor, setFontColor] = useState({
    id: 1,
    color: "Black",
    hex: "#000000",
  });

  const [focTab, setFoctab] = useState(0);

  const [isValid, setIsValid] = useState(false);
  const uploadImgInpRef = useRef(null);
  const [isChipHover, setChipHover] = useState(null);

  const [chosenInd, setChosenInd] = useState(0);
  const imgIndHold = useRef(0);
  const txtIndHold = useRef(0);
  const prinTxtInpRef = useRef(null);

  const [isTxtEdit, setIsTxtEdit] = useState(false);

  const [chosenComp, setChosenComp] = useState({
    id: 2,
    part: "Front",
    geo: nodes.g_Hoodie_Hoodie_0_3.geometry,
    mat: materials.Hoodie,
    txture: null,
    color: "",
    ref: useRef(null),
    defPos: { x: 610.7, y: 333.5 },
    defRot: 87.7,
    defScal: 3.1,
    images: [],
    texts: [],
  });

  const [chosenMesh, setChosenMesh] = useState({
    id: 2,
    part: "Front",
    geo: nodes.g_Hoodie_Hoodie_0_3.geometry,
    mat: materials.Hoodie,
    txture: null,
    color: "",
    ref: useRef(null),
    defPos: { x: 610.7, y: 333.5 },
    defRot: 87.7,
    defScal: 3.1,
    images: [],
    texts: [],
  });

  const [texture, setTexture] = useState([
    {
      id: 1,
      part: "Hoodie",
      geo: nodes.g_Hoodie_Hoodie_0_1.geometry,
      mat: materials.Hoodie,
      txture: null,
      color: "#FFFEFE",
      ref: useRef(null),
      defPos: { x: 652.4, y: 300 },
      defRot: 87.7,
      defScal: 3.6,
      images: [],
      texts: [],
    },
    {
      id: 2,
      part: "Front",
      geo: nodes.g_Hoodie_Hoodie_0_3.geometry,
      mat: materials.Hoodie,
      txture: null,
      color: "#FFFEFE",
      ref: useRef(null),
      defPos: { x: 610.7, y: 333.5 },
      defRot: 87.7,
      defScal: 3.1,
      images: [],
      texts: [],
    },
    {
      id: 3,
      part: "Pocket",
      geo: nodes.g_Hoodie_Hoodie_0_2.geometry,
      mat: materials.poacket,
      txture: null,
      color: "#FFFEFE",
      ref: useRef(null),
      defPos: { x: 100.1, y: 333.5 },
      defRot: 87.7,
      defScal: 1.9,
      images: [],
      texts: [],
    },
    {
      id: 4,
      part: "Back",
      geo: nodes.g_Hoodie_Hoodie_0_5.geometry,
      mat: materials.back,
      txture: null,
      color: "#FFFEFE",
      ref: useRef(null),
      defPos: { x: 1250.8, y: 974.5 },
      defRot: 87.7,
      defScal: 3.6,
      images: [],
      texts: [],
    },
    {
      id: 5,
      part: "Left Hand",
      geo: nodes.g_Hoodie_Hoodie_0_6.geometry,
      mat: materials.left,
      txture: null,
      color: "#FFFEFE",
      ref: useRef(null),
      defPos: { x: 652.4, y: 300 },
      defRot: 87.7,
      defScal: 3.6,
      images: [],
      texts: [],
    },
    {
      id: 6,
      part: "Right Hand",
      geo: nodes.g_Hoodie_Hoodie_0_8.geometry,
      mat: materials.right,
      txture: null,
      ref: useRef(null),
      defPos: { x: 1527, y: 333.5 },
      defRot: 95.3,
      defScal: 1,
      images: [],
      texts: [],
    },
    {
      id: 7,
      part: "Left Cuff",
      geo: nodes.g_Hoodie_Hoodie_0_7.geometry,
      mat: materials.lcuff,
      txture: null,
      color: "#FFFEFE",
      ref: useRef(null),
      defPos: { x: 652.4, y: 300 },
      defRot: 87.7,
      defScal: 3.6,
      images: [],
      texts: [],
    },
    {
      id: 8,
      part: "Right Cuff",
      geo: nodes.g_Hoodie_Hoodie_0_9.geometry,
      mat: materials.rcuff,
      txture: null,
      color: "#FFFEFE",
      ref: useRef(null),
      defPos: { x: 652.4, y: 300 },
      defRot: 87.7,
      defScal: 3.6,
      images: [],
      texts: [],
    },
    {
      id: 9,
      part: "Cap",
      geo: nodes.g_Hoodie_Hoodie_0_4.geometry,
      mat: materials.cape,
      txture: null,
      color: "#FFFEFE",
      ref: useRef(null),
      defPos: { x: 652.4, y: 300 },
      defRot: 87.7,
      defScal: 3.6,
      images: [],
      texts: [],
    },
  ]);

  const [color, setColor] = useState({ hex: "#ffffff", alpha: 1, rgb: "" }); // State to hold the selected color
  const [defMeshRot, setdefMeshRot] = useState([0, 0, 0]);

  const [joyPos, setJoyPos] = useState({ direction: "FORWARD" });
  const [isMove, setIsMove] = useState(0);
  const moveIntervel = useRef(null);

  const [xValue, setXValue] = useState(
    chosenComp?.[focTab ? "images" : "texts"]?.[chosenInd]?.position?.x || 0
  );
  const [posVal, setPosVal] = useState({
    x: chosenComp?.[focTab ? "images" : "texts"]?.[chosenInd]?.position?.x || 0,
    y: chosenComp?.[focTab ? "images" : "texts"]?.[chosenInd]?.position?.y || 0,
  });

  const sidePosses = [
    {
      id: 2,
      part: "Front",
      node: "g_Hoodie_Hoodie_0_3",
      position: [0, -0.85, 0],
      opacity: 0.8,
      blur: 1,
      img: frontSide,
      defPos: { x: 610.7, y: 333.5 },
      defRot: 87.7,
      defScal: 3.1,
    },
    {
      id: 4,
      part: "Back",
      node: "g_Hoodie_Hoodie_0_5",
      position: [0, -1.1, 0],
      opacity: 0.8,
      blur: 2,
      img: backSide,
      defPos: { x: 1250.8, y: 974.5 },
      defRot: 87.7,
      defScal: 3.6,
    },
    {
      id: 5,
      part: "Left Hand",
      node: "g_Hoodie_Hoodie_0_6",
      position: [-0.1, -0.9, 0],
      opacity: 0.2,
      blur: 0.8,
      img: leftSide,
      defPos: { x: 652.4, y: 300 },
      defRot: 87.7,
      defScal: 3.6,
    },
    {
      id: 6,
      part: "Right Hand",
      node: "g_Hoodie_Hoodie_0_8",
      position: [0.1, -0.9, 0],
      opacity: 0.2,
      blur: 0.8,
      img: rightSide,
      defPos: { x: 1527, y: 333.5 },
      defRot: 95.3,
      defScal: 1,
    },
  ];

  useEffect(() => {
    if (isMove) {
      if (moveIntervel.current) clearInterval(moveIntervel.current);

      moveIntervel.current = setInterval(() => {
        const updatedTextures = texture.map((item) => {
          if (item.id === chosenComp.id) {
            const updatedItem = { ...item };
            const itemArray = updatedItem[focTab ? "images" : "texts"];
            const chosenItem = itemArray[chosenInd];

            let moveSpeed = focTab ? 5 : 15;

            let xVal = chosenItem.position.x;
            let yVal = chosenItem.position.y;

            switch (joyPos?.direction) {
              case "FORWARD":
                xVal += moveSpeed;
                break;
              case "BACKWARD":
                xVal -= moveSpeed;
                break;
              case "LEFT":
                yVal -= moveSpeed;
                break;
              case "RIGHT":
                yVal += moveSpeed;
                break;
              default:
                break;
            }

            itemArray[chosenInd] = {
              ...chosenItem,
              position: { ...chosenItem.position, x: xVal, y: yVal },
            };
            // setXValue(xVal?.toFixed(1));
            setPosVal({ x: xVal?.toFixed(1), y: yVal?.toFixed(1) });
            updatedItem[focTab ? "images" : "texts"] = itemArray;
            return updatedItem;
          }
          return item;
        });

        console.log("updating item:", updatedTextures);
        setTexture(updatedTextures);
        setIncre((prev) => prev + 1);
      }, 5);
    }

    return () => clearInterval(moveIntervel.current);
  }, [isMove, joyPos, chosenComp, chosenInd, focTab, texture]);

  // Don't remove some kinda important
  // useEffect(() => {
  //   const imgsList = texture.map((item) => item.images).flat();
  //   console.log("imgsList :", imgsList);
  //   const madeTxtures = texture.map((item, index) => {
  //     item.images.map((img, ind) => {
  //       const imgElem = new Image();
  //       imgElem.src = img.src;
  //       imgElem.crossOrigin = "anonymous";
  //       imgElem.onload = () => {
  //         if (index === madeTxtures.length - 1) {
  //           setImageLoaded(true);
  //         }
  //       };
  //       img.ref.current = imgElem;
  //     });
  //     return item;
  //   });
  //   console.log("madeTxtures :", madeTxtures);
  // }, [incre, chosenInd]);

  const renderCanvas = () => {
    // if (!imageLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const canvasWidth = 2048;
    const canvasHeight = 2048;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const meshItem = texture.find((item) => item.id === chosenComp.id);

    ctx.fillStyle = meshItem.color;
    // ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw UV wireframe
    // ctx.strokeStyle = "green";
    // ctx.lineWidth = 2;
    ctx.beginPath();

    for (let i = 0; i < uv.length; i += 6) {
      const x1 = uv[i] * canvasWidth;
      const y1 = (1 - uv[i + 1]) * canvasHeight;
      const x2 = uv[i + 2] * canvasWidth;
      const y2 = (1 - uv[i + 3]) * canvasHeight;
      const x3 = uv[i + 4] * canvasWidth;
      const y3 = (1 - uv[i + 5]) * canvasHeight;

      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.lineTo(x1, y1);
    }

    // ctx.fill();
    // ctx.stroke();

    texture.forEach((item) => {
      // Render images

      if (item.id !== chosenComp.id) return;

      item.images.forEach((image, index) => {
        // const img = imgElements.current[index];
        const img = image.ref.current;
        ctx.save();
        ctx.translate(image.position.x, image.position.y);
        ctx.rotate((image.rotation * Math.PI) / 180);
        ctx.scale(image.scale, image.scale);
        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        ctx.restore();
      });

      // Render texts
      item.texts.forEach((textItem) => {
        // const textWidth = ctx.measureText(textItem.text).width;
        // const textHeight = 30;

        ctx.save();
        ctx.translate(textItem.position.x, textItem.position.y);
        ctx.rotate((textItem.rotation * Math.PI) / 180);
        ctx.scale(textItem.scale, textItem.scale);
        ctx.font = textItem.fontStyle + " 30px " + textItem.font; // Set your desired font
        ctx.fillStyle = textItem.color; // Text color
        ctx.fillText(textItem.text, 0, 0);
        // ctx.strokeText(textItem.text, 0, 0); border
        ctx.restore();
      });
    });

    const newTexture = new CanvasTexture(canvas);
    newTexture.anisotropy = 16;
    newTexture.minFilter = LinearFilter;
    newTexture.magFilter = NearestFilter;

    // newTexture.minFilter = sRGBEncoding;
    // newTexture.magFilter = THREE.ACESFilmicToneMapping;

    // const madetxture = texture.map((item) => {
    //   if (partName === item.part) {
    //     item.txture = newTexture;
    //     return item;
    //   } else {
    //     return item;
    //   }
    // });
    // setTexture(madetxture);

    const madetxture = texture.map((item) => {
      if (chosenComp.part === item.part) {
        item.txture = newTexture;
        return item;
      } else {
        return item;
      }
    });
    setTexture(madetxture);
  };

  useEffect(() => {
    renderCanvas();
  }, [
    // images,
    // imageLoaded,
    color.hex,
    incre,
    chosenInd,
    posVal,
  ]);

  useEffect(() => {
    texture.forEach((item) => {
      if (item.ref.current && item.txture) {
        item.ref.current.material.map = item.txture; // Ensure the texture is updated
        item.ref.current.material.needsUpdate = true;
      }
    });
  }, [texture]);

  const handleScaleChange = (newScale) => {
    console.log("handleScaleChange", chosenInd);
    console.log("chosenComp", chosenComp);

    const updatedTextures = texture.map((item) => {
      if (item.part === chosenComp.part) {
        item[focTab ? "images" : "texts"][chosenInd].scale = newScale;
        chosenComp[focTab ? "images" : "texts"][chosenInd].scale = newScale;
        return item;
      }
      return item;
    });

    console.log("updatedTextures :", updatedTextures);

    setTexture(updatedTextures);
    setIncre(incre + 1);
  };

  const handleRotationChange = (newRotation) => {
    const updatedTextures = texture.map((item) => {
      if (item.part === chosenComp.part) {
        item[focTab ? "images" : "texts"][chosenInd].rotation = newRotation;
        chosenComp[focTab ? "images" : "texts"][chosenInd].rotation =
          newRotation;
        return item;
      }
      return item;
    });

    setTexture(updatedTextures);
    setIncre(incre + 1);
  };

  // const handleX = (newPos) => {
  //   console.log("handleX chosen index :", chosenInd);

  //   const updatedTextures = texture.map((item) => {
  //     if (item.id === chosenComp.id) {
  //       const updatedItem = { ...item };
  //       updatedItem[focTab ? "images" : "texts"] = [
  //         ...item[focTab ? "images" : "texts"],
  //       ];

  //       updatedItem[focTab ? "images" : "texts"][chosenInd] = {
  //         ...updatedItem[focTab ? "images" : "texts"][chosenInd],
  //         position: {
  //           ...updatedItem[focTab ? "images" : "texts"][chosenInd].position,
  //           x: newPos,
  //         },
  //       };
  //       return updatedItem;
  //     }
  //     return item;
  //   });

  //   console.log("updating item :", updatedTextures);

  //   setTexture(updatedTextures);
  //   setIncre((pre) => pre + 1);
  // };

  const handlePosInp = (newPos, mot) => {
    console.log("handleX chosen index :", chosenInd);

    const updatedTextures = texture.map((item) => {
      if (item.id === chosenComp.id) {
        const updatedItem = { ...item };
        const arrayToUpdate = updatedItem[focTab ? "images" : "texts"];

        if (chosenInd >= 0 && chosenInd < arrayToUpdate.length) {
          const updatedElement = {
            ...arrayToUpdate[chosenInd],
            position: {
              ...arrayToUpdate[chosenInd].position,
              x: mot ? newPos : arrayToUpdate[chosenInd].position.x,
              y: !mot ? newPos : arrayToUpdate[chosenInd].position.y,
            },
          };

          arrayToUpdate[chosenInd] = updatedElement;
        }

        updatedItem[focTab ? "images" : "texts"] = arrayToUpdate;
        return updatedItem;
      }
      return item;
    });

    console.log("updating item :", updatedTextures);
    setTexture(updatedTextures);
    setIncre((prev) => prev + 1);
    // setXValue(newPos);

    setPosVal({ x: mot ? newPos : posVal.x, y: !mot ? newPos : posVal.y });
  };

  const handleY = (newPos) => {
    const updatedTextures = texture.map((item) => {
      if (item.part === chosenComp.part) {
        // item[focTab ? "images" : "texts"][chosenInd].position.y = newPos;
        // chosenComp[focTab ? "images" : "texts"][chosenInd].position.y = newPos;
        // return item;

        const updatedItem = { ...item };
        updatedItem[focTab ? "images" : "texts"] = [
          ...item[focTab ? "images" : "texts"],
        ];

        updatedItem[focTab ? "images" : "texts"][chosenInd] = {
          ...updatedItem[focTab ? "images" : "texts"][chosenInd],
          position: {
            ...updatedItem[focTab ? "images" : "texts"][chosenInd].position,
            y: newPos,
          },
        };

        return updatedItem;
      }
      return item;
    });

    setTexture(updatedTextures);
    setIncre(incre + 1);
  };

  const handleColorChange = (color) => {
    console.log("handleColorChange :", color);
    const { hex, rgb } = color;
    console.log("NONconverted rgba to hex :", hex);
    const col = rgbaToHex(rgb.r, rgb.g, rgb.b, rgb.a);
    console.log("converted rgba to hex :", col);
    // const col = rgbToHex(rgb);

    const updatedTextures = texture.map((item) => {
      if (item.part === chosenComp.part) {
        item.color = col;
        chosenComp.color = col;
        return item;
      }
      return item;
    });

    setTexture(updatedTextures);
    // setIncre(incre + 1);
    // setColor(col); // Update the color state

    setColor({
      hex: hex,
      alpha: rgb.a, // Extract alpha value from RGBA object
      rgb,
    });
  };

  const onItemMeshClick = (val) => {
    console.log("clicked mesh :", val);

    const rots = [
      [0, 0, 0], // Original position
      [0, Math.PI / 1.8, 0], // 90 degrees right
      [0, -Math.PI / 1.8, 0], // 90 degrees left
      [0, Math.PI, 0], // 180 degrees
      [0, (3 * Math.PI) / 2, 0], // 270 degrees
    ];

    switch (val.id) {
      case 2:
        setdefMeshRot(rots[0]);
        break;
      case 4:
        setdefMeshRot(rots[3]);
        break;
      case 5:
        setdefMeshRot(rots[2]);
        break;
      case 6:
        setdefMeshRot(rots[1]);
        break;
      default:
        break;
    }

    // const samp = nodes.g_Hoodie_Hoodie_0_3.geometry;
    setGeometry(nodes[val.node].geometry);
    // setPartName(val.part);

    const meshItem = texture.find((item) => item.id === val.id);
    setChosenComp(meshItem);

    setChosenMesh(meshItem);
    // setChosenInd(0);
    setIsValid(false);
    setPrintFont({ id: "", name: "" });
    setPrintTxt("");
  };

  const onComImgClick = (ind, item) => {
    console.log("clicked item index :", ind);
    console.log("clicked item item :", item);
    // setIsImg(img);
    if (focTab) imgIndHold.current = ind;
    else txtIndHold.current = ind;

    setChosenInd(ind);

    // if (!img) {
    //   const val = fonts.find((ite) => ite.name === item.font);
    //   console.log("found font :", val);
    //   setPrintFont(val);
    //   setPrintTxt(item.text);
    // }
  };

  const onTxtPrintConfirm = () => {
    if (!printTxt) {
      setIsValid(true);
      return;
    }

    if (printTxt && printFont.id) {
      const textSamp = {
        text: printTxt,
        font: printFont.name,
        color: fontColor.hex,
        fontStyle: fontStyle,
        position: isTxtEdit
          ? chosenComp.texts[chosenInd].position
          : chosenMesh.defPos,
        rotation: isTxtEdit
          ? chosenComp.texts[chosenInd].rotation
          : chosenMesh.defRot,
        scale: isTxtEdit
          ? chosenComp.texts[chosenInd].scale
          : chosenMesh.defScal,
      };

      console.log("builded text :", textSamp);

      const updatedTextures = texture.map((item) => {
        if (item.id === chosenComp.id) {
          isTxtEdit
            ? (item.texts[chosenInd] = textSamp)
            : item.texts.push(textSamp);
          return item;
        }
        return item;
      });

      const updatedItem = updatedTextures.find(
        (item) => item.id === chosenComp.id
      );

      setTexture(updatedTextures);
      setIncre(incre + 1);

      setChosenComp(updatedItem);
      setChosenInd(updatedItem.texts.length - 1);

      setPosVal({ x: chosenMesh.defPos.x, y: chosenMesh.defPos.y });

      setIsValid(false);
      setIsTxtEdit(false);
      setPrintTxt("");
      setPrintFont({
        id: 1,
        name: "Arial",
      });
      setFontStyle("");
    }
  };

  const getChosenImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    console.log("Chose file :", file);

    const imgUrl = URL.createObjectURL(file);

    const imgItem = {
      src: imgUrl,
      position: chosenComp.defPos,
      rotation: chosenComp.defRot,
      scale: chosenComp.defScal,
      ref: React.createRef(),
      file,
    };

    const imgElem = new Image();
    imgElem.src = imgItem.src;
    imgElem.crossOrigin = "anonymous";
    imgElem.onload = () => {};
    imgItem.ref.current = imgElem;

    const updatedTextures = texture.map((item) => {
      if (item.id === chosenComp.id) {
        item.images.push(imgItem);
        setChosenInd(item.images.length - 1);
        setChosenComp(item);
        return item;
      }
      return item;
    });

    // const updatedItem = updatedTextures.find((item) => item.id === chosenComp.id);
    // setChosenComp(updatedItem);

    // setChosenComp(updatedItem);
    //   setChosenInd(updatedItem.texts.length - 1);

    setPosVal({ x: chosenComp.defPos.x, y: chosenComp.defPos.y });

    setTexture(() => updatedTextures);
    setIncre((pre) => pre + 1);

    setTimeout(() => {
      setIncre((pre) => pre + 1);
    }, 1);
  };

  const onChipTxtDelClick = (ind) => {
    console.log("clicked chip for delete :", ind);
    const updatedtxture = texture.map((item) => {
      if (item.id === chosenComp.id) {
        const newItem = { ...chosenComp };
        const txts = chosenComp.texts?.filter((ite, dex) => ind !== dex);
        newItem.texts = txts;
        setChosenComp(newItem);
        return newItem;
      } else {
        return item;
      }
    });

    setTexture(updatedtxture);
    setIncre(incre + 1);
  };

  const onChipTxtEditClick = (ind) => {
    setIsTxtEdit(true);

    const edibleTxt = texture.find((item) => item.id === chosenComp.id).texts[
      ind
    ];

    console.log("edibale txt :", edibleTxt);

    setPrintTxt(edibleTxt.text);

    setFontStyle(edibleTxt.fontStyle);

    const fontVal = fonts.find((item) => item.name === edibleTxt.font);
    setPrintFont(fontVal);

    const selCol = fontColors.find((ite) => ite.hex == edibleTxt.color);
    setFontColor(selCol);
  };

  return (
    <Container fluid className="editorHolder">
      <div className="favConts">
        <canvas
          ref={canvasRef}
          id="uvCanvas"
          // onMouseDown={handleMouseDown}
          style={{
            width: "100%",
            display: "none",
          }}
        />

        <input
          ref={uploadImgInpRef}
          type="file"
          accept="image/*"
          onChange={getChosenImage}
          style={{ display: "none" }}
        />
        <div className="editorHolder">
          {/* Tabs here */}

          <div className="tabsHolder">
            <Tabs
              defaultValue={0}
              onChange={(e, val) => {
                console.log("selected tab :", val);
                setChosenInd(val ? imgIndHold.current : txtIndHold.current);
                setFoctab(val);
              }}
              className="tabsContainer"
            >
              <TabsList className="tabsList">
                <Tab className="tabBt" label="Image" value={0} key={0}>
                  <IoText size={20} />
                </Tab>
                <Tab className="tabBt" label="Text" value={1} key={1}>
                  <FaImage size={20} />
                </Tab>
              </TabsList>

              <TabPanel className="tabPanel" value={0}>
                <div className="printTxtHolder">
                  <div className="txtInputsHolder">
                    <TextField
                      inputRef={prinTxtInpRef}
                      size="small"
                      label="Print Text"
                      variant="standard"
                      fullWidth
                      multiline
                      sx={inpStye}
                      onChange={(e) => setPrintTxt(e.target.value)}
                      value={printTxt}
                      error={isValid && !printTxt}
                    />
                    <Autocomplete
                      freeSolo
                      disableClearable
                      options={fonts}
                      size="small"
                      getOptionLabel={(option) =>
                        option.name ? option.name : ""
                      }
                      fullWidth
                      renderInput={(param) => (
                        <TextField
                          {...param}
                          size="small"
                          label="Font"
                          fullWidth
                          variant="standard"
                          placeholder="Search"
                          sx={inpStye}
                          error={isValid && !printFont.name}
                        />
                      )}
                      value={printFont}
                      onChange={(e, val) => {
                        console.log("onChange font : ", val);
                        setPrintFont(val);
                      }}
                      renderOption={(props, item, { selected }) => {
                        const { key, ...otherProps } = props;
                        return (
                          <MenuItem
                            style={{ fontFamily: item.name }}
                            // {...props}
                            {...otherProps}
                            key={item.id}
                            id={item.id}
                            value={item.name}
                          >
                            {item.name}
                          </MenuItem>
                        );
                      }}
                    />

                    <div className="radioGrpHolder">
                      <div className="subTitle">Font Style</div>
                      <RadioGroup
                        aria-labelledby="storage-label"
                        defaultValue="1"
                        value={
                          fontStyle === "bold"
                            ? "2"
                            : fontStyle === "italic"
                            ? "3"
                            : "1"
                        }
                        size="sm"
                        sx={{
                          gap: 1.2,
                          flexDirection: "row",
                          alignItem: "center",
                          paddingInlineStart: "5px",
                        }}
                        onChange={(e) => {
                          console.log("onChange radioGrp :", e.target.value);
                          const val = e.target.value;
                          const fStyle =
                            val === "1" ? "" : val === "2" ? "bold" : "italic";
                          setFontStyle(fStyle);
                        }}
                      >
                        {["1", "2", "3"].map((value) => (
                          <Sheet
                            key={value}
                            size="sm"
                            sx={{
                              p: "0 10px",
                              borderRadius: "sm",
                              alignItems: "center",
                              justifyContent: "center",
                              boxShadow: 2,
                              "&:hover": {
                                backgroundColor: "transparent !important",
                                opacity: " 1 !important",
                              },
                            }}
                          >
                            <Radio
                              size="sm"
                              overlay
                              disableIcon
                              value={value}
                              slotProps={{
                                action: ({ checked }) => ({
                                  sx: (theme) => ({
                                    ...(checked && {
                                      "--variant-borderWidth": "1.3px",
                                      "&&": {
                                        // && to increase the specificity to win the base :hover styles
                                        borderColor:
                                          theme.vars.palette.primary[500],
                                      },
                                    }),
                                    "&:hover": {
                                      // Keep the hover style clean, no color mess-up
                                      borderColor:
                                        theme.vars.palette.primary[0],
                                      backgroundColor: "transparent",
                                      opacity: "1 !important",
                                    },
                                  }),
                                }),
                              }}
                            />
                            {value === "1" ? (
                              <TitleIcon sx={{ fontSize: "14px" }} />
                            ) : value === "2" ? (
                              <FormatBoldIcon sx={{ fontSize: "14px" }} />
                            ) : (
                              <FormatItalicIcon sx={{ fontSize: "14px" }} />
                            )}
                          </Sheet>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>

                  <div className="colorsPallateHolder">
                    <div className="subTitle">Colors</div>
                    <div className="colListHolder">
                      <RadioGroup
                        defaultValue={1}
                        value={fontColor.id}
                        sx={{
                          gap: 0.5,
                          padding: "3px",
                          display: "flex",
                          flexWrap: "wrap",
                          flexDirection: "row",
                          overflow: "auto",
                        }}
                        onChange={(e) => {
                          console.log("change cols :", e.target.value);
                          const selCol = fontColors.find(
                            (ite) => ite.id == e.target.value
                          );
                          // setFontColor(selCol.hex || "#000000");
                          setFontColor(selCol);
                        }}
                      >
                        {fontColors.map((color) => (
                          <Sheet
                            key={color.id}
                            sx={{
                              position: "relative",
                              width: 25,
                              height: 25,
                              flexShrink: 0,
                              bgcolor: color.hex,
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Radio
                              overlay
                              variant="solid"
                              color={color.hex}
                              checkedIcon={
                                <Done
                                  fontSize="small"
                                  sx={{
                                    color: isDarkHex(color.hex)
                                      ? "white"
                                      : "black",
                                  }}
                                />
                              }
                              value={color.id}
                              slotProps={{
                                input: { "aria-label": color.color },
                                radio: {
                                  sx: {
                                    display: "contents",
                                    "--variant-borderWidth": "1px",
                                  },
                                },
                              }}
                            />
                          </Sheet>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="addEditHolder">
                      <Button
                        color="primary"
                        variant="contained"
                        sx={{
                          border: "1px solid transparent",
                          textTransform: "none",
                          padding: "1px 10px",
                          fontFamily: "sans-serif",
                        }}
                        size="small"
                        onClick={onTxtPrintConfirm}
                      >
                        {isTxtEdit ? "Edit" : " Add"}
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="txtRangesHolder">
                  <div className="subTitle">Printed Text</div>

                  <div className="printedTextList">
                    {chosenComp.texts.map((item, ind) => (
                      <div
                        key={ind}
                        style={{ position: "relative" }}
                        onMouseEnter={() => setChipHover(ind)}
                        onMouseLeave={() => setChipHover(null)}
                      >
                        <Chip
                          key={ind}
                          label={item.text}
                          variant="filled"
                          onClick={onComImgClick.bind(this, ind, item)}
                          sx={{
                            m: 0.1,
                            height: "25px",
                            position: "relative",
                            backgroundColor:
                              !focTab && chosenInd === ind
                                ? "#D8D8D8"
                                : "transparent",
                            fontFamily: item.font,
                            "&:hover": {
                              backgroundColor:
                                !focTab && chosenInd === ind
                                  ? "#D8D8D8"
                                  : "transparent",
                            },
                          }}
                        />
                        <ClearIcon
                          fontSize="10px"
                          sx={{
                            display:
                              isChipHover === ind && chosenInd === ind
                                ? "block"
                                : "none",
                            position: "absolute",
                            left: "-3px",
                            top: "-20%",
                            "&:hover": {
                              color: "red",
                            },
                          }}
                          onClick={onChipTxtDelClick.bind(this, ind)}
                        />

                        <EditIcon
                          fontSize="15px"
                          onClick={onChipTxtEditClick.bind(this, ind)}
                          sx={{
                            display:
                              isChipHover === ind && chosenInd === ind
                                ? "block"
                                : "none",
                            position: "absolute",
                            left: "85%",
                            top: "-20%",
                            "&:hover": {
                              color: "#1A76D2",
                            },
                          }}
                        />
                      </div>
                    ))}

                    <Button
                      color="primary"
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        borderRadius: "30px",
                        fontFamily: "sans-serif",
                        height: "25px",
                        m: 0.1,
                      }}
                      size="small"
                      onClick={() => prinTxtInpRef.current.focus()}
                    >
                      New Text
                    </Button>
                  </div>
                </div>
              </TabPanel>

              <TabPanel className="tabPanel" value={1}>
                <div className="suggImageHolder">
                  <div style={{ paddingBlock: "4px" }} className="subTitle">
                    Images
                  </div>
                  <div className="addedImgHolder"></div>
                </div>

                <div style={{ paddingBlock: "4px" }} className="subTitle">
                  Printed Images
                </div>

                <div className="addedImgHolder">
                  <div className="imgGridListHolder">
                    {chosenComp.images.map((item, ind) => (
                      <div className="comImgHolder" key={ind}>
                        <img
                          src={item.src}
                          className="imgItem"
                          onClick={onComImgClick.bind(this, ind, item)}
                          style={{
                            border:
                              focTab && chosenInd === ind
                                ? "1px solid grey"
                                : "",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    ))}
                    <div className="comImgHolder">
                      <IconButton
                        onClick={() => uploadImgInpRef.current.click()}
                      >
                        <LuImagePlus color="#1665C0" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
            <div className="rangesList">
              <div
                className="subTitle"
                style={{ paddingBottom: 0, paddingTop: "4px" }}
              >
                Alignment
              </div>

              {/* <div className="rangeItem">
                <label className="rangeLabel">Vertical</label>
                <div className="sliderHolder">
                  <Slider
                    size="small"
                    className="sliders"
                    step={0.01}
                    min={1}
                    max={3000}
                    value={
                      chosenComp[focTab ? "images" : "texts"][chosenInd]
                        ?.position.x ?? 0
                    }
                    onChange={(e) => handleX(parseFloat(e.target.value))}
                    sx={sliderStyle}
                    disabled={
                      chosenComp[focTab ? "images" : "texts"].length === 0
                    }
                  />

                  <div className="sliderValTxt">
                    {chosenComp[focTab ? "images" : "texts"][chosenInd]
                      ?.position.x ?? 0}
                  </div>
                </div>
              </div> */}

              {/* <div className="rangeItem">
                <label className="rangeLabel">Horizondal</label>
                <div className="sliderHolder">
                  <Slider
                    size="small"
                    className="sliders"
                    step={0.01}
                    min={1}
                    max={3000}
                    value={
                      chosenComp[focTab ? "images" : "texts"][chosenInd]
                        ?.position.y ?? 0
                    }
                    onChange={(e) => handleY(parseFloat(e.target.value))}
                    sx={sliderStyle}
                    disabled={
                      chosenComp[focTab ? "images" : "texts"].length === 0
                    }
                  />

                  <div className="sliderValTxt">
                    {chosenComp[focTab ? "images" : "texts"][chosenInd]
                      ?.position.y ?? 0}
                  </div>
                </div>
              </div> */}
              <div
                className="rangeItem"
                style={{ alignItems: "center", flexDirection: "row" }}
              >
                <div className="posInpHolder">
                  <TextField
                    size="small"
                    label="X"
                    variant="standard"
                    sx={inpStye}
                    type="number"
                    // value={xValue}
                    value={posVal.x}
                    onChange={(e) => {
                      const newX = parseFloat(e.target.value);
                      handlePosInp(newX, true);
                    }}
                    disabled={
                      chosenComp[focTab ? "images" : "texts"].length === 0
                    }
                  />

                  <TextField
                    size="small"
                    label="Y"
                    variant="standard"
                    sx={inpStye}
                    type="number"
                    value={posVal.y}
                    onChange={(e) => {
                      const newY = parseFloat(e.target.value);
                      handlePosInp(newY, false);
                    }}
                    disabled={
                      chosenComp[focTab ? "images" : "texts"].length === 0
                    }
                  />
                </div>

                <div className="analogHolder">
                  <Joystick
                    size={70}
                    baseColor="black"
                    stickColor="#1665C0"
                    throttle={50}
                    start={(e) => {
                      console.log("joy start :", e);
                      setIsMove(1);
                    }}
                    move={(e) => {
                      console.log("JoyStik Moving :", e);
                      setJoyPos(e);
                    }}
                    stop={(e) => {
                      console.log("joy Stop :", e);
                      setIsMove(0);
                    }}
                    disabled={
                      chosenComp[focTab ? "images" : "texts"].length === 0
                    }
                  />
                </div>
              </div>

              <div className="rangeItem">
                <label className="rangeLabel">Scale</label>

                <div className="sliderHolder">
                  <Slider
                    size="small"
                    className="sliders"
                    step={0.01}
                    min={0.1}
                    max={10}
                    value={
                      chosenComp[focTab ? "images" : "texts"][chosenInd]
                        ?.scale ?? 0
                    }
                    onChange={(e) =>
                      handleScaleChange(parseFloat(e.target.value))
                    }
                    sx={sliderStyle}
                    disabled={
                      chosenComp[focTab ? "images" : "texts"].length === 0
                    }
                  />
                  <div className="sliderValTxt">
                    {chosenComp[focTab ? "images" : "texts"][chosenInd]
                      ?.scale ?? 0}
                  </div>
                </div>
              </div>

              <div className="rangeItem">
                <label className="rangeLabel">Rotation</label>
                <div className="sliderHolder">
                  <Slider
                    size="small"
                    className="sliders"
                    step={0.01}
                    min={1}
                    max={1000}
                    value={
                      chosenComp[focTab ? "images" : "texts"][chosenInd]
                        ?.rotation ?? 0
                    }
                    onChange={(e) =>
                      handleRotationChange(parseFloat(e.target.value))
                    }
                    sx={sliderStyle}
                    disabled={
                      chosenComp[focTab ? "images" : "texts"].length === 0
                    }
                  />

                  <div className="sliderValTxt">
                    {chosenComp[focTab ? "images" : "texts"][chosenInd]
                      ?.rotation ?? 0}
                  </div>
                </div>
              </div>
            </div>
            <Styles />
          </div>
        </div>

        <div className="modelObjHolder">
          <div className="objPosHolder">
            <div className="posImgListHolder">
              {sidePosses.map((item, ind) => (
                <div
                  key={ind}
                  onClick={onItemMeshClick.bind(this, item)}
                  style={{
                    backgroundColor:
                      chosenMesh.id === item.id ? "#e4e4e4" : "transparent",
                  }}
                  className="posImgItemHolder"
                >
                  <img className="posImg" src={item.img} />
                </div>
              ))}
            </div>
          </div>

          <Canvas
            gl={{
              outputEncoding: LinearFilter,
              toneMapping: NearestFilter,
              antialias: true,
              toneMappingExposure: 1.5,
            }}
            // camera={{ fov: 35, position: [0, 1.5, 4] }}
            camera={{ fov: 45, position: [0, 1, 3.6] }}
            shadows
            className="threeDHolder"
          >
            <ambientLight intensity={1.6} />

            <directionalLight
              position={[5, 10, 5]}
              intensity={1.4}
              castShadow
              shadow-mapSize-width={4096}
              shadow-mapSize-height={4096}
              shadow-bias={-0.0001}
              shadow-normalBias={0.02}
            />
            <hemisphereLight
              skyColor={"#ffffff"}
              groundColor={"#333333"}
              intensity={0.9}
            />

            {texture?.map((item) => (
              <mesh
                receiveShadow
                position={[0, 0.15, 0]}
                rotation={defMeshRot}
                key={item.id}
                geometry={item.geo}
                ref={item.ref}
              >
                <meshPhysicalMaterial
                  toneMapped={false}
                  map={item.txture}
                  color={"#ffffff"}
                  roughness={0.6}
                  clearcoat={0.1}
                  reflectivity={0.2}
                  metalness={0.0}
                />
              </mesh>
            ))}

            <OrbitControls />
            <ContactShadows position={[0, -1.3, 0]} opacity={0.3} blur={3} />
          </Canvas>
        </div>
      </div>
    </Container>
  );
};

export default Editor;

function Styles() {
  return (
    <style>
      {`
      .tabsList {
        // background-color: pink;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: space-between;
      }
      .tabBt {
        font-family: 'IBM Plex Sans', sans-serif;
        color: black;
        cursor: pointer;
        font-size: 1dvw;
        // background-color: white;
        background-color: transparent;
        padding: 5px 15px;
        border: none;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        margin-inline:7px
      }
      .tabBt:hover {
        color:black
      }
      .tabBt.${tabClasses.selected} {
        background-color: #969696;
        color: white;
      }
      .tabBt.${buttonClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .tabPanel {
        display: flex;
        flex:1;
        flex-direction:column;
        width: 100%;
        // border: 1px solid pink;
        // font-family: 'IBM Plex Sans', sans-serif;
        // font-size: 0.875rem;
        // padding-top:10px;
      }
      `}
    </style>
  );
}
