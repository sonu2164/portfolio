import React from 'react'
import { BallCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';


const Tech = () => {
  return (
    <div className='flex justify-center'>


      <div className='flex flex-row flex-wrap justify-center gap-10 w-1/2 '>

        {technologies.map((tech, index) => (
          <div className='w-28 h-28 flex justify-center'
            key={tech.index}>
            <BallCanvas key={index}
              icon={tech.icon}
              name={tech.name} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default Tech;