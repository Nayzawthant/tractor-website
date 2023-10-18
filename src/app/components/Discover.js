import React from 'react'

const Discover = () => {

    const DiscoverData = [
        {
            title: "KUBOTA TACTOR",
            img: "https://images.pexels.com/photos/5580718/pexels-photo-5580718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            title: "KUBOTA TACTOR",
            img: "https://images.pexels.com/photos/7532304/pexels-photo-7532304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "KUBOTA TACTOR",
            img: "https://images.pexels.com/photos/8365714/pexels-photo-8365714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ]
    return (
        <div className='bg-[#fff] w-full'>
            <div className='p-10 pb-0 w-[85%] mx-auto text-[30px] text-[#C41230] font-semibold tracking-wider opacity-90'>
                Latest News
                <div className='text-gray-700 text-[14px] font-semibold mt-5'>Explore the world of Tractor through our latest news, events and videos</div>
                <div className='product-border mt-4 bg-[#bfbfbf]'></div>
            </div>
            <div class="py-10 grid w-[80%] m-auto grid-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 text-[#292524] gap-16">
                {
                    DiscoverData.map((item, i) => {
                        return (
                            <a className="relative items-center justify-center w-full overflow-hidden transition-shadow discover_page_card  h-[80vh] group" key={i} >
                                <div className="w-full h-full ">
                                    <img className="object-cover w-full h-full transition-transform duration-500" src={item?.img} alt="" /> :
                                </div>

                                <div className="absolute inset-0 translate-y-[70%] new_card_name px-9 transition-all duration-500   bg-gradient-to-b ">
                                    <div className=''>
                                        <h1 className="mt-2 text-[30px] text-center text-white font-bruno-ace ">{item?.title}</h1>
                                    </div>

                                    <div className='flex justify-center mt-3'>
                                        <a className="px-10 py-2 mb-3  text-lg text-left text-[#292524] rounded transition-opacity duration-300 bg-white opacity-90 discover_learn ">Learn More</a>
                                    </div>
                                </div>
                            </a>
                        )
                    })
                }

            </div>


        </div>

    )
}

export default Discover
