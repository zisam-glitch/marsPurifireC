import React from "react";
import "./contact.scss"
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {


  return (
    <div className="wraper">
      <h2 className="common-heading">How Can We Help?</h2>
      <p className="texthed">Please select a topic below related to your inquiry.  If you have any questions you can also visit our FAQ page. </p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9614.364275506598!2d-1.2265703621674202!3d52.95578077718703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879e98a65a8ee21%3A0xbe1ff5a86a0e715!2sWollaton%2C%20Nottingham%2C%20UK!5e0!3m2!1sen!2sbd!4v1680628928484!5m2!1sen!2sbd"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="mns">
        <div className="othr">
          <h3 className="headn">Get In Touch With Us</h3>
          <h4 className="rrr">Email</h4>
          <p className="eee">enquiries@marspurifier.com</p>
          <h4 className="rrr">Phone</h4>
          <p className="eee">0800 099 6375</p>
          <h4 className="rrr">Headquarters</h4>
          <p className="eee">Headquarters Wollaton, Nottingham, United Kingdom</p>
          <span className="social-icons">
                                    <a href="https://www.facebook.com/marspurifier.uk/"><FaFacebookF size={32} /></a>
                                    <a href="https://twitter.com/MarsPurifier?s=09"><FaTwitter size={32} /></a>
                                    <a href="https://youtube.com/channel/UCmt1DU9wZ8gh58Y05xUhSXw"><FaYoutube size={32} /></a>
                                    <a href="https://instagram.com/mars.purifier/?utm_medium=copy_link"><FaInstagram size={32} /> </a>
                                    
          </span>
        </div>
        <div className="container">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mdovwjzj"
              method="POST"
              className="contact-inputs">
              <input
                className="inputs"
                type="text"
                name="username"
                placeholder="Username"
                autoComplete="off"
                required
              />

              <input
                className="inputs"
                type="email"
                name="Email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                className="inputs"
                type="text"
                name="subject"
                placeholder="Subject"
                autoComplete="off"
                required
              />
              <input
                className="inputs"
                type="number"
                name="number"
                placeholder="Phone Number"
                autoComplete="off"
                required
              />

              <textarea
                className="inputz"
                name="message"
                placeholder="Message"
                cols="30"
                rows="6"
                autoComplete="off"
                required></textarea>

              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
