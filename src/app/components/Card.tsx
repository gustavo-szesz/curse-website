
import React from 'react';
import './Card.css'; // Import CSS file for styling

interface CardProps {
  imageUrl: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, text }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={imageUrl} alt="Card" className="card-image" />
        <div className="card-text">{text}</div>
      </div>
    </div>
  );
};

export default Card;
