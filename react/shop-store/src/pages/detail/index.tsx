import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Button from "../../components/Button";

const Detail = () => {
  const location = useLocation();
  const id = location?.state?.id;

  const [data, setData] = useState<any>();
  const [quantity, setQuantity] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const getProduct = (id: number) => {
    axios
      .get(`products/${id}`)
      .then((response) => {
        setLoading(true);
        setData(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProduct(id);
  }, []);

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      {data && loading === true ? (
        <div className="grid grid-cols-2 mx-10">
          <div className="mx-auto my-auto">
            <img src={data?.image} width={180} height={180} alt="" />
          </div>
          <div className="grid grid-cols-1 gap-y-5 mr-10 my-auto">
            <h2 className="font-bold">{data?.title}</h2>
            <p className="font-regular">{data?.description}</p>
            <p className="font-semibold">Rp {data?.price * 14000}</p>
            <div className="flex flex-row gap-5">
              <div className="w-20">
                <Button
                  id="increment"
                  label="+"
                  onClick={() => setQuantity(quantity + 1)}
                />
              </div>
              <input
                className="bg-white focus:outline-none border border-emerald-600 rounded-md text-center"
                onChange={(e: any) => setQuantity(e.target.value)}
                value={quantity}
              />
              <div className="w-20">
                <Button
                  id="decrement"
                  label="-"
                  onClick={() => setQuantity(quantity - 1)}
                />
              </div>
            </div>
            <div className="w-96">
              <Button id="add_to_cart" label="Add To Cart" />
            </div>
          </div>
        </div>
      ) : (
        <p className="font-semibold font-2xl text-emerald-700">
          Please wait ...
        </p>
      )}
    </section>
  );
};

export default Detail;
