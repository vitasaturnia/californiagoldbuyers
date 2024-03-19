import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import SliderComponent from "../components/SliderComponent"; // Updated import for SliderComponent

export const ProductsPageTemplate = ({
                                         image,
                                         title,
                                         content,
                                         contentComponent,
                                     }) => {
    const PageContent = contentComponent || Content;
    const heroImage = getImage(image) || image;

    return (
        <div className="content">
            <div
                className="full-width-image-container margin-top-0 backgroundpositioncenter"
                style={{
                    backgroundImage: `url('/img/entrance.jpeg')`,
                }}
            >
                <h1
                    className="has-text-weight-bold is-size-1 has-text-primary"
                    style={{
                        backgroundColor: "#191919",
                        padding: "1rem",
                    }}
                >
                    Products
                </h1>
            </div>

            <section className="">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                                <PageContent className="content" content={content} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
            <SliderComponent />
            </section>

        </div>


);
};

ProductsPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const ProductsPage = ({ data }) => {
    const { markdownRemark: post } = data;
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <ProductsPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
                image={frontmatter.image}
            />
        </Layout>
    );
};

ProductsPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ProductsPage;

export const productsPageQuery = graphql`
    query ProductsPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
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
