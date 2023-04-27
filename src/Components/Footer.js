import React from "react";
import start from "../imgs/With Icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-container">
        <div className="cen">
          <h1>
            Ready to grow your business? Start with Apex, become faster every
            second
          </h1>

          <img src={start} alt="" />
          
          <div class="copyright">
            <div>
              Created By <span>Amit Dalal</span>
               2022 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
