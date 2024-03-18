import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import FullWidthImage from "../components/FullWidthImage";

export const AboutPageTemplate = ({
                                      image,
                                      title,
                                      content,
                                      contentComponent,
                                  }) => {
    const PageContent = contentComponent || Content;
    const heroImage = image; // No need to get image using getImage

    return (
        <div className="content">
            <div
                className="full-width-image-container margin-top-0"
                style={{
                    backgroundImage: `url('/img/la.jpg')`, // This will be overridden by heroImage if provided
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

            <section className="section">
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
        </div>
    );
};

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const AboutPage = ({ title, image, content }) => (
    <Layout>
        <AboutPageTemplate
            title={title}
            image={image}
            content={content} // Pass any additional content directly
        />
    </Layout>
);

AboutPage.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    content: PropTypes.string,
};

export default AboutPage;
