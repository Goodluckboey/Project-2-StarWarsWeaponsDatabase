import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SearchBar = (props) => {
  const history = useHistory();

  function searchCheck(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // FUTURE PATRICK TAKE NOTE: WITHOUT THIS ONE MY SAVESTATE JUST RESETS ITSELF.
      history.push({
        pathname: "/searchpage",
      });
      props.setSearchData(e.target.value);
    }
  }

  return (
    <div>
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
