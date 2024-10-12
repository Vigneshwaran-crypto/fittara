import React from "react";
import "./styles.css";
import { Carousel, Container } from "react-bootstrap";
import TopBar from "../Components/TopBar";
import hood from "../../Assets/carousel/hoodie.png";
import greenWoman from "../../Assets/carousel/greenAlone.png";
import blueWoman from "../../Assets/carousel/womanBlue.png";
import customs from "../../Assets/carousel/customs.png";
import fashBG from "../../Assets/carousel/fashBG.jpg";

import greenBG from "../../Assets/carousel/greenBG.png";
import hoodBG from "../../Assets/carousel/hoodBG.png";
import girlBG from "../../Assets/carousel/girlBG.png";
import phoneBG from "../../Assets/carousel/phoneBG.png";
import coolBG from "../../Assets/carousel/coolBG.png";
import modelBG from "../../Assets/carousel/womanBG.png";

const Home = () => {
  const slidesList = [
    {
      title: "Be Bold, Be You – The Power to Customize is Yours!",
      //   img: customs,
      bg: modelBG,
      txtColor: "#3C3D37",
    },
    {
      title: "Turn Your Imagination into the Ultimate Fashion Statement!",
      //   img: hood,
      bg: coolBG,
      txtColor: "white",
    },
    {
      title: "Fashion Isn’t One-Size-Fits-All – It’s One-of-a-Kind!",
      //   img: blueWoman,
      bg: greenBG,
      txtColor: "white",
    },
    {
      title: "Redefine Fashion with Pieces as Unique as You Are!",
      //   img: greenWoman,
      bg: girlBG,
      txtColor: "#3C3D37",
    },
  ];

  return (
    <Container fluid className="homeContainer">
      <TopBar onMenuClick={() => {}} onUserClick={() => {}} />

      <div className="homeBodyHolder">
        <div className="carouselHolder">
          <Carousel
            //   activeIndex={0}
            className="carousel"
            controls={false}
            indicators={false}
            fade
            // slide
            draggable
            interval={1000}
          >
            {slidesList.map((item) => (
              <Carousel.Item
                className="carouselItem"
                style={{
                  backgroundImage: `url(${item.bg})`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="carouselTxtHolder">
                  <div
                    className="carouselItemTexts"
                    style={{ color: item.txtColor }}
                  >
                    {item.title}
                  </div>
                </div>
                <div className="carouselImgHolder">
                  {item.img ? (
                    <img className="carouselItemImg" src={item.img} />
                  ) : null}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </Container>
  );
};

export default Home;
