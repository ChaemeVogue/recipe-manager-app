import React from "react";
import RecipeHelper from "./RecipeHelper";

interface Prop {
    selectedRecipe: any[];
}

const RecipeDetails = ({selectedRecipe}: Prop) => {
    // remove second element in the list
    console.log(selectedRecipe);
    let del = selectedRecipe[1];
    selectedRecipe = selectedRecipe.filter(obj => obj !== del);
    return (
        <div className="RecipeDetails">
            <div className="RecipeDetails-container">
                {
                    selectedRecipe !== [] && selectedRecipe!.map((selectedRecipe) =>
                        <div className="RecipeDetails-single">
                            <RecipeHelper

                                key={selectedRecipe.uri}
                                title={selectedRecipe.label}
                                image={selectedRecipe.image}
                                ingredients={selectedRecipe.ingredients}
                                servings={selectedRecipe.yield}
                                calories={selectedRecipe.calories}
                                source={selectedRecipe.source}
                                dietLabels={selectedRecipe.dietLabels}
                                healthLabels={selectedRecipe.healthLabels}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default RecipeDetails;