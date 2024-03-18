import React, { useEffect } from "react";
import Swiper from "swiper";
import "../style/slider.sass"; // Custom CSS for slider styling

const SliderComponent = () => {
    useEffect(() => {
        const swiper = new Swiper(".swiper-container", {
            loop: true,
            effect: "fade",
            autoplay: {
                delay: 5000,
            },
            speed: 1,
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <div className="swiper-container" style={{ height: "45vh" }}>
            <div className="swiper-wrapper">
                <div
                    className="swiper-slide"
                    style={{
                        backgroundImage: `url('/img/entrance.jpeg')`,
                        minHeight: "45vh", // Adjusted height for both mobile and desktop
                    }}
                >
                    <div className="slide-content">
                        {/* Adding some content to ensure the slide content occupies space */}
                        <div className="text-container">
                            <h2 className="title has-text-primary">Vaporizers</h2>
                            {/* You can add additional content here if needed */}
                        </div>
                    </div>
                </div>

                <div
                    className="swiper-slide"
                    style={{
                        backgroundImage: `url('/img/entrance.jpeg')`, // Background for second slide
                        minHeight: "45vh", // Adjusted height for both mobile and desktop
                    }}
                >
                    <div className="slide-content">
                        <div className="text-container">
                            <h2 className="title has-text-primary">Blunts and woods</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
        </div>
    );
};

export default SliderComponent;
