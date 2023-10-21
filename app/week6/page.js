"use client"
import {NewItem}  from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json"
import { useState } from "react";

export default function Page(){
    //Initialize a state variable 
    const[items,setItems] = useState(itemsData);
    //Create an event handler function 
    function handleAddItem(newItem){
        console.log(newItem);
        setItems((currentItems)=>[...currentItems,newItem])
    }
    return(
        <main>
            <h1>Shopping list</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList ItemList={items}/>
        </main>
    )
}