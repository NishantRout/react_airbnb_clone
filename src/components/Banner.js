import { Button } from "@material-ui/core";
import React from "react";
import "./css/Banner.css";

function Banner() {
  return (
    <div className="banner">
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
