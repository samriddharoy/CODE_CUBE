import React from 'react';
import Button from './Button'; 

function ListCard() {
  const [isdeleteModelshow, setIsDeleteModelShow] = React.useState(false);

  return (
    <>
      <div className="listCard mb-2 w-full flex items-center justify-between p-[10px] bg-primary cursor-pointer rounded-lg hover:bg-secondary transition duration-200 ease-in-out">
        <div className="flex items-center gap-2">
          <div>
            <h3 className="text-[20px] text-vanilla">My Project</h3>
            <p className="text-[14px] text-gray-400">Created in 9 Mon 2025</p>
          </div>
        </div>
        <div>{/* You can add buttons, icons, or actions here */}</div>
      </div>

      {/* Modal */}
      <div className="model fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50">
        <div className="mainmodel w-[400px] h-[300px] bg-primary rounded-lg flex flex-col items-center justify-center gap-6 p-6">
          <h3 className="text-2xl text-center text-vanilla font-semibold">
            DO YOU WANT TO DELETE <br />
            this project?
          </h3>

          <div className="w-full flex gap-4">
            <Button text="Cancel" />
            <Button
              text="Delete"
              className="w-full text-center bg-red-600 text-vanilla font-semibold py-2 rounded-md cursor-pointer hover:bg-red-700 active:scale-95 transition"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ListCard;
