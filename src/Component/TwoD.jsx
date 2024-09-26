import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import {
  CanvasTexture,
  LinearFilter,
  NearestFilter,
  MeshStandardMaterial,
  Mesh,
  MeshBasicMaterial,
} from "three";
import { SketchPicker } from "react-color";
import userImg from "../Assets/auth/userProfile.png";
import ecomImg from "../Assets/auth/ecomVector.jpg";
import objModel from "../Assets/3dFiles/swater.glb";

function UVMeshComponent() {
  const mesh = useRef();
  const canvasRef = useRef(null);
  const { nodes } = useGLTF(objModel);
  const geometry = nodes.g_Hoodie_Hoodie_0_3.geometry;
  const uv = geometry.attributes.uv.array;

  const [imageLoaded, setImageLoaded] = useState(false);
  const [texture, setTexture] = useState(null);
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isDraggingText, setDraggingText] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  const [color, setColor] = useState("#ffffff"); // State to hold the selected color
  const imgElements = useRef([]);

  useEffect(() => {
    images.forEach((image, index) => {
      const imgElement = new Image();
      imgElement.src = image.src;
      imgElement.crossOrigin = "anonymous";
      imgElement.onload = () => {
        if (index === images.length - 1) {
          setImageLoaded(true);
        }
      };
      imgElements.current[index] = imgElement;
    });
  }, [images]);

  const renderCanvas = () => {
    if (!imageLoaded) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const canvasWidth = 2048;
    const canvasHeight = 2048;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw UV wireframe
    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
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
    ctx.stroke();

    // Render images
    images.forEach((image, index) => {
      const img = imgElements.current[index];
      ctx.save();
      ctx.translate(image.position.x, image.position.y);
      ctx.rotate((image.rotation * Math.PI) / 180);
      ctx.scale(image.scale, image.scale);
      ctx.drawImage(img, -img.width / 2, -img.height / 2);
      ctx.restore();
    });

    // Render texts
    texts.forEach((textItem) => {
      ctx.save();
      ctx.translate(textItem.position.x, textItem.position.y);
      ctx.rotate((textItem.rotation * Math.PI) / 180);
      ctx.scale(textItem.scale, textItem.scale);
      ctx.font = "30px Arial"; // Set your desired font
      ctx.fillStyle = "#000"; // Text color
      ctx.fillText(textItem.text, 0, 0);
      ctx.restore();
    });

    const newTexture = new CanvasTexture(canvas);
    newTexture.anisotropy = 16;
    newTexture.minFilter = LinearFilter;
    newTexture.magFilter = NearestFilter;
    setTexture(newTexture);
  };

  useEffect(() => {
    renderCanvas();
  }, [images, imageLoaded, color, texts]);

  useEffect(() => {
    if (mesh.current && texture) {
      mesh.current.material.map = texture; // Ensure the texture is updated
      mesh.current.material.needsUpdate = true;
    }
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

  const handleScaleChange = (index, newScale) => {
    setImages((prevImages) =>
      prevImages.map((img, i) =>
        i === index
          ? {
              ...img,
              scale: newScale,
            }
          : img
      )
    );
  };

  const handleRotationChange = (index, newRotation) => {
    setImages((prevImages) =>
      prevImages.map((img, i) =>
        i === index
          ? {
              ...img,
              rotation: newRotation,
            }
          : img
      )
    );
  };

  const handleX = (index, newRotation) => {
    setImages((prevImages) =>
      prevImages.map((img, i) =>
        i === index
          ? {
              ...img,
              position: { ...img.position, x: newRotation },
            }
          : img
      )
    );
  };

  const handleTextScaleChange = (index, newScale) => {
    setTexts((preTexts) =>
      preTexts.map((txt, i) =>
        i === index
          ? {
              ...txt,
              scale: newScale,
            }
          : txt
      )
    );
  };

  const handleTextRotationChange = (index, newScale) => {
    setTexts((preTexts) =>
      preTexts.map((txt, i) =>
        i === index
          ? {
              ...txt,
              rotation: newScale,
            }
          : txt
      )
    );
  };

  const handleColorChange = (color) => {
    setColor(color.hex); // Update the color state
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, mousePos]);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <div style={{ display: "flex", height: "100%" }}>
        <Canvas style={{ width: "50%", height: "100%" }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <mesh geometry={geometry}>
            {/* Background Mesh */}
            <meshBasicMaterial
              color={color} // Background color
            />
          </mesh>
          <mesh ref={mesh} geometry={geometry}>
            <meshStandardMaterial
              map={texture} // Set the texture map
              color={0xffffff} // Ensure the mesh material color is white
            />
          </mesh>
          <OrbitControls />
        </Canvas>

        <div style={{ width: "50%", padding: "10px" }}>
          <h3>UV Map of 3D Model:</h3>
          <canvas
            ref={canvasRef}
            id="uvCanvas"
            onMouseDown={handleMouseDown}
            style={{
              border: "1px solid red",
              width: "100%",
              height: "400px",
              cursor: "grab",
            }}
          ></canvas>

          {images.map((img, index) => (
            <div key={index} style={{ marginTop: "10px" }}>
              <label>
                Image {index + 1} Scale:{" "}
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={img.scale}
                  onChange={(e) =>
                    handleScaleChange(index, parseFloat(e.target.value))
                  }
                />
              </label>
              <br />

              <label>
                Image {index + 1} Rotation:{" "}
                <input
                  type="number"
                  value={img.rotation}
                  onChange={(e) =>
                    handleRotationChange(index, parseFloat(e.target.value))
                  }
                />
              </label>

              <label>
                Image {index + 1} X:{" "}
                <input
                  type="range"
                  min="1"
                  max="1000"
                  step={"0.1"}
                  value={img.position.x}
                  onChange={(e) => handleX(index, parseFloat(e.target.value))}
                />
              </label>
            </div>
          ))}

          {texts.map((text, index) => (
            <div key={index} style={{ marginTop: "10px" }}>
              <label>
                Text {index + 1} Scale:{" "}
                <input
                  type="range"
                  min="0.1"
                  max="2"
                  step="0.1"
                  value={text.scale}
                  onChange={(e) =>
                    handleTextScaleChange(index, parseFloat(e.target.value))
                  }
                />
              </label>
              <br />
              <label>
                Text {index + 1} Rotation:{" "}
                <input
                  type="number"
                  value={text.rotation}
                  onChange={(e) =>
                    handleTextRotationChange(index, parseFloat(e.target.value))
                  }
                />
              </label>
            </div>
          ))}

          <div>
            <SketchPicker
              color={color}
              onChangeComplete={(color) => handleColorChange(color)}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default UVMeshComponent;
