import React from 'react'

const page = () => {
    const NewsData = [
        {
            title: "Kubota",
            img: "newone.jpeg"
        },
        {
            title: "Kubota",
            img: "newtwo.jpg"
        },
        {
            title: "Kubota",
            img: "newthree.jpeg"
        },
        {
            title: "Kubota",
            img: "newfour.jpeg"
        },
        {
            title: "Kubota",
            img: "newfive.jpeg"
        },
        {
            title: "Kubota",
            img: "newsevern.jpeg"
        },
        {
            title: "Kubota",
            img: "newsix.jpeg"
        },
        {
            title: "Kubota",
            img: "newthree.jpeg"
        },
        {
            title: "Kubota",
            img: "newone.jpeg"
        },
        {
            title: "Kubota",
            img: "newsix.jpeg"
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
