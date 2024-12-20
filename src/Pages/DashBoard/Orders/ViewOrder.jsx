import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { LinearFilter, NearestFilter, CanvasTexture } from "three";
import hoodie from "../../../Assets/elems/swater.glb";
import cap from "../../../Assets/elems/cap.glb";
import tote from "../../../Assets/elems/bag.glb";
import mug from "../../../Assets/elems/cup.glb";
import tees from "../../../Assets/elems/tshirt.glb";
import bottle from "../../../Assets/elems/bottle.glb";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { fileUrl } from "../../../Common/Constant";
import axios from "axios";

const ViewOrder = () => {
  const loc = useLocation();
  const order = loc.state.order;

  const prod = order?.productId || 6;

  const models = {
    1: hoodie,
    2: tees,
    3: tote,
    4: cap,
    5: mug,
    6: bottle,
  };

  const { nodes, materials } = useGLTF(models[prod]);

  const meshes = {
    1: [
      {
        id: 1,
        part: "Front",
        geo: nodes?.g_Hoodie_Hoodie_0_3?.geometry,
        mat: materials.front,
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
        id: 2,
        part: "Back",
        geo: nodes?.g_Hoodie_Hoodie_0_5?.geometry,
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
        id: 6,
        part: "Pocket",
        geo: nodes?.g_Hoodie_Hoodie_0_2?.geometry,
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
        id: 3,
        part: "Left",
        geo: nodes?.g_Hoodie_Hoodie_0_6?.geometry,
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
        id: 4,
        part: "Right",
        geo: nodes?.g_Hoodie_Hoodie_0_8?.geometry,
        mat: materials.right,
        txture: null,
        ref: useRef(null),
        color: "#FFFEFE",
        defPos: { x: 1527, y: 333.5 },
        defRot: 95.3,
        defScal: 1,
        images: [],
        texts: [],
      },
      {
        id: 5,
        part: "Cap",
        geo: nodes?.g_Hoodie_Hoodie_0_4?.geometry,
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

      {
        id: 7,
        part: "Left Cuff",
        geo: nodes?.g_Hoodie_Hoodie_0_7?.geometry,
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
        geo: nodes?.g_Hoodie_Hoodie_0_9?.geometry,
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
      // {
      //   id: 9,
      //   part: "Hoodie",
      //   geo: nodes?.g_Hoodie_Hoodie_0_1?.geometry,
      //   mat: materials.Hoodie,
      //   txture: null,
      //   color: "#FFFEFE",
      //   ref: useRef(null),
      //   defPos: { x: 652.4, y: 300 },
      //   defRot: 87.7,
      //   defScal: 3.6,
      //   images: [],
      //   texts: [],
      // },
    ],
    2: [
      {
        id: 1,
        part: "Front",
        geo: nodes?.Object_0_1?.geometry,
        mat: materials.front,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 397.4, y: 960.0 },
        defRot: 354.43,
        defScal: 3.6,
        images: [],
        texts: [],
      },
      {
        id: 2,
        part: "Back",
        geo: nodes?.Object_0_2?.geometry,
        mat: materials.back,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 1327.4, y: 510.0 },
        defRot: 1,
        defScal: 2.84,
        images: [],
        texts: [],
      },
      {
        id: 3,
        part: "Left",
        geo: nodes?.Object_0_3?.geometry,
        mat: materials.left,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 1507.4, y: 1785.0 },
        defRot: 1,
        defScal: 2.25,
        images: [],
        texts: [],
      },
      {
        id: 4,
        part: "Right",
        geo: nodes?.Object_0_4?.geometry,
        mat: materials.right,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 352.4, y: 1785.0 },
        defRot: 1,
        defScal: 2.34,
        images: [],
        texts: [],
      },
      {
        id: 5,
        part: "remain",
        geo: nodes?.Object_0_5?.geometry,
        mat: materials.remain,
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
        part: "whole",
        geo: nodes?.Object_6?.geometry,
        mat: materials.material,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 652.4, y: 300 },
        defRot: 87.7,
        defScal: 3.6,
        images: [],
        texts: [],
      },
    ],
    3: [
      {
        id: 1,
        part: "Front",
        geo: nodes?.Object_12_2?.geometry,
        mat: materials.frontPrint,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 730.7, y: 1158.5 },
        defRot: 1,
        defScal: 10,
        images: [],
        texts: [],
      },

      {
        id: 2,
        part: "Back",
        geo: nodes?.Object_11_1?.geometry,
        mat: materials.backPrint,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 805.7, y: 1053.5 },
        defRot: 1,
        defScal: 2.64,
        images: [],
        texts: [],
      },
      {
        id: 3,
        part: "FrontSide",
        geo: nodes?.Object_12_1?.geometry,
        mat: materials.front,
        txture: null,
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
        id: 4,
        part: "BackSide",
        geo: nodes?.Object_11?.geometry,
        mat: materials.back,
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
        id: 5,
        part: "Holder",
        geo: nodes?.Object_20?.geometry,
        mat: materials.holder,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 652.4, y: 300 },
        defRot: 87.7,
        defScal: 3.6,
        images: [],
        texts: [],
      },
    ],
    4: [
      {
        id: 1,
        part: "printable",
        geo: nodes?.gorra002__0_2?.geometry,
        mat: materials.printable,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 727.4, y: 1095.0 },
        defRot: 1,
        defScal: 7,
        images: [],
        texts: [],
      },
      {
        id: 2,
        part: "cap",
        geo: nodes?.gorra002__0_1?.geometry,
        mat: materials.cap,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 397.4, y: 960.0 },
        defRot: 354.43,
        defScal: 3.6,
        images: [],
        texts: [],
      },
    ],
    5: [
      {
        id: 1,
        part: "printable",
        geo: nodes?.cup4_cup_shd_0_2?.geometry,
        mat: materials.printable,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 652.4, y: 1770.0 },
        defRot: 1,
        defScal: 6.08,
        images: [],
        texts: [],
      },
      {
        id: 2,
        part: "cup",
        geo: nodes?.cup4_cup_shd_0_1?.geometry,
        mat: materials.cup,
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
        id: 3,
        part: "remain",
        geo: nodes?.cup4_white_shd_0?.geometry,
        mat: materials.remain,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 652.4, y: 300 },
        defRot: 87.7,
        defScal: 3.6,
        images: [],
        texts: [],
      },
    ],
    6: [
      {
        id: 1,
        part: "printable",
        geo: nodes?.Bottle_Water_Bottle_Yellow_Part_0_2?.geometry,
        mat: materials.printable,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 592.4, y: 1275.0 },
        defRot: 1,
        defScal: 2,
        images: [],
        texts: [],
      },
      {
        id: 2,
        part: "cap",
        geo: nodes?.Lid_Water_Bottle_Lid_0?.geometry,
        mat: materials.Water_Bottle_Lid,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 727.4, y: 1095.0 },
        defRot: 1,
        defScal: 7,
        images: [],
        texts: [],
      },
      {
        id: 3,
        part: "body",
        geo: nodes?.Bottle_Water_Bottle_Yellow_Part_0_1?.geometry,
        mat: materials.body,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 397.4, y: 960.0 },
        defRot: 354.43,
        defScal: 3.6,
        images: [],
        texts: [],
      },
      {
        id: 4,
        part: "remain",
        geo: nodes?.Bottle_Water_Bottle_Metal_Part_0?.geometry,
        mat: materials.Water_Bottle_Metal_Part,
        txture: null,
        color: "#FFFEFE",
        ref: useRef(null),
        defPos: { x: 397.4, y: 960.0 },
        defRot: 354.43,
        defScal: 3.6,
        images: [],
        texts: [],
      },
    ],
  };

  const aptPos = {
    1: { y: 0.2, z: 5 },
    2: { y: -30, z: 150 },
    3: { y: -1.5, z: 10 },
    4: { y: 0, z: 7 },
    5: { y: -1, z: 35 },
    6: { y: -9, z: 45 },
  };
  const canvasRef = useRef(null);
  const [texture, setTexture] = useState(meshes[prod]);

  useEffect(() => {
    console.log("ViewOrder props value :", order);

    applyTxture();
  }, []);

  useEffect(() => {
    texture.forEach((item) => {
      if (item.ref.current && item.txture) {
        item.ref.current.material.map = item.txture;
        item.ref.current.material.needsUpdate = true;
      }
    });
  }, [texture]);

  const base64ToFile = (base64) => {
    const regex = /^data:(.*?);base64,/;
    const match = base64.match(regex);
    if (!match) {
      console.error("Invalid Base64 format", base64);
      return null;
    }
    const mimeString = match[1];
    const byteString = atob(base64.replace(regex, ""));
    const byteNumbers = new Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
      byteNumbers[i] = byteString.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new File([byteArray], "image", { type: mimeString });
  };

  const applyTxture = async () => {
    const assets = order?.assets || [];

    // for (const ast of assets) {
    //   const ishas = texture.find((obj) => obj.id === ast.id);
    //   if (Object.keys(ishas || {}).length) {
    //     const item = { ...ishas };
    //     item.images = ast.images;
    //     item.texts = ast.texts;
    //     const uv = item.geo.attributes.uv.array;
    //     renderCanvas(uv, item);
    //   }
    // }

    // for (const ast of assets) {
    //   const ishas = texture.find((obj) => obj.id === ast.id);
    //   if (Object.keys(ishas || {}).length) {
    //     const item = { ...ishas };
    //     item.images = ast.images;
    //     item.texts = ast.texts;
    //     const uv = item.geo.attributes.uv.array;
    //     renderCanvas(uv, item);
    //   }
    // }

    const upTextures = texture.map((item) => {
      const ishas = assets.find((ast) => item.id === ast.id);
      if (Object.keys(ishas || {}).length) {
        item.images = ishas.images;
        item.texts = ishas.texts;
        const uv = item.geo.attributes.uv.array;
        const txt = renderCanvas(uv, item);
        item.txture = txt;
        return item;
      } else return item;
    });

    setTexture(upTextures);
  };

  const renderCanvas = (uv, obj) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const canvasWidth = 2048;
    const canvasHeight = 2048;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.fillStyle = "#FFFEFE";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw UV wireframe
    ctx.strokeStyle = "red";
    ctx.lineWidth = 1;
    ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
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

    const getImage = (imgUrl) => {
      return new Promise((res, rej) => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = imgUrl;
        img.onload = () => res(img);
        img.onerror = () => rej(img);
      });
    };

    texture.forEach((val) => {
      const item = val.id === obj.id ? obj : val;

      // console.log("item in render :", item);

      item.images?.forEach(async (image, index) => {
        if (image.src) {
          const baseForm = `data:${image.src};base64,${image.file}`;
          const file = base64ToFile(baseForm, image.src);
          const imgUrl = URL.createObjectURL(file);

          // const img = new Image();
          // img.src = imgUrl;

          const imgFile = await getImage(imgUrl);
          const ref = React.createRef();
          ref.current = imgFile;
          image.ref = ref;
          console.log("fetched image :", image);

          const img = image.ref.current;
          ctx.save();
          ctx.translate(image.position.x, image.position.y);
          ctx.rotate((image.rotation * Math.PI) / 180);
          ctx.scale(image.scale, image.scale);
          ctx.drawImage(img, -img.width / 2, -img.height / 2);
          ctx.restore();

          // ctx.save();
          // ctx.translate(image.position.x, image.position.y);
          // ctx.rotate((image.rotation * Math.PI) / 180);
          // ctx.scale(image.scale, image.scale);
          // ctx.drawImage(img, -img.width / 2, -img.height / 2);
          // ctx.restore();
        }
      });

      // Render texts
      item.texts?.forEach((textItem) => {
        if (textItem.text) {
          ctx.save();
          ctx.translate(textItem.position.x, textItem.position.y);
          ctx.rotate((textItem.rotation * Math.PI) / 180);
          ctx.scale(textItem.scale, textItem.scale);
          ctx.font = textItem.fontStyle + " 30px " + textItem.font;
          ctx.fillStyle = textItem.color;
          ctx.fillText(textItem.text, 0, 0);
          // ctx.strokeText(textItem.text, 0, 0); border
          ctx.restore();
        }
      });
    });

    const newTexture = new CanvasTexture(canvas);
    newTexture.anisotropy = 16;
    newTexture.minFilter = LinearFilter;
    newTexture.magFilter = NearestFilter;

    return newTexture;

    // const madetxture = texture.map((item) => {
    //   if (obj.id === item.id) {
    //     return { ...item, txture: newTexture };
    //   } else {
    //     return item;
    //   }
    // });
    // setTexture(madetxture);
  };

  return (
    <Container fluid className="tabScreens">
      <div className="viewOrder">
        <div>
          <Canvas
            gl={{
              outputEncoding: LinearFilter,
              toneMapping: NearestFilter,
              antialias: true,
              toneMappingExposure: 1.5,
            }}
            camera={{
              fov: 35,
              position: new THREE.Vector3(0, 0, aptPos[prod].z),
              //   ref: cameraRef,
            }}
            shadows
            className="threeDHolder"
            style={{ maxWidth: "100%" }}
          >
            {/* <axesHelper args={[5]} />
            <gridHelper args={[10, 10]} /> */}

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

            <group
              position={[0, aptPos[prod].y, 0]}
              rotation={[0, 0, 0]}
              //   ref={groupMeshRef}
            >
              {texture?.map((item) => (
                <mesh
                  receiveShadow
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  key={item.id}
                  geometry={item.geo}
                  ref={item.ref}
                >
                  <meshPhysicalMaterial
                    toneMapped={false}
                    map={item.txture}
                    roughness={0.5} // Match Blender
                    normalMap={item.mat.normalMap}
                  />
                </mesh>
              ))}
            </group>
            {/* <ControlUpdater
              controlRef={controlRef}
              groupMeshRef={groupMeshRef}
            /> */}
            {/* <OrbitControls ref={controlRef} minDistance={3.2} maxDistance={5} /> */}
            <OrbitControls />
            {/* <ContactShadows position={[0, -1.2, 0]} opacity={0.3} blur={3} /> */}
          </Canvas>
        </div>
        <div></div>
        <div></div>
      </div>

      <canvas
        ref={canvasRef}
        id="uvCanvas"
        style={{
          width: "100%",
          display: "none",
        }}
      />
    </Container>
  );
};

export default ViewOrder;
