import React, { useEffect, useRef, useState } from "react";
import Mug from "../../Component/Mug";
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

import ecomImg from "../../Assets/auth/ecomVector.jpg";
import userImg from "../../Assets/auth/userProfile.png";

import img1 from "../../Assets/auth/img1.png";
import img2 from "../../Assets/auth/img2.png";
import img3 from "../../Assets/auth/img3.png";
import img4 from "../../Assets/auth/img4.png";
import img5 from "../../Assets/auth/img5.png";
import img6 from "../../Assets/auth/img6.png";
import img7 from "../../Assets/auth/img7.png";

import positive from "../../Assets/auth/positive.png";
import butter from "../../Assets/auth/butter.png";
import flower from "../../Assets/auth/flower.png";

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

const Favorites = (props) => {
  const { nodes, materials } = useGLTF(modelObj);

  const mesh = useRef();
  const canvasRef = useRef(null);
  const [geometry, setGeometry] = useState(nodes.g_Hoodie_Hoodie_0_3.geometry);
  const [partName, setPartName] = useState("Front");
  const uv = geometry.attributes.uv.array;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingText, setDraggingText] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [incre, setIncre] = useState(0);
  const [isImg, setIsImg] = useState(true);

  const [printTxt, setPrintTxt] = useState("");
  const [printFont, setPrintFont] = useState({
    id: 1,
    name: "Arial",
  });
  const [isValid, setIsValid] = useState(false);
  const uploadImgInpRef = useRef(null);
  const newImgRef = useRef(null);

  const [hover, setHover] = useState(null);

  const [chosenComp, setChosenComp] = useState({
    id: 2,
    part: "Front",
    geo: nodes.g_Hoodie_Hoodie_0_3.geometry,
    mat: materials.Hoodie,
    txture: null,
    color: "",
    ref: useRef(null),
    images: [
      {
        src: flower,
        position: { x: 261.2, y: 333.5 },
        rotation: 0,
        scale: 1,
        ref: useRef(),
      },

      {
        src: img1,
        position: { x: 261.2, y: 333.5 },
        rotation: 0,
        scale: 1,
        ref: useRef(),
      },

      {
        src: img2,
        position: { x: 261.2, y: 333.5 },
        rotation: 0,
        scale: 1,
        ref: useRef(),
      },

      {
        src: img3,
        position: { x: 261.2, y: 333.5 },
        rotation: 0,
        scale: 1,
        ref: useRef(),
      },

      {
        src: img4,
        position: { x: 261.2, y: 333.5 },
        rotation: 0,
        scale: 1,
        ref: useRef(),
      },
      {
        src: flower,
        position: { x: 261.2, y: 333.5 },
        rotation: 0,
        scale: 1,
        ref: useRef(),
      },

      {
        src: img1,
        position: { x: 261.2, y: 333.5 },
        rotation: 0,
        scale: 1,
        ref: useRef(),
      },

      {
        src: img2,
        position: { x: 261.2, y: 333.5 },
        rotation: 0,
        scale: 1,
        ref: useRef(),
      },

      {
        src: img3,
        position: { x: 261.2, y: 333.5 },
        rotation: 0,
        scale: 1,
        ref: useRef(),
      },

      {
        src: img4,
        position: { x: 261.2, y: 333.5 },
        rotation: 0,
        scale: 1,
        ref: useRef(),
      },
    ],
    texts: [
      {
        text: "Oraisa",
        font: "Arial",
        position: { x: 300, y: 300 },
        rotation: 0,
        scale: 1,
      },
      {
        text: "Magna",
        font: "Arial",
        position: { x: 300, y: 300 },
        rotation: 0,
        scale: 1,
      },
      {
        text: "Vignesh",
        font: "Arial",
        position: { x: 300, y: 300 },
        rotation: 0,
        scale: 1,
      },
      {
        text: "Quintas",
        font: "Arial",
        position: { x: 300, y: 300 },
        rotation: 0,
        scale: 1,
      },
      {
        text: "Scorpus",
        font: "Arial",
        position: { x: 300, y: 300 },
        rotation: 0,
        scale: 1,
      },
      {
        text: "Poseiden",
        font: "Arial",
        position: { x: 300, y: 300 },
        rotation: 0,
        scale: 1,
      },
      {
        text: "Clamartha",
        font: "Arial",
        position: { x: 300, y: 300 },
        rotation: 0,
        scale: 1,
      },
      {
        text: "Rebecca",
        font: "Arial",
        position: { x: 300, y: 300 },
        rotation: 0,
        scale: 1,
      },
    ],
  });

  const [chosenInd, setChosenInd] = useState(0);
  const [txtInd, setTxtInd] = useState(0);

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
      images: [
        {
          src: userImg,
          position: { x: 50, y: 50 },
          rotation: 0,
          scale: 1,
          ref: useRef(),
        },
        {
          src: img3,
          position: { x: 20, y: 100 },
          rotation: 0,
          scale: 1,
          ref: useRef(),
        },
      ],
      texts: [
        {
          text: "Hoodie",
          font: "Arial",
          position: { x: 300, y: 300 },
          rotation: 0,
          scale: 1,
        },
      ],
    },
    {
      id: 2,
      part: "Front",
      geo: nodes.g_Hoodie_Hoodie_0_3.geometry,
      mat: materials.Hoodie,
      txture: null,
      color: "#FFFEFE",
      ref: useRef(null),
      defPos: { x: 261.2, y: 333.5 },
      defRot: 87.7,
      defScal: 3.1,
      images: [
        {
          src: flower,
          position: { x: 261.2, y: 333.5 },
          rotation: 0,
          scale: 1,
          ref: useRef(),
        },
      ],
      texts: [
        {
          text: "Print Text",
          font: "Arial",
          position: { x: 300, y: 300 },
          rotation: 0,
          scale: 1,
        },
      ],
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
      images: [
        // {
        //   src: img2,
        //   position: { x: 30, y: 30 },
        //   rotation: 87.7,
        //   scale: 1,
        //   ref: useRef(),
        // },
      ],
      texts: [
        {
          text: "Pocket",
          font: "Arial",
          position: { x: 300, y: 300 },
          rotation: 0,
          scale: 1,
        },
      ],
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
      images: [
        // {
        //   src: butter,
        //   position: { x: 1250.8, y: 974.5 },
        //   rotation: 87.7,
        //   scale: 3.6,
        //   ref: useRef(),
        // },
      ],
      texts: [
        // {
        //   text: "Back",
        //   font: "Arial",
        //   position: { x: 300, y: 300 },
        //   rotation: 0,
        //   scale: 1,
        // },
      ],
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
      images: [
        {
          src: img4,
          position: { x: 25, y: 25 },
          rotation: 0,
          scale: 1,
          ref: useRef(),
        },
      ],
      texts: [
        {
          text: "Left Hand",
          font: "Arial",
          position: { x: 300, y: 300 },
          rotation: 0,
          scale: 1,
        },
      ],
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
      images: [
        {
          src: img5,
          position: { x: 45, y: 45 },
          rotation: 0,
          scale: 1,
          ref: useRef(),
        },
      ],
      texts: [
        {
          text: "Right Hand",
          font: "Arial",
          position: { x: 300, y: 300 },
          rotation: 0,
          scale: 1,
        },
      ],
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
      images: [
        {
          src: img6,
          position: { x: 50, y: 50 },
          rotation: 0,
          scale: 1,
          ref: useRef(),
        },
      ],
      texts: [
        {
          text: "Left Cuff",
          font: "Arial",
          position: { x: 300, y: 300 },
          rotation: 0,
          scale: 1,
        },
      ],
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
      images: [
        {
          src: img7,
          position: { x: 50, y: 50 },
          rotation: 0,
          scale: 1,
          ref: useRef(),
        },
      ],
      texts: [
        {
          text: "Right Cuff",
          font: "Arial",
          position: { x: 300, y: 300 },
          rotation: 0,
          scale: 1,
        },
      ],
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
      images: [
        {
          src: img2,
          position: { x: 50, y: 50 },
          rotation: 0,
          scale: 1,
          ref: useRef(),
        },
      ],
      texts: [
        {
          text: "Sample Text 1",
          font: "Arial",
          position: { x: 300, y: 300 },
          rotation: 0,
          scale: 1,
        },
      ],
    },
  ]);

  const [images, setImages] = useState([
    { src: userImg, position: { x: 50, y: 50 }, rotation: 0, scale: 1 },
    { src: ecomImg, position: { x: 150, y: 150 }, rotation: 0, scale: 1 },
  ]);

  const [texts, setTexts] = useState([
    {
      text: "Sample Text 1",
      position: { x: 300, y: 300 },
      rotation: 0,
      scale: 1,
    },
    {
      text: "Sample Text 2",
      position: { x: 500, y: 500 },
      rotation: 0,
      scale: 1,
    },
  ]);

  const [color, setColor] = useState({ hex: "#ffffff", alpha: 1, rgb: "" }); // State to hold the selected color
  const imgElements = useRef([]);

  const [defMeshRot, setdefMeshRot] = useState([0, 0, 0]);

  const [radioGroupValue, setRadioGroupValue] = useState("1");

  const hoodComs = [
    {
      id: 1,
      part: "Hoodie",
      node: "g_Hoodie_Hoodie_0_1",
      position: [0, -1.3, 0],
      opacity: 0.2,
      blur: 1,
      mesh: (
        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_1.geometry}
          material={materials.Hoodie}
        />
      ),
    },
    {
      id: 2,
      part: "Front",
      node: "g_Hoodie_Hoodie_0_3",
      position: [0, -0.85, 0],
      opacity: 0.8,
      blur: 1,
      mesh: (
        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_3.geometry}
          material={materials.front}
        />
      ),
    },
    {
      id: 3,
      part: "Pocket",
      node: "g_Hoodie_Hoodie_0_2",
      position: [0, -1, 0],
      opacity: 2,
      blur: 1,
      mesh: (
        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_2.geometry}
          material={materials.poacket}
        />
      ),
    },
    {
      id: 4,
      part: "Back",
      node: "g_Hoodie_Hoodie_0_5",
      position: [0, -1.1, 0],
      opacity: 0.8,
      blur: 2,
      mesh: (
        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_5.geometry}
          material={materials.back}
        />
      ),
    },
    {
      id: 5,
      part: "Left Hand",
      node: "g_Hoodie_Hoodie_0_6",
      position: [-0.1, -0.9, 0],
      opacity: 0.2,
      blur: 0.8,
      mesh: (
        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_6.geometry}
          material={materials.left}
        />
      ),
    },
    {
      id: 6,
      part: "Right Hand",
      node: "g_Hoodie_Hoodie_0_8",
      position: [0.1, -0.9, 0],
      opacity: 0.2,
      blur: 0.8,
      mesh: (
        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_8.geometry}
          material={materials.right}
        />
      ),
    },
    {
      id: 7,
      part: "Left Cuff",
      node: "g_Hoodie_Hoodie_0_7",
      position: [0, 0, 0],
      opacity: 0,
      blur: 0,
      mesh: (
        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_7.geometry}
          material={materials.lcuff}
        />
      ),
    },
    {
      id: 8,
      part: "Right Cuff",
      node: "g_Hoodie_Hoodie_0_9",
      position: [0, 0, 0],
      opacity: 0,
      blur: 0,
      mesh: (
        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_9.geometry}
          material={materials.rcuff}
        />
      ),
    },
    {
      id: 9,
      part: "Cap",
      node: "g_Hoodie_Hoodie_0_4",
      position: [0, -0.0, 0],
      opacity: 0.3,
      blur: 1,
      mesh: (
        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_4.geometry}
          material={materials.cape}
        />
      ),
    },
    {
      id: 5,
      part: "Left Hand",
      node: "g_Hoodie_Hoodie_0_6",
      position: [-0.1, -0.9, 0],
      opacity: 0.2,
      blur: 0.8,
      mesh: (
        <mesh
          geometry={nodes.g_Hoodie_Hoodie_0_6.geometry}
          material={materials.left}
        />
      ),
    },
  ];

  const sidePosses = [
    {
      id: 2,
      part: "Front",
      node: "g_Hoodie_Hoodie_0_3",
      position: [0, -0.85, 0],
      opacity: 0.8,
      blur: 1,
      img: frontSide,
    },
    {
      id: 4,
      part: "Back",
      node: "g_Hoodie_Hoodie_0_5",
      position: [0, -1.1, 0],
      opacity: 0.8,
      blur: 2,
      img: backSide,
    },
    {
      id: 5,
      part: "Left Hand",
      node: "g_Hoodie_Hoodie_0_6",
      position: [-0.1, -0.9, 0],
      opacity: 0.2,
      blur: 0.8,
      img: leftSide,
    },
    {
      id: 6,
      part: "Right Hand",
      node: "g_Hoodie_Hoodie_0_8",
      position: [0.1, -0.9, 0],
      opacity: 0.2,
      blur: 0.8,
      img: rightSide,
    },
  ];

  useEffect(() => {
    const imgsList = texture.map((item) => item.images).flat();

    console.log("imgsList :", imgsList);
    const madeTxtures = texture.map((item, index) => {
      item.images.map((img, ind) => {
        const imgElem = new Image();
        imgElem.src = img.src;
        imgElem.crossOrigin = "anonymous";
        imgElem.onload = () => {
          if (index === madeTxtures.length - 1) {
            setImageLoaded(true);
          }
        };

        img.ref.current = imgElem;
      });

      return item;
    });

    console.log("madeTxtures :", madeTxtures);
  }, [
    // texture,
    // chosenComp.images[chosenInd].scale,
    incre,
  ]);

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
        ctx.save();
        ctx.translate(textItem.position.x, textItem.position.y);
        ctx.rotate((textItem.rotation * Math.PI) / 180);
        ctx.scale(textItem.scale, textItem.scale);
        ctx.font = "30px " + textItem.font; // Set your desired font
        ctx.fillStyle = "#000"; // Text color
        ctx.fillText(textItem.text, 0, 0);
        ctx.restore();
      });
    });

    const newTexture = new CanvasTexture(canvas);
    newTexture.anisotropy = 16;
    newTexture.minFilter = LinearFilter;
    newTexture.magFilter = NearestFilter;

    // newTexture.minFilter = sRGBEncoding;
    // newTexture.magFilter = THREE.ACESFilmicToneMapping;

    const madetxture = texture.map((item) => {
      if (partName === item.part) {
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
    imageLoaded,
    color.hex,
    texts,
    partName,
    // chosenComp.images[chosenInd].scale,
    incre,
  ]);

  useEffect(() => {
    texture.forEach((item) => {
      if (item.ref.current && item.txture) {
        item.ref.current.material.map = item.txture; // Ensure the texture is updated
        item.ref.current.material.needsUpdate = true;
      }
    });
  }, [texture]);

  const handleMouseDown = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });

    let foundIndex = null;
    let isText = false;

    // Check if an image is clicked
    images.forEach((img, index) => {
      const imgWidth = imgElements.current[index].width * img.scale;
      const imgHeight = imgElements.current[index].height * img.scale;

      if (
        clientX >= img.position.x - imgWidth / 2 &&
        clientX <= img.position.x + imgWidth / 2 &&
        clientY >= img.position.y - imgHeight / 2 &&
        clientY <= img.position.y + imgHeight / 2
      ) {
        foundIndex = index;
      }
    });

    // Check if a text is clicked
    if (foundIndex === null) {
      texts.forEach((text, index) => {
        const textWidth = 100 * text.scale; // Approximate text width
        const textHeight = 30 * text.scale; // Approximate text height

        if (
          clientX >= text.position.x - textWidth / 2 &&
          clientX <= text.position.x + textWidth / 2 &&
          clientY >= text.position.y - textHeight / 2 &&
          clientY <= text.position.y + textHeight / 2
        ) {
          foundIndex = index;
          isText = true;
        }
      });
    }

    if (foundIndex !== null) {
      setDraggingIndex(foundIndex);
      setIsDragging(true);
      if (isText) {
        setDraggingText(true); // New state to track text dragging
      }
    }
  };

  const handleMouseMove = (e) => {
    // console.log("handleMouseMove :", e);
    if (isDragging && draggingIndex !== null) {
      const { clientX, clientY } = e;
      const movementX = clientX - mousePos.x;
      const movementY = clientY - mousePos.y;

      if (isDraggingText) {
        // Update text position
        setTexts((prevTexts) =>
          prevTexts.map((text, i) =>
            i === draggingIndex
              ? {
                  ...text,
                  position: {
                    x: text.position.x + movementX,
                    y: text.position.y + movementY,
                  },
                }
              : text
          )
        );
      } else {
        // Update image position
        setImages((prevImages) =>
          prevImages.map((img, i) =>
            i === draggingIndex
              ? {
                  ...img,
                  position: {
                    x: img.position.x + movementX,
                    y: img.position.y + movementY,
                  },
                }
              : img
          )
        );
      }

      setMousePos({ x: clientX, y: clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggingIndex(null);
  };

  const handleScaleChange = (newScale) => {
    console.log("handleScaleChange", chosenInd);
    console.log("chosenComp", chosenComp);

    const updatedTextures = texture.map((item) => {
      if (item.part === chosenComp.part) {
        item[isImg ? "images" : "texts"][chosenInd].scale = newScale;
        chosenComp[isImg ? "images" : "texts"][chosenInd].scale = newScale;
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
      if (item.part === partName) {
        item[isImg ? "images" : "texts"][chosenInd].rotation = newRotation;
        chosenComp[isImg ? "images" : "texts"][chosenInd].rotation =
          newRotation;
        return item;
      }
      return item;
    });

    setTexture(updatedTextures);
    setIncre(incre + 1);
  };

  const handleX = (newPos) => {
    const updatedTextures = texture.map((item) => {
      if (item.part === partName) {
        item[isImg ? "images" : "texts"][chosenInd].position.x = newPos;
        chosenComp[isImg ? "images" : "texts"][chosenInd].position.x = newPos;
        return item;
      }
      return item;
    });

    setTexture(updatedTextures);
    setIncre(incre + 1);
  };

  const handleY = (newPos) => {
    const updatedTextures = texture.map((item) => {
      if (item.part === partName) {
        item[isImg ? "images" : "texts"][chosenInd].position.y = newPos;
        chosenComp[isImg ? "images" : "texts"][chosenInd].position.y = newPos;
        return item;
      }
      return item;
    });

    setTexture(updatedTextures);
    setIncre(incre + 1);
  };

  const handleTextScaleChange = (newScale) => {
    const updatedTextures = texture.map((item) => {
      if (item.part === partName) {
        item.texts[chosenInd].scale = newScale;
        chosenComp.texts[chosenInd].scale = newScale;
        return item;
      }
      return item;
    });

    setTexture(updatedTextures);
    setIncre(incre + 1);
  };

  const handleTextRotationChange = (newRot) => {
    const updatedTextures = texture.map((item) => {
      if (item.part === partName) {
        item.texts[chosenInd].rotation = newRot;
        chosenComp.texts[chosenInd].rotation = newRot;
        return item;
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
      if (item.part === partName) {
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

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, mousePos]);

  const onItemMeshClick = (val) => {
    console.log("clicked mesh :", val);

    // const samp = nodes.g_Hoodie_Hoodie_0_3.geometry;
    setGeometry(nodes[val.node].geometry);
    setPartName(val.part);

    const meshItem = texture.find((item) => item.id === val.id);
    setChosenComp(meshItem);
    setChosenInd(0);
    setIsValid(false);
    setPrintFont({ id: "", name: "" });
    setPrintTxt("");
  };

  const onComImgClick = (ind, img, item) => {
    setIsImg(img);
    setChosenInd(ind);

    if (!img) {
      const val = fonts.find((ite) => ite.name === item.font);
      console.log("found font :", val);
      setPrintFont(val);
      setPrintTxt(item.text);
    }
  };

  const onTxtPrintConfirm = () => {
    setIsValid(true);

    if (printTxt && printFont.id) {
      const textSamp = {
        text: printTxt,
        font: printFont.name,
        position: { x: 1250.8, y: 974.5 },
        rotation: 87.7,
        scale: 3.6,
      };

      const updatedTextures = texture.map((item) => {
        if (item.id === chosenComp.id) {
          item.texts.push(textSamp);
          // chosenComp.texts.push(textSamp);
          return item;
        }
        return item;
      });

      setChosenComp(updatedTextures.find((item) => item.id === chosenComp.id));

      setTexture(updatedTextures);
      setIncre(incre + 1);
    }
  };

  const getChosenImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    console.log("Chose file :", file);

    const imgUrl = URL.createObjectURL(file);

    const imgItem = {
      src: imgUrl,
      position: { x: 1250.8, y: 974.5 },
      rotation: 87.7,
      scale: 3.6,
      ref: newImgRef,
    };

    const updatedTextures = texture.map((item) => {
      if (item.id === chosenComp.id) {
        item.images.push(imgItem);
        // chosenComp.images.push(imgItem);
        return item;
      }
      return item;
    });
    setChosenComp(updatedTextures.find((item) => item.id === chosenComp.id));
    setTexture(updatedTextures);
    setIncre(incre + 1);
  };

  return (
    <Container fluid className="navigationScreens">
      <div className="favConts">
        <canvas
          ref={canvasRef}
          id="uvCanvas"
          onMouseDown={handleMouseDown}
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
          {/* <div className="txtureListHolder">
            <div className="txtFlexCont">
              <div className="imgGridListHolder">
                {chosenComp.images.map((item, ind) => (
                  <div className="comImgHolder">
                    <img
                      key={ind}
                      src={item.src}
                      className="imgItem"
                      onClick={onComImgClick.bind(this, ind, true)}
                      style={{
                        border:
                          isImg && chosenInd === ind ? "1px solid grey" : "",
                        borderRadius: "8px",
                      }}
                    />
                  </div>
                ))}
                <div className="comImgHolder">
                  <IconButton onClick={() => uploadImgInpRef.current.click()}>
                    <LuImagePlus color="#1665C0" />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className="txtFlexCont">
              <div className="txtListHolder">
                {chosenComp.texts.map((item, ind) => (
                  <div
                    className="comTxtItem"
                    onClick={onComImgClick.bind(this, ind, false, item)}
                    style={{
                      border:
                        !isImg && chosenInd === ind ? "1px solid grey" : "",
                      borderRadius: "8px",
                      fontFamily: item.font,
                      width: "fit-content",
                    }}
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="editingPallateHolder">
            <div className="printTxtHolder">
              <TextField
                size="small"
                label="Print Text"
                variant="standard"
                fullWidth
                sx={inpStye}
                onChange={(e) => setPrintTxt(e.target.value)}
                value={printTxt}
                error={isValid && !printTxt}
              />

              <Autocomplete
                freeSolo
                options={fonts}
                size="small"
                getOptionLabel={(option) => (option.name ? option.name : "")}
                fullWidth
                renderInput={(param) => (
                  <TextField
                    {...param}
                    size="small"
                    label="Fonts"
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
                renderOption={(props, item, { selected }) => (
                  <MenuItem
                    style={{ fontFamily: item.name }}
                    {...props}
                    id={item.id}
                    value={item.name}
                  >
                    {item.name}
                  </MenuItem>
                )}
              />

              <IconButton
                style={{
                  backgroundColor: "green",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                }}
                onClick={onTxtPrintConfirm}
              >
                <AiOutlineCheck size={12} color={"white"} />
              </IconButton>
            </div>

            <div className="rangesHolder">
              <div className="rangeItem">
                <label className="rangeLabel">Scale</label>
                <Slider
                  size="small"
                  step={0.1}
                  min={0.1}
                  max={10}
                  value={
                    chosenComp[isImg ? "images" : "texts"][chosenInd]?.scale ??
                    0
                  }
                  onChange={(e) =>
                    handleScaleChange(parseFloat(e.target.value))
                  }
                />
              </div>

              <div className="rangeItem">
                <label className="rangeLabel">Rotation</label>
                <Slider
                  size="small"
                  step={0.1}
                  min={1}
                  max={1000}
                  value={
                    chosenComp[isImg ? "images" : "texts"][chosenInd]
                      ?.rotation ?? 0
                  }
                  onChange={(e) =>
                    handleRotationChange(parseFloat(e.target.value))
                  }
                />
              </div>

              <div className="rangeItem">
                <label className="rangeLabel">Vertical</label>
                <Slider
                  size="small"
                  step={0.1}
                  min={1}
                  max={3000}
                  value={
                    chosenComp[isImg ? "images" : "texts"][chosenInd]?.position
                      .x ?? 0
                  }
                  onChange={(e) => handleX(parseFloat(e.target.value))}
                />
              </div>

              <div className="rangeItem">
                <label className="rangeLabel">Horizondal</label>
                <Slider
                  size="small"
                  step={0.1}
                  min={1}
                  max={3000}
                  value={
                    chosenComp[isImg ? "images" : "texts"][chosenInd]?.position
                      .y ?? 0
                  }
                  onChange={(e) => handleY(parseFloat(e.target.value))}
                />
              </div>
            </div>
          </div> */}

          {/* Tabs here */}

          <div className="tabsHolder">
            <Tabs defaultValue={0} className="tabsContainer">
              <TabsList className="tabsList">
                <Tab className="tabBt" label="Image" value={0}>
                  <IoText size={20} />
                </Tab>
                <Tab className="tabBt" label="Text" value={1}>
                  <FaImage size={20} />
                </Tab>
              </TabsList>

              <TabPanel className="tabPanel" value={0}>
                <div className="printTxtHolder">
                  <div className="secTitle">Text</div>
                  <div className="txtInputsHolder">
                    <TextField
                      size="small"
                      label="Print Text"
                      variant="standard"
                      fullWidth
                      sx={inpStye}
                      onChange={(e) => setPrintTxt(e.target.value)}
                      value={printTxt}
                      error={isValid && !printTxt}
                    />
                    <Autocomplete
                      freeSolo
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
                          label="Fonts"
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
                      renderOption={(props, item, { selected }) => (
                        <MenuItem
                          style={{ fontFamily: item.name }}
                          {...props}
                          id={item.id}
                          value={item.name}
                        >
                          {item.name}
                        </MenuItem>
                      )}
                    />

                    <div className="radioGrpHolder">
                      <div className="subTitle">Font Style</div>
                      <RadioGroup
                        aria-labelledby="storage-label"
                        defaultValue="1"
                        size="sm"
                        sx={{
                          gap: 1.2,
                          flexDirection: "row",
                          alignItem: "center",
                          paddingInlineStart: "5px",
                        }}
                      >
                        {["1", "2", "3"].map((value) => (
                          <Sheet
                            key={value}
                            size="sm"
                            sx={{
                              p: "3px 10px",
                              borderRadius: "sm",
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
                              <TitleIcon sx={{ fontSize: "16px" }} />
                            ) : value === "2" ? (
                              <FormatBoldIcon sx={{ fontSize: "16px" }} />
                            ) : (
                              <FormatItalicIcon sx={{ fontSize: "16px" }} />
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
                        sx={{
                          gap: 1,
                          display: "flex",
                          flexWrap: "wrap",
                          flexDirection: "row",
                          overflow: "auto",
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
                          padding: "2px 10px",
                          fontFamily: "sans-serif",
                        }}
                        size="small"
                        onClick={onTxtPrintConfirm}
                      >
                        Print
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="txtRangesHolder">
                  <div className="printedTextList">
                    {chosenComp.texts.map((item, ind) => (
                      <Chip key={ind} label={item.text} sx={{ m: 0.1 }} />
                    ))}
                  </div>

                  <div className="rangesList">
                    <div className="rangeItem">
                      <label className="rangeLabel">Scale</label>
                      <Slider
                        size="small"
                        step={0.1}
                        min={0.1}
                        max={10}
                        value={
                          chosenComp[isImg ? "images" : "texts"][chosenInd]
                            ?.scale ?? 0
                        }
                        onChange={(e) =>
                          handleScaleChange(parseFloat(e.target.value))
                        }
                      />
                    </div>

                    <div className="rangeItem">
                      <label className="rangeLabel">Rotation</label>
                      <Slider
                        size="small"
                        step={0.1}
                        min={1}
                        max={1000}
                        value={
                          chosenComp[isImg ? "images" : "texts"][chosenInd]
                            ?.rotation ?? 0
                        }
                        onChange={(e) =>
                          handleRotationChange(parseFloat(e.target.value))
                        }
                      />
                    </div>

                    <div className="rangeItem">
                      <label className="rangeLabel">Vertical</label>
                      <Slider
                        size="small"
                        step={0.1}
                        min={1}
                        max={3000}
                        value={
                          chosenComp[isImg ? "images" : "texts"][chosenInd]
                            ?.position.x ?? 0
                        }
                        onChange={(e) => handleX(parseFloat(e.target.value))}
                      />
                    </div>

                    <div className="rangeItem">
                      <label className="rangeLabel">Horizondal</label>
                      <Slider
                        size="small"
                        step={0.1}
                        min={1}
                        max={3000}
                        value={
                          chosenComp[isImg ? "images" : "texts"][chosenInd]
                            ?.position.y ?? 0
                        }
                        onChange={(e) => handleY(parseFloat(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel className="tabPanel" value={1}>
                image List
              </TabPanel>
            </Tabs>
            <Styles />
          </div>

          {/* Tabs here */}
        </div>

        <div className="modelObjHolder">
          <div className="objPosHolder">
            <div className="posImgListHolder">
              {sidePosses.map((item) => (
                <div
                  onClick={onItemMeshClick.bind(this, item)}
                  style={{
                    backgroundColor:
                      chosenComp.id === item.id ? "#e4e4e4" : "transparent",
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
            camera={{ fov: 35, position: [0, 1.5, 4] }}
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

export default Favorites;

{
  /* <div className="colorPickerHolder">
              <SketchPicker
                disableAlpha
                color={hexToRgba(color.hex, color.alpha)}
                onChangeComplete={(color) => handleColorChange(color)}
              />
            </div> */
}

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
