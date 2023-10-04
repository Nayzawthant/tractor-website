import React from 'react'
import VehiclesCard from '../components/VehiclesCard'


const page = () => {
  return (
    <div className='bg-[#ecf0f3]'>
      <div className='text-[#292524] text-[30px] w-[80%] pt-10 mx-auto'>
        Products
      </div>
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
