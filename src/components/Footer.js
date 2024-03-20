import * as React from "react";
import { Link } from "gatsby";
import logo from "../img/logo2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered mb-0">
          <img
              src={logo}
              alt="California Gold Buyers"
              className="footerlogo"
          />
        </div>
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns is-centered">
              <div className="column has-text-centered">
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/about">
                      About us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column has-text-centered">
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/about">
                      Sell Jewelry
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column has-text-centered">
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item" to="/products">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="column has-text-centered social">
                <a title="facebook" href="https://facebook.com/heavensentsmokeshop">
                  <FontAwesomeIcon icon={faFacebook}  size="2x" className="has-text-primary"/>
                </a>
                <a title="instagram" href="https://instagram.com/heavensentsmokeshop">
                  <FontAwesomeIcon icon={faInstagram}  size="2x" className="has-text-primary"/>
                </a>
                <a title="WhatsApp" href="https://wa.me/5624051275">
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" className="has-text-primary"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
