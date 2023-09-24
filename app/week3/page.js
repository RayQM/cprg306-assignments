import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <ItemList/>
            <a href="/" className="display:flex text-center">back home</a>
        </main>
        
    );
}