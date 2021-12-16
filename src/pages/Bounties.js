import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { NavLink } from "react-router-dom";
import styles from "../components/Bounties.module.css";

const Bounties = (props) => {
  return (
    <div className={styles.bountyCardGroup}>
      <Splide
        className={styles.slider}
        options={{
          width: "50%",
          speed: "14000",
          autoplay: true,
          type: "loop",
          // pauseOnHover: true,
          easing: "linear",
          perPage: 4,
          pagination: false,
          interval: 0,
          arrows: false,
        }}
      >
        {props.bountyData.map((element) => {
          return (
            <SplideSlide
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div className={styles.bountyCard}>
                <img
                  className={styles.bountyImage}
                  src={element.url1}
                  alt=""
                ></img>
                <div className={styles.bountyInfo}>
                  <h2 className={styles.bountyName}>{element.name}</h2>
                  <h3 className={styles.bountyPrice}>
                    {element.bounty} CREDITS
                  </h3>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

export default Bounties;
