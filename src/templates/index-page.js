
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



    <section className="section">
        <div className="container">
            <div className="columns is-multiline is-centered">
                <Feature icon={faStar} title="Best Prices" text="30 plus years of experience in the field and our retail license helps us to offer the best deals available." />
                <Feature icon={faBoltLightning} title="Great Variety" text="We know our customers and what they want. That's why we got the best items in stock." />
                <Feature icon={faMoneyBill} title="Client is King" text="At HeavenSent our customers are like our family. From the neighborhood, for the neighborhood." />
            </div>
        </div>
    </section>


<div className="borderbottom">
                  <section className="hero is-small has-background-black">
                  <div className="hero-body">
                    <h3 className="has-text-primary">Explore the variety of products.</h3>
                      <Link className="navbar-item" to="/products">
                      <button className="button is-outlined is-primary">Products</button>
                      </Link>
                    </div>
                    </section>
</div>


    <div className="borderbottom">
    <section className="hero is-small has-background-black">
        <div className="hero-body">
            <h3 className="has-text-primary">Are you a business client?</h3>
            <Link className="navbar-item" to="/wholesale">
            <button className="button is-outlined is-primary">Wholesale</button>
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

const Feature = ({ icon, title, text }) => (
    <div className="column is-one-third">
        <div className="has-text-centered">
            <FontAwesomeIcon icon={icon} size="3x" className="has-text-primary" />
            <h3 className="title is-4 has-text-primary">{title}</h3>
            <p className="is-size-5 has-text-black">{text}</p>
        </div>
    </div>
);


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
