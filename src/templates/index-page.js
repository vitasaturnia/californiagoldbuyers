import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCrown, faBoltLightning, faMoneyBill } from '@fortawesome/free-solid-svg-icons';


const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    const title = frontmatter.title;
    const image = frontmatter.image;
    const heroImage = getImage(image) || image;

    return (
        <Layout>

            <div>
                <FullWidthImage img={heroImage} />
                <div className="">
                    <div className=" columns has-text-centered">
                        <div className="column ">
                            <div className="content">
                                <div className="section content">
                                    <FontAwesomeIcon icon={faCrown}  size="4x" className="has-text-primary"/>
                                    <h1 className="title">The Smokeshop where every visit is a blessing</h1>
                                    <div className="tile">
                                    </div>
                                </div>


                                <div className="bordertop">
                                    <section className="hero is-small has-background-grey bordertop">
                                        <div className="hero-body">
                                            <div className="columns is-centered">
                                                <div className="column">
                                                    <div className="has-text-centered">
                                                        <FontAwesomeIcon icon={faStar} size="3x" className="has-text-primary" />
                                                        <h3 className="has-text-primary">Best Prices</h3>
                                                        <p className="has-text-black">Due to our connections and wholesale license we can guarantee the lowest prices on the block.</p>

                                                    </div>
                                                </div>
                                                <div className="column">
                                                    <div className="has-text-centered">
                                                        <FontAwesomeIcon icon={faBoltLightning} size="3x" className="has-text-primary" />
                                                        <h3 className="has-text-primary">Great Variety</h3>
                                                        <p className="has-text-black">We know our customers and what they want. That's why we got the best items in stock.</p>
                                                    </div>
                                                </div>
                                                <div className="column">
                                                    <div className="has-text-centered">
                                                        <FontAwesomeIcon icon={faMoneyBill} size="3x" className="has-text-primary" />
                                                        <h3 className="has-text-primary">The client is king</h3>
                                                        <p className="has-text-black">At HeavenSent our customers are like family. Tha means customer service is number 1. </p>
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
                                                    <h3 className="has-text-primary">Explore the variety of products.</h3>
                                                    <Link to="/products"><button className="button is-outlined is-primary">Products</button></Link>
                                                </div>
                                            </section>
                                        </div>
                                        <div className="column">
                                            <section className="hero is-small">
                                                <div className="hero-body">
                                                    <h3 className="has-text-primary">Are you a business client?</h3>
                                                    <Link to="/wholesale"><button className="button is-outlined is-primary">Wholesale</button></Link>
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

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.shape({
                title: PropTypes.string.isRequired,
                image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            }).isRequired,
        }).isRequired,
    }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
