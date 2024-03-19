import React from "react";
import "../style/sliderstyles.sass";
import { StaticImage } from "gatsby-plugin-image";

export default function SimpleSlider() {
    return (
        <div>
          <section className="mb-4">
              <div className="columns has-text-centered">
                  <div className="column">
                      <div className="section has-text-centered mt-4 mb-4">
                          <h1 className="title has-text-primary">Blunts</h1>
                          <p className="subtitle">Placeholder subtitle</p>
                      </div>
                      <StaticImage src="../img/blunts.jpeg" alt="blunts" className="productsimage"/>
                  </div>
                  <div className="column">
                      <div className="section has-text-centered mt-4 mb-4">
                          <h1 className="title has-text-primary">Rolling papers</h1>
                          <p className="subtitle">Placeholder subtitle</p>
                      </div>
                      <StaticImage src="../img/rollingpapers.jpeg" alt="blunts" className="productsimage"/>
                  </div>
                  </div>

              <div className="columns has-text-centered">
                  <div className="column">
                      <div className="section has-text-centered mt-4 mb-4">
                          <h1 className="title has-text-primary">Shoes</h1>
                          <p className="subtitle">Placeholder subtitle</p>
                      </div>
                      <StaticImage src="../img/shoesandmisc.jpeg" alt="Shoes" className="productsimage"/>
                  </div>
                  <div className="column">
                      <div className="section has-text-centered mt-4 mb-4">
                          <h1 className="title has-text-primary">Drinks</h1>
                          <p className="subtitle">Placeholder subtitle</p>
                      </div>
                      <StaticImage src="../img/cooler.jpeg" alt="Cooler" className="productsimage"/>
                  </div>
              </div>
          </section>

        </div>
    );
}
