/* eslint-disable react/prop-types */
import React from 'react';

function WorkHistoryRole({title, business, bullets}) {
  return (
    <div className="workRoleContainer">
      <h4 className="workRoleBusiness">{business}</h4>
      <p className="workRoleTitle">{title}</p>
      <ul>
        {bullets.map((bullet) => {
          return (
            <li key={bullet}>&#8226; {bullet}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default WorkHistoryRole;