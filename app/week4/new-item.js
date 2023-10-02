"use client"

import { useState } from "react"

export function NewItem(){
   
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState("Produce")
    

    const handleSubmit=(event)=>{
        event.preventDefault()
        var item = [name, quantity, category]
        console.log (item)
        alert(`you add ${quantity} of ${name} to ${category}`)
        setName("")
        setQuantity(1)
        setCategory("Produce")
    }
    const categories = [
        "Produce",
        "Dairy",
        "Bakery",
        "Meat",
        "Frozen Foods",
        "Canned Goods",
        "Dry Goods",
        "Beverages",
        "Snacks",
        "Household",
        "Other",
      ];
      const handleNameChange=(event)=>{
        setName(event.target.value)
      }
      const handleQuantityChange=(event)=>{
        setQuantity(event.target.value)
      }
      const handleCategoryChange=(event)=>{
        setCategory(event.target.value)
      }

    return(
    <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleNameChange} placeholder="Enter item name plz" required className="w-40 "/>
        <input type="number" min="1" max="99" value={quantity} onChange={handleQuantityChange} required className="text-black "/>
        <select value={category} onChange={handleCategoryChange} className=" text-black round " > 
        {categories.map((category) => (
          <option>
            {category}
          </option>
        ))}</select>
        <input type="submit" value="Submit" />
    </form>

    )

}