"use client"

import {useState, useEffect} from 'react';

async function fetchMealIdeas(ingredient){
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const meals = response.json();
        return meals;
    }
    catch(error){
        console.log(error);
    }
}

export function MealIdeas(ingredient){
    const [meals, setMeals] = useState([]);

    async function loadMealsIdeas(){
        setMeals (await fetchMealIdeas(ingredient));
    }

    useEffect(()=>{
        loadMealsIdeas,[ingredient];
    })
return (
        <section>
            <div>
            <h2>Meal Ideas</h2>
            <p>Here are some meal ideas using {ingredient.strMeal}</p>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal} >
                        <h2>{meal.strMeal}</h2>
                    </li>
                ))}
            </ul>
        </div>
        </section>
        
    )
}