import { FaExternalLinkAlt, FaGithub, FaYoutube } from 'react-icons/fa';

function ProjectCard({project}) {

  return (
    <div className="ProjectCard">
      <img src={project.screenshot}
        alt="Screenshot"
        width='700px'
        height='389'
        style={{borderRadius:'2px'}}
      />
      <h2>{project.title}</h2>
      <p id="proj_desc">{project.description}</p>
      <div className="ProjIconList">
        {project.deploy_link ? <li><a href={project.deploy_link} className="ProjIcons" target="_blank" rel='noopener noreferrer'> <FaExternalLinkAlt/> Deployed </a></li> : ""}
        <li><a href={project.github_link} className="ProjIcons" target="_blank" rel='noopener noreferrer'> <FaGithub/> Github </a></li>
        {project.demo_link ? <li><a href={project.demo_link} className="ProjIcons" target="_blank" rel='noopener noreferrer'> <FaYoutube/> Demo </a></li> : ""}
      </div>
      <div> Tech used:
        <li id="tech_used">{project.tech_used}</li>
      </div>
    </div>
  );
}

export default ProjectCard;