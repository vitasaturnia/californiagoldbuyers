import React from "react";
import "../style/sliderstyles.sass";
import { StaticImage } from "gatsby-plugin-image";

export default function SimpleSlider() {
    return (
        <div>
            <div className="carousel">
                <ul className="slides">
                    <input type="radio" name="radio-buttons" id="img-1" checked />
                    <li className="slide-container">
                        <div className="slide-image">
                            <StaticImage src="../img/blunts.jpeg" alt="Slide 1" />
                            <h1 className="title has-text-primary">Blunts</h1>
                        </div>
                        <div className="carousel-controls">
                            <label htmlFor="img-3" className="prev-slide">
                                <span>&lsaquo;</span>
                            </label>
                            <label htmlFor="img-2" className="next-slide">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>

                    <input type="radio" name="radio-buttons" id="img-2" />
                    <li className="slide-container">
                        <div className="slide-image">
                            <StaticImage src="../img/rollingpapers.jpeg" alt="Slide 2" />
                        </div>
                        <div className="carousel-controls">
                            <label htmlFor="img-1" className="prev-slide">
                                <span>&lsaquo;</span>
                            </label>
                            <label htmlFor="img-3" className="next-slide">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" id="img-3" />
                    <li className="slide-container">
                        <div className="slide-image">
                            <StaticImage src="../img/bongs.jpeg" alt="Slide 3" />
                        </div>
                        <div className="carousel-controls">
                            <label htmlFor="img-2" className="prev-slide">
                                <span>&lsaquo;</span>
                            </label>
                            <label htmlFor="img-1" className="next-slide">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <div className="carousel-dots">
                        <label htmlFor="img-1" className="carousel-dot" id="img-dot-1"></label>
                        <label htmlFor="img-2" className="carousel-dot" id="img-dot-2"></label>
                        <label htmlFor="img-3" className="carousel-dot" id="img-dot-3"></label>
                    </div>
                </ul>
            </div>
        </div>
    );
}
