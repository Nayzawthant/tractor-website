'use client'
import React, {useState} from 'react'
import { torentRoutes } from './_torentRoute'
import FirstForm from './_first_form';
import SecondForm from './_second_form';

const Form = () => {
    const [page, setPage] = useState(0);
    console.log("page", page);

    const handleNext = () => {
        switch (page) {
            case 0:
                setPage((nev) => nev + 1);
                break;
            case 1:
                setPage((nev) => nev + 1);
                break;
            default:
                setPage((nev) => nev + 1);
        }
    }

    const pageDisplay = () => {
        switch (page) {
            case 0:
                return <FirstForm/>

            case 1:
                return <SecondForm/>
        
            default:
                return null;
        }
    }
  return (
    <div>
        <div>
            <button type='button' className={ page === 0 ? `hidden` : ""} onClick={() => {setPage((prev) => prev - 1)}}>prev</button>
            <button type='button' onClick={handleNext}>next</button>
        </div>
      <div className='flex justify-center'>
        {
            torentRoutes.map((item) => {
                return (   
                    <p key={item.name} className={ page >= 0 && page <= 1 ? ` font-semibold text-red-900` : ""}>{item.name}</p>
                )
            })
        }
      </div>
      <div>{pageDisplay()}</div>
      <div></div>
    </div>
  )
}

export default Form
