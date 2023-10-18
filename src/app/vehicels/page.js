import React from 'react'
import VehiclesCard from '../components/VehiclesCard'


const page = () => {
  return (
    <div className='bg-[#fff]'>
      <p className='text-[25px] w-[80%] mt-10 mx-auto tracking-widest font-bold mb-8 uppercase text-[#C41230]'>
        Recental Products
      </p>
      
      <div className="grid w-[80%] mx-auto grid-cols-1 gap-5 py-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 ">
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
        <VehiclesCard />
      </div>
    </div>
  )
}

export default page
