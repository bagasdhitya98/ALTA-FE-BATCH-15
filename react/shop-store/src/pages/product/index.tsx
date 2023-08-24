import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

import Card from "../../components/Card";

const Product = () => {
  const username = Cookies.get("username");
  const token = Cookies.get("token");

  const [greeting, setGreeting] = useState<string>("");
  const [data, setData] = useState<[]>([]);

  const getTimezone = () => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Selamat Pagi");
    } else if (currentHour >= 12 && currentHour < 15) {
      setGreeting("Selamat Siang");
    } else if (currentHour >= 15 && currentHour < 18) {
      setGreeting("Selamat Sore");
    } else {
      setGreeting("Selamat Malam");
    }
  };

  const getAllProduct = () => {
    axios
      .get("products")
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTimezone();
    getAllProduct();
  }, []);

  return (
    <section className="w-screen h-screen flex flex-col">
      <div className="mt-10 mb-20 mx-5">
        <h2 className="font-semibold text-emerald-700 text-xl">
          {greeting}, {username}
        </h2>
      </div>
      <div className="h-max mx-5 grid grid-cols-4 gap-x-5 gap-y-5 mx-auto">
        {data &&
          data?.map((item: any, index: any) => {
            return (
              <Card
                key={index}
                id={item?.id}
                title={item?.title}
                image={item?.image}
                price={item?.price * 14000}
                category={item?.category}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Product;
