import React from "react";
import "./Recipe.css";
import { IRecipe } from "./../../utilities/interfaces";

interface RecipeProps {
  recipe: IRecipe;
}

const Recipe: React.FC<RecipeProps> = (props) => {
  return (
    <div className="recipe">
      <h2>{props.recipe.id}</h2>
    </div>
  );
};

export default Recipe;
