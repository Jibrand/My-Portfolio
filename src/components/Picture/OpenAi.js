import React from 'react'
import m1 from '../../Assets/m2.PNG'
import { ResponsiveImage } from 'react-responsive';


const OpenAi = () => {
  return (
    <>
      <div>
        <ResponsiveImage
          src={m1}
          alt="Your Image Alt Text"
          width={1010}
          height={766}
        />
      </div>
    </>
  )
}

export default OpenAi