import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar,
    faBoltLightning,
    faMoneyBill,
    faCrown,
} from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";

export const IndexPageTemplate = ({
                                      image,
                                      mainpitch,
                                  }) => {
    const heroImage = image; // Assuming the image is already processed

    return (
        <div>
            <FullWidthImage img={heroImage} />
            <div className="">
                <div className="columns has-text-centered">
                    <div className="column ">
                        <div className="content">
                            <div className="section content">
                                <FontAwesomeIcon icon={faCrown} size="4x" className="has-text-primary"/>
                                <h1 className="title">{mainpitch.title || "Your Title Placeholder"}</h1>
                                <div className="tile">
                                    {/* You can add your description or leave it empty */}
                                    {/* <h3 className="subtitle">{mainpitch.description}</h3> */}
                                </div>
                            </div>
                            <div className="bordertop">
                                <section className="section">
                                    <div className="container">
                                        <div className="columns is-multiline is-centered">
                                            <Feature icon={faStar} title="Best Prices" />
                                            <Feature icon={faBoltLightning} title="Great Variety" />
                                            <Feature icon={faMoneyBill} title="Client is King" />
                                        </div>
                                    </div>
                                </section>
                                <div className="borderbottom">
                                    <section className="hero is-small has-background-black">
                                        <div className="hero-body">
                                            <h3 className="has-text-primary">Explore the vast variety of products</h3>
                                            <Link className="navbar-item" to="/products">
                                                <button className="button is-outlined center is-primary">Products</button>
                                            </Link>
                                        </div>
                                    </section>
                                </div>
                                <div className="borderbottom">
                                    <section className="hero is-small has-background-black ">
                                        <div className="hero-body ">
                                            <h3 className="has-text-primary">Are you a business client?</h3>
                                            <Link className="navbar-item" to="/wholesale">
                                                <button className="button is-outlined is-primary center">Wholesale</button>
                                            </Link>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Feature = ({ icon, title }) => (
    <div className="column is-one-third">
        <div className="has-text-centered">
            <FontAwesomeIcon icon={icon} size="3x" className="has-text-primary" />
            <h3 className="title is-4 has-text-primary">{title}</h3>
            {/* You can add your text or leave it empty */}
            {/* <p className="is-size-5 has-text-black">{text}</p> */}
        </div>
    </div>
);

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    mainpitch: PropTypes.object,
};

const IndexPage = ({ data }) => {
    // Destructure frontmatter
    const { image, mainpitch } = data.markdownRemark.frontmatter;

    return (
        <Layout>
            <IndexPageTemplate
                image={image}
                mainpitch={mainpitch}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default IndexPage;
