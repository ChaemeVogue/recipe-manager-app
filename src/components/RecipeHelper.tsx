import React from 'react';
import {Link} from 'react-router-dom';
import './RecipeHelper.css';

interface Props {
    title: string;
    image: string;
    uri?: string | undefined;
    ingredients?: any[] | undefined;
    servings?: string | undefined;
    calories?: number | undefined;
    source?: string | undefined;
    dietLabels?: any[] | undefined;
    healthLabels?: any[] | undefined;
}

// Get a recipe's ID
// ex.
//  - Recipe uri = http://www.edamam.com/ontologies/edamam.owl#recipe_0948714be1219cc4d2110d8b7898a78e
//  - Recipe id = recipe_0948714be1219cc4d2110d8b7898a78e
function RecipeId(uri: string) {
    let temp = uri;
    for (let i = 0; i < uri.length; i++) {
        if (uri[i] === "#") {
            temp = uri.substring(i + 1);
        }
    }
    return temp;
}

function RecipeHelper({title, image, uri, ingredients, servings, calories, source, dietLabels, healthLabels}: Props) {
    // if recipeId is undefined => recipe details view
    if (uri === undefined) {
        return (
            <div className="RecipeHelper">
                <div className="RecipeHelper-info">
                    <h4 className="RecipeHelper-title">{title}</h4>
                    <ul className="RecipeHelper-ingredients">
                        {
                            ingredients!.map((ingredient, index) =>
                                <li className="RecipeHelper-ingredient" key={index}>{ingredient.text}</li>
                            )
                        }
                    </ul>

                    <ul className="RecipeHelper-moreInfo">
                        <li>Servings: {servings}</li>
                        <li>Calories per serving: {Math.round(calories!)}</li>
                        <li>Source: {source}</li>
                    </ul>

                    <div className="RecipeHelper-labels-container">
                        <ul className="RecipeHelper-labels">
                            <h5 className="RecipeHelper-label-header" >DIET LABELS:</h5>
                            {
                                dietLabels!.map((dietLabel, index) =>
                                    <li className="RecipeHelper-dietLabel" key={index}>{dietLabel}</li>
                                )
                            }
                        </ul>
                        <ul className="RecipeHelper-labels">
                            <h5 className='RecipeHelper-label-header'>HEALTH LABELS:</h5>
                            {
                                healthLabels!.map((healthLabel, index) =>
                                    <li className="RecipeHelper-healthLabel" key={index}>{healthLabel}</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
                <img className="RecipeHelper-img" src={image} alt=""/>
            </div>
        );
    }
    // else if recipeId is defined => recipe list view
    else {
        const recipeId = RecipeId(uri!);
        return (
            <div>
                <Link to={"/recipe/" + recipeId}>
                    <img src={image} alt=""/>
                </Link>
                <h4>{title}</h4>
            </div>
        );
    }
}

export default RecipeHelper;
