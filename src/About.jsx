import React from 'react';
const { aboutInfo } = require('./information/About.js');
function About() {
  return (
    <div className="grid grid-cols-3 mx-10">
      {/* <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pt-10">
        Under construction
      </h2> */}
      <div>
        {aboutInfo.softwareEngineer.map((paragraph) => {
          return (
          <p className="mt-5">
            {paragraph}
          </p>
          )
        })}
      </div>
    </div>
  )
}

export default About;