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
              <div className="aboutBlurbContainer" key={index}>
                <div className="aboutImgContainer">
                  <img className="aboutImg" src={aboutInfo.pictures[index].path} alt={aboutInfo.pictures[index].description}/>
                </div>
                <p className="aboutText" key={paragraph}>
                  {paragraph}
                </p>
              </div>
            )
          }
          return (
            <div className="aboutBlurbContainer" key={index}>
              <p className="aboutText" key={paragraph}>
                {paragraph}
              </p>
              <div className="aboutImgContainer">
                <img className="aboutImg" src={aboutInfo.pictures[index].path} alt={aboutInfo.pictures[index].description}/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About;
