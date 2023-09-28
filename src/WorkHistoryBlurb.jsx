import React, { useState, useEffect } from 'react';
import WorkHistoryRole from './WorkHistoryRole.jsx';

function WorkHistoryBlurb({ industry, roles, skills, pictures, askAbout }) {
  const [displayDescription, setDisplayDescription] = useState(false);
  // const [displayWidth, setDisplayWidth] = useState(0)
  // const [parentWidth, setParentWidth] = useState(0);
  var isFirst = true;

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
    <div className="max-h-[60vh] h-2/6 overflow-y-auto bg-yellow-600 mb-10 shadow-lg justify-center grow rounded-3xl pb-5">
      <h2 className="text-3xl font-bold pb-5 px-5 border-b-2 border-black pt-5">{industry}</h2>
      <div className="float-left pt-5 flex flex-col px-5 max-w-[40vw]">
        {roles.map((role) => {
          return (<WorkHistoryRole
            title={role.title}
            business={role.business}
            bullets={role.bullets}
          />)
        })}
        <div className="py-5 float-left mx-auto relative flex-wrap px-5 rounded-3xl bg-lime-900/70 text-white shadow-lg grow">
          <p className="font-bold italic text-xl mx-auto">Ask me about:</p>
          <ul className="flex flex-row pt-5 overflow-auto mx-auto">
            {askAbout.map((story) => {
              if (story !== askAbout[0]) {
                isFirst = false;
              }
              return (
                <li className={`${isFirst ? 'border-x-2' : 'border-r-2'} grow mx-auto px-4 border-white`}>{story}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-col float-right mx-auto relative flex-wrap px-5 pt-5">
        <div className="rounded-3xl bg-lime-900/70 text-white shadow-lg py-2">
          <p className="px-5 font-bold italic text-xl pt-2 mx-auto pl-[7%]">Skills</p>
          <ul className="pb-2 pt-5 mx-auto flex flex-row justify-between max-w-prose">
            {skills.map((skill) => {
              if (skill === skills[0]) {
                isFirst = true;
              } else {
                isFirst = false;
              }
              return (
              <li className={`${isFirst ? 'border-x-2' : 'border-r-2'} grow mx-auto px-4 border-white`}>{skill}</li>
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
                  className="object-cover max-h-[50vh] px-5 snap-center py-5 mx-auto hover:bg-blend-multiply rounded-3xl"
                  id="image"
                  src={pic.url}
                  alt={pic.description}
                />
              <div className={`absolute left-0 right-0 p-8 bg-lime-900/70 text-white object-cover text-center place-content-center justify-center rounded-3xl`}>
                  <h4 className="font-bold text-xl">{pic.location}</h4>
                  <p>{pic.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default WorkHistoryBlurb;
