import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import Card from "../../components/Card";
import Button from "../../components/Button";

const Product = () => {
  const navigate = useNavigate();
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

  const handleLogout = () => {
    Cookies.remove("username");
    Cookies.remove("token");
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Successfully Logout",
      confirmButtonText: "OK",
    }).then((response) => {
      if (response?.isConfirmed) {
        navigate("/");
      }
    });
  };

  const navigateTo = (id: number) => {
    if (token) {
      navigate(`/detail/${id}`, {
        state: {
          id: id,
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "You must login first",
        text: "Failed",
        confirmButtonText: "OK",
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  useEffect(() => {
    getTimezone();
    getAllProduct();
  }, []);

  return (
    <section className="w-screen h-screen flex flex-col">
      <div className="mt-10 mb-20 mx-5 flex justify-between">
        <h2 className="font-semibold text-emerald-700 text-xl">
          {greeting}, {username ? username : "User"}
        </h2>
        <div className="w-40 h-10">
          <Button id="logout" label="Logout" onClick={() => handleLogout()} />
        </div>
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
                onClick={() => navigateTo(item?.id)}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Product;
