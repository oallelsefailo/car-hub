import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <FontAwesomeIcon icon={faTwitter} className="icon" />
        <FontAwesomeIcon icon={faFacebookF} className="icon" />
        <FontAwesomeIcon icon={faInstagram} className="icon" />
      </div>
      <p>&copy;2023 - CarHub</p>
    </footer>
  );
}

export default Footer;
