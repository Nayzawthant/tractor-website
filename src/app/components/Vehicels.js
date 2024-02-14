
import VehiclesCard from './VehiclesCard';

const Vehicels = () => {

    return (

        <div className='vehicle'>
            <div className='mx-auto  w-[80%]'>
                <div className='py-10 pb-0 text-[30px] text-[#C41230] font-semibold tracking-wider opacity-90'>
                    Available Products
                    <div className='text-gray-700 text-[14px] font-semibold mt-5'>Explore out tactors you might like</div>
                </div>

                <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    <VehiclesCard />
                    <VehiclesCard />
                    <VehiclesCard />
                    <VehiclesCard />
                </div>

               

            </div>
        </div>



    )
}

export default Vehicels
