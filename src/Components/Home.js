import React from "react";
import girl from "../imgs/main.svg";
import chat from "../imgs/With Icon-1.svg";
import people1 from "../imgs/Rectangle 21.svg";
import people2 from "../imgs/Rectangle 22.svg";
import people3 from "../imgs/Rectangle 25.svg";

const Home = () => {
  return (
    <div className="home">
      <div className="main-container">
        <div className="desc">
          <div className="data">
            <h1>Start chatting with customers, anytime, anywhere with Apex</h1>
            <p>
              Great software that allows you to chat from any place at any time
              without any interruption.
            </p>
            {/* <button>Start Chatting now</button> */}
            <img src={chat} alt="" />
          </div>
          <div className="info">
            <div>
              <img src={people1} alt="" />
              <img className="bb" src={people2} alt="" />
              <img className="ss" src={people3} alt="" />
            </div>
            <div className="information">
              <div>
                <h1>2244+ </h1>
                <p>Happy Customer</p>
              </div>
              <div className="vertical-line"></div>
              <div>
                <h1>4.8/5</h1>
                <p>rating</p>
              </div>
            </div>
          </div>
        </div>
        <div className="photo">
          <img src={girl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
