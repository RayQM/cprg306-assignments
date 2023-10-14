import Image from 'next/image'
import StudentInfo from './StudentInfo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm'>

      <h1 class='text-4xl'>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <ul>
        <li><a href='./week2'> week2 </a></li>
        <li><Link href="./week3">week3</Link></li>
        <li><Link href="./week4">week4</Link></li>
        <li><Link href="./week5">week5</Link></li>
      </ul>
     
      </div>
      
    </main>
  );
}
