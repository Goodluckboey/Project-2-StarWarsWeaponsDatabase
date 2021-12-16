import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Splide
        options={{
          // gap: "0rem",
          speed: "2000",
          autoplay: true,
          type: "loop",
          pauseOnHover: true,
          wheel: true,
          // interval: 10,
          drag: true,
        }}
      >
        <SplideSlide
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="firstRow">
            <img
              id="banner-img"
              src="https://www.gannett-cdn.com/-mm-/67a969c11789a820ee670841e5c9fc1af5e6e65b/c=0-290-3993-2546/local/-/media/2018/05/14/USATODAY/USATODAY/636619047136570397-HS-250517-R.jpg"
              alt=""
            ></img>
            <div id="BM-Holder">
              <h1 id="blackMarketTitle">Star Wars</h1>
              <h2
                style={{
                  fontFamily: "A68MarketFont",
                  color: "rgb(94, 0, 20)",
                  fontSize: "50px",
                }}
              >
                THE
              </h2>
              <h2 id="A68-Title">A68 MARKET</h2>
              <p
                style={{
                  fontFamily: "A68MarketFont",
                  // color: "rgb(253, 200, 132)",
                  color: "white",
                  letterSpacing: "2px",
                  lineHeight: "25px",
                  fontSize: "20px",
                  position: "relative",
                  top: "-100px",
                }}
              >
                Our Droids work 32 hours daily
                <br />
                For Hunters and Empires Exclusively
              </p>
              <div className="buttonGrp">
                <NavLink to="/fullcollection">
                  <button
                    style={{
                      position: "relative",
                      top: "-85px",
                      padding: "7px",
                      // fontFamily: "A68MarketFont",
                      fontWeight: "strong",
                      left: "300px",
                      margin: "10px",
                      backgroundColor: "rgb(181, 118, 31)",
                      color: "white",
                      borderRadius: "5%",
                    }}
                  >
                    Browse Collection
                  </button>
                </NavLink>
                <NavLink to="/yourcart">
                  <button
                    style={{
                      position: "relative",
                      top: "-85px",
                      padding: "7px",
                      // fontFamily: "A68MarketFont",
                      fontWeight: "bold",
                      left: "300px",
                      margin: "10px",
                      backgroundColor: "transparent",
                      color: "white",
                      borderRadius: "5%",
                    }}
                  >
                    Your Cart
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="firstRow">
            <img
              id="banner-img"
              style={{ position: "relative", left: "960px" }}
              src="https://www.hollywoodreporter.com/wp-content/uploads/2019/11/huc-ff-000164_af015912-h_2019.jpg"
              alt=""
            ></img>
            <div
              id="SecondHolder"
              style={{ position: "relative", left: "-945px" }}
            ></div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="firstRow">
            <div style={{ height: "387px", width: "100%" }}>
              <img
                style={{ objectfit: "none" }}
                id="banner-img-3"
                src="https://i.imgur.com/MMpjTjK.jpeg"
                alt=""
              ></img>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default HomePage;
