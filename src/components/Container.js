import React from "react";
import "./container.css";
import iconOne from "../assets/icons/icon1.JPG";
import iconTwo from "../assets/icons/icon2.JPG";
import iconThree from "../assets/icons/icon3.JPG";


function Container() {
  return (
    <div className="mainContainer">
      <div className="hero">
        <div className="hero-bg-wrapper"></div>
        <div className="hero-text">
          <h2>FEATURED CAR</h2>
        </div>
      </div>
      <div className="textBlob">
        <div className="card">
          <img src={iconOne} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            pretium urna ipsum, ut consectetur ex feugiat id. Curabitur
            venenatis
          </p>
        </div>
        <div className="card">
          <img src={iconTwo} />
          <p>
            Cras enim purus, ultrices vitae mauris nec, euismod commodo sapien.
            Integer pretium feugiat pretium. Sed in rutrum ligula.{" "}
          </p>
        </div>
        <div className="card">
          <img src={iconThree} />
          <p>
            Suspendisse ligula dui, varius eu maximus nec, varius molestie
            dolor. Nullam elit urna, fermentum ut justo sed
          </p>
        </div>
      </div>
      <div className="container-wrapper">
        <div className="container newsEvents">
          <h2>News & Events</h2>
        </div>
        <div className="container giveAway">
          <h2>Give Away</h2>
        </div>
      </div>
    </div>
  );
}

export default Container;
