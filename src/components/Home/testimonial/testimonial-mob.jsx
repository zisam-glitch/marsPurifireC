import "./testimonial.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillChatQuoteFill } from "react-icons/bs";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <div className="test-s">
        <div className="slide-sm">
          <div className="heading-t">
            <h1>Testimonial</h1>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >

            <SwiperSlide>
              <div className="slide">
                <div className="test-card">
                  <h1>Great Customer Service</h1>
                  <BsFillChatQuoteFill />
                  <p>Thank you Mars Purifier. I was unsure which product to install in my clinic. Thanks to Keith who explained clean air delivery rate and calculated which purifier i would need for my room size</p>
                  <h4>Leanne</h4>
                  <h6>Birmingham</h6>
                  <span>February 10, 2021</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="test-card">
                  <h1>100% Recommend</h1>
                  <BsFillChatQuoteFill />
                  <p>I just wanted to say how pleased with are with our new Mars air purifier. We have been using it now for around 6 weeks and are really impressed with the system. It keeps the air flow in our piercing studio clean and fresh and also gives extra confidence to both our body piercer and customers, particularly it situations when customers need to remove their masks for piercing. We would 100% recommend this unit to other companies and in particular close contact services such as ourselves and places like tattooists and beauticians.</p>
                  <h4>Jacob Davis</h4>
                  <h6>Buckingham</h6>
                  <span>August 31, 2020</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="test-card">
                  <h1>Reduce Fallow Time</h1>
                  <BsFillChatQuoteFill />
                  <p>Quality purifiers. Helped reduce fallow time massively at our chain of dental clinics, which has already saved us a bunch of time and money.</p>
                  <h4>David Vernon</h4>
                  <h6>London</h6>
                  <span>January 2, 2021</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <div className="test-card">
                  <h1>Feel Safer</h1>
                  <BsFillChatQuoteFill />
                  <p>Installed in my fitness class. My clients feel safer working out in groups.</p>
                  <h4>Ken</h4>
                  <h6>Leicester</h6>
                  <span>March 15, 2021</span>
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  );
}
