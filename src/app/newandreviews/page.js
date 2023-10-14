import React from 'react'

const page = () => {
    const NewsData = [
        {
            title: "Kubota",
            img: "https://images.pexels.com/photos/2575135/pexels-photo-2575135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Kubota",
            img: "https://media.istockphoto.com/id/491151340/photo/tractor-on-the-field.jpg?s=2048x2048&w=is&k=20&c=Xb9WgHAK6K1kyEKJH5OSIh7mVzQuAnysFwrjxudDY84="
        },
        {
            title: "Kubota",
            img: "https://images.pexels.com/photos/4439573/pexels-photo-4439573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Kubota",
            img: "https://images.pexels.com/photos/6020273/pexels-photo-6020273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Kubota",
            img: "https://images.pexels.com/photos/14242144/pexels-photo-14242144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Kubota",
            img: "https://images.pexels.com/photos/14242188/pexels-photo-14242188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Kubota",
            img: "https://images.pexels.com/photos/12973133/pexels-photo-12973133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Kubota",
            img: "https://images.pexels.com/photos/11996942/pexels-photo-11996942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Kubota",
            img: "https://images.pexels.com/photos/11996942/pexels-photo-11996942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Kubota",
            img: "https://images.pexels.com/photos/11996942/pexels-photo-11996942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
    ]
    return (
        <div className='py-20 bg-[#f5f2f2]'>
            <div className="grid grid-cols-1 w-[80%] mx-auto gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 font-semibold">

                {
                    NewsData.map((item, i) => {
                        return (
                            <div className="relative items-center justify-center overflow-hidden transition-shadow bg-white cursor-pointer new_page_card group hover:shadow-xl hover:shadow-black/40" key={i} >
                                <div className="h-48 new_img">
                                    <img className="w-full h-full p-3 transition-transform duration-500 group-hover:scale-110" src={item?.img} alt="" />
                                </div>
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div> */}
                                <div className="absolute inset-0 flex translate-y-[5%] flex-col px-6 transition-all duration-500 ">
                                    <p className="mb-3 text-[20px] text-[#fff] transition-opacity duration-300 opacity-100">{item?.title}</p>
                                </div>
                                <div className="absolute inset-0 flex translate-y-[80%] flex-col px-6 transition-all duration-500 ">
                                    <p className="mb-3 text-[#fff] transition-opacity duration-300 opacity-100 text-md">Learn More</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default page
