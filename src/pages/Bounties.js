import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { NavLink } from "react-router-dom";

<Splide
  options={{
    // gap: "0rem",
    speed: "3000",
    autoplay: true,
    type: "loop",
    pauseOnHover: true,
    wheel: true,
    // interval: 10,
    drag: true,
  }}
>
  <SplideSlide>
    <div style={{ color: "white" }}>Hello 1</div>
  </SplideSlide>

  <SplideSlide>
    <div style={{ color: "white" }}>Hello 2</div>
  </SplideSlide>

  <SplideSlide>
    <div style={{ color: "white" }}>Hello 3</div>
  </SplideSlide>
</Splide>;

const Bounties = () => {
  return (
    <div>
      <Splide
        options={{
          speed: "3000",
          autoplay: true,
          type: "loop",
          pauseOnHover: true,
          wheel: true,
          drag: true,
        }}
      >
        <SplideSlide>
          <div></div>
        </SplideSlide>

        <SplideSlide>
          <div></div>
        </SplideSlide>

        <SplideSlide>
          <div></div>
        </SplideSlide>
      </Splide>
      ;
    </div>
  );
};

export default Bounties;
