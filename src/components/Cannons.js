import React, { useState, useEffect } from "react";

const Cannons = (props) => {
  const [infoData, setinfoData] = useState();
  useEffect(() => {
    setinfoData(props.fullData);
  }, [props]);

  const produceCannonCards = infoData
    ? infoData.map((element) => {
        if (element.type === "Cannon") {
          return (
            <div className="individualCards">
              <h1>{element.name}</h1>
              <section className="image-container">
                <img className="card-images" src={element.url1} alt="" j></img>
                <img className="card-images" src={element.url2} alt=""></img>
              </section>
              <ul className="list">
                <li>{element.cost} Galactic Credits</li>
                <li>Weight: Approximately {element.weight} kg</li>
                <li>
                  Manufacturer:
                  <h5
                    style={{ fontFamily: "MYFirstFont", letterSpacing: "3px" }}
                  >
                    {element.manufacturer}
                  </h5>
                </li>
                {/* <li>Weighs an estimated {element.weight} kg</li>
            <li>Weapon Type: Blaster {element.type}</li>
            <h4>{element.description}</h4> */}
              </ul>
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
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      {produceCannonCards}
    </div>
  );
};

export default Cannons;
