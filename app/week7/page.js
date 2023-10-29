"use client"
import {NewItem}  from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json"
import { useState } from "react";
import { MealIdeas } from "./meal-ideas";

export default function Page(){
    //Initialize a state variable 
    const[items,setItems] = useState(itemsData);
    const[selectedItemName, setSelectedItemName] = useState(null)
    //Create an event handler function 
    function handleAddItem(newItem){
        console.log(newItem);
        setItems((currentItems) => [...currentItems, newItem]);
    }
    function handleItemSelect(ingredient){
        let cleanedStr = ingredient.name;
        setSelectedItemName(cleanedStr); 
    }
    return(
        <main>
            <h1>Shopping list</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList Items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selectedItemName}/>
        </main>
    )
}