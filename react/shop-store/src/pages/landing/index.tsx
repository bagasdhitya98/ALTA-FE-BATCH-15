import { NavigateFunction, useNavigate } from "react-router-dom";

import Ecommerce from "../../assets/ecommerce.jpg";

import Button from "../../components/Button";

const Landing = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <section className="w-screen h-screen">
      <div className="grid grid-cols-2">
        <div className="w-1/2 h-screen flex flex-col justify-center ml-20">
          <h2 className="font-bold text-emerald-700 text-3xl text-left my-5">
            SatsetPedia
          </h2>
          <p className="font-medium text-emerald-600 text-lg mb-10">
            Belanja cerdas dimulai di sini. SatsetPedia menghadirkan solusi
            lengkap bagi Anda yang menghargai waktu dan kualitas dalam setiap
            pembelian.
          </p>
          <Button
            id="started"
            label="Jelajahi Toko"
            onClick={() => navigate("/shop/product")}
          />
        </div>
        <div className="w-full h-screen flex justify-center items-center">
          <img src={Ecommerce} width={400} height={400} />
        </div>
      </div>
    </section>
  );
};

export default Landing;
