import React from 'react';
import WorkHistoryBlurb from './WorkHistoryBlurb.jsx';
import { WorkHx } from './information/WorkHx.js';

function WorkHistory() {
  return (
    <div className="mx-10" id="work">
      <h2 className="text-center mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Work History
      </h2>
      <p className="text-center text-xl">
        In order of most interesting, these are some of the industries I&apos;ve worked in before software engineering and gained invaluable experience across many disciplines.
      </p>
      <div className="pt-10 mx-10 justify-center place-content-center flex flex-col">
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