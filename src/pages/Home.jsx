import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import GridCard from "../components/GridCard";
import ListCard from "../components/ListCard";

function Home() {
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);
  const [isGridLayout, setIsGridLayout] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectNameInput, setProjectNameInput] = useState("");

  const navigate = useNavigate();

  // Load projects from localStorage when the component mounts
  useEffect(() => {
    const storedProjects = localStorage.getItem("projects");
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    }
  }, []);

  // Save projects to localStorage whenever projects state changes
  useEffect(() => {
    if (projects.length > 0) {
      localStorage.setItem("projects", JSON.stringify(projects));
    }
  }, [projects]);

  const handleCreateProject = () => {
    if (!projectNameInput.trim()) return;
    const name = projectNameInput.trim();
    const newProjects = [
      ...projects,
      { name, createdAt: new Date().toISOString() }
    ];
    setProjects(newProjects);
    setIsCreateModelShow(false);
    setProjectNameInput("");
    navigate(`/editor/${encodeURIComponent(name)}`);
  };

  const handleCardClick = (name) => {
    navigate(`/editor/${encodeURIComponent(name)}`);
  };

  const handleDeleteProject = (projectName) => {
    const updatedProjects = projects.filter((project) => project.name !== projectName);
    setProjects(updatedProjects);
  };

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
            onClick={() => setIsCreateModelShow(true)}
            className="bg-highlight text-white rounded-r-md px-4 py-2"
          >
            +
          </button>
          <button
            onClick={() => setIsGridLayout(!isGridLayout)}
            className="bg-highlight text-white rounded-md px-4 py-2 ml-4"
          >
            {isGridLayout ? "Switch to List" : "Switch to Grid"}
          </button>
        </div>
      </div>

      <div className="cards px-[100px]">
        {projects.length === 0 ? (
          <p className="text-secondary/60">No projects yet. Create one!</p>
        ) : isGridLayout ? (
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <div key={idx} onClick={() => handleCardClick(project.name)} className="cursor-pointer">
                <GridCard title={project.name} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {projects.map((project, idx) => (
              <div key={idx}>
                <ListCard 
                  title={project.name} 
                  onDelete={() => handleDeleteProject(project.name)} 
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {isCreateModelShow && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-center z-50">
          <div className="w-[90vw] max-w-[400px] shadow-2xl shadow-black/50 bg-[#eedddd] rounded-[10px] p-[20px]">
            <h3 className="text-2xl text-[#241410] font-semibold mb-4">
              Create New Project
            </h3>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Project Name"
                value={projectNameInput}
                onChange={(e) => setProjectNameInput(e.target.value)}
                className="w-full p-2 rounded-md border border-[#D98C4C] focus:outline-none focus:ring-2 focus:ring-[#D98C4C] placeholder:text-[#3E2C24]"
              />
            </div>

            <div className="flex items-center gap-4 justify-end">
              <button
                onClick={handleCreateProject}
                className="bg-[#D98C4C] text-white rounded-md px-4 py-2 hover:bg-[#c07a3d] transition"
              >
                Create
              </button>
              <button
                onClick={() => setIsCreateModelShow(false)}
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
