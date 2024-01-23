import React from 'react';

import SoftwareProjectBlurb from './SoftwareProjectBlurb.jsx';
import { projects } from './information/SoftwareProjects.js';

function SoftwareProjects() {
  return (
    <div id="software">
      <h2 className="sectionTitle">
        Software Applications
      </h2>
      <div className="softwareBlurbsContainer">
        {projects.map((project) => {
          return <SoftwareProjectBlurb
            key={project.title}
            title={project.title}
            link={project.link}
            description={project.description}
            role={project.role}
            path={project.path}
          />
        })}
      </div>
    </div>
  )
}

export default SoftwareProjects;