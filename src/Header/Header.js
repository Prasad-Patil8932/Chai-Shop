import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import bgChaiImage from "../assets/banner.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Chai Shop</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={bgChaiImage} alt="Chai Shop Background" />
      </div>
    </Fragment>
  );
};

export default Header;
