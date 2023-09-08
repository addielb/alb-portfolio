import React from 'react';

function WorkHistoryRole({title, business, bullets}) {
  return (
    <div>
      <h4>{business}</h4>
      <p>{title}</p>
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