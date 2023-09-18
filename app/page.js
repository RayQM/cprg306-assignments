import Image from 'next/image'
import StudentInfo from './StudentInfo';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm'>

      <h1 class='text-4xl'>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <a href='./week2'> week2 </a>
      </div>
      
    </main>
  );
}
