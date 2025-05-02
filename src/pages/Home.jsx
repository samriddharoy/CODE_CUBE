import React, { useState } from "react";
import Navbar from "../components/Navbar";
import GridCard from "../components/GridCard";
import ListCard from "../components/ListCard";

function Home() {
  const [iscretaemodelshow, setiscreateModelshow] = useState(false);
  const [isGridlayout, setisGridlayout] = useState(false);

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
          <button
            onClick={() => {
              setiscreateModelshow(true);
            }}
            className="bg-highlight text-white rounded-r-md px-4 py-2"
          >
            +
          </button>
        </div>
      </div>

      <div className="cards">
        {isGridlayout ? (
          <div className="grid px-[100px]">
            <GridCard />
            <GridCard />
            <GridCard />
            <GridCard />
          </div>
        ) : (
          <div className="list px-[100px]">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        )}
      </div>

      {iscretaemodelshow && (
        <div className="createModelcon fixed inset-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-50">
          <div className="createModel w-[90vw] max-w-[400px] shadow-2xl shadow-black/50 bg-[#eedddd] rounded-[10px] p-[20px]">
            <h3 className="text-2xl text-[#241410] font-semibold mb-4">
              Create New Project
            </h3>

            <div className="inputBox mb-4">
              <input
                type="text"
                placeholder="Project Name"
                className="w-full p-2 rounded-md border border-[#D98C4C] focus:outline-none focus:ring-2 focus:ring-[#D98C4C] placeholder:text-[#3E2C24]"
              />
            </div>

            <div className="flex items-center gap-4 justify-end">
              <button className="bg-[#D98C4C] text-white rounded-md px-4 py-2 hover:bg-[#c07a3d] transition">
                Create
              </button>
              <button
                onClick={() => setiscreateModelshow(false)}
                className="bg-[#D98C4C] text-white rounded-md px-4 py-2 hover:bg-[#c07a3d] transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
