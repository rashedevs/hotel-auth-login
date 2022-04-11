import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Shop.css'

const Shop = () => {
    const [packages, setPackages] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div>
            <h2>Packages</h2>
            <div className="packages-container">
                {
                    packages.map(packag => <Package key={packag.id} packag={packag}></Package>)
                }
            </div>
        </div>
    );
};

export default Shop;