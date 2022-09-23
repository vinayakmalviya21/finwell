import React from 'react'
// import savings from '../../assests/savings.svg';
import savings from '../../assests/about.svg';

export default function about() {
    return (
        <>
            <div className='mx-auto w-full bg-[#16142D] my-auto  text-center  '>
                <h1 className='font-bold md:text-5xl text-[#CECCDA]  sm:text-4xl text-2xl pt-12 mt-12 mb-4'>What is Finwell?</h1>
                <div className='outer mx-auto grid md:grid-cols-2 md:px-4 py-8 max-w-[1240px]'>
                    <div className='inner1  my-auto mx-auto'>
                        <img className='w-[60%] md:w-[80%] md:h-[60%] h-[60%] my-auto mx-auto ' src={savings} />
                    </div>
                    <div className='inner2 md:my-auto items-center justify-center'>
                        <p className='m-8 text-justify text-[#CECCDA] font-medium md:text-xl sm:text-md'> A simple,accessible app that allows you to budget across weeks,months and years.The neat financial calendar lets you set up alerts and keep tabs on all transactions.Plus,it works with alll currencies.It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.This will keep you organised and in control,of money you do have and money you will have.This application is easy to use and will help you keep track of every dollar.</p>

                    </div>
                </div>
            </div>
        </>
    )
}
