import "./Business.scss";
import Dentist from "../../assets/industry/Commercial-Air-Purifier.webp"
import img1 from "../../assets/industry/Work-2.webp"
import img2 from "../../assets/industry/Work-6-1.jpg"
import img3 from "../../assets/industry/Work-4-pic-1.jpg"
import Dentist2 from "../../assets/industry/Work-5-1.webp"
import Prod from "../../assets/products/gen-x.webp";
import Icon1 from "../../assets/icon/contract-icon.svg"
import Icon2 from "../../assets/icon/speak.svg"
import Icon3 from "../../assets/icon/Filter.svg"




const Business = () => {
    return (
        <>
            <div className="hero-cst">
                <div className="text-part">
                    <h1>Commercial Air Purifiers</h1>
                    <p>In the aftermath of the pandemic, the UK’s largest private sector employers must urgently take action to deal with one of the biggest challenges to their long-term productivity and profitability. Mars Purifier designs and provides commercial air purifiers to keep your staff safe and your business operating.</p>
                    <button>Buy now</button>
                </div>
                <div className="img-part">
                    <img src={Dentist} alt="" />
                </div>
            </div>
            <div className="scend">
                <div className="img-long">
                    <img className="ib1" src={img1} alt="" />
                </div>
                <div className="two-img">
                    <img className="ig1" src={img2} alt="" />
                    <img className="ig2" src={img3} alt="" />
                </div>
                <div className="text-sec">
                    <div className="desc">
                        <h4>Mars Purifier For Business</h4>
                        <h1>Commercial-Grade Air Purifiers For Businesses.</h1>
                        <p>Mars Purifier designs, manufactures and provides portable commercial grade air purification systems. Used by NHS Hospitals and trusted by businesses globally.<br/>The World Health Organization has advised that Covid and other airbourne viruses are mainly transmitted by inhaling droplets in the air, rather than touching contaminated surfaces. <br/>Mars Purifiers destroys 99.97% of airbourne viruses and bacteria, including Covid and is the only air purifier to be validated to ISO: 14644.</p>
                    </div>
                </div>
            </div>
            <div className="thed">
                <div className="txt">
                    <h2>Clean Air For Every Space.</h2>
                    <p>COVID has forever changed how we work, where we work and the relationship between employers and employees. Leading organisations are acting quickly, thinking beyond re-entry to reimagine the future work and the digital, physical and emotional dimension of their space.</p>
                </div>
                <div className="img">
                    <img src={Dentist2} alt="" />
                </div>
            </div>
            <section className="product-s">
                <h1>Dental Air Purifiers - Validated To ISO 14644</h1>
                <h5>The UK's Only Dental Air Purification Provider With External Validation For Air Delivery Rates, So No Need For The 50% Recommended Reduction Of Manufacturer CADR To Calculate Air Changes.</h5>
                <div className="all-products">
                    <div className="product">
                        <img src={Prod} alt="product " />
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
                        <img src={Prod} alt="product " />
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
                        <img src={Prod} alt="product" />
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
            <section>
                <div className="ast">
                    <div className="arccrdn">
                        <ul className="accord">
                            <li>
                                <input type="radio" name="accordion" id="first" />
                                <label htmlFor="first">ISO:14644 Clean room Standard</label>
                                <div className="cnt">
                                    <p>The clean air delivery rates (CADR) for all speed settings for this unit have been externally validated to ISO:14644. Removing the requirement to add 50% as per the BDA guidelines</p>
                                </div>
                            </li>

                            <li>
                                <input type="radio" name="accordion" id="2nd" />
                                <label htmlFor="2nd">HEPA 13</label>
                                <div className="cnt">
                                    <p>HEPA 13 is a medical grade air filter that captures 99.97% of airborn particals as small as 0.3 microns. This is the minimum standard required to filter out Covid-19</p>
                                </div>
                            </li>

                            <li>
                                <input type="radio" name="accordion" id="3rd" />
                                <label htmlFor="3rd">UVC</label>
                                <div className="cnt">
                                    <p>UVC is a disinfection method that uses short-wavelength ultraviolet (ultraviolet C or UV-C) light to kill or inactivate microorganisms by destroying nucleic acids and disrupting their DNA, leaving them unable to perform vital cellular functions.</p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="accordion" id="4th" />
                                <label htmlFor="4th">ION Technology</label>
                                <div className="cnt">
                                    <p>Ionizers use a high voltage electrical current across a set of plates that sit in the direct path of the air flow, resulting in one plate now having a strong negative/positive charge.<br />At any given time, there are millions of small particles floating through the air such as skin cells, moisture, dust, dirt and vaporised material, as these partials move they rub against each other, also other air partials, creating a static charge similar to rubbing a balloon on someone’s hair.<br />This static charge (either positive or negative) causes the particulates to be attracted to the plate of the opposite charge, upon colliding with the charged plates, the particulates instantly loose their charge and form a precipitate (change from a vapor to a liquid or solid) allowing them to be collect in the HEPA13 filter.<br />In addition, this releases a high volume of negative charge into the air itself known as ions (loose electrons), these continue to have a sterilising effect to the surrounding air.</p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="accordion" id="5th" />
                                <label htmlFor="5th">Activated Carbon</label>
                                <div className="cnt">
                                    <p>Carbon air filters are the filters most commonly used to remove gases. They are designed to filter gases through a bed of activated carbon (also called activated charcoal) and are usually used to combat volatile organic compounds (VOCs) released from common household products. They are also often used to remove odors from the air, such as the smell of tobacco smoke. They cannot remove fine particles like mould, dust, or pollen from the air. Volatile Organic Compounds (VOCs). Carbon air filters can be effective at filtering VOCs from the air. These are gaseous substances that most other mechanical filters like HEPA filters, cannot touch. Some of the gases in cigarette smoke or those given off by drying paint or cleaning products can be removed from the air by a carbon filter. Benzene, toluene, xylene, and some chlorinated compounds are among those that may be removed by carbon filters.</p>
                                </div>
                            </li>
                            <li>
                                <input type="radio" name="accordion" id="6th" />
                                <label htmlFor="6th">Designed for clinical use</label>
                                <div className="cnt">
                                    <p>Made of strong white acrylic, the look of this purifier emphasises to your patients and staff that you have a clinical solution in place while being robust so as to withstand usual bumps and knocks.<br />This units wipes clean easily using standard cleaning products</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="cnts">
                        <h2>Free Air Change Rate Certificate For Each Room With Our Servicing Plans Or Contract Hire Purchase.</h2>
                        <p>Mars Purifier specialises in dental and clinical air purification, part of this is understanding that while patient and staff safety is always your number one priority, second is always business continuity through being able to both maintain reduced fallow time and provide evidence of compliance to regulatory body’s in the event of inspection.<br />Available as a Servicing Plan for pre-brought units or as a Contract Hire Purchase it’s the perfect way to purchase your purification solution or provide the peace of mind and business continuity reassurance of knowing we are on hand to help in the event of failure.</p>
                    </div>
                </div>
            </section>
            <section className="sv">
                <div className="servis">
                    <h1>Mars Purifier Core Service</h1>
                    <div className="svsr">
                        <div className="servis-crd">
                            <img src={Icon3} alt="" />
                            <h3>Filters & Spare Parts</h3>
                            <p>Want to do the basic maintenance yourself or don’t need validation. Check out our filters and spare parts.</p>
                            <button>Book Now</button>
                        </div>
                        <div className="servis-crd">
                            <img src={Icon2} alt="" />
                            <h3>Speak To an Expert</h3>
                            <p>Still got questions or prefer to speak to a person, give us a call today!</p>
                            <button>Book Now</button>
                        </div>
                        <div className="servis-crd">
                            <img src={Icon1} alt="" />
                            <h3>Service Contract</h3>
                            <p>Aligned with our Hire Purchase Agreement, our Service Contract can be purchased if you already own a purifier (or alongside a new purchase). Lower monthly payment but capital purchase at the beginning..</p>
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            </section>
        </>
    );
};

export default Business;
