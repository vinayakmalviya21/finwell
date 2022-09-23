import React from 'react';
// import service1 from '../assets/service1.png';
// import service2 from '../assets/service2.png';
// import { Link } from 'react-router-dom'; 
// import service1 from '../assets/service1.png'; 

export default function Service() {
    return (
        <div className='w-full py-16 px-4 bg-white mt-4 mb-4'>
            <h1 className='mx-auto text-bold text-[#16142D] text-center pb-10 md:text-4xl sm:text-3xl text-2xl font-bold'>Blog</h1>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-10 mx-auto mt-[-2rem] bg-white' src='/' alt="" />
                    <h2 className='font-bold text-xl text-center py-4 mt-4 text-[#16142D]'>Real Estate</h2>
                    <p className='flex pb-2 space-x-1 justify-center font-medium'>@Rahul</p>
                    <p className='text-center'>It is critical to learn how to invest in real estate from the ground up. This blog post tells the story of Lane, a former civil engineer who, after years of hard work, was able to create enough passive income to be able to leave his career.</p>
                    <a className='font-medium mx-auto text-black' href='/Vlog' target="_blank" rel="noreferrer">
                        <button className='text-center bg-[#16142D] w-[200px] rounded-md font-medium my-4 py-1 mx-auto text-white'>Explore</button>
                    </a>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-10 mx-auto mt-[-2rem] bg-gray' src='/' alt="" />
                    <h2 className='font-bold text-xl text-center py-4 mt-4 text-[#16142D]'>Crypto Advice</h2>
                    <p className='flex pb-2 space-x-1 justify-center font-medium'>@Rohit</p>
                    <p className='text-center'>Crypto wallets are used for storing cryptocurrencies and making crypto transactions via exchanges. Without them, we can’t have maximum security</p>
                    <a className='font-medium mx-auto text-black' href='/tips' target="_blank" rel="noreferrer">
                        <button className='text-center bg-[#16142D] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-white'>Explore</button>
                    </a>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-10 mx-auto mt-[-2rem] bg-white' src='/' alt="" />
                    <h2 className='font-bold text-xl text-center py-4 mt-4 text-[#16142D]'>Daily Tips</h2>
                    <p className='flex pb-2 space-x-1 justify-center font-medium'>@Virat</p>
                    <p className='text-center'>Struggling with debt can be overwhelming, but so can taking care of your money and finding enough each month to put into savings. No matter what job you have or how much you make, everyone needs a little bit of help controlling their finances.</p>
                    <a className='font-medium mx-auto text-black' href='/Vlog' target="_blank" rel="noreferrer">
                        <button className='text-center bg-[#16142D] w-[200px] rounded-md font-medium my-4 py-1 mx-auto text-white hover:opacity-80'>Explore</button>
                    </a>
                </div>
            </div>
        </div>
    )
}