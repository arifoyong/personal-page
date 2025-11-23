'use client'
import { TypeAnimation } from 'react-type-animation';


export default function AboutMe() {

  return (
    <div className='mt-8'>
      <p className='text-4xl'>Hi, my name is <span className='font-bold'>Arif Oyong</span>
      </p>
      <p className='mt-4 text-xl'>I am a software engineer</p>
      <p className='text-xl'>
        <span>I&nbsp;</span>
        <TypeAnimation
          sequence={[
            'leverage LLMs for problem-solving', 1000,
            'do Full Stack development', 1000,
            'solve problems with data analytics', 1000,
            'do data visualization with PowerBI', 1000,
          ]}
          wrapper="span"
          speed={50}
          className='bg-secondary px-2'
          repeat={Infinity}
        />
      </p>


    </div>
  )
}

