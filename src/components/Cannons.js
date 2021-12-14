import React, { useState, useEffect } from "react";

const Cannons = (props) => {
  const [infoData, setinfoData] = useState();
  useEffect(() => {
    setinfoData(props.fullData);
  }, [props]);

  return (
    <div className="weapon-Card">
      {infoData
        ? infoData.map((element) => {
            if (element.type === "Cannon") {
              return (
                <div className="individualCards">
                  <h1>{element.name}</h1>
                  <ul className="list">
                    <li>{element.cost} Galactic Credits</li>
                    <li>Weighs an estimated {element.weight} kg</li>
                    <li>Weapon Type: Blaster {element.type}</li>
                    <h4>{element.description}</h4>
                  </ul>

                  <div className="image-container">
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
                  </div>
                </div>
              );
            }
          })
        : "Loading"}
    </div>
  );
};

export default Cannons;
