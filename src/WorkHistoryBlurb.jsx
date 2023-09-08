import React, { useState } from 'react';

function WorkHistoryBlurb({ industry, roles, skills, pictures, askAbout }) {
  return (
    <div>
      <h2>{industry}</h2>
      <div>
        {roles.map((role) => {
          return (<div></div>)
        })}
      </div>
      <ul>
        {skills.map((skill) => {
          return (
          <li>{skill}</li>
          )
        })}
      </ul>
      <div>
        <ul>Ask me about:
          {askAbout.map((story) => {
            return (
              <li>{story}</li>
            )
          })}
        </ul>
      </div>
      <div>
        {pictures.map((pic) => {
          return <img src={pic}/>
        })}
      </div>
    </div>
  )
}

export default WorkHistoryBlurb;