import React from 'react'

const VehicleForm = () => {
    return (
        <div className="container relative flex items-center justify-center h-screen p-4 mx-auto">
            <div className="grid max-w-screen-md grid-cols-1 text-center bg-white shadow-lg contact-box lg:grid-cols-2">
                
                <div className="p-6 right lg:p-12">
                    <h2 className="mb-4 text-2xl font-bold">Contact Us</h2>
                    <input type="text" className="w-full p-2 mb-4 field" placeholder="Your Name" />
                    <input type="email" className="w-full p-2 mb-4 field" placeholder="Your Email" />
                    <input type="text" className="w-full p-2 mb-4 field" placeholder="Your Phone" />
                    <textarea className="w-full p-2 mb-4 field area" placeholder="Message"></textarea>
                    <button className="w-full p-2 text-white bg-green-500 btn hover:bg-green-600">Send</button>

                </div>

            </div>
        </div>

    )
}

export default VehicleForm
