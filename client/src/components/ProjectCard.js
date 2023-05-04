function ProjectCard({project}) {
  return (
    <div className="ProjectCard">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectCard;