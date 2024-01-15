import React from 'react';

import { aboutInfo } from './information/About.js';

function About() {

  return (
    <div className="grid grid-cols-3 mx-10 p-10 gap-x-20" id="about">
      {/* <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pt-10">
        Under construction
      </h2> */}
      <div>
        {aboutInfo.softwareEngineer.map((paragraph) => {
          return (
          <p className="mt-5 text-2xl text-justify" key={paragraph}>
            {paragraph}
          </p>
          )
        })}
      </div>
      <div>
        {aboutInfo.pictures.map((pic) => {
          return (
            <img className="rounded-full mb-5" key={pic.path} src={pic.path} alt={pic.description}/>
          )
        })}
      </div>
      <div>
        {aboutInfo.personal.map((para) => {
          return (
            <p className="mt-5 text-2xl text-justify" key={para}>
              {para}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default About;