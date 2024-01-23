import React from 'react';
import WorkHistoryBlurb from './WorkHistoryBlurb.jsx';
import { WorkHx } from './information/WorkHx.js';

function WorkHistory() {
  return (
    <div id="work">
      <h2 className="sectionTitle">
        Work History
      </h2>
      <div className="workBlurbsContainer">
        {WorkHx.map((work) => {
          return <WorkHistoryBlurb
            key={work.industry}
            industry={work.industry}
            roles={work.roles}
            skills={work.skills}
            pictures={work.pictures}
            askAbout={work.askAbout}
          />
        })}
      </div>
    </div>
  )
}

export default WorkHistory;