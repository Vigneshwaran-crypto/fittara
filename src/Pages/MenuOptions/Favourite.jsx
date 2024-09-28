import React, { useEffect, useRef, useState } from "react";
import Mug from "../../Component/Mug";
import { Canvas } from "@react-three/fiber";
import modelObj from "../../Assets/3dFiles/swater.glb";
import {
  Bounds,
  ContactShadows,
  Decal,
  Float,
  OrbitControls,
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

import { CanvasTexture, LinearFilter, NearestFilter } from "three";
import { SketchPicker } from "react-color";
import "./MenuOptionsStyles.css";
import * as THREE from "three";
import { Button, Container } from "react-bootstrap";
import {
  Autocomplete,
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
  fonts,
  hexToRgba,
  inpStye,
  rgbaToHex,
  sampleProducts,
  selStyle,
} from "../Components/utils";
import { AiOutlineCheck } from "react-icons/ai";

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
        src: img1,
        position: { x: 20, y: 100 },
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
        text: "Front",
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
      images: [
        {
          src: img1,
          position: { x: 20, y: 100 },
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
          text: "Front",
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
      images: [
        {
          src: img2,
          position: { x: 30, y: 30 },
          rotation: 0,
          scale: 1,
          ref: useRef(),
        },
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
      images: [
        {
          src: img3,
          position: { x: 35, y: 35 },
          rotation: 0,
          scale: 1,
          ref: useRef(),
        },
      ],
      texts: [
        {
          text: "Back",
          font: "Arial",
          position: { x: 300, y: 300 },
          rotation: 0,
          scale: 1,
        },
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

  const onItemMeshClick = (val, ind) => {
    console.log("clicked mesh :", val);

    const samp = nodes.g_Hoodie_Hoodie_0_3.geometry;
    setGeometry(nodes[val.node].geometry);
    setPartName(val.part);

    const meshItem = texture.find((item) => item.id === val.id);
    setChosenComp(meshItem);
    setChosenInd(0);
    setIsValid(false);
    setPrintFont({ id: "", name: "" });
    setPrintTxt("");
    // setColor(meshItem.color ? meshItem.color : "#FFFEFE");
  };

  const onComImgClick = (ind, img) => {
    setIsImg(img);
    setChosenInd(ind);
  };

  const onTxtPrintConfirm = () => {
    setIsValid(true);

    if (printTxt && printFont.id) {
      const textSamp = {
        text: printTxt,
        font: printFont.name,
        position: { x: 0, y: 0 },
        rotation: 0,
        scale: 1,
      };

      const updatedTextures = texture.map((item) => {
        if (item.id === chosenComp.id) {
          item.texts.push(textSamp);
          chosenComp.texts.push(textSamp);
          return item;
        }
        return item;
      });

      setTexture(updatedTextures);
      setIncre(incre + 1);
    }
  };

  return (
    <Container fluid className="navigationScreens">
      <div className="favConts">
        <div className="modelObjHolder">
          <Canvas gl={{ outputEncoding: LinearFilter }} flat={true}>
            <ambientLight intensity={2.5} />
            <pointLight position={[10, 10, 10]} />
            {texture?.map((item) => (
              <mesh key={item.id} geometry={item.geo} ref={item.ref}>
                <meshPhysicalMaterial
                  toneMapped={false}
                  attach="material"
                  onUpdate={(self) => (self.needsUpdate = true)}
                  map={item.txture}
                  color={0xffffff}
                />
              </mesh>
            ))}
            <OrbitControls />
            <ContactShadows position-y={-1.2} opacity={0.7} blur={4} />
          </Canvas>
        </div>

        <div className="editorHolder">
          <div className="comTabListHolder">
            {hoodComs.map((item, ind) => (
              <div className="hoodComItem">
                <Canvas
                  style={{
                    border: partName === item.part ? "1px solid grey" : "",
                    borderRadius: "8px",
                  }}
                  className="meshItem"
                  onClick={onItemMeshClick.bind(this, item, ind)}
                >
                  <Bounds
                    fit
                    clip
                    observe
                    margin={partName === item.part ? 0.8 : 1}
                  >
                    {partName === item.part ? (
                      <Float>{item.mesh}</Float>
                    ) : (
                      <>{item.mesh}</>
                    )}
                  </Bounds>

                  {partName === item.part ? (
                    <ContactShadows
                      position={item.position}
                      opacity={item.opacity}
                      blur={item.blur}
                    />
                  ) : null}

                  <ambientLight
                    color={partName === item.part ? "pink" : "grey"}
                    intensity={2.5}
                  />
                </Canvas>
              </div>
            ))}
          </div>

          <canvas
            ref={canvasRef}
            id="uvCanvas"
            onMouseDown={handleMouseDown}
            style={{
              border: "1px solid red",
              width: "100%",
              // height: "400px",
              cursor: "grab",
              display: "none",
            }}
          />

          <div className="hoodComListHolder">
            <div className="comImgListHolder">
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
            </div>

            <div className="comTxtListHolder">
              {chosenComp.texts.map((item, ind) => (
                <div
                  className="comTxtItem"
                  onClick={onComImgClick.bind(this, ind, false)}
                  style={{
                    border: !isImg && chosenInd === ind ? "1px solid grey" : "",
                    borderRadius: "8px",
                  }}
                >
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <hr style={{ padding: "2px 0px", margin: 0 }} />

          <div className="editingPallateHolder">
            <div className="imgtxtUploadHolder">
              {/* <IconButton>
                <LuImagePlus color="#1665C0" />
              </IconButton> */}

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
                // onInputChange={(e, val) => {
                //   console.log("onInputChange : ", val);
                //   setProduct({
                //     ...product,
                //     typedName: val,
                //   });
                // }}
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
                    chosenComp[isImg ? "images" : "texts"][chosenInd].scale
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
                    chosenComp[isImg ? "images" : "texts"][chosenInd].rotation
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
                  max={1000}
                  value={
                    chosenComp[isImg ? "images" : "texts"][chosenInd].position.x
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
                  max={1000}
                  value={
                    chosenComp[isImg ? "images" : "texts"][chosenInd].position.y
                  }
                  onChange={(e) => handleY(parseFloat(e.target.value))}
                />
              </div>
            </div>

            {/* <div style={{ marginTop: "10px" }}>
              <label>
                Text Scale:
                <input
                  type="range"
                  min="0.1"
                  max="200"
                  step="0.1"
                  value={chosenComp.texts[chosenInd].scale}
                  onChange={(e) =>
                    handleTextScaleChange(parseFloat(e.target.value))
                  }
                />
              </label>
              <br />
              <label>
                Text Rotation:
                <input
                  type="range"
                  min="0.1"
                  max="360"
                  step="0.1"
                  value={chosenComp.texts[chosenInd].rotation}
                  onChange={(e) =>
                    handleTextRotationChange(parseFloat(e.target.value))
                  }
                />
              </label>
            </div> */}

            <div className="colorPickerHolder">
              <SketchPicker
                // color={color}
                // color={color ? hexToRgb(color) : color}
                color={hexToRgba(color.hex, color.alpha)}
                onChangeComplete={(color) => handleColorChange(color)}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Favorites;
