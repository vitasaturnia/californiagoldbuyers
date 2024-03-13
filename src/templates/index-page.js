
import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faBoltLightning,


  faMoneyBill,
  faCrown,

} from '@fortawesome/free-solid-svg-icons'
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (

    
    <div>
      <FullWidthImage img={heroImage} />
        <div className="">
            <div className=" columns has-text-centered">
              <div className="column ">
                <div className="content">
                  <div className="section content">
                  <FontAwesomeIcon icon={faCrown}  size="4x" className="has-text-primary"/>
                      <h1 className="title">{mainpitch.title}</h1>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>


<div className="bordertop">
                  <section className="hero is-small has-background-grey bordertop">
                  <div className="hero-body">
                  <div className="columns has-text-centered">
                  <div className="column">
                  <div>
                  <FontAwesomeIcon icon={faStar}  size="3x" className="has-text-primary"/>
                    <h3 className="has-text-primary">Best Prices</h3>
                  </div>
                  </div>
                  <div className="column">
                  <div>
                  <FontAwesomeIcon icon={faBoltLightning} size="3x" className="has-text-primary" />
                                                        <h3 className="has-text-primary">Great Variety
</h3>
                  </div>
                  </div>
                  <div className="column">
                  <div>
                  <FontAwesomeIcon icon={faMoneyBill}  size="3x" className="has-text-primary"/>
                    <h3 className="has-text-primary">Client is King

</h3>
                  </div>
                  </div>

                  </div>
                  </div>
                  </section>

                  <section className="hero is-small is-info has-background-info borderbottom">
                  <div className="hero-body">
                  <div className="columns has-text-centered">
                  <div className="column">
                  <div>
                    <p className="has-text-black">30 plus years of experience in the field and our retail license helps us to offer the best deals available.</p>
                  </div>
                  </div>
                  <div className="column">
                  <div>
                    <p className="has-text-black">We know our customers and what they want. Thats why we got the best items in stock.</p>
                  </div>
                  </div>
                  <div className="column">
                  <div>
                    <p className="has-text-black">At HeavenSent our customers are like our family. From the neighborhood, for the neighborhood.</p>
                  </div>
                  </div>


                  </div>
                  </div>
                  </section>


<div className="borderbottom">
                  <section className="hero is-small has-background-black">
                  <div className="hero-body">
                    <h3 className="has-text-primary">Explore the variety of products.</h3>
                    <button className="button is-outlined is-primary">Products</button>

                    </div>
                    </section>
</div>


    <div className="borderbottom">
    <section className="hero is-small has-background-black">
        <div className="hero-body">
            <h3 className="has-text-primary">Are you a business client?</h3>
            <button className="button is-outlined is-primary">Wholesale</button>

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

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
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
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
