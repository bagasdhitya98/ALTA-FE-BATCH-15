import { useState, useEffect } from "react";
import Card from "../../components/Card";

const Product = () => {
  const [greeting, setGreeting] = useState<string>("");

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

  useEffect(() => {
    getTimezone();
  }, []);

  return (
    <section className="w-screen h-screen flex flex-col">
      <div className="mt-10 mb-20 mx-5">
        <h2 className="font-semibold text-emerald-700 text-xl">{greeting}</h2>
      </div>
      <div className="h-max mx-5 grid grid-cols-4 mx-auto">
        <Card id="shop" />
        <Card id="shop" />
      </div>
    </section>
  );
};

export default Product;
