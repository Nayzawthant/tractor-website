"use client"
import React, { useEffect, useState } from 'react';

const SecondForm = () => {
    const [formvalue, setFormValue] = useState({ name: '', phone: '', township: '', village: '' });
    const [formerror, setFormerror] = useState({});
    const [issubmit, setSubmit] = useState(false);

    const handlevalidation = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formvalue, [name]: value });
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        setFormerror(validationform(formvalue));
        setSubmit(true);
    }

    const validationform = (value) => {
        const errors = {};
        if (!value.name) {
            errors.name = "Please Enter Name";
        }

        if (!value.phone) {
            errors.phone = "Please Enter Phone"
        }

        if (!value.township) {
            errors.township = "Please Enter Township"
        }

        if (!value.village) {
            errors.village = "Please Enter Village "
        }

        return errors;


    }

    useEffect(() => {
        if (Object.keys(formerror).lenght === 0 && issubmit) {
            console.log(formvalue);
        }
    }, [formerror, issubmit, formvalue]);
    return (
        <div className='w-[50%] mx-auto'>
            
            <form className="" onSubmit={handlesubmit}>
                <input type="text" name="name" value={formvalue.name} onChange={handlevalidation} className="w-full p-2 py-4 mb-4 text-[#333333] field" placeholder="Your Name" />
                <div className='text-[#C41230] w-full text-left'>{formerror.name}</div>
                <input type="number" name="phone" value={formvalue.phone} onChange={handlevalidation} className="w-full p-2 py-4 mb-4 text-[#333333] field" placeholder="Your Phone" />
                <div className='text-[#C41230] w-full text-left'>{formerror.phone}</div>
                <input type="text" name="township" value={formvalue.township} onChange={handlevalidation} className="w-full p-2 py-4 mb-4 text-[#333333] field" placeholder="Your Township" />
                <div className='text-[#C41230] w-full text-left'>{formerror.township}</div>
                <input type="text" name='village' value={formvalue.village} onChange={handlevalidation} className="w-full p-2 py-4 mb-4 text-[#333333] field" placeholder="Your Village" />
                <div className='text-[#C41230] w-full text-left'>{formerror.village}</div>
                <button type='submit' className="w-full p-2 text-white bg-[#C41230] btn hover:bg-[#C91230]">Send</button>

            </form>
        </div>
    )
}

export default SecondForm
