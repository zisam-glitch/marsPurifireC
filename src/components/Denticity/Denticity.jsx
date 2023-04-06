import "./Denticity.scss";
import Dentist from "../../assets/industry/portrait-of-smiling-female-dentist-in-dentist-s-office-1.webp"
import img1 from "../../assets/industry/workplace-of-dentist.webp"
import img2 from "../../assets/industry/dental-technician-or-dentist-grinding-the-jaw-during-production.jpg"
import img3 from "../../assets/industry/dentist-s-instruments.jpg"
import Dentist2 from "../../assets/industry/dentist-examining-female-s-teeth-in-dentistry.webp"
import Prod from "../../assets/products/gen-x.webp";
import Icon1 from "../../assets/icon/contract-icon.svg"
import Icon2 from "../../assets/icon/speak.svg"
import Icon3 from "../../assets/icon/Filter.svg"




const Denticity = () => {
    return (
        <>
            <div className="hero-cst">
                <div className="text-part">
                    <h1>Air Purification For <br />Dental Clinics</h1>
                    <p>Achieve the required 10 Air Changes & reduce fallow time with <br />Mars Purifiers.</p>
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
                        <h4>Mars Purifier</h4>
                        <h1>Air Purifiers That Help Dental Clinics Reduce Fallow Time.</h1>
                        <p>Dental practices in the UK are under constant pressure to help contain the spread of viruses during routine dental work whilst also reducing fallow time to follow BDA guidance. Dentists, patients and staff need protection from airborne bacteria and viruses, Mercury and disinfectants and there is now heightened concern over the specific spread of Coronavirus (COVID-19). Mars Purifier have put together this summary to assist Dentists and other Health Professionals who may be in the process of choosing suitable air purifiers for their premises.</p>
                    </div>
                    <div className="bullets">
                        <div className="ab">
                            <h5>10 Air Changes</h5>
                            <h5>10 minutes fallow time</h5>
                            <h5>BDA guidance</h5>
                        </div>
                        <div className="ab">
                            <h5>plug and play</h5>
                            <h5>keep patient and staff safe</h5>
                            <h5>increase turnover a day</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thed">
                <div className="txt">
                    <h2>Helping Dental Clinics Improve Continuity.</h2>
                    <p>Reduce the risk to your dental clinic of not being able operate a surgery at maximum capacity by choosing a purifier designed by a Dentist. Recognising the need for purification in dentistry, we worked to take the basic principle of air purifiers and upgrade everything to a medical standard. Want to reduce your risk further, then speak to one of our experts about our service contract solution!</p>
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

export default Denticity;
