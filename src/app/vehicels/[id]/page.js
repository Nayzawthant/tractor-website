import React from 'react'
import VehicleForm from '../components/VehicleForm'
import VehicelDetails from '../components/VehicelDetails'

const page = () => {
    return (
        <div className='bg-[#f9f9f9]'>
            <p className='text-[25px] w-[72%] pt-10 mx-auto tracking-widest font-bold mb-8 uppercase text-[#C41230]'>
                Recental Products Details
            </p>
            <VehicelDetails />
        </div>
    )
}

export default page
