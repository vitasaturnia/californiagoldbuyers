import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>

<div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/shasta.jpeg')`,
          }}
      >
        <h1
            className="has-text-weight-bold is-size-1 has-text-primary"
            style={{
              backgroundColor: "#191919",
              padding: "1rem",
            }}
        >
          Contact
        </h1>
      </div>
<div className="section has-text-centered">
  <a title="facebook" href="https://facebook.com/californiagoldbuyers">
    <FontAwesomeIcon icon={faFacebook}  size="2x" className="mr1 has-text-primary"/>
  </a>

  <a title="instagram" href="https://instagram.com/californiagoldbuyers">
    <FontAwesomeIcon icon={faInstagram}  size="2x" className="mr1 has-text-primary"/>
  </a>

  <a title="WhatsApp" href="https://wa.me/5624051275">
    <FontAwesomeIcon icon={faWhatsapp} size="2x" className="mr1 has-text-primary"/>
  </a>
</div>

      </Layout>
    );
  }
}
