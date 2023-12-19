import React from 'react';
import { welcomeMessages } from './information/Welcome.js';

function Welcome() {
  // console.log(welcomeFile);
  return (
    <div className="mx-10 content-center grid place-items-center text-dark-green">
      <h2 className="inline-block align-top motion-safe:animate-bounce text-center mb-4 lg:text-9xl font-extrabold leading-none tracking-tight text-dark-green md:text-2xl sm:text-xl dark:text-white pt-10">
        Welcome
      </h2>
      <div className="max-w-7xl sm:max-w-max grid grid-cols-2 gap-x-12 flex sm:flex-col">
        <div className="text-center lg:text-5xl md:text-2xl lg:max-w-2xl sm:max-w-max">
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