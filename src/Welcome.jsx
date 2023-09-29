import React from 'react';
const { welcomeMessages } = require('./information/Welcome.js');

function Welcome() {
  // console.log(welcomeFile);
  return (
    <div className="mx-10 content-center grid place-items-center text-dark-green">
      <h2 className="inline-block align-top motion-safe:animate-bounce text-center mb-4 text-9xl font-extrabold leading-none tracking-tight text-dark-green md:text-5xl lg:text-6xl dark:text-white pt-10">
        Welcome
      </h2>
      <div className="max-w-7xl grid grid-cols-2 gap-x-12">
        <div className="text-center text-5xl max-w-2xl">
          {welcomeMessages.intro}
        </div>
        {/* <ul className="mt-10 text-center text-2xl mb-5 max-w-md">
          <h3 className="text-2xl font-bold mb-2">{welcomeMessages.strengthsHeader}</h3>
          {welcomeMessages.strengths.map((strength) => {
            return (
              <li className="text-center text-xl">
                {strength}
              </li>
            )
          })}
        </ul> */}
        <main className="relative mix-blend-normal">
          <img className="rounded-3xl cols-span-2 scale-100" src="https://source.unsplash.com/cYyqhdbJ9TI"/>
        </main>
      </div>
    </div>
  )
}

export default Welcome;