import React from 'react';

function WorkHistoryRole({title, business, bullets}) {
  return (
    <div className="mb-5">
      <h4 className="text-xl pb-2">{business}</h4>
      <p className="italic">{title}</p>
      <ul>
        {bullets.map((bullet) => {
          return (
            <li>{bullet}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default WorkHistoryRole;