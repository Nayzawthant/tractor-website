import React from 'react'
import Step from './components/Step'

const page = () => {
    const steps = [
        "Account Information",
        "Personal Details",
        "Complete"
    ];
   
    return (
        <Step steps={steps} />
    )
}

export default page
