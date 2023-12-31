
import VehiclesCard from './VehiclesCard';

const Vehicels = () => {

    return (

        <div className='vehicle'>
            <div className='mx-auto  w-[80%]'>
                <div className='py-10 pb-0 text-[30px] text-[#C41230] font-semibold tracking-wider opacity-90'>
                    Available Products
                </div>
                <div className='product-border mt-4 bg-[#bfbfbf]'></div>

                <div class="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5  ">
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
