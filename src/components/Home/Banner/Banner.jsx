import React, { useState } from "react";
import Typewriter from "typewriter-effect"
import "./Banner.scss";
import Testimonial from "../testimonial/testimonial"
import TestimonialMob from "../testimonial/testimonial-mob"
import TrustBy from "../../trust-by/trust-by"
import TrustByMob from "../../trust-by/trust-by-mob"
import BannerImg from "../../../assets/gen-x-y-z-mixed-no-bg.webp";
import vds from "../../../assets/GenZ-compressed.mp4"
import Prod from "../../../assets/products/gen-x.webp";

import { AiFillCalendar } from "react-icons/ai";
import vs1 from "../../../assets/category/1.webp"
import vs2 from "../../../assets/category/2.webp"
import vs3 from "../../../assets/category/3.webp"
import vs4 from "../../../assets/category/4.webp"
import vs5 from "../../../assets/category/5.webp"
import vs6 from "../../../assets/category/6.webp"
import vs7 from "../../../assets/category/7.webp"
import vs8 from "../../../assets/category/8.webp"

const Banner = () => {
    return (
        <>
            <div className="cont">
                <div className="image-content-mob">
                    <img src={BannerImg} alt="Mars Purifere" />
                </div>
                <div className="maincontent">

                    <div className="text-content">
                        <div className="typewriter">
                            <Typewriter options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                strings: ["Clinical", "Industrial", "Domestic",]
                            }} />
                        </div>
                        <div className="heading">
                            <h1 className="heading-text1">Air Purification</h1>
                            <h1 className="heading-text2">System</h1>
                            <span className="desc">Buy with confidence when you choose a Mars Purifier Unit,<br /> designed for use in clinical and regulatory enviroments.</span>
                        </div>
                        <div className="shop-btn">
                            <button className="shop-now">Shop now</button>
                        </div>
                    </div>
                    <div className="image-content">
                        <img src={BannerImg} alt="Mars Purifere" />
                    </div>
                </div>
            </div>
            <section className="product-s">
                <h1>Featured Products</h1>
                <div className="all-products">
                    <div className="product">
                        <img src={Prod} alt="product image" />
                        <div className="product-info">
                            <span className="ctg">category</span>
                            <div className="product-title">
                                Gen X Domestic
                            </div>
                            <p className="product-price">£300</p>
                            <button className="product-btn">Add to cart</button>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Prod} alt="product image" />
                        <div className="product-info">
                            <span className="ctg">category</span>
                            <div className="product-title">
                                Gen X Domestic
                            </div>
                            <p className="product-price">£300</p>
                            <button className="product-btn">Add to cart</button>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Prod} alt="product image" />
                        <div className="product-info">
                            <span className="ctg">category</span>
                            <div className="product-title">
                                Gen X Domestic
                            </div>
                            <p className="product-price">£300</p>
                            <button className="product-btn">Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="stg">
                <h1>6-Stage Purification & Sterilisation</h1>
                <div className="stage">
                    <div className="scep1">
                        <span className="xtt">Photocatalyst (Generation Z Only)</span>
                        <span className="xtt">Medical Grade HEPA Filter</span>
                        <span className="xtt">UV-C Sterilisation</span>
                    </div>
                    <div className="vdo">
                        <video src={vds} autoPlay loop muted />
                    </div>
                    <div className="scep2">
                        <span className="xtt">Large-Particulate Filter</span>
                        <span className="xtt">Activated Carbon Filter</span>
                        <span className="xtt">Ion Technology</span>
                    </div>
                </div>
            </section>
            <section>
                <div className="icon-info">
                    <div className="left-1">
                        <div className="card-icon">
                            <AiFillCalendar className="icon-c" />
                            <h1 className="header-icon">Ultra Portable</h1>
                            <span className="desc-icon">Plug and play air purification. No need to knock down walls or use expensive mechanical ventilation such as HVAC.</span>
                        </div>
                    </div>
                    <div className="center-2-3">
                        <div className="center-2">
                            <div className="card-icon">
                                <AiFillCalendar className="icon-c" />
                                <h1 className="header-icon">ISO:29463</h1>
                                <span className="desc-icon">Air filters validated to ISO 29463 and flow rates to ISO 14644 with documentation to support.</span>
                            </div>
                        </div>
                        <div className="center-3">
                            <div className="card-icon">
                                <AiFillCalendar className="icon-c" />
                                <h1 className="header-icon">Low Maintenance Cost</h1>
                                <span className="desc-icon">Our filters are easy to replace with minimal training. Filters only need replacing every 6 months when used in clinical practice.</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-4">
                        <div className="card-icon">
                            <AiFillCalendar className="icon-c" />
                            <h1 className="header-icon">Quiet Operation</h1>
                            <span className="desc-icon">Minimise disruption during patient care with quite operation with an average db level of less than 20db.</span>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="kills">
                    <h1>What Mars Purifier Filters And Kills</h1>
                    <div className="imgsec">
                        <div className="imgsc">
                            <img src={vs1} alt="" />
                            <h5>Viruses Including Coronavirus</h5>
                        </div>
                        <div className="imgsc">
                            <img src={vs2} alt="" />
                            <h5>Bacteria</h5>
                        </div>
                        <div className="imgsc">
                            <img src={vs3} alt="" />
                            <h5>Fungi</h5>
                        </div>
                        <div className="imgsc">
                            <img src={vs4} alt="" />
                            <h5>Volatile Organic Compounds</h5>
                        </div>
                        <div className="imgsc">
                            <img src={vs5} alt="" />
                            <h5>Mercury Vapor</h5>
                        </div>
                        <div className="imgsc">
                            <img src={vs6} alt="" />
                            <h5>Pollen</h5>
                        </div>
                        <div className="imgsc">
                            <img src={vs7} alt="" />
                            <h5>Asbestos</h5>
                        </div>
                        <div className="imgsc">
                            <img src={vs8} alt="" />
                            <h5>Mould Spores</h5>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dext">
                <TrustBy />
            </section>
            <section className="mobl">
                <TrustByMob />
            </section >
            <section className="test">
                <div className="dext">
                    <Testimonial />
                </div>
                <div className="mobl">
                    <TestimonialMob />
                </div>

            </section>
            <section>
            </section>
        </>
    );
};

export default Banner;
