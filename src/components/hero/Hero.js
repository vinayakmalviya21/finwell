// import React from 'react'
import React from 'react';
import Typed from 'react-typed';
// import savings from '../../assests/herophoto.gif';
import Cards from '../../components/cards/cards.js';


export default function Hero() {
    return (
        <>
            <div className=' bg-[#16142D] mx-auto my-auto content-center'>
                <div className='max-w-[1240px] text-center h-screen mx-auto flex flex-col justify-center align-center '>
                    <h1 className='font-bold text-7xl text-[#CECCDA] mb-4'>Finwell</h1>
                    <Typed className='md:text-2xl sm:text-xl text-[#CECCDA] text-xl font-bold' strings={['Spent it right']} typeSpeed={40} backSpeed={50} loop />
                    <p className='md:text-xl sm:text-md text-[#CECCDA]'>Know It Before You Spend It</p>
                    <p className='md:text-xl sm:text-md text-[#CECCDA]'>Lead a comfortable life; we take care of your finances</p>
                    {/* <p className='md:text-xl sm:text-md text-[#10002B]'>Your financial future strategized today</p>
                    <p className='md:text-xl sm:text-md text-[#10002B]'>The goal of our financial advice is to help you advance</p> */}
                </div>

            </div>

            <Cards />

        </>
    )
}
