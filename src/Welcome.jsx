import React from 'react';
const { welcomeMessages } = require('./information/Welcome.js');

function Welcome() {
  // console.log(welcomeFile);
  return (
    <div className="bg-gradient-to-r from-yellow-400 to-yellow-100 mx-10 content-center">
      <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pt-10">
        Welcome
      </h2>
      <div className="max-w-5xl place-content-center">
        <div className="text-center text-xl">
          {welcomeMessages.intro}
        </div>
        <ul className="mt-10 text-center text-xl mb-5">
          <h3 className="text-2xl font-bold">{welcomeMessages.strengthsHeader}</h3>
          {welcomeMessages.strengths.map((strength) => {
            return (
              <li className="text-center text-xl">
                {strength}
              </li>
            )
          })}
        </ul>
        <div className="text-center text-xl">
          {welcomeMessages.directory.map((directive) => {
            return (
              <div>
                {directive}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Welcome;