"use client"

import { useState } from "react"
import Item from "./item"


export default function ItemList({ItemList}){
  const [sortBy , setSortBy] = useState('name')
  
 ItemList.sort((a,b)=>{
  if (sortBy === 'name'){
    return a.name.localeCompare(b.name)
  }
  else if(sortBy === 'category'){
    return a.category.localeCompare(b.category)
  }
 })

 function handleSort(event){
  setSortBy(event.target.value)
 }
 return(
    <div>
      <div className="flex gap-2 ">
        <h2 className="text-2xl font-bold">Sort Items</h2>
        <button onClick={handleSort} value="name"
        className={sortBy =="name" ?" bg-red-600 pl-2 pr-2 rounded-md ":" bg-blue-500 pl-2 pr-2 rounded-md"}>Name</button>
        <button onClick={handleSort} value="category"
        className={sortBy =="category" ?" bg-red-600 pl-2 pr-2 rounded-md ":" bg-blue-500 pl-2 pr-2 rounded-md"}>Category</button>
      </div>
      <div>
          {ItemList.map(item => (
        <Item item={item} />
          ))}
          </div>
    </div>
 )
}