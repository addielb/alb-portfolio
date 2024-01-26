/* eslint-disable react/prop-types */
import React from 'react';
import WorkHistoryRole from './WorkHistoryRole.jsx';

function WorkHistoryBlurb({ industry, roles, skills, pictures, askAbout }) {
  // const [displayDescription, setDisplayDescription] = useState(false);
  // const [displayWidth, setDisplayWidth] = useState(0)
  // const [parentWidth, setParentWidth] = useState(0);
  var isFirst = true;

  const toggleDescriptionOn = (e) => {
    e.preventDefault();
    // setDisplayDescription(true);
    // var parentEle = document.getElementById('image-container');
    // var imageEle = document.getElementById('image');
    // var parentInfo = parentEle.getBoundingClientRect();
    // var imageInfo = imageEle.getBoundingClientRect();
    // setDisplayWidth(imageInfo.width);
    // setParentWidth(parentInfo.width);
  }

  const toggleDescriptionOff = (e) => {
    e.preventDefault();
    // setDisplayDescription(false);
  }

  return (
    <div className="workBlurbContainer">
      <h2 className="workIndustry">{industry}</h2>
      <div className="workInfoContainer">
        <div className="workHalfInfoContainer">
          {roles.map((role) => {
            return (<WorkHistoryRole
              key={role.business}
              title={role.title}
              business={role.business}
              bullets={role.bullets}
            />)
          })}
          <div className="workStoriesContainer">
            <p className="workExtraTitle">Ask me about:</p>
            <ul className="workExtraList">
              {askAbout.map((story) => {
                if (story !== askAbout[0]) {
                  isFirst = false;
                }
                return (
                  <li
                    className={`${isFirst ? 'workExtraListItemFirst' : ''} workExtraListItem`}
                    key={story}
                  >
                    {story}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="workHalfInfoContainer">
          <div className="workSkillsContainer">
            <p className="px-5 font-bold italic text-xl pt-2 mx-auto pl-[7%]">Skills:</p>
            <ul className="pb-2 pt-5 mx-auto flex flex-row justify-between max-w-prose">
              {skills.map((skill) => {
                if (skill === skills[0]) {
                  isFirst = true;
                } else {
                  isFirst = false;
                }
                return (
                <li
                  className={`${isFirst ? 'border-x-2' : 'border-r-2'} grow mx-auto px-4 border-lt-yellow`}
                  key={skill}
                >
                  {skill}
                </li>
                )
              })}
            </ul>
          </div>
          <div className='float-right flex content-start min-h-[65vh] max-h-[70vh] overflow-x-scroll overflow-y-hidden max-w-3xl snap-mandatory snap-x'>
            {pictures.map((pic) => {
              return (
                <div className="min-w-full object-cover place-content-center justify-center text-center mx-auto relative w-[500px]" id="image-container" key={pic.description}>
                  <img
                    onMouseEnter={toggleDescriptionOn}
                    onMouseLeave={toggleDescriptionOff}
                    className="object-cover max-h-[50vh] px-5 snap-center py-5 mx-auto hover:bg-blend-multiply rounded-3xl"
                    id="image"
                    src={pic.path}
                    alt={pic.description}
                  />
                <div className={`absolute left-0 right-0 p-8 bg-orange text-white object-cover text-center place-content-center justify-center rounded-3xl shadow-lg min-h-min`}>
                    <h4 className="font-bold text-xl">{pic.location}</h4>
                    <p>{pic.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkHistoryBlurb;
