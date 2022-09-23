import React from 'react'
import Footer from './components/footer/footer';
import illustration_1 from './assests/illustration_1.svg';
import illustration_2 from './assests/illustration_2.svg';
import illustration_3 from './assests/illustration_3.svg';
import illustration_4 from './assests/illustration_4.svg';

export default function Tips() {
  return (
    <>
    <div className='max-w-[1240px] mx-auto mt-32'>
        <div className='text-center pb-4 '
         // style={{clipPath: "polygon(100% 0%, 100% 90%, 50% 100%, 0% 50%, 0 100%)"}}
         >
            <h1 className='font-bold text-[#302B63] text-5xl'>How It Works?</h1>
            <p className='font-medium text-2xl text-[#504C7B]'>Envelope budgeting for the modern world</p>
        </div>
        </div>
        <div>
         <div className='w-full mb-20 bg-[#302B63] py-12 mt-8'>
        <div className='md:flex mt-8 '>
            <div className='content-justify items-center md:w-[40vw] my-auto justify-center md:text-start text-center md:mx-auto mx-4'>
               <h1 className='font-bold  text-[#CECCDA] text-3xl'>Become a Goodbudgeter</h1> 
               <p className='font-medium mt-2 text-[#CECCDA]'>Meet Dave. As the father of a growing family, Dave has a lot to keep track of. With Finwell, he's able to manage his finances, stay on the same page with his family, and spend on what's really important in life.</p>
            </div>
            <div className='md:w-[40vw] md:mt-auto mt-4'>
               <img className='w-[60%] md:w-[40%] md:h-[60%] h-[60%] my-auto mx-auto ' src={illustration_1} />
            </div>
        </div> 
        </div>

        <div className='md:flex mt-8'>
            <div className='content-justify items-center md:w-[40vw] my-auto justify-center md:text-start text-center md:mx-auto mx-4'>
               <h1 className='font-bold text-3xl text-[#302B63]'>No more surprises</h1> 
               <p className='font-medium mt-2 text-[#504C7B]'>With the tried-and-true envelope system, Dave is never caught off-guard by a bill or sudden expense. Each month he takes his paycheck and sets aside what he needs for the month.</p>
            </div>
            <div className='md:w-[40vw] md:mt-auto mt-4'>
               <img className='w-[60%] md:w-[40%] md:h-[60%] h-[60%] my-auto mx-auto ' src={illustration_2} />
            </div>
        </div>

        <div className='md:flex mt-8'>
            <div className='md:w-[40vw] md:mt-auto mt-4 md:block hidden'>
               <img className='w-[60%] md:w-[40%] md:h-[60%] h-[60%] my-auto mx-auto ' src={illustration_3} />
            </div>
            <div className='content-justify items-center md:w-[40vw] my-auto justify-center md:text-start text-center md:mx-auto mx-4'>
               <h1 className='font-bold text-3xl text-[#302B63]'>Stay on the same page</h1> 
               <p className='font-medium mt-2 text-[#504C7B]'>With a budget that syncs between his mobile devices and the web, Dave and his wife Sarah are always on the same page with their spending.</p>
            </div>
            <div className='md:hidden md:w-[40vw] md:mt-auto mt-4'>
               <img className='w-[60%] md:w-[40%] md:h-[60%] h-[60%] my-auto mx-auto ' src={illustration_3} />
            </div>
        </div>

        <div className='md:flex mt-8 mb-8'>
            <div className='content-justify items-center md:w-[40vw] my-auto justify-center md:text-start text-center md:mx-auto mx-4'>
               <h1 className='font-bold text-3xl text-[#302B63]'>Spend on what’s important</h1> 
               <p className='font-medium mt-2 text-[#504C7B]'>Meet Dave. As the father of a growing family, Dave has a lot to keep track of. With Finwell, he's able to manage his finances, stay on the same page with his family, and spend on what's really important in life.</p>
            </div>
            <div className='md:w-[40vw] md:mt-auto mt-4'>
               <img className='w-[60%] md:w-[40%] md:h-[60%] h-[60%] my-auto mx-auto ' src={illustration_4} />
            </div>
        </div>

    </div>

    <Footer/>
    </>
  )
}
