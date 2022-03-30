
import React from 'react';
import Benefit from '../Benefit/Benefit';
import { ArrowRightIcon } from '@heroicons/react/solid'


const PricingOption = (props) => {
    const {name,price,benefits} = props.option;
    return (
        <div className='bg-white p-4 mt-4 rounded-lg'>
            <h3 className=' bg-indigo-300 text-2xl py-4 rounded font-bold'>{name}</h3>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-600'>/mo</span>
            </p>
            <div>
            <p className='text-left'>benefits:</p>
                {
                    benefits.map(benefit => <Benefit benefit={benefit}></Benefit>)
                }
            </div>
            <button className='bg-green-500 flex justify-center w-full py-4 rounded mt-4 text-white hover:text-green-700 font-bold '>
                Buy now<ArrowRightIcon className='w-6 h-6 ml-2 '></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricingOption;