import React from "react";
import Apex from "../imgs/LOgo.svg";
import start from "../imgs/With Icon.svg";

const Navbar = () => {
  return (
    <div className=" navbar ">
      <div className="main-container">
        <div>
          <img className="logo" src={Apex} alt="react logo" />
        </div>
        <div className="names">
          <a href="/#">Demos</a>
          <a href="/#">About</a>
          <a href="/#">Blog</a>
          <a href="/#">Pages</a>
          <a href="/#">Contact</a>
        </div>
        <div className="new">
          <a href="/#">Login</a>
          {/* <button className="but">Get Started for free</button> */}
          <img src={start} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
