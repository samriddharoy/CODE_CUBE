import React from "react";
import code1 from "../Image/code1.png";
import deleteIcon from "../Image/delete.jpg";

function GridCard() {
  return (
    <div className="px-2"> {/* shifts slightly to the right */}
      <div className="gridcard bg-[#241410] w-[270px] p-[12px] h-[200px] rounded-lg shadow-lg shadow-black/50 hover:bg-[#3E2C24] transition-colors">
        <img className="w-[90px] rounded-md border border-[#D98C4C]" src={code1} alt="code" />
        <h3 className="text-[20px] text-[#D8CAB8] w-[90%] mt-2 line-clamp-1">My Project</h3>
        <p className="text-[14px] text-[#D98C4C]">Created in 9 Mon 2023</p>
        <img className="w-[20px] mt-2 cursor-pointer hover:scale-105 transition-transform" src={deleteIcon} alt="delete" />
      </div>
    </div>
  );
}

export default GridCard;
