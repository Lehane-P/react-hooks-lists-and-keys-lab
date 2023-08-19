import React from "react";


function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <div>
      <h3>{name}</h3>
      <p>{about}</p>
      {technologies.map((tech) =>(
        <span key={tech}>{tech}</span>
      )
      )}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
