import React from 'react';

import SoftwareProjectBlurb from './SoftwareProjectBlurb.jsx';

const { projects } = require('./information/SoftwareProjects.js')

function SoftwareProjects() {
  return (
    <div>
      <div>
        <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Software Applications
        </h2>
        <p className="text-center mb-4 text-xl">These are some of my favorite projects. Feel free to visit the GitHub repos for more detailed information!</p>
      </div>
      <div className="grid grid-cols-3 mx-10 p-10 gap-x-20">
        {projects.map((project) => {
          return <SoftwareProjectBlurb
            title={project.title}
            link={project.link}
            description={project.description}
            role={project.role}
            gifLink={project.gifLink}
          />
        })}
      </div>
    </div>
  )
}

export default SoftwareProjects;