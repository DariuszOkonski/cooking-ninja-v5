import React from "react";
import "./RecipesList.css";
import { IRecipe } from "./../../utilities/interfaces";
import Recipe from "./Recipe";

interface RecipesListProps {
  recipes: IRecipe[];
}

const RecipesList: React.FC<RecipesListProps> = (props) => {
  return (
    <div className="recipes-list">
      {props.recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesList;
