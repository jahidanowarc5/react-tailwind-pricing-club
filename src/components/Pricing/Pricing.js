
import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {id:1, name:'free', price:0, benefits:[
            'lifetime free',
            'unlimited deals', 
            'localized deals', 
            'fantastic deals'
        ]},
        {id:2, name:'Regular', price:9.99, benefits:[
            'Everything on regular',
            'unlimited deals', 
            'localized deals', 
            'fantastic deals'
        ]},
        {id:3, name:'premium', price:19.99, benefits:[
            'Everything premium',
            'unlimited deals', 
            'localized deals', 
            'fantastic deals'
        ]}
    ]
    return (
        <div className='bg-indigo-300 p-4 mt-8'>
            
            <h2 className='text-6xl font-mono text-white' >Best deals of the town</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id provident consectetur vero debitis odit. Ea natus fugiat recusandae numquam ratione.</p>
            <div className='grid md: grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option => <PricingOption 
                        key={option.id}
                        option={option}
                        ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;