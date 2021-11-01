import React from "react";
import './RecipesList.css';
import RecipesHelper from "./RecipesHelper";

interface Prop{
    recipes: any[];
}

const RecipesList = ({recipes}:Prop) => {
    return(
        <div className="Recipes">
            <div className="Recipes-container">
                {
                    recipes === undefined ? (<h3>Sorry, there are no search results.</h3>) :
                    recipes.length === 0 ? (<h3>Sorry, there are no search results.</h3>) :
                    recipes !== [] && recipes!.map((recipes, index) =>
                        <div className="Recipes-single" key={index}>
                            <RecipesHelper
                                key={recipes.recipe.uri}
                                title={recipes.recipe.label}
                                image={recipes.recipe.image}
                                uri={recipes.recipe.uri}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RecipesList;
