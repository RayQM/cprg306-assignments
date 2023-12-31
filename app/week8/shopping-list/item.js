export default function Item({item,onSelect}){
    let text = `Buy ${item.quantity} in ${item.category}`;
    return(

    <ul onClick={()=>onSelect(item.name)}className="p-2 m-2 hover:my-4 hover:text-center hover:ease-auto hover:duration-500 text-stone-50 bg-violet-950 max-w-md">
        <li className="cursor-pointer text-xl font-bold">{item.name}</li>
        <li className="cursor-pointer">{text}</li>
    </ul>
    )
   
    
}