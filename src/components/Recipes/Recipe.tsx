import React from "react";
import "./Recipe.css";
import { IRecipe } from "./../../utilities/interfaces";

interface RecipeProps {
  recipe: IRecipe;
}

const Recipe: React.FC<RecipeProps> = (props) => {
  const { id, title, ingredients, method, cookingTime } = props.recipe;
  return (
    <div className="recipe">
      <h2 className="recipe-header">{title}</h2>
      <p className="recipe-cooking-time">{cookingTime}</p>
      <p className="recipe-method">{method.substring(0, 100)}...</p>
      <button className="recipe-button">Cook this</button>
    </div>
  );
};

export default Recipe;
