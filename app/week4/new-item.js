"use client"

import { useState } from "react"

export function NewItem(){
   
    const {name, setName} = useState("")
    const {quantity, setQuantity} = useState(1)
    const {category, setCategory} = useState("Produce")
    

    const handleSubmit=(event)=>{
        event.preventDefault()
        var item = {name, quantity, category}
        console.log (item)
        alert(`you add ${quantity} of ${name} to ${category}`)
        setName("")
        setQuantity(1)
        setCategory(produce)
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
    return(
    <form onSubmit={handleSubmit}>
        <input value={name} onChange={setName} placeholder="Enter item name plz" required/>
        <input type="number" min="1" max="99" value={quantity} onChange={setQuantity} required/>
        <select value={category} onChange={setCategory}> 
        {categories.map((category) => (
          <option>
            {category}
          </option>
        ))}</select>
        <input type="submit" value="Submit" />
    </form>

    )

}