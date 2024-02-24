import React from 'react'

const StepperControl = () => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/* back button */}
      <button className='px-4 py-2 font-semibold uppercase transition duration-200 ease-in-out bg-white border-2 cursor-pointer rounded-xl text-slate-400 border-slate-300 hover:bg-slate-700 hover:text-white'>
        Back
      </button>
      {/* next button */}
      <button className='px-4 py-2 font-semibold text-white uppercase transition duration-200 ease-in-out bg-green-500 cursor-pointer rounded-xl hover:bg-slate-700 hover:text-white'>
        Next
      </button>
    </div>
  )
}

export default StepperControl
