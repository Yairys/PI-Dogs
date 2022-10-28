import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import landImg from "../../Assets/landing-rosa.png";
import dog from "../../Assets/dog.png";

export default function Landing() {
  return (
    <div className="landing">
      <div className="containerLanding">
        <div className="landLeft">
          <h1 className="landingTitle">DOGAPPEDIA</h1>
          <p className="texto_landing">
            "Dogs are not our whole life, but they make our lives whole."
          </p>

          <Link to="/dogs">
            <button className="lbutton"> LETS GO! </button>
          </Link>
        </div>

        <div className="landRight">
          <div className="landRightImgCont">
            <img alt="" src={landImg} className="landImg" />
            <div className="landDog">
              <img alt="" src={dog} className="dog" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
