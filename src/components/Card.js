import React from 'react';

const Card = ({ title, views, answers }) => {
  return (
    <div className='card'>
      <div className='card-title'>{title}</div>
      <div className='card-count'>
        {`Views: ${views}`} views - Answers: s${answers}
      </div>
    </div>
  );
};

export default Card;
