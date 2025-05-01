import React from "react";
import code1 from "../Image/code1.png";
import deleteIcon from "../Image/delete.jpg";

function ListCard() {
  return (
    <div>
      <div className="listcard mb-2 w-full bg-[#241410] border border-[#3E2C24] rounded-lg hover:bg-[#3E2C24] p-[20px] flex items-center justify-between transition-colors">
        <div className="flex items-center gap-4">
          <img className="w-[80px] rounded-md border border-[#D98C4C]" src={code1} alt="code" />
          <div>
            <h2 className="text-[20px] text-[#D8CAB8]">My First Project</h2>
            <p className="text-[14px] text-[#D98C4C]">Created in 9 Mon 2023</p>
          </div>
        </div>
        <img className="w-[30px] cursor-pointer hover:scale-105 transition-transform" src={deleteIcon} alt="delete" />
      </div>
    </div>
  );
}

export default ListCard;
