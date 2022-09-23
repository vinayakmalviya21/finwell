import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../../assests/contactphoto.svg';

// import { 
//    FaPhoneAlt 
// } from 'react-icons/fa'; 

export default function OurCenter() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3rld2do', 'template_ep5k7yr', form.current, 'agOssSMp4nkQzA2IO')
      .then((result) => {
        console.log(result.text);
        alert("message send");
        window.location.reload(true);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <div className='bg-white w-full py-8 mt-16'>
        <h1 className='font-bold text-center text-5xl text-[#302B63] mb-8'>Contact Us</h1>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117312.65483235952!2d77.4242304!3d23.242342400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c696e4d9f3c0b%3A0x80f01f970fbc8323!2sRailway%20Station%20Bhopal!5e0!3m2!1sen!2sin!4v1663951867977!5m2!1sen!2sin" className='w-[90%] h-[90%]' allowfullscreen=""  referrerpolicy="no-referrer-when-downgrade"></iframe>

          {/* <img className='w-[90%] md:h-[100%] mx-auto' src={contact} alt="/" /> */}
          <form className='lg:grid-cols-3 py-16 shadow-xl w-full px-8 md:mx-auto md:w-full rounded-lg' ref={form} onSubmit={sendEmail}>
            <h1 className='font-bold text-[#302B63] font-medium text-xl'>Ask Us A Question</h1>
            <div className='py-4 text-justify '>
              <label className='justify-start text-[#302B63] font-medium'>Name</label><br></br>
              <input className='p-2 border-b-2 rounded-tl-md rounded-tr-md  outline-none border-[#3C096C] flex w-  text-black mr-2 md:w-full w-full mt-2' autoComplete='off' type="text" name="user_name" placeholder='Enter your Name' required />
            </div>
            <div className='py-4 text-justify'>
              <label>Email</label><br></br>
              <input className='p-2 border-b-2 outline-none  border-[#3C096C] flex w-50% rounded-tl-md rounded-tr-md  text-black mr-2 md:w-full w-full mt-2' autoComplete='off' type="email" name="user_email" placeholder='Enter Your Email' required />
            </div>
            <div className='py-4 text-justify '>
              <label className='text-[#302B63] font-medium'>Message</label><br></br>
              <textarea className='p-2 border-b-2  outline-none border-[#3C096C] flex w-50%  text-black mr-2 md:w-full w-full mt-2'autoComplete='off' name="message" placeholder='Write us a message' required />
            </div>
            <input className='bg-[#16142D] w-[200px] rounded-tl-md rounded-tr-md  rounded-md font-medium my-4 mx-auto py-1 text-white' type="submit" value="Send" />
          </form>
        </div>
      </div>
    </>
  )
}


