import React from 'react';

import { aboutInfo } from './information/About.js';

function About() {

  return (
    <div className="aboutContainer" id="about">
      <h2 className="aboutTitle">
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
