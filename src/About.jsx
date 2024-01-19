import React from 'react';

import { aboutInfo } from './information/About.js';

function About() {

  return (
    <div className="m-20 max-h-fit" id="about">
      <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pt-10">
        About me
      </h2>
      <div>
        {aboutInfo.copy.map((paragraph, index) => {
          if (index % 2 === 0) {
            return (
              <div className="flex flex-row justify-center items-center space-between gap-8" key={index}>
                <div className="w-[500px] h-[50vh] object-cover m-auto justify-center items-center text-center place-content-center">
                  <img className="rounded-full justify-center items-center mx-auto" src={aboutInfo.pictures[index].path} alt={aboutInfo.pictures[index].description}/>
                </div>
                <p className="mt-5 text-2xl text-justify max-w-[600px]" key={paragraph}>
                  {paragraph}
                </p>
              </div>
            )
          }
          return (
            <div className="flex flex-row justify-center items-center space-between gap-8" key={index}>
              <p className="mt-5 text-2xl text-justify max-w-[600px]" key={paragraph}>
                {paragraph}
              </p>
              <div className="w-[500px] h-[50vh] object-cover m-auto justify-center items-center">
                <img className="rounded-full justify-center items-center" src={aboutInfo.pictures[index].path} alt={aboutInfo.pictures[index].description}/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About;
