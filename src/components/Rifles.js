import React, { useState, useEffect } from "react";

const Rifles = (props) => {
  const [infoData, setinfoData] = useState();
  useEffect(() => {
    setinfoData(props.fullData);
  }, [props]);

  return (
    <div className="weapon-Card">
      {infoData
        ? infoData.map((element) => {
            if (element.type === "Rifle") {
              return (
                <div
                  className="individualCards"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                >
                  <h1>{element.name}</h1>
                  <ul className="list">
                    <li>{element.cost} Galactic Credits</li>
                    <li>Weighs an estimated {element.weight} kg</li>
                    <li>Weapon Type: Blaster {element.type}</li>
                    <h4>{element.description}</h4>
                  </ul>

                  <section className="image-container">
                    <img
                      className="card-images"
                      src={element.url1}
                      alt=""
                    ></img>
                    <img
                      className="card-images"
                      src={element.url2}
                      alt=""
                    ></img>
                  </section>
                  <div className="button-div">
                    <button
                      className="purchase-button"
                      onClick={() => props.addToCart(element)}
                    >
                      PURCHASE THIS FIREARM
                    </button>
                  </div>
                </div>
              );
            }
          })
        : "Loading"}
    </div>
  );
};

export default Rifles;
