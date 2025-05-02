import React, { useState } from "react";
import code1 from "../Image/code1.png";
import deleteIcon from "../Image/delete.jpg";
import Button from "./Button";

function ListCard() {
  const [isDeletemodelshow, setisDeletemodelshow] = useState(false);

  return (
    <>
      <div className="listcard mb-2 w-full bg-[#241410] border border-[#3E2C24] rounded-lg hover:bg-[#3E2C24] p-[20px] flex items-center justify-between transition-colors">
        <div className="flex items-center gap-4">
          <img
            className="w-[80px] rounded-md border border-[#D98C4C]"
            src={code1}
            alt="code"
          />
          <div>
            <h2 className="text-[20px] text-[#D8CAB8]">My First Project</h2>
            <p className="text-[14px] text-[#D98C4C]">Created in 9 Mon 2023</p>
          </div>
        </div>
        <img
          onClick={() => setisDeletemodelshow(true)}
          className="w-[30px] cursor-pointer hover:scale-105 transition-transform"
          src={deleteIcon}
          alt="delete"
        />
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

export default ListCard;
