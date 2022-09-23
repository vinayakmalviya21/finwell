import React from 'react';
import {
    FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare
} from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function footer() {
    return (
        <div className='w-full bg-[#16142D]'>
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300 '>
                <div>
                    <h1 className='w-full text-2xl font-bold text-white text-justify'>Finwell</h1>
                    <p className='py-4 text-justify text-justify '>A simple, accessible app that allows you to budget across weeks, months and years.The neat financial calendar lets you set up alerts and keep tabs on all the transactions.Plus,it works with alll currencies.This will keep you organised and in control , of money you do have and money you will have.</p>
                    <p>Mail Us At:  &nbsp;&nbsp; info.bfinwell@gmail.com</p>
                    <div className='flex my-6 '>
                    <a href='http://instagram.com/bfinwell' className='mx-2' target="_blank"><FaInstagramSquare size={25} /></a>
                    <a href='https://www.facebook.com/login/' className='mx-2' target="_blank"><FaFacebookSquare size={25} /></a>
                    <a href='https://www.linkedin.com/login/' className='mx-2' target="_blank"><FaLinkedin size={25} /></a>
                    <a href='https://www.twitter.com/login/' className='mx-2' target="_blank"><FaTwitterSquare size={25} /></a>
                    
                </div>
                </div>

                {/* footer quick links */}
                <div className='col-spam-2 flex justify-between py-4 mt-6'>
                    <div>
                        <h4 className='font-xl text-justify '><b>Explore</b></h4>
                        <ul className='text-gray'>
                            <li className='py-2 text-sm text-justify text-gray-400'><NavLink to="/">Home</NavLink></li>
                            <li className='py-2 text-sm text-justify text-gray-400'><NavLink to="/tips">Tips</NavLink></li>
                            <li className='py-2 text-sm text-justify text-gray-400'><NavLink to="/VLog">Blog</NavLink></li>
                            {/* <li className='py-2 text-sm text-justify text-gray-400'><a href='info.bfinwell@gmail.com'>Contact Us</a></li> */}
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-xl text-justify'><b>Get Help</b></h4>
                        <ul>
                            <li className='py-2 text-sm text-justify text-gray-400'><NavLink to="/tips">Guides</NavLink></li>
                            <li className='py-2 text-sm text-justify text-gray-400'><NavLink to="/tips">Pricing</NavLink></li>
                            <li className='py-2 text-sm text-justify text-gray-400'><NavLink to="/tips">Services</NavLink></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='font-xl text-justify'><b>Get Started</b></h4>
                        <ul>
                            <li className='py-2 text-sm text-justify text-gray-400'>Sign Up</li>
                            <li className='py-2 text-sm text-justify text-gray-400'>Login</li>
                            <li className='py-2 text-sm text-justify text-gray-400'><a className=' mx-auto ' href='/' target="_blank" rel="noreferrer"><NavLink to="/calculator">Calculator</NavLink></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}