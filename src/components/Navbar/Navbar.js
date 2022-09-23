// import React, { useState } from 'react';
// import {IonIcon} from "react-ion-icon";

// const Navbar = () => {
//     let Links = [
//         { name: "HOME", link: "/" },
//         { name: "ABOUT", link: "/about" },
//         { name: "SERVICES", link: "#services" },
//         { name: "CALCULATOR", link: "/calculator" },
//         { name: "CONTACT", link: "#contact" },
//     ]
//     const [open, setOpen] = useState(false)
//     return (

//         <>
//             <div className='shadow-md w-full fixed top-0 left-0'>
//                 <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
//                     <div>
//                         <h1 className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#302b63]'>Xpensify</h1>
//                     </div>
//                     <div onClick={() => setOpen(!open)} className='text-2xl absolute right-8 top-6 cursor-pointer md:hidden'>
//                         <IonIcon name={open ? 'close' : 'menu'}></IonIcon>
//                     </div>

//                     <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>

//                         {Links.map((link) => (
//                             <li key={link.name} className='md:ml-8 md:my-0 my-7'>
//                                 <a href={link.link} className="hover:text-[#302b63] duration-500">{link.name}</a>
//                             </li>
//                         ))}

//                         <button className='bg-[#302b63] text-white md:ml-8 py-2 px-4 rounded-xl hover:bg-blue-900 duration-500'>Login</button>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Navbar




import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';
import logo from  '../../assests/logo.png';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
            <div className='fixed top-0  shadow-md  w-full bg-white z-10'>
                <div className='flex  justify-between items-center h-24  max-w-[1240px] mx-auto px-4 text-black'>
                    {/* <h1 className='w-full text-2xl font-bold text-[#302b63]'><a href='/'>Xpensify</a></h1> */}
                    <a href='/'><img src={logo} className='w-40 '/></a>
                    <ul className='hidden md:flex  justify-center text-xl '>
                        <li className='p-4'><NavLink to="/">Home</NavLink></li>
                        <li className='p-4'><NavLink to="/tips">Tips</NavLink></li>
                        {/* <li className='p-4'>Contact</li> */}
                        <li className='p-4'><NavLink to="/calculator">Calculator</NavLink></li>
                        <li className='p-4'><NavLink to="/VLog">Blog</NavLink></li>
                        <div className='flex-end'>
                        <button className='bg-[#16142D] text-white rounded px-4 h-12 mt-[4px] text-center justify-center align-center content-justify'><NavLink to="/login/Login">Login</NavLink></button>
                        </div>
                    </ul>
                    <div onClick={handleNav} className='block md:hidden'>
                        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
                        {/* <AiOutlineMenu size={20} /> */}
                    </div>
                    <div className={nav ? 'fixed  left-0 top-0 w-[50%] border-r h-full border-r-gray-900 bg-white ease-in-out duration-500 z-40' : 'fixed left-[-100%] ease-in-out'}>
                        {/* <h1 className='w-full text-3xl font-bold text-[#B00E15] m-4'>Xpensify</h1> */}
                        <img src={logo} className='w-40 '/>
                        <ul className='pt-0 uppercase p-4  md:text-xl'>
                        <li className='p-4'><NavLink to="/hackathon">Home</NavLink></li>
                        <li className='p-4'><NavLink to="/tips">Tips</NavLink></li>
                        {/* <li className='p-4'>Contact</li> */}
                        <li className='p-4'><NavLink to="/calculator">Calculator</NavLink></li>
                        <li className='p-4'><NavLink to="/VLog">Blog</NavLink></li>
                        <button className='bg-[#16142D] text-white rounded px-4 h-12 mt-[4px] text-center justify-center align-center content-justify'>Log in</button>
                        </ul>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )

}

