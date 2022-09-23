import React from 'react'
import Addblog from './components/Addblog'; 
import BlogDisplay from './components/BlogDisplay';



export default function Vlog() {
    return (
        <>
            <div className="App mt-24 pt-24 max-w-[1400px] gap-3 md:flex mx-[10vw] pt-6">
                <div className='justify-start '>
                    <BlogDisplay />
                </div>
                <div className='justify-end'>
                    <Addblog />
                </div>
            </div>
        </>
    )
}
