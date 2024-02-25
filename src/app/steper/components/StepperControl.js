import React from 'react'

const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* back button */}
      <button onClick={() => handleClick('back')} className={`px-4 py-2 font-semibold uppercase transition duration-200 ease-in-out bg-white border-2 cursor-pointer rounded-xl text-slate-400 border-slate-300 hover:bg-slate-700 hover:text-white
      ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}
      `}>
        Back
      </button>
      {/* next button */}
      <button onClick={() => handleClick('next')} className='px-4 py-2 font-semibold text-white uppercase transition duration-200 ease-in-out bg-green-500 cursor-pointer rounded-xl hover:bg-slate-700 hover:text-white'>
        {currentStep === steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  )
}

export default StepperControl
