import React from 'react'
import Step from './components/Step'

const page = () => {
    const steps = [
        "Owner Information",
        "Vehicle Information",
        "Price",
        "Complete"
    ];
   
    return (
        <Step steps={steps} />
    )
}

export default page
