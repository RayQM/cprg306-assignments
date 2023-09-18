import StudentInfo from "../StudentInfo"
export default function ShoppingList(){
    return(
        <main class="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 class='text-6xl  w-full'>My Shopping List</h1>
            <StudentInfo/>
            <a href="/">back home</a>
        </main>
    )
}