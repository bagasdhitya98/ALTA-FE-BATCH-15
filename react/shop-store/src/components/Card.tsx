import { FC } from "react";

interface CardProps {
  id: string;
  title?: string;
  image?: string;
  category?: string;
  price?: string | number;
}

const Card: FC<CardProps> = ({ id, title, image, category, price }) => {
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
      <h2 className="font-semibold my-2 truncate">{title}</h2>
      <p>Category : {category}</p>
      <p className="font-bold">Price : Rp {price}</p>
    </div>
  );
};

export default Card;
