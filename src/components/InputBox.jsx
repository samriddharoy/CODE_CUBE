import React from 'react';

const InputBox = ({ label, id, placeholder, type = "text", ...props}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-sm font-medium text-vanilla">{label}</label>
      <input
        type={type}
        id={id}
        {...props}
        placeholder={placeholder}
        className="border border-vanilla/60 placeholder-vanilla/70 rounded-md p-2 outline-none focus:ring-1 focus:ring-highlight focus:border-highlight"
      />
    </div>
  );
};

export default InputBox;
