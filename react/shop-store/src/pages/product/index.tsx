import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";

import Card from "../../components/Card";
import Navbar from "../../components/Navbar";

const Product = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");

  const [data, setData] = useState<[]>([]);

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
    getAllProduct();
  }, []);

  return (
    <section className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="h-max mx-5 grid grid-cols-4 gap-x-5 gap-y-5 mx-auto my-14">
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
