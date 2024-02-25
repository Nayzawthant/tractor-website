"use client"
import React from 'react'

const Details = () => {

  const { vehicleData, setVehicleData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = useContext.target;
    setVehicleData({ ...vehicleData, [name]: value });
  }
  return (
    <div>
      
    </div>
  )
}

export default Details
