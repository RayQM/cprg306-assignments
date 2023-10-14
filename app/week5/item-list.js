"use client"; 

import {useState} from 'react'; 
import Item from './item';
import items from'./items.json';

export default function ItemList(){
    
    const [sortBy, setSortBy] = useState("name");
    
    items.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
    });
    



    function handleSortChange(event){
        setSortBy(event.target.value);
    }

    return (
        <div>
        <div className="flex flex-row p-4 gap-4">
          <label className='leading-10'>Sort Shopping List By:</label>
          <button
            onClick={handleSortChange}
            value="name"
            className={sortBy == "name" ? "bg-red-500 pr-2 pl-2" : "bg-gray-500 pr-2 pl-2"}
          >
            Name
          </button>
          <button
            onClick={handleSortChange}
            value="category"
            className={sortBy == "category" ? "bg-red-500  pr-2 pl-2" : "bg-gray-500 pr-2 pl-2"}
          >
            Category
          </button>
          </div>
          <div>
          {items.map(item => (
        <Item key={item.id} item={item} />
          ))}
          </div>
        </div>
      
    );
}
