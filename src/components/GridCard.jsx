import React, { useState } from "react";
import code1 from "../Image/code1.png";
import deleteIcon from "../Image/delete.jpg";
import Button from "./Button"; // Ensure the path is correct

function GridCard() {
  const [isDeletemodelshow, setisDeletemodelshow] = useState(false);

  return (
    <>
      <div className="px-2">
        <div className="gridcard bg-[#241410] w-[270px] p-[12px] h-[200px] rounded-lg shadow-lg shadow-black/50 hover:bg-[#3E2C24] transition-colors">
          <img className="w-[90px] rounded-md border border-[#D98C4C]" src={code1} alt="code" />
          <h3 className="text-[20px] text-[#D8CAB8] w-[90%] mt-2 line-clamp-1">My Project</h3>
          <p className="text-[14px] text-[#D98C4C]">Created in 9 Mon 2023</p>
          <img
            className="w-[20px] mt-2 cursor-pointer hover:scale-105 transition-transform"
            src={deleteIcon}
            alt="delete"
            onClick={() => setisDeletemodelshow(true)}
          />
        </div>
      </div>

      {isDeletemodelshow && (
        <div className="model fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] flex justify-center items-center flex-col">
          <div className="mainmodel w-[25vw] h-[25vh] bg-[#efe3e3] rounded-lg p-[20px]">
            <h3 className="text-3xl text-[#241410] font-semibold">
              Do you want to delete <br />
              this project?
            </h3>
            <div className="flex items-center gap-[10px] mt-[20px]">
              <Button text="Delete" />
              <Button text="Cancel" onClick={() => setisDeletemodelshow(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GridCard;
