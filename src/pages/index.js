import React from "react";
import {  Link } from "gatsby";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faSmile, faBoltLightning, faMoneyBill } from '@fortawesome/free-solid-svg-icons';


const IndexPage = ({ data }) => {

    return (
        <Layout>

            <div>
                <div
                    className="full-width-image-container margin-top-0 backgroundpositioncenter"
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
                        California Gold Buyers
                    </h1>
                </div>

                <div className="">
                    <div className=" columns has-text-centered">
                        <div className="column ">
                            <div className="content">
                                    <FontAwesomeIcon icon={faCrown}  size="4x" className="has-text-primary"/>
                                    <h1 className="title">Always the best price for your jewelry</h1>
                                    <div className="tile">
                                    </div>


                                <div className="bordertop">
                                    <section className="hero is-small has-background-grey bordertop">
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
                                <div className="borderbottom has-background-black">
                                    <div className="columns">
                                        <div className="column">
                                            <section className="hero is-small">
                                                <div className="hero-body">
                                                    <h3 className="has-text-primary">Interested in selling jewelry?</h3>
                                                    <Link to="/products"><button className="button is-outlined is-primary">Sell now</button></Link>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>                </div>
            </div>
        </Layout>
    );
};


export default IndexPage;


