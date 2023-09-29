"use client"
import React, { useState } from 'react'

const VehiclesCard = ({ key, frontContent, backContent }) => {
    const [isBackVisible, setIsBackVisible] = useState(false);

    const toggleCard = () => {
        setIsBackVisible(prevState => !prevState);
    };
    return (
        <div className="card-container">
            <div className={`card ${isBackVisible ? 'card-back' : 'card-front'}`}>
                {isBackVisible ? 'Back Card' : 'Front Card'}
                {isBackVisible ? backContent : frontContent}
                <button onClick={toggleCard} className='bg-white z-30 absolute top-0'>Toggle Card</button>
            </div>

        </div>
    )
}

export default VehiclesCard
