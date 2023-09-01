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
          <p className="mt-5 text-3xl">
            {paragraph}
          </p>
          )
        })}
      </div>
      <div>
        <img className="rounded-full mb-5" src="https://avatars.githubusercontent.com/u/111605723?v=4"/>
        <img className="rounded-full mb-5" src="https://lh3.googleusercontent.com/drive-viewer/AITFw-xq228I-KoX-kfMwQT8bXQxzCGFoHT44fxRGRpFcCZFayyLzPWBP1knp6bys5HaiHaPD7bv1uhY3Rqb5fTYYiPxb63Y9Q=s1600"/>
        <img className="rounded-full" src="https://lh3.googleusercontent.com/drive-viewer/AITFw-yTDFxx1TwfuB3dLiYe7KDtlFBlYS8g-z-KRVz8S5KMpmpxijPQfGGpa0EczhllP4jiGq8ogtUrKwl0olOtONGH2yNvRg=s1600"/>
      </div>
    </div>
  )
}

export default About;