import React from 'react';

const Header = ({ heading, subheading }) => {
  return (
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold text-vanilla">{heading}</h3>
      <h5 className="text-sm text-vanilla/80 mt-2">{subheading}</h5>
    </div>
  );
};

export default Header;
