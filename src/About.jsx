import React from 'react';
import { useNavigate } from 'react-router';

const { aboutInfo } = require('./information/About.js');

function About() {
  const navigate = useNavigate();
  navigate(0);

  return (
    <div className="grid grid-cols-3 mx-10 p-10 gap-x-20">
      {/* <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pt-10">
        Under construction
      </h2> */}
      <div>
        {aboutInfo.softwareEngineer.map((paragraph) => {
          return (
          <p className="mt-5 text-2xl text-justify">
            {paragraph}
          </p>
          )
        })}
      </div>
      <div>
        {aboutInfo.pictures.map((pic) => {
          return (
            <img className="rounded-full mb-5" src={pic.url} alt={pic.description}/>
          )
        })}
      </div>
      <div>
        {aboutInfo.personal.map((para) => {
          return (
            <p className="mt-5 text-2xl text-justify">
              {para}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default About;