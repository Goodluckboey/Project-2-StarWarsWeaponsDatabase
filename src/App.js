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
import YourCart from "./pages/YourCart";
import SearchPage from "./pages/SearchPage";
import FullCollection from "./pages/FullCollection";
import Bounties from "./pages/Bounties";

// import firebase from "./library/firebase";
// import { collection, getDocs } from "firebase/firestore";
// const db = firebase.firestore();

function App() {
  const [fullData, setFullData] = useState([]);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState("");
  const [bountyData, setBountyData] = useState([]);

  const addToCart = (card) => {
    setCart((prevState) => [...prevState, card]);
  };
  const [searchData, setSearchData] = useState("");

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
        newObject.short = element.fields.short.stringValue;

        setFullData((prevState) => [...prevState, newObject]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const bountyApiCall = async () => {
    try {
      const res = await fetch(
        "https://firestore.googleapis.com/v1/projects/star-wars-weapons-info/databases/(default)/documents/bounties"
      );
      const bountJson = await res.json();
      for (const element of bountJson.documents) {
        const newObject = [];
        newObject.name = element.fields.name.stringValue;
        newObject.url1 = element.fields.url1.stringValue;
        newObject.bounty = element.fields.bounty.integerValue;

        setBountyData((prevState) => [...prevState, newObject]);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    makeApiCall();
    bountyApiCall();
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
      <NavBar arrayCheck={arrayCheck} cart={cart}></NavBar>

      <NavLink exact to="/">
        <h1 id="title">STAR WARS</h1>
      </NavLink>

      <SearchBar
        query={query}
        setQuery={setQuery}
        setSearchData={setSearchData}
        searchData={searchData}
      />

      <Route exact path="/bounties">
        <Bounties bountyData={bountyData}></Bounties>
      </Route>

      <Route exact path="/searchpage">
        <SearchPage
          searchData={searchData}
          fullData={fullData}
          addToCart={addToCart}
        ></SearchPage>
      </Route>

      <Route exact path="/fullcollection">
        <FullCollection
          fullData={fullData}
          addToCart={addToCart}
        ></FullCollection>
      </Route>

      <Route exact path="/yourcart">
        <YourCart cart={cart} setCart={setCart}></YourCart>
      </Route>
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
