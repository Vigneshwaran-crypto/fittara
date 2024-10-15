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
import { TbCube3dSphere } from "react-icons/tb";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { SlSpeedometer } from "react-icons/sl";

import greenBG from "../../Assets/carousel/greenBG.png";
import girlBG from "../../Assets/carousel/girlBG.png";
import coolBG from "../../Assets/carousel/coolBG.png";
import blueBg from "../../Assets/carousel/darkBlueBg.png";

import apron from "../../Assets/products/apron.png";
import bag from "../../Assets/products/bag.png";
import chefCoat from "../../Assets/products/chefCoat.png";
import cup from "../../Assets/products/cup.png";
import hoodie from "../../Assets/products/hoodie.png";
import tshirt from "../../Assets/products/tshirt.png";

import offer1 from "../../Assets/offers/offer1.png";
import offer2 from "../../Assets/offers/offer2.png";
import offer3 from "../../Assets/offers/offer3.png";
import offer4 from "../../Assets/offers/offer4.png";
import offer6 from "../../Assets/offers/offer6.png";
import offer7 from "../../Assets/offers/offer7.png";
import offer8 from "../../Assets/offers/offer8.png";
import offer9 from "../../Assets/offers/offer9.png";
import offer10 from "../../Assets/offers/offer10.png";
import offer11 from "../../Assets/offers/offer11.png";
import offer12 from "../../Assets/offers/offer12.png";
import offer13 from "../../Assets/offers/offer13.png";
import offer14 from "../../Assets/offers/offer14.png";
import offer15 from "../../Assets/offers/offer15.png";

import ssl from "../../Assets/icons/ssl.png";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { prods } from "../Components/utils";

const Home = () => {
  const slidesList = [
    {
      title: "Be Bold, Be You – The Power to Customize is Yours!",
      bg: blueBg,
      // txtColor: "#3C3D37",
      txtColor: "white",
    },
    {
      title: "Turn Your Imagination into the Ultimate Fashion Statement!",
      bg: coolBG,
      txtColor: "white",
    },
    {
      title: "Fashion Isn’t One-Size-Fits-All – It’s One-of-a-Kind!",
      bg: greenBG,
      txtColor: "white",
    },
    {
      title: "Redefine Fashion with Pieces as Unique as You Are!",
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

  const offersList = [
    // offer5,
    offer8,
    offer4,
    offer13,
    offer12,
    offer3,
    offer2,
    offer14,
    offer1,
    offer6,
    offer9,
    offer7,
    offer15,
    offer10,
    offer11,
  ];

  return (
    <Container fluid className="homeContainer">
      <TopBar onMenuClick={() => {}} onUserClick={() => {}} />

      <div className="homeBodyHolder">
        <div className="carouselHolder">
          <Carousel
            className="carousel"
            controls={false}
            fade
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

        <div className="highlightsHolder">
          <div>
            <span>
              <MdOutlinePublishedWithChanges size={22} />
            </span>
            Highly Customizable
          </div>
          <div>
            <span>
              <TbCube3dSphere size={22} />
            </span>
            3D Customization
          </div>
          <div>
            <span>
              <SlSpeedometer size={20} />
            </span>
            Fast Delivary
          </div>
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
              <img className="prodImg" src={item.img} />
              <div className="namePriceTag">
                {item.prod}

                <span>{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="offersList">
          <div className="offerConst">
            {offersList.map((item) => (
              <img className="offerImg" src={item} />
            ))}
            {offersList.map((item) => (
              <img className="offerImg" src={item} />
            ))}
          </div>
        </div>

        <div className="footer">
          <div>
            <span className="footerTitle">Information</span>

            <a href="#"> About Us</a>
            <a href="#"> Blog</a>
          </div>
          <div>
            <span className="footerTitle">Legal Links</span>

            <a href="#"> Privacy Policy</a>
            <a href="#"> Terms & Conditions</a>
          </div>
          <div>
            <span className="footerTitle">Service</span>

            <a href="#"> FAQ's</a>
            <a href="#"> Shipping & Return Policy</a>
            <a href="#"> Track My Order</a>
          </div>
          <div>
            <span className="shopIcon">
              <div className="brandText">SOMOYA</div>
            </span>

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

        <div className="bottomBar">
          <div className="trushConts">
            <div>
              <span className="footerTitle">Payment Methods</span>

              <div>
                <FaCcMastercard size={43} />
                <FaCcVisa size={40} />
                <FaGooglePay size={50} />
                <GiTakeMyMoney size={38} />
              </div>
            </div>

            <div>
              <span className="footerTitle">Secure Systems</span>

              <img className="sslIcon" src={ssl} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
