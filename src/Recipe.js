import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingridient) => (
          <li>{ingridient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipe;
