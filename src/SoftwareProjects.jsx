import React from 'react';

import SoftwareProjectBlurb from './SoftwareProjectBlurb.jsx';
import { projects } from './information/SoftwareProjects.js';

function SoftwareProjects() {
  return (
    <div id="software">
      <div>
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Software Applications
        </h2>
        {/* <p className="text-center mb-4 text-xl">These are some of my favorite projects. Feel free to visit the GitHub repos for more detailed information!</p> */}
      </div>
      <div className="flex flex-row space-between mx-10 p-10 gap-x-20">
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