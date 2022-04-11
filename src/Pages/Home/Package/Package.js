import React from 'react';
import './Package.css'

const Package = ({ packag }) => {
    const { type, Price, img } = packag
    return (
        <div className='package'>
            <img src={img} alt="" />
            <h2>Room: {type}</h2>
            <h4>Price: {Price}</h4>
            <button style={{ padding: "5px", margin: "5px" }}>Book Now</button>
        </div>
    );
};

export default Package;