import React, { useEffect, useState } from "react";

const SearchPage = (props) => {
  const [query, setQuery] = useState("");
  const [weaponsData, setWeaponsData] = useState([]);

  useEffect(() => {
    setQuery(props.searchData);
    setWeaponsData(props.fullData);
  }, [props]);

  return (
    <div
      className="weapon-Card"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      {weaponsData.map((element) => {
        const splitName = element.name.split(" ");
        return splitName.map((item) => {
          return query.toLowerCase() === item.toLowerCase() ? (
            <div>
              <div className="individualCards">
                <h1>{element.name}</h1>
                <section className="image-container">
                  <img className="card-images" src={element.url1} alt=""></img>
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
            </div>
          ) : (
            console.log("not found2222222222222222222222")
          );
        });
      })}
    </div>
  );
};

export default SearchPage;
