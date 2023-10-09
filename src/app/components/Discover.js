import React from 'react'

const Discover = () => {

    const DiscoverData = [
        {
            title: "",
            img: "https://images.pexels.com/photos/5580718/pexels-photo-5580718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "",
            img: "https://images.pexels.com/photos/7532304/pexels-photo-7532304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "",
            img: "https://images.pexels.com/photos/8365714/pexels-photo-8365714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    return (
        <div className='bg-[#ecf0f3] w-full mt-10'>
            <div className='p-10 pb-0 w-[85%] mx-auto text-[20px] text-[#292524] font-semibold tracking-wider opacity-90'>
                3 Latest News
                <div className='text-gray-700 text-[14px] font-semibold mt-5'>Explore the world of Tractor through our latest news, events and videos</div>
                <div className='product-border mt-4 bg-[#bfbfbf]'></div>
            </div>
            <div class="py-10 grid w-[80%] m-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 text-[#292524] gap-5 font-oswald">
                <a className="relative items-center justify-center w-full overflow-hidden transition-shadow   h-[70vh] group">
                    <div className="w-full h-full">                     
                                <img className="object-cover w-full h-full transition-transform duration-500" src="https://images.pexels.com/photos/5580718/pexels-photo-5580718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> :
                        
                    </div> 

                    <div className="absolute inset-0 translate-y-[70%] new_card_name px-9 transition-all duration-500   bg-gradient-to-b ">
                        <div className=''>
                            <h1 className="mt-2 text-[40px] text-left text-white font-bruno-ace ">Kubota Tactor</h1>
                        </div>

                        <div className=''>
                            <a className="w-full mb-3 text-lg text-left text-white transition-opacity duration-300 opacity-100 text-ellipsis line-clamp-1 ">Learn More</a>
                        </div>
                    </div>
                </a>
                <a className="relative items-center justify-center w-full overflow-hidden transition-shadow   h-[70vh] group">
                    <div className="w-full h-full ">                     
                        <img className="object-cover w-full h-full transition-transform duration-500" src="https://images.pexels.com/photos/5580718/pexels-photo-5580718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /> :
                    </div>

                    <div className="absolute inset-0 translate-y-[60%] new_card_name px-9 transition-all duration-500   bg-gradient-to-b ">
                        <div className=''>
                            <h1 className="mt-2 text-[30px] text-center text-white font-bruno-ace ">KUBOTA TACTOR</h1>
                        </div>

                        <div className='flex justify-center mt-3'>
                            <a className="px-5 py-2 mb-3  text-lg text-left text-[#292524] transition-opacity duration-300 bg-white opacity-90 ">Learn More</a>
                        </div>
                    </div>
                </a>
            </div>


        </div>

    )
}

export default Discover
