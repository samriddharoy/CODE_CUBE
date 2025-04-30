import React, { useState } from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar'; // import Sidebar

const ProjectMenu = () => {
  const [projects, setProjects] = useState(["Project 1", "Project 2"]);
  const [showInput, setShowInput] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");

  const handleAddFolder = () => {
    setShowInput(true);
  };

  const handleCreateProject = () => {
    if (newProjectName.trim() !== "" && !projects.includes(newProjectName.trim())) {
      setProjects([...projects, newProjectName.trim()]);
      setNewProjectName("");
      setShowInput(false);
    } else {
      alert('Please enter a unique project name.');
    }
  };

  const handleCancel = () => {
    setShowInput(false);
    setNewProjectName("");
  };

  return (
    <Layout>
      <div className="flex h-full font-mono">
        {/* Reusable Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center border-b border-vanilla pb-4 mb-6">
            <h1 className="text-2xl text-primary">My Playground</h1>
            <div className="relative">
              <button
                onClick={handleAddFolder}
                className="text-highlight hover:underline"
              >
                + New Folder
              </button>

              {showInput && (
                <div className="absolute right-0 mt-2 bg-secondary p-3 rounded shadow-lg z-10">
                  <input
                    type="text"
                    placeholder="Enter Project Name"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    className="bg-primary text-vanilla border border-vanilla rounded px-2 py-1 mb-2 w-48"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleCreateProject}
                      className="text-sm bg-highlight text-primary px-2 py-1 rounded"
                    >
                      Create
                    </button>
                    <button
                      onClick={handleCancel}
                      className="text-sm border border-vanilla text-vanilla px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Button key={index} text={project} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default ProjectMenu;
