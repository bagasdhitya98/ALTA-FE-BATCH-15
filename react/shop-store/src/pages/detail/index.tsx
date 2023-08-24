import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const id = location?.state?.id;

  const getProduct = (id: number) => {
    axios
      .get(`products/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return <div>Detail</div>;
};

export default Detail;
