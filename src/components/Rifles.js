import React, { useState, useEffect } from "react";

const Rifles = (props) => {
  const [infoData, setinfoData] = useState();
  useEffect(() => {
    setinfoData(props.fullData);
  }, [props]);

  return (
    <div
      className="weapon-Card"
      data-aos="fade-left"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      {infoData
        ? infoData.map((element) => {
            if (element.type === "Rifle") {
              return (
                <div className="individualCards">
                  <h1>{element.name}</h1>
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
                  <ul className="list">
                    <li>{element.cost} Galactic Credits</li>
                    {/* <li>Weighs an estimated {element.weight} kg</li>
                    <li>Weapon Type: Blaster {element.type}</li> */}
                    {/* <h4>{element.description}</h4> */}
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
        : "Loading"}
    </div>
  );
};

export default Rifles;
