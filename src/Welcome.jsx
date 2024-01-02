import React from 'react';
import { welcomeMessages } from './information/Welcome.js';

function Welcome() {
  // console.log(welcomeFile);
  return (
    <div className="mx-10 p-10 content-center grid place-items-center text-dark-green">
      <h2 className="inline-block align-top motion-safe:animate-bounce text-center mb-4 lg:text-7xl font-extrabold leading-none tracking-tight text-dark-green md:text-2xl sm:text-2xl dark:text-white pt-5">
        Welcome
      </h2>
      <div className="max-w-7xl sm:max-w-max gap-12 flex flex-col">
        <div className="text-center lg:text-5xl md:text-2xl lg:max-w-2xl sm:max-w-max self-center">
          {welcomeMessages.intro}
        </div>
        <main className="relative mix-blend-normal">
          <img className="rounded-3xl scale-100" src="https://source.unsplash.com/cYyqhdbJ9TI"/>
        </main>
      </div>
    </div>
  )
}

export default Welcome;