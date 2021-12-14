import React, { useState, useEffect } from "react";

const Pistols = (props) => {
  const [pistolData, setPistolData] = useState();
  useEffect(() => {
    setPistolData(props.fullData);
  }, [props]);

  return (
    <div
      className="weapon-Card"
      data-aos="fade-left"
      data-aos-easing="ease-in-out"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      {pistolData
        ? pistolData.map((element) => {
            if (element.type === "Pistol") {
              return (
                <div className="individualCards">
                  {/* <div className="individualCards"> */}
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
                  </ul>
                  {/* <h4 className="description">{element.description}</h4> */}
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
                // </div>
              );
            }
          })
        : "Loading"}
    </div>
  );
};

export default Pistols;
