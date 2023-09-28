import React, { useState, useEffect } from 'react';
import WorkHistoryRole from './WorkHistoryRole.jsx';

function WorkHistoryBlurb({ industry, roles, skills, pictures, askAbout }) {
  const [displayDescription, setDisplayDescription] = useState(false);
  // const [displayWidth, setDisplayWidth] = useState(0)
  // const [parentWidth, setParentWidth] = useState(0);

  const toggleDescriptionOn = (e) => {
    e.preventDefault();
    setDisplayDescription(true);
    // var parentEle = document.getElementById('image-container');
    // var imageEle = document.getElementById('image');
    // var parentInfo = parentEle.getBoundingClientRect();
    // var imageInfo = imageEle.getBoundingClientRect();
    // setDisplayWidth(imageInfo.width);
    // setParentWidth(parentInfo.width);
  }

  const toggleDescriptionOff = (e) => {
    e.preventDefault();
    setDisplayDescription(false);
  }

  return (
    <div className="max-h-[60vh] h-2/6 overflow-y-auto bg-yellow-600 mb-10 shadow-lg justify-center grow">
      <h2 className="text-3xl font-bold pb-5 px-5 border-b-2 border-black pt-5">{industry}</h2>
      <div className="float-left max-w-xl pt-5">
        {roles.map((role) => {
          return (<WorkHistoryRole
            title={role.title}
            business={role.business}
            bullets={role.bullets}
          />)
        })}
      </div>
      <ul className="pb-2 pt-5 max-w-lg float-right flex flex-col">
        <span className="font-bold italic">Skills</span>
        {skills.map((skill) => {
          return (
          <li>{skill}</li>
          )
        })}
      </ul>
      <div className="pb-2 pt-5 float-left mx-auto relative w-[500px]">
        <ul>
          <span className="font-bold italic">Ask me about:</span>
          {askAbout.map((story) => {
            return (
              <li>{story}</li>
            )
          })}
        </ul>
      </div>
      <div className='float-right flex content-start min-h-[60vh] max-h-[60vh] overflow-x-scroll overflow-y-hidden max-w-3xl snap-mandatory snap-x'>
        {pictures.map((pic) => {
          return (
            <div className="min-w-full object-cover place-content-center justify-center text-center mx-auto relative w-[500px]" id="image-container">
              <img
                onMouseEnter={toggleDescriptionOn}
                onMouseLeave={toggleDescriptionOff}
                className="object-cover max-h-[50vh] px-5 snap-center py-5 mx-auto hover:bg-blend-multiply"
                id="image"
                src={pic.url}
                alt={pic.description}
              />
             <div className={`absolute left-0 right-0 p-8 bg-gray-800 opacity-70 text-white object-cover text-center place-content-center justify-center`}>
                <h4 className="font-bold">{pic.location}</h4>
                <p>{pic.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WorkHistoryBlurb;
