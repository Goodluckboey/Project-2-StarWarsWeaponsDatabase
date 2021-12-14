import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { NavLink } from "react-router-dom";
import "./index.css";
import Pistols from "./components/Pistols";
import Rifles from "./components/Rifles";
import Cannons from "./components/Cannons";
import { Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";

// import firebase from "./library/firebase";
// import { collection, getDocs } from "firebase/firestore";
// const db = firebase.firestore();

function App() {
  const [fullData, setFullData] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (card) => {
    setCart((prevState) => [...prevState, card]);
  };

  const arrayCheck = () => {
    console.log(fullData.documents);
  };

  const makeApiCall = async () => {
    try {
      const res = await fetch(
        "https://firestore.googleapis.com/v1/projects/star-wars-weapons-info/databases/(default)/documents/weapons"
      );
      const mapJson = await res.json();
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

  useEffect(() => {
    makeApiCall();
  }, []);

  useEffect(() => {
    console.log("Cart: ", cart);
  }, [cart]);

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
      <NavBar arrayCheck={arrayCheck} cart={cart}></NavBar>

      <NavLink exact to="/">
        <h1 id="title">STAR WARS</h1>
      </NavLink>
      <div>
        <SearchBar />
      </div>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/pistols">
        <Pistols fullData={fullData} addToCart={addToCart} />
      </Route>
      <Route exact path="/rifles">
        <Rifles fullData={fullData} addToCart={addToCart} />
      </Route>
      <Route exact path="/cannons">
        <Cannons fullData={fullData} addToCart={addToCart} />
      </Route>
    </div>
  );
}

export default App;
