import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";

const SearchPage = (props) => {
  const [query, setQuery] = useState("");
  const [weaponsData, setWeaponsData] = useState([]);

  useEffect(() => {
    setQuery(props.searchData);
    setWeaponsData(props.fullData);
  }, [props]);

  // 1st Run a map through my fullData.
  // 2nd split each element
  // 3rd for Each Element.name, run a map and make Each Item
  // if item === query
  // 4th found = true
  // if found === true, return <h1> Found! </h1>
  // else return <h1> Not Found! </h1>

  const runSearch = weaponsData.map((element) => {
    const splitName = element.name.split(" ");

    splitName.map((item) => {
      let found = false;
      if (query.toLowerCase() === item.toLowerCase()) {
        found = true;
        console.log("I found something 1111111111111111");
        return (
          <div>
            {console.log("true")}
            <h1>ITEM FOUND!!!!!!!!!!!!!!!!!!!</h1>
            <h1>ITEM FOUND!!!!!!!!!!!!!!!!!!!</h1>
            <h1>ITEM FOUND!!!!!!!!!!!!!!!!!!!</h1>
            <h1>ITEM FOUND!!!!!!!!!!!!!!!!!!!</h1>
          </div>
        );
      }
      if (found === false) {
        return (
          <div style={{ color: "white" }}>
            <h1
              style={{
                color: "white",
                fontFamily: "MyFirstFont",
                textAlign: "center",
              }}
            >
              No such Item in Database
            </h1>
            {console.log("false")}
          </div>
        );
      }
      // if (found === true) {
      //   return (
      //     <div className="individualCards">
      //       {console.log("item Found!", query)}
      //       <h1>{element.name}</h1>

      //       <section className="image-container">
      //         <img className="card-images" src={element.url1} alt=""></img>
      //         <img className="card-images" src={element.url2} alt=""></img>
      //       </section>
      //       <ul className="list">
      //         <li>{element.cost} Galactic Credits</li>
      //         <li>Weight: Approximately {element.weight} kg</li>
      //         <li style={{ fontWeight: "bold" }}>{element.manufacturer}</li>
      //         <br />
      //         <li>{element.short}</li>
      //       </ul>
      //       <br />
      //       <div className="button-div">
      //         <button
      //           className="purchase-button"
      //           onClick={() => props.addToCart(element)}
      //         >
      //           ADD TO CART
      //         </button>
      //       </div>
      //     </div>
      //   );
      // }
    });
  });

  return (
    <div>
      {console.log("weaponsData: ", weaponsData)}
      {runSearch}
    </div>
  );
};

export default SearchPage;
