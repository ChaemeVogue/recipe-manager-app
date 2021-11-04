import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import "./Search.css";
import RecipesList from "../components/RecipesList";
import Loader from "react-loader-spinner";
import {appID, appKEY} from "../components/EdamamAppIdKey";

interface RouteParams {
    searchTerm: string;
    healthLabel: string;
}

function Search() {
    document.title = "Search";
    const {searchTerm, healthLabel} = useParams<RouteParams>();
    const [recipes, setRecipes] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getRecipes = async () => {
           let base_url = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchTerm}&app_id=${appID}&app_key=${appKEY}&from=9&to=9`; //

            if (healthLabel !== undefined){
                base_url += `&health=${healthLabel.replace(/ /g, "-")}`;
            }

            const url = base_url;
            console.log(url);

            setLoading(true);
            setError(false);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setRecipes(data.hits);
                console.log(data.hits)
            } catch (error) {
                setError(true);
            }

            setLoading(false);
        };
        getRecipes();
    }, [healthLabel, searchTerm]);


    return (
        <div className="Search">
            <div className="Search-container">
                {
                    loading ? <div className="Search-loader"><Loader type="ThreeDots" color="#000"/></div>
                        : error ? (<div> error, could not fetch recipes from API </div>)
                        : (<div>
                            <h3 className="Search-results-header">search results</h3>
                            <RecipesList recipes={recipes}/>
                        </div>)
                }
            </div>
        </div>
    );
}

export default Search;