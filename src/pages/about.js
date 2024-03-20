import React from "react";
import Layout from "../components/Layout";
import Content from "../components/Content";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBoltLightning, faMoneyBill, faSmile} from "@fortawesome/free-solid-svg-icons";
import whitelogo from "../img/whitelogo.png";

const AboutPage = ({ data }) => {
    const content = "Your about page content goes here"; // Replace this with your actual content

    return (
        <Layout>
            <div className="content">
                <div
                    className="full-width-image-container margin-top-0"
                    style={{
                        backgroundImage: `url('/img/shasta.jpeg')`, // This will be overridden by heroImage if provided
                    }}
                >
                    <h1
                        className="has-text-weight-bold is-size-1 has-text-primary"
                        style={{
                            backgroundColor: "#191919",
                            padding: "1rem",
                        }}
                    >
                        About
                    </h1>
                </div>

                <section className="">
                    <div className="container">
                        <div className="columns">
                            <div className="column ">
                                <div className=" has-text-centered">
                                    <img
                                        src={whitelogo}
                                        alt="California Gold Buyers"
                                        className="footerlogo"
                                    />
                                    <p className="subtitle">We are a small business that specializes in buying and selling gold and silver jewelry, aswell as diamonds and precious gemstones. We strive to build lasting relationships with our clients by paying a fair price for their jewelry and by providing excellent customer service.  We operate in the entire state of California.</p>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="has-text-centered">
                <h1 className="title is-italic has-text-italic has-text-primary mt1">Since 2024</h1>
                <p className="subtitle mb2">It has been our mission to pay our customers a fair price for their jewelry</p>
                </div>
                <section className="hero has-background-grey is-small bordertop">
                    <div className="hero-body">
                        <div className="columns is-centered">

                            <div className="column">
                                <div className="has-text-centered">
                                    <FontAwesomeIcon icon={faBoltLightning} size="3x" className="has-text-primary" />
                                    <h3 className="has-text-primary">Fast</h3>
                                    <p className="has-text-black">Get your cash paid out right away</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="has-text-centered">
                                    <FontAwesomeIcon icon={faSmile} size="3x" className="has-text-primary" />
                                    <h3 className="has-text-primary">Easy</h3>
                                    <p className="has-text-black">No hassles or headaches</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="has-text-centered">
                                    <FontAwesomeIcon icon={faMoneyBill} size="3x" className="has-text-primary" />
                                    <h3 className="has-text-primary">Best Prices</h3>
                                    <p className="has-text-black">We believe in long term business relationships. No lowballing on this side.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </Layout>
    );
};

export default AboutPage;
