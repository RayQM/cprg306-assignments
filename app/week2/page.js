import StudentInfo from "../StudentInfo"
export default function ShoppingList(){
    return(
        <main className="flex min-h-screen items-center justify-between p-24 display:flex;">
            <h1 class='text-6xl  w-full'>My Shopping List</h1>
            <StudentInfo/>
            <a href="/">back home</a>
        </main>
    )
}