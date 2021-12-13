import React, { useState, useEffect } from "react";

const Pistols = (props) => {
  const [pistolData, setPistolData] = useState();
  useEffect(() => {
    setPistolData(props.fullData);
  }, [props]);

  return (
    <div className="pistol-Card">
      {pistolData
        ? pistolData.map((element) => {
            if (element.type === "Pistol") {
              return (
                <div className="individualCards">
                  <h1>{element.name}</h1>
                  <h3>{element.cost} Galactic Credits</h3>
                  <h3>{element.weight} kg</h3>
                  <h3>Weapon Type: Blaster {element.type}</h3>
                  <h5>{element.description}</h5>
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
