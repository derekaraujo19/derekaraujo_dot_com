import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function Projects(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then((r) => r.json())
      .then((projects) => setProjects(projects));
  }, []);


  return(
    <div className="Projects">
      <Container>
        <Row className="rows">
          {projects.map((project) => (
            <Col className="px-4 columns" xl={6}  lg={6} md={12} key={project.id}>
              <ProjectCard
              key={project.id}
              project={project}
              />
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
}

export default Projects;