import React from 'react';

const ResortItem = ({title,image,price}) => {
  return  (

    <div className="resort-card">

      <a href = "/"> 
          <img src={image} alt=""/>   
      </a> 

      <div className="resortContent">
          <h3>{title}</h3>
          <p>${price} per night</p>
      </div>

  </div>

  );
};

export default ResortItem;
