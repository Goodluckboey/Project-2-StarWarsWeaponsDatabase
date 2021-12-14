import React, { useState, useEffect } from "react";

const Pistols = (props) => {
  const [pistolData, setPistolData] = useState();
  useEffect(() => {
    setPistolData(props.fullData);
  }, [props]);

  return (
    <div className="weapon-Card">
      {pistolData
        ? pistolData.map((element) => {
            if (element.type === "Pistol") {
              return (
                <div className="individualCards">
                  <h1>{element.name}</h1>
                  <ul className="list">
                    <li>{element.cost} Galactic Credits</li>
                    <li>Weighs an estimated {element.weight} kg</li>
                    <li>Weapon Type: Blaster {element.type}</li>
                  </ul>
                  <h4 className="description">{element.description}</h4>
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

export default Pistols;
