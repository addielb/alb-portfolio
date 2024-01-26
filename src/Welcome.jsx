import React from 'react';
import { welcomeMessages } from './information/Welcome.js';

function Welcome() {
  // console.log(welcomeFile);
  return (
    <div className="welcomeContainer">
      <h2 className="welcomeTitle">
        Welcome
      </h2>
      <div className="welcomeMsgContainer">
        <div className="welcomeMsg">
          {welcomeMessages.intro}
        </div>
        <main className="welcomeImgContainer">
          <img className="welcomeImg" src="https://source.unsplash.com/cYyqhdbJ9TI"/>
        </main>
      </div>
    </div>
  )
}

export default Welcome;