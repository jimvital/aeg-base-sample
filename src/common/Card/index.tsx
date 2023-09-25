import React from "react";
import "./Card.scss";

interface CardProps {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
  onReadMore: () => void;
}

const Card: React.FC<CardProps> = ({
  id,
  imageSrc,
  title,
  description,
  onReadMore,
}) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={id} />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
      <a
        className="read-more"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          onReadMore();
        }}
      >
        read more
      </a>
    </div>
  );
};

export default Card;
