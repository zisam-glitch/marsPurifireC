import "./trust-by.scss";
import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import lg1 from "../../assets/lgos/lg1.webp"
import lg2 from "../../assets/lgos/lg2.webp"
import lg3 from "../../assets/lgos/lg3.webp"
import lg4 from "../../assets/lgos/lg4.webp"
import lg6 from "../../assets/lgos/lg6.webp"
import lg7 from "../../assets/lgos/lg7.webp"
import lg8 from "../../assets/lgos/lg8.webp"
import lg9 from "../../assets/lgos/lg9.webp"
import lg10 from "../../assets/lgos/lg10.webp"
import lg11 from "../../assets/lgos/lg11.webp"
import lg12 from "../../assets/lgos/lg12.webp"

class App extends Component{
    render(){
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        speed: 400,
        cssEase: "linear"
      };
      return(
        <div className="mainContainer">
          <h1>Trusted By</h1>
          <Slider {...settings}>
            <div className="container">
              <img src={lg1} />
            </div>
            <div className="container">
              <img src={lg2} />
            </div>
            <div className="container">
              <img src={lg3} />
            </div>
            <div className="container">
              <img src={lg4} />
            </div>
            <div className="container">
              <img src={lg6} />
            </div>
            <div className="container">
              <img src={lg7} />
            </div>
            <div className="container">
              <img src={lg8} />
            </div>
            <div className="container">
              <img src={lg9} />
            </div>
            <div className="container">
              <img src={lg10} />
            </div>
            <div className="container">
              <img src={lg11} />
            </div>
            <div className="container">
              <img src={lg12} />
            </div>
            
          </Slider>
        </div>
      );
    }
  }
  
  export default App;