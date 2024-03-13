import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import FullWidthImage from "../components/FullWidthImage";

export const ServicesPageTemplate = ({
                                       image,
                                       heading,
                                       description,
                                       testimonials,
                                       pricing,
                                     }) => {
  const heroImage = getImage(image) || image;

  return (
      <Layout>
        <FullWidthImage img={heroImage} title={heading} />
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-three-quarters">
                <h3 className="title is-3 has-text-centered">{heading}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </section>
        <Testimonials testimonials={testimonials} />
        <section className="section">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-three-quarters">
                <h2 className="title is-2 has-text-centered">{pricing.heading}</h2>
                <p>{pricing.description}</p>
                <Pricing data={pricing.plans} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
  );
};

ServicesPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  description: PropTypes.string,
  testimonials: PropTypes.array,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
};

const ServicesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return <ServicesPageTemplate {...frontmatter} />;
};

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ServicesPage;

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
        testimonials {
          author
          quote
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
