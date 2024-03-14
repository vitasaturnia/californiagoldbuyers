import * as React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faWhatsapp,

} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Mobile Detailing Los Angeles"
            className="footerlogo"
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                  
                    <li>
                      <Link className="navbar-item" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
              
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/wholesale">
                        Wholesale
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
              
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
