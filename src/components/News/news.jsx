import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./news.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/card";

function News() {

  const [articles, setArticles] = useState([]);
  const apiKey = '8cc861cac15a43de89cf6582b96b7e58';

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const resp = await axios.get(`https://newsapi.org/v2/everything?q=nutrition+health&pageSize=5&apiKey=${apiKey}`)
        setArticles(resp.data.articles);
      } catch(err) {
        console.error('Error:', err);
      }
    }

    fetchNews();
  }, []);
  
  return (
    <>
      <h1>News</h1>
      <div className="news-swiper">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {articles.map((item, index) => {
            return <SwiperSlide key={index}><Card article={item}/></SwiperSlide>
          })}
        </Swiper>
      </div>
    </>
  );
}

export default News;
