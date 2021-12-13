import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { NavLink } from "react-router-dom";
import "./index.css";
import Pistols from "./components/Pistols";
import { Route } from "react-router-dom";
// import firebase from "./library/firebase";

// import { collection, getDocs } from "firebase/firestore";

// const db = firebase.firestore();

function App() {
  const [fullData, setFullData] = useState([]);

  const arrayCheck = () => {
    console.log(fullData.documents);
  };

  const makeApiCall = async () => {
    try {
      const res = await fetch(
        "https://firestore.googleapis.com/v1/projects/star-wars-weapons-info/databases/(default)/documents/weapons"
      );
      const mapJson = await res.json();

      console.log("mapJson: ", mapJson);
      console.log("mapJson.documents:", mapJson.documents);
      for (const element of mapJson.documents) {
        const newObject = {};
        newObject.name = element.fields.name.stringValue;
        newObject.manufacturer = element.fields.manufacturer.stringValue;
        newObject.type = element.fields.type.stringValue;
        newObject.description = element.fields.description.stringValue;
        newObject.url1 = element.fields.url1.stringValue;
        newObject.url2 = element.fields.url2.stringValue;
        newObject.cost = element.fields.cost.integerValue;
        newObject.weight = element.fields.weight.integerValue;

        setFullData((prevState) => [...prevState, newObject]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  console.log(fullData);
  useEffect(() => {
    makeApiCall();
  }, []);

  // async function getApi() {
  //   const query = await getDocs(collection(db, "weapons"));

  //   query.forEach((doc) => {
  //     console.log(`${doc.id} => ${doc.data()}`);
  //   });
  // }
  // getApi();

  // const fetchData = () => {
  //   db.collection('weapons')
  // }

  return (
    <div>
      {/* <button>Click Me for console log</button> */}
      <NavBar arrayCheck={arrayCheck}></NavBar>

      <NavLink to="/">
        <h1
          id="title"
          style={{
            textAlign: "center",
            color: "white",
            width: "200px",
            position: "absolute",
            top: "-20px",
            left: "-10px",
            display: "block",
          }}
        >
          STAR WARS
        </h1>
      </NavLink>

      <h3
        id="wantsYou"
        className="thinnerStarWarsFont"
        style={{
          textAlign: "center",
          width: "500px",
          margin: "auto",
        }}
      >
        Lord Vader wants you for the Galactic Empire.
      </h3>
      <div id="vaderHolder">
        <img
          id="vader"
          src="https://womenwriteaboutcomics.com/wp-content/uploads/2020/02/Darth-Vader-1-Cover-A-featured-image.jpg"
          alt="vader"
          height="1000px"
          width="2000px"
        ></img>
      </div>

      <Route exact path="/pistols">
        <Pistols fullData={fullData}></Pistols>
      </Route>
    </div>
  );
}

export default App;
