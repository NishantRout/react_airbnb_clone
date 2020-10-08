import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./css/Banner.css";
import Search from "./Search";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
        {showSearch && <Search />}
      </div>
      <div className="banner__info">
        <h1>Go Near</h1>
        <h5>
          Settle in somewhere new. Discover nearby stays to live, work, or just
          relax.
        </h5>
        <Button>Explore nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
