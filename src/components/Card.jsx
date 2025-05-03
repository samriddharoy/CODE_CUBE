import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card'; // Import the Card component

function ProjectCard({ projectName }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the editor page with the project name
    navigate(`/editor/${projectName}`);
  };

  return (
    <Card>
      <div
        className="cursor-pointer hover:bg-[#D98C4C]/80 p-4 rounded-lg transition duration-300"
        onClick={handleClick}
      >
        <h3 className="text-xl font-bold text-white">{projectName}</h3>
      </div>
    </Card>
  );
}

export default ProjectCard;
