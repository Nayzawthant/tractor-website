import React from 'react'

const Discover = () => {
    return (
        <div className='bg-[#ecf0f3] w-full mt-10'>
            <div className='p-10 pb-0 text-[40px] text-center text-[#292524] font-oswald font-bold tracking-wider'>
                Discover
                <div className='text-[16px] font-semibold'>Explore the world of Tractor through our latest news, events and videos</div>
            </div>
            <div class="p-10 grid w-[80%] m-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 text-[#292524] gap-5 font-oswald">
                <div class=" overflow-hidden">
                    <div className='h-56'>
                        <img class="w-full h-full" src="http://blog.machinefinder.com/wp-content/uploads/2015/08/9RX-Tractor-1.jpg" alt="Mountain" />
                    </div>
                    <div class=" py-4">
                        <div class=" text-xl mb-2 font-oswald font-light">MG4 review: electric hatchback smashes its brief (and its rivals)</div>
                        
                    </div>
                </div>

                <div class=" overflow-hidden">
                    <div className='h-56'>
                        <img class="w-full h-full" src="https://miro.medium.com/max/2800/0*35g4csiuSCauKsGW" alt="River" />
                    </div>
                    <div class=" py-4">
                    <div class=" text-xl mb-2 font-oswald font-light">MG4 review: electric hatchback smashes its brief (and its rivals)</div>
                        
                    </div>
                </div>


                <div class=" overflow-hidden">
                    <div className='h-56'>
                        <img class="w-full h-full" src="https://wallpapercave.com/wp/wp4409139.jpg" alt="Forest" />
                    </div>
                    <div class=" py-4">
                    <div class=" text-xl mb-2 font-oswald font-light">MG4 review: electric hatchback smashes its brief (and its rivals)</div> 
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Discover
