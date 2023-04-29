import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

function Projects(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((projects) => setProjects(projects));
  }, []);


  return(
    <div className="Projects">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default Projects;