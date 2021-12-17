import React, { useState, useEffect } from "react";

const FullCollection = (props) => {
  const [collectionData, setCollectionData] = useState();
  useEffect(() => {
    setCollectionData(props.fullData);
  }, [props]);

  const produceFullCards = collectionData
    ? collectionData.map((element) => {
        return (
          <div className="individualCards">
            <h1>{element.name}</h1>
            <section className="image-container">
              <img className="card-images" src={element.url1} alt=""></img>
            </section>
            <ul className="list">
              <br />
              <li style={{ fontWeight: "bold" }}>
                {element.cost} Galactic Credits
              </li>
              <li>Weight: Approximately {element.weight} kg</li>
              <li style={{ fontWeight: "bold" }}>{element.manufacturer}</li>
              <br />
              <li>{element.short}</li>
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
      })
    : "Loading";

  return (
    <div>
      <h1
        style={{
          fontFamily: "MyFirstFont",
          textAlign: "center",
          color: "white",
        }}
      >
        Browse our full collection
      </h1>
      <div
        className="weapon-Card"
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        {produceFullCards}
      </div>
    </div>
  );
};

export default FullCollection;
