"use client"
import React, { useState } from 'react'
import Account from './Account';
import Details from './Details';
import Final from './Final';
import Stepper from './Stepper';
import StepperControl from './StepperControl';
import { StepperContext } from '../contexts/StepperContext';


const Step = ({steps}) => {
    
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    
    console.log("stepl", steps.length)
    
    

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Account />
            case 2:
                return <Details />
            case 3:
                return <Final />
            default:
                
        }
    }

    const handleClick = (direction) => {
        let newStep = currentStep;
        
        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        if (newStep > 0 && newStep <= steps.length) {
            setCurrentStep(newStep);
        }
    }
    
  return (
    <div className='h-[100vh] bg-[#f1f5f9] flex justify-center items-center'>
    <div className='pb-2 mx-auto bg-white shadow-xl w-[70%] rounded-2xl'>
        {/* Stepper  */}
        <div className='container mt-5 horizontal'>
            <Stepper steps={steps} currentStep={currentStep} />
            {/* Display Components */}
            <div className='p-10 my-10'>
                <StepperContext.Provider value={{
                    userData,
                    setUserData,
                    finalData,
                    setFinalData
                }}>
                    {displayStep(currentStep)}
                </StepperContext.Provider>
            </div>
        </div>
        {/* Navigation controls */}
        {
            currentStep !== steps.length &&
            <StepperControl handleClick={handleClick} steps={steps} currentStep={currentStep} />
        }
        
    </div>
</div>
  )
}

export default Step
