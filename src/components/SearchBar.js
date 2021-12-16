import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react/cjs/react.development";
import { browserHistory } from "react-router";
import { createHashHistory } from "history";

const SearchBar = (props) => {
  // const [searchData, setSearchData] = useState("");

  const history = useHistory();

  function searchCheck(e) {
    if (e.key === "Enter") {
      e.preventDefault(); //WITHOUT THIS ONE MY SAVESTATE JUST RESETS ITSELF. NOTE TO SELF!!!!
      history.push({
        pathname: "/searchpage",
      });
      props.setSearchData(e.target.value);
    }
  }

  return (
    <div>
      {console.log("searchData: ", props.searchData)}
      <form>
        <input
          id="searchbar"
          type="text"
          placeholder="Search.."
          onKeyPress={(e) => searchCheck(e)}
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
