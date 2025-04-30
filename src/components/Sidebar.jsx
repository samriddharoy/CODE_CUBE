import React from 'react';
import Button from './Button';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-secondary p-4 flex flex-col justify-between rounded-tr-2xl rounded-br-2xl">
      <div>
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border-2 border-vanilla rounded-full">
          <img
            src="logo"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <p className="text-center mb-10 text-vanilla">CODE CUBE</p>
      </div>
      <Button text="Create New Playground" />
    </aside>
  );
};

export default Sidebar;
