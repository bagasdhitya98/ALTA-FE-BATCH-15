import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import Card from "../../components/Card";

const News = () => {
  const username = Cookies.get("username");
  const [news, setNews] = useState<[]>();

  const getNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${
          import.meta.env.VITE_NEWS_API
        }`
      )
      .then((response) => {
        setNews(response?.data?.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <section>
      <div className="flex flex-col justify-center">
        <h2>Hello, Good Night {username}</h2>
        <div className="grid grid-cols-4 gap-x-5 gap-y-5">
          {news &&
            news.map((item: any, index: any) => {
              return (
                <Card
                  key={index}
                  id={item?.id}
                  title={item?.title}
                  desc={item?.description}
                  image={item?.urlToImage}
                  author={item?.author}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default News;
