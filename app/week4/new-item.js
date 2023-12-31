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
        "option",
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
        <div className="w-full bg-blue-gray-100 flex justify-center ">

            <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
                <div className="mb-4">
                    <input value={name} onChange={handleNameChange} placeholder="Enter item name plz" required className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans "/>
                </div>
                <div className="flex justify-between">
                    <input type="number" min="1" max="99" value={quantity} onChange={handleQuantityChange} required className="ml-1 p-1 w-20 rounded-md text-black bg-gray-100 focus:bg-white "/>
                    <select value={category} onChange={handleCategoryChange} className=" ml-1 p-1 w-50 rounded-md text-black bg-gray-100 focus:bg-white " > 
                    {categories.map((category) => (
                    <option>
                        {category}
                    </option>
                    ))}</select>
                </div>
                <input type="submit" value="Submit" className="w-full py-2 px-4 mt-4 bg-sky-600 hover:bg-sky-500 rounded-md text-white" />
            </form>
        </div>

    )

}