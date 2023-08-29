import { useSelector } from "react-redux";

import React, { FC } from "react";
import Button from "./Button";

interface CardProps {
  id: string;
  title?: string;
  image?: string;
  category?: string;
  price?: string | number;
  onClick?: React.MouseEventHandler;
}

const Card: FC<CardProps> = ({
  id,
  title,
  image,
  category,
  price,
  onClick,
}) => {
  const language = useSelector((state: any) => state.theme.language);

  return (
    <div
      id={id}
      className="w-80 p-10 h-max bg-white rounded-md shadow-md flex flex-col"
    >
      <img
        src={
          image
            ? image
            : "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc"
        }
        className="w-full h-60 rounded-md"
      />
      <div className="my-5">
        <h2 className="font-semibold my-2 truncate">{title}</h2>
        <p>
          {language ? "Category" : "Kategori"} : {category}
        </p>
        <p className="font-bold">
          {language ? "Price" : "Harga"} : Rp {price}
        </p>
      </div>
      <div className="w-40 h-10 my-5">
        <Button
          id="detail"
          label={`${language ? "See Detail" : "Lihat Detail"}`}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
