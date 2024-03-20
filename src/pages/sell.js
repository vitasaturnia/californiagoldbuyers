import React from "react";
import Layout from "../components/Layout";
import { Link }  from "gatsby";

const Sell = () => {
    return (
        <Layout>
            <div className="mb2">
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
                        Sell
                    </h1>
                </div>

                <div className="container has-text-centered">
                <h1 className="title has-text-primary">1</h1>
                <p className="subtitle mb-4">We carefully check your jewelry and determine it's value</p>
                <h1 className="title has-text-primary mt1">2</h1>
                <p className="subtitle mb-4">We give you a honest offer on the spot</p>
                <h1 className="title has-text-primary mt1">3</h1>
                <p className="subtitle mb2">Get your cash right away</p>
                </div>
                <div className="container has-text-centered">
                <Link to="/contact">
                    <button className="button is-primary is-outlined">
                        Schedule a price check now
                    </button>
                </Link>
                </div>

            </div>
        </Layout>
    );
};

export default Sell;
