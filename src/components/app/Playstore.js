import React from 'react'
// import savings from '../../assests/savings.svg';
import download from '../../assests/downloadapp.svg';
import download1 from '../../assests/download1.svg';

export default function about() {
    return (
        <>
            <div className='mx-auto w-full my-auto bg-[#16142D] text-center justify-center '>
                <div className='outer mx-auto grid md:grid-cols-2 md:px-4 py-8 max-w-[1240px]'>
                    <div className='inner1  my-auto mx-auto'>
                        <img className='w-[60%] md:w-[80%] md:h-[60%] h-[60%] my-auto mx-auto ' src={download1} />
                    </div>
                    <div className='md:my-auto items-center justify-center'>
                        <h1 className='font-bold md:text-5xl text-[#CECCDA]  sm:text-4xl text-2xl pt-8 mt-4 mb-4'>Budget software <br></br>built for daily life</h1>
                        <p className='font-bold text-[#CECCDA] mt-4 mb-4'>Get Goodbudget iPhone and Android Apps</p>
                    <a href='/' download><h1 className='b-2 px-2 rounded bg-white font-bold text-3xl text-[#302B63] max-w-[250px] mx-auto mt-8 mb-4'>Download Now</h1>
                    </a>
                    {/* <div className='md:my-auto items-center justify-center'>
                        <img className='w-[40%] md:w-[40%] md:h-[40%] h-[40%] my-auto mx-auto ' src={download} />
                    </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}
