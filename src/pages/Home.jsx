import React from 'react';
import Navbar from '../components/Navbar';
import GridCard from '../components/GridCard';
import ListCard from '../components/ListCard';
import { useState } from 'react'; // Fixed: Corrected import statement for useState

function Home() {

    const[isGridlayout,setisGridlayout] = useState(false);
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between px-[100px] my-[40px]">
        <h2 className="text-2xl text-primary">Hi, Sam</h2>
        <div className="flex items-center">
          <input 
            type="text" 
            placeholder="search here" 
            className="border border-secondary/60 placeholder-secondary/70 rounded-l-md p-2 outline-none focus:ring-1 focus:ring-highlight focus:border-highlight w-[350px]" 
          />
          <button className='bg-highlight text-white rounded-r-md px-4 py-2'>+</button>
        </div>
      </div>

      <div className='cards'>
        {
        isGridlayout ? 
        <div className='grid px-[100px'>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        <GridCard/>
        </div>
        :
        <div className='list px-[100px]'>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        </div>
        }
   
           
      </div>
    </>
  );
}

export default Home;
