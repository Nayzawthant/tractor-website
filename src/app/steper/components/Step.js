"use client"
import React, { useState } from 'react'
import Account from './Account';
import Details from './Details';
import Final from './Final';
import Stepper from './Stepper';
import StepperControl from './StepperControl';


const Step = ({steps}) => {
    
    const [currentStep, setCurrentStep] = useState(1);
    
    

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Account />
            case 2:
                return <Details />
            case 3:
                return <Final />
        }
    }
  return (
    <div className='h-[100vh] bg-[#f1f5f9] flex justify-center items-center'>
    <div className='pb-2 mx-auto bg-white shadow-xl md:w-1/2 rounded-2xl'>
        {/* Stepper  */}
        <div className='container mt-5 horizontal'>
            <Stepper steps={steps} currentStep={currentStep} />
        </div>
        {/* Navigation controls */}
        <StepperControl currentStep={currentStep} />
    </div>
</div>
  )
}

export default Step
