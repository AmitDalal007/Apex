import React from "react";
import call from "../imgs/call.svg";
import card from "../imgs/Card.svg";
import card1 from "../imgs/Card (1).svg";

const Call = () => {
  return (
    <>
      <div className="call">
        <div className="main-container">
          <div>
            <img src={call} alt="" />
          </div>
          <div className="text">
            <h1>Meet your customers, with live video chat</h1>
            <p>
              Proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam enim.
            </p>
          </div>
        </div>
      </div>
      <div className="call" style={{ backgroundColor: "transparent" }}>
        <div className="main-container">
          <div className="text">
            <h1>Meet your customers, with live video chat</h1>
            <p>
              Proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam enim.
            </p>
          </div>
          <div>
            <img src={card} alt="" />
          </div>
        </div>
      </div>
      <div className="call">
        <div className="main-container">
          <div>
            <img src={card1} alt="" />
          </div>
          <div className="text">
            <h1>Meet your customers, with live video chat</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum hic, doloremque modi quidem dolor facere tempore! Sed in, tenetur veniam vero, nulla expedita laboriosam quidem, aliquid debitis cupiditate non iusto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Call;
