import React, { useState, useEffect } from "react";

const Pistols = (props) => {
  const [pistolData, setPistolData] = useState();
  useEffect(() => {
    setPistolData(props.fullData);
  }, [props]);

  const producePistolCards = pistolData
    ? pistolData.map((element) => {
        if (element.type === "Pistol") {
          return (
            <div className="individualCards">
              {/* <div className="individualCards"> */}
              <h1>{element.name}</h1>

              <section className="image-container">
                <img className="card-images" src={element.url1} alt=""></img>
                <img className="card-images" src={element.url2} alt=""></img>
              </section>
              <ul className="list">
                <li>{element.cost} Galactic Credits</li>
                <li>Weight: Approximately {element.weight} kg</li>
                <li style={{ fontWeight: "bold" }}>{element.manufacturer}</li>
                <br />
                <li>{element.short}</li>
              </ul>
              <br />
              <div className="button-div">
                <button
                  className="purchase-button"
                  onClick={() => props.addToCart(element)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        }
      })
    : "Loading";

  return (
    <div
      className="weapon-Card"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      {producePistolCards}
    </div>
  );
};

export default Pistols;
