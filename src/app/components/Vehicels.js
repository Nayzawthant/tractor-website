
import VehiclesCard from './VehiclesCard';

const Vehicels = () => {
    const cardsData = [
        { frontContent: 'Front Content 1', backContent: 'Back Content 1' },
        { frontContent: 'Front Content 2', backContent: 'Back Content 2' },
        { frontContent: 'Front Content 3', backContent: 'Back Content 3' },
        // Add more card data here
    ];

    return (

        <div className='bg-[#fff] vehicle mb-4 '>
            <div className='mx-auto  w-[80%]'>
                <div className='p-10 pb-0 text-[40px] text-center text-[#292524] young-font font-bold tracking-wider opacity-90'>
                    Vehicels
                    <div className='text-[16px] font-semibold opacity-80'>Explore the world of Tractor through our latest news, events and videos</div>
                </div>

                <div class="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 young-font">
                    <div class="rounded overflow-hidden shadow-lg">
                        <img class="w-full h-48" src="http://pluspng.com/img-png/tractor-hd-png-tractor-png-1000.png" alt="Mountain" />
                        <div class="px-3 py-4">
                            <div class="font-bold text-xl mb-2 tracking-widest opacity-90">Mountain</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet,
                            </p>
                        </div>
                        <div class="px-3 pt-4 pb-4">
                            <div className='flex storebutton'>

                                <a href='#' className="text-white font-dmserif text-md two">Discover</a>
                                <a href='#' className="text-white font-dmserif text-md one">Quick View</a>
                            </div>

                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg">
                        <img class="w-full h-48" src="http://pluspng.com/img-png/tractor-hd-png-tractor-png-1000.png" alt="Mountain" />
                        <div class="px-3 py-4">
                            <div class="font-bold text-xl mb-2 tracking-widest opacity-90">Mountain</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet,
                            </p>
                        </div>
                        <div class="px-3 pt-4 pb-4">
                            <div className='flex storebutton'>

                                <a href='#' className="text-white font-dmserif text-md two">Discover</a>
                                <a href='#' className="text-white font-dmserif text-md one">Quick View</a>

                            </div>
                        </div>
                    </div>
                    <div class="rounded overflow-hidden shadow-lg">
                        <img class="w-full h-48" src="http://pluspng.com/img-png/tractor-hd-png-tractor-png-1000.png" alt="Mountain" />
                        <div class="px-3 py-4">
                            <div class="font-bold text-xl mb-2 tracking-widest opacity-90">Mountain</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet,
                            </p>
                        </div>
                        <div class="px-3 pt-4 pb-4">
                            <div className='flex storebutton'>

                                <a href='#' className="text-white font-dmserif text-md two">Discover</a>
                                <a href='#' className="text-white font-dmserif text-md one">Quick View</a>
                            </div>
                        </div>
                    </div>
                    <div class="rounded overflow-hidden shadow-lg">
                        <img class="w-full h-48" src="http://pluspng.com/img-png/tractor-hd-png-tractor-png-1000.png" alt="Mountain" />
                        <div class="px-3 py-4">
                            <div class="font-bold text-gray-800 text-[16px] mb-2 tracking-widest opacity-90">MF RK Series</div>
                            <p class="text-gray-700 text-[14px]">
                                High Performance Range of Rakes
                            </p>
                        </div>
                        <div class="px-3 pt-4 pb-4">
                            <div className='flex storebutton'>
                                <a href='#' className="text-white font-dmserif text-md two">Discover</a>
                                <a href='#' className="text-white font-dmserif text-md one">Quick View</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5  ">
                    <div class="rounded overflow-hidden shadow-lg">

                        <div class="px-7 py-4 bg-[#f4f1f1]">
                            <div class="font-bold text-xl my-2">MF 8700 S</div>
                        </div>
                        <div className='flex py-4 px-7 text-[14px]'>
                            <div className='w-1/2'>
                                <img src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-lift-capacity.png' alt='maxi' />
                                <p className='font-bold tracking-widest young-font'>Maximum Lift Capacity(kg)</p>
                                <p className='font-semibold tracking-widest text-[11px] opacity-80'>12,000</p>
                            </div>
                            <div className='w-1/2'>
                                <img src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-pistons.jpg' alt='tran' />
                                <p className='font-bold tracking-widest'>Transmission</p>
                                <p className='font-semibold tracking-widest text-[11px] opacity-80'>Dyna-VT</p>
                            </div>

                        </div>
                        <div className='flex py-4 px-7 text-[14px]'>
                            <div className='w-1/2'>
                                <img src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-turbo.jpg' alt='maxi' />
                                <p className='font-bold tracking-widest'>Engine</p>
                                <p className='font-semibold tracking-widest text-[11px] opacity-80'>All-in-One Stage V</p>
                            </div>
                            <div className='w-1/2'>
                                <img src='https://www.masseyferguson.com/content/dam/public/masseyfergusonglobal/markets/en/icons/icon-max-horsepower.png' alt='tran' />
                                <p className='font-bold tracking-widest '>Maximum HP</p>
                                <p className='font-semibold tracking-widest text-[11px] opacity-80'>400</p>
                            </div>

                        </div>
                        <div class="px-7 pt-4 pb-4">
                            <div className='flex storebutton'>
                                <a href='#' className="mr-3 text-white font-dmserif text-md one">Close</a>
                                <a href='#' className="text-white font-dmserif text-md two">Discover</a>

                            </div>

                        </div>
                    </div>

                    <div class="rounded overflow-hidden shadow-lg">
                        <img className="w-full h-48 py-4 px-7" src="http://pluspng.com/img-png/tractor-hd-png-tractor-png-1000.png" alt="Mountain" />
                        <div className="py-4 px-7">
                            <div className="mb-2 text-xl font-bold tracking-widest opacity-90">Mountain</div>
                            <p className="text-base text-gray-700">
                                Lorem ipsum dolor sit amet,
                            </p>
                        </div>
                        <div class="px-7 py-4">
                            <div className='flex storebutton'>

                                <a href='#' className="text-white font-dmserif text-md two">Discover</a>
                                <a href='#' className="text-white font-dmserif text-md one">Quick View</a>

                            </div>
                        </div>
                    </div>
                    <div class="rounded overflow-hidden shadow-lg">
                        <img class="w-full h-48" src="http://pluspng.com/img-png/tractor-hd-png-tractor-png-1000.png" alt="Mountain" />
                        <div class="px-3 py-4">
                            <div class="font-bold text-xl mb-2 tracking-widest opacity-90">Mountain</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet,
                            </p>
                        </div>
                        <div class="px-3 pt-4 pb-4">
                            <div className='flex storebutton'>

                                <a href='#' className="text-white font-dmserif text-md two">Discover</a>
                                <a href='#' className="text-white font-dmserif text-md one">Quick View</a>
                            </div>
                        </div>
                    </div>
                    <div class="rounded overflow-hidden shadow-lg">
                        <img class="w-full h-48" src="http://pluspng.com/img-png/tractor-hd-png-tractor-png-1000.png" alt="Mountain" />
                        <div class="px-3 py-4">
                            <div class="font-bold text-gray-800 text-[16px] mb-2 tracking-widest opacity-90">MF RK Series</div>
                            <p class="text-gray-700 text-[14px]">
                                High Performance Range of Rakes
                            </p>
                        </div>
                        <div class="px-3 pt-4 pb-4">
                            <div className='flex storebutton'>
                                <a href='#' className="text-white font-dmserif text-md two">Discover</a>
                                <a href='#' className="text-white font-dmserif text-md one">Quick View</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5  ">
                    <VehiclesCard />
                    <VehiclesCard />
                    <VehiclesCard />
                </div>

               

            </div>
        </div>



    )
}

export default Vehicels
