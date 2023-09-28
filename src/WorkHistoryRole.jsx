import React from 'react';

function WorkHistoryRole({title, business, bullets}) {
  return (
    <div className="mb-5 pb-5 border-b-2 border-black grow">
      <h4 className="text-xl pb-1">{business}</h4>
      <p className="italic pb-1">{title}</p>
      <ul>
        {bullets.map((bullet) => {
          return (
            <li>&#8226; {bullet}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default WorkHistoryRole;