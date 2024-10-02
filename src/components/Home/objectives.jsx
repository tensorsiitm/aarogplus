import { Swiper, SwiperSlide } from "swiper/react";
import icon1 from "/src/assets/icons/Objectives/Group 171.svg";
import icon2 from "/src/assets/icons/Objectives/Group 178.svg";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

function Objectives() {
  const obj_list = [
    {
      icon: icon1,
      heading: "Expert Mentorship:",
      text: "We offer hands-on guidance and mentorship, helping startups refine their business models, product strategies, and market approaches to achieve sustainable growth.",
    },
    {
      icon: icon2,
      heading: "Industry Connections:",
      text: "Through our extensive network of industry leaders, partners, and advisors, we open doors to key business relationships and strategic alliances, helping ventures scale faster.",
    },
    {
      icon: icon2,
      heading: "Operational Support:",
      text: "We provide practical support in areas like talent acquisition, operations management, and go-to-market strategies, ensuring startups have the foundation to succeed.",
    },
    {
      icon: icon1,
      heading: "Expert Mentorship:",
      text: "We offer hands-on guidance and mentorship, helping startups refine their business models, product strategies, and market approaches to achieve sustainable growth.",
    },
    {
      icon: icon2,
      heading: "Industry Connections:",
      text: "Through our extensive network of industry leaders, partners, and advisors, we open doors to key business relationships and strategic alliances, helping ventures scale faster.",
    },
    {
      icon: icon2,
      heading: "Operational Support:",
      text: "We provide practical support in areas like talent acquisition, operations management, and go-to-market strategies, ensuring startups have the foundation to succeed.",
    },
  ];

  return (
    <div className="objectives" id="objectives">
      <h1>Objectives</h1>
      <Swiper
        className="objectives-swiper"
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
      >
        {obj_list.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="obj-item">
                <img src={item.icon} />
                <div className="content">
                  <h2>{item.heading}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Objectives;
