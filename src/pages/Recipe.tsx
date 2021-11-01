import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import RecipeDetails from "../components/RecipeDetails";
import Loader from "react-loader-spinner";
import {appID, appKEY} from "../components/EdamamAppIdKey";

interface RouteParams {
    selectedRecipe: string;
}

function Recipe(){
    document.title = "Recipe";
    const {selectedRecipe} = useParams<RouteParams>();
    const [recipeDetails, setRecipeDetails] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const url = `https://api.edamam.com/api/recipes/v2/${selectedRecipe}?type=public&&app_id=${appID}&app_key=${appKEY}`;
        const getRecipeDetails = async () => {
            setLoading(true);
            setError(false);
            try {
                const response = await fetch(url);
                const data = await response.json();
                const temp = Object.values(data); // turn data (an object) into an array
                setRecipeDetails(temp);
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        getRecipeDetails();
        }, [selectedRecipe]);

    return (
        <div>
            {loading ? <div className="Search-loader"><Loader type="ThreeDots" color="#000"/></div>
                : error ? (<div> error, could not fetch recipes from API </div>)
                    : (<div>
                        <RecipeDetails selectedRecipe={recipeDetails} />
                    </div>)
            }
        </div>
    );
}

export default Recipe;
