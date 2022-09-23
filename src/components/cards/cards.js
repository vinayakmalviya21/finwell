import React from 'react'
import hero1 from '../../assests/hero1.svg';
import hero2 from '../../assests/hero2.svg';
import hero3 from '../../assests/hero3.svg';
import hero4 from '../../assests/hero4.svg';

export default function cards() {
  return (
    <>
      <div className='grid gap-4 md:h-80 max-w-[1240px] mt-40 mx-auto md:grid-cols-4 sm:grid-cols-2'>

<div className='w-full  border-2 h-40 border-[#302B63] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
  <img className='w-20 mx-auto py-2 bg-white' src={hero1} alt="" />
  <h2 className='font-bold text-xl text-center py-4'>100% Secured Data</h2>
</div>


<div className='w-full border-2 h-40 border-[#302b63] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
  <img className='w-24 mx-auto py-2 bg-white' src={hero3} alt="" />
  <h2 className='font-bold text-xl text-center py-4'>100K+ 5 star review</h2>
</div>


<div className='w-full border-2  h-40 border-[#302b63] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
  <img className='w-20 mx-auto  bg-white' src={hero2} alt="" />
  <h2 className='font-bold text-xl text-center py-4'>1M+ user</h2>
</div>


<div className='w-full border-2 h-40 border-[#302b63] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
  <img className='w-16 mx-auto  bg-white' src={hero4} alt="" />
  <h2 className='font-bold text-xl text-center py-4'>Awards</h2>
</div>

</div>
    </>
  )
}
