import { FC } from "react";

interface CardProps {
  id: string;
  title?: string;
  image?: string;
  desc?: string;
  author?: string;
}

const Card: FC<CardProps> = ({ id, title, desc, image, author }) => {
  return (
    <div
      id={id}
      className="w-80 h-full bg-white rounded-md shadow-md grid grid-cols-1 gap-y-10"
    >
      <img
        src={
          image
            ? image
            : "https://imgs.search.brave.com/udmDGOGRJTYO6lmJ0ADA03YoW4CdO6jPKGzXWvx1XRI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzY4LzU1LzYw/LzM2MF9GXzI2ODU1/NjAxMl9jMVdCYUtG/TjVyalJ4UjJleVYz/M3puSzRxblllS1pq/bS5qcGc"
        }
        className="w-full h-32"
      />
      <h2 className="font-semibold">{title}</h2>
      <p>{desc}</p>
      <p>Author : {author}</p>
    </div>
  );
};

export default Card;
