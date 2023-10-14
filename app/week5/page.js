import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h2 className="text-3xl font-bold m-2">Shopping List</h2>
            <ItemList/>
            <a href="/" className="display:flex text-center">back home</a>
        </main>
        
    );
}