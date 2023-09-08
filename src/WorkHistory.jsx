import React from 'react';
import WorkHistoryBlurb from './WorkHistoryBlurb.jsx';

const { WorkHx } = require('./information/WorkHx.js');

function WorkHistory() {
  return (
    <div>
      <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white pt-10">
        Work History
      </h2>
      <p>
        In order of most interesting, these are some of the industries I've worked in and gained invaluable experience across many disciplines.
      </p>
      <div>
        {WorkHx.map((work) => {
          console.log('in work history')
          return <WorkHistoryBlurb
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