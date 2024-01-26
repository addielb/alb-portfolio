import React from 'react';
import { welcomeMessages } from './information/Welcome.js';

function Welcome() {
  // console.log(welcomeFile);
  return (
    <div className="welcomeContainer">
      <h2 className="welcomeTitle">
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