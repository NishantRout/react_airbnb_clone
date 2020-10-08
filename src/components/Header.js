import { Avatar } from "@material-ui/core";
import { ExpandMore, Language, Search } from "@material-ui/icons";
import React from "react";
import "./css/Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__iconWeb"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt="airbnb-logo"
      />

      <img
        className="header__iconMob"
        src="https://img.icons8.com/color/2x/airbnb.png"
        alt="airbnb-logo"
      />

      <div className="header__center">
        <input type="text" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
