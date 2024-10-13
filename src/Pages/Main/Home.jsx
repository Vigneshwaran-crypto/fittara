import React from "react";
import "./styles.css";
import { Carousel, Container } from "react-bootstrap";
import TopBar from "../Components/TopBar";
import { SlCallIn } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";

import hood from "../../Assets/carousel/hoodie.png";
import greenWoman from "../../Assets/carousel/greenAlone.png";
import blueWoman from "../../Assets/carousel/womanBlue.png";
import customs from "../../Assets/carousel/customs.png";
import fashBG from "../../Assets/carousel/fashBG.jpg";

import greenBG from "../../Assets/carousel/greenBG.png";
import girlBG from "../../Assets/carousel/girlBG.png";
import coolBG from "../../Assets/carousel/coolBG.png";
import modelBG from "../../Assets/carousel/womanBG.png";

import apron from "../../Assets/products/apron.png";
import bag from "../../Assets/products/bag.png";
import chefCoat from "../../Assets/products/chefCoat.png";
import cup from "../../Assets/products/cup.png";
import hoodie from "../../Assets/products/hoodie.png";
import tshirt from "../../Assets/products/tshirt.png";

import tshirt2 from "../../Assets/products/tshirt2.png";
import tshirt3 from "../../Assets/products/tshirt3.png";
import tshirt4 from "../../Assets/products/tshirt4.png";
import tshirt5 from "../../Assets/products/tshirt5.png";

import hoodie2 from "../../Assets/products/hoodie2.png";

import cup2 from "../../Assets/products/cup2.png";
import cup3 from "../../Assets/products/cup3.png";
import cup4 from "../../Assets/products/cup4.png";

import bag2 from "../../Assets/products/bag2.png";
import bag3 from "../../Assets/products/bag3.png";
import bag4 from "../../Assets/products/bag4.png";
import bag5 from "../../Assets/products/bag5.png";

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

  const cateList = [
    { prod: "Hoodie", img: hoodie },
    { prod: "Tote bag", img: bag },
    { prod: "cup", img: cup },
    { prod: "Tshirt", img: tshirt },
    { prod: "Apron", img: apron },
    { prod: "Coat", img: chefCoat },
  ];

  const prods = [
    { prod: "Hoodie", desc: "New brand hoodie  , unisex", img: hoodie2 },
    { prod: "Tshirt", desc: "Customized classy", img: tshirt2 },
    { prod: "Tshirt", desc: "Customized classy", img: tshirt3 },
    { prod: "Tshirt", desc: "Customized classy", img: tshirt4 },
    { prod: "Tshirt", desc: "Customized classy", img: tshirt5 },
    { prod: "Cup", desc: "Cup by your name", img: cup2 },
    { prod: "Cup", desc: "Cup by your name", img: cup3 },
    { prod: "Cup", desc: "Cup by your name", img: cup4 },
    { prod: "Tote Bag", desc: "The Customized Tote bag", img: bag2 },
    { prod: "Tote Bag", desc: "The Customized Tote bag", img: bag3 },
    { prod: "Tote Bag", desc: "The Customized Tote bag", img: bag4 },
    { prod: "Tote Bag", desc: "The Customized Tote bag", img: bag5 },
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
            // indicators={false}
            fade
            // slide
            draggable
            // interval={1000}
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

        <div className="customizeTitle">
          Customize all as you want <span className="in3dTxt">IN 3D</span>
        </div>

        <div className="categoryList">
          {cateList.map((item) => (
            <div className="categoryItem">
              <img className="categoryImg" src={item.img} />
            </div>
          ))}
        </div>

        <div className="customizeTitle">New Arrivals</div>

        <div className="prodList">
          {prods.map((item) => (
            <div className="prodItem">
              <img className="categoryImg" src={item.img} />
            </div>
          ))}
        </div>

        <div className="footer">
          <div>
            <div className="brandText">SOMOYA</div>
          </div>
          <div>
            <span className="footerTitle">Information</span>

            <a href="#"> About Us</a>
            <a href="#"> More Search</a>
            <a href="#"> Blog</a>
            <a href="#"> Testimonials</a>
            <a href="#"> Events</a>
          </div>
          <div>
            <span className="footerTitle">Help</span>

            <a href="#"> Service</a>
            <a href="#"> Supports</a>
            <a href="#"> Terms & Conditions</a>
            <a href="#"> Privacy Policy</a>
          </div>
          <div>
            <span className="footerTitle">Service</span>

            <a href="#"> Brand List</a>
            <a href="#"> Orders</a>
            <a href="#"> Return & Exchange</a>
            <a href="#"> Fashion List</a>
            <a href="#"> Blog</a>
          </div>
          <div>
            <span className="footerTitle">Contacts</span>

            <div className="contactstItem">
              <SlCallIn size={17} /> 8807207198
            </div>

            <div className="contactstItem">
              <CiMail size={20} /> Vickytata619@gmail.com
            </div>

            <div
              className="contactstItem"
              style={{
                marginTop: "5px",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <CiFacebook size={27} color="#1877F2" />
              <FaWhatsapp size={25} color="#25D366" />
              <CiInstagram size={25} color="#F56040" />
              <AiOutlinePinterest size={25} color="#E60023" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
