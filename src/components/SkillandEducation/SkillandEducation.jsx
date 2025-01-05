import React from 'react'
import ProgressBar from '../../ui/ProgressBar'

function SkillandEducation() {
  return (
    <div className="skill-education-main flex md:flex-col">
    <div className="left w-full p-[20px]">
      <h1 className="text-[30px] text-darkBlue font-semibold mb-[10px]">
        Professional Skills
      </h1>
      <ProgressBar />
    </div>
    <div className="right w-full  p-[20px]">
      <h1 className="text-[30px] text-darkBlue font-semibold mb-[15px]">
        Education
      </h1>
      <p className="m-[0_0_10px_0] text-[#3b4964]">
        Rehabilitation is a phase of recovery occurring after any major
        life-changing medical or surgical evente designed to occurring
        after regenerate:
      </p>
      <div className="bottom flex flex-col gap-1">
        <div className="info-bottom flex items-center gap-2">
          <span className="text-lightBlue">+</span>
          <p className="text-[#3b4964]">
            Access to the conference and a workshop.
          </p>
        </div>
        <div className="info-bottom flex items-center gap-2">
          <span className="text-lightBlue">+</span>
          <p className="text-[#3b4964]">
            Includes coffee, breakfast, lunch and open-bar.
          </p>
        </div>
        <div className="info-bottom flex items-center gap-2">
          <span className="text-lightBlue">+</span>
          <p className="text-[#3b4964]">
            Stick around for music, craft beer & cocktails.
          </p>
        </div>
      </div>
    </div>
  </div>  )
}

export default SkillandEducation