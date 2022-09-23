import React, { useState } from 'react';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const Addblog = () => {
    const [createdby, setCreatedby] = useState("");
    const [title, setTitle] = useState("");
    const [discription, setDescription] = useState("");
    const [imgurl, setImgurl] = useState("");
    const [createdat, setCreatedat] = useState(Timestamp.now().toDate().toString());
    const handleSubmite = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "Blogs"), {
            title, createdby, createdat, discription, imgurl
        }).then(() => { alert("success") })
            .catch(err => { alert(err.message) })
        
        setCreatedat("")
        setCreatedby("")
        setTitle("")
        setImgurl("")
        setDescription("")

    }
    return (
        <div className='md:w-[40vw]'>
            <form className='lg:grid-cols-3 py-16 shadow-xl w-full px-8 md:mx-auto md:w-full rounded-lg' onSubmit={handleSubmite}>
                <h1 className='font-bold text-[#16142D]'><b>Add a new Blog</b></h1>
                <div className='py-4'>
                    <label className='block text-start text-[#16142D]'>Name</label><br></br>
                    <input className='p-2 outline flex w- rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => { setCreatedby(e.target.value) }} name="user_name" autocomplete='off' placeholder='Enter your Name' required />
                </div>
                <div className='py-4'>
                    <label className='block text-start text-[#16142D]'>Blog Title</label><br></br>
                    <input className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' onChange={(e) => { setTitle(e.target.value) }} type="text" name="title" autocomplete='off' placeholder='Enter Your blogtitle' required />
                </div>
                <div className='py-4'>
                    <label className='block text-start text-[#16142D]'>Blog Description</label><br></br>
                    <textarea onChange={(e) => { setDescription(e.target.value) }} className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2'autocomplete='off' name="message" placeholder='Write your Article' required />
                </div>
                <div className='py-4'>
                    <label className='block text-start text-[#16142D]'>Paste Image Link</label><br></br>
                    <input className='p-2 outline flex w- rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => { setImgurl(e.target.value) }} name="image" autocomplete='off' placeholder='Paste Image Link' />
                </div>
                <input className='bg-[#302b63] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-white' type="submit" value="Send" />
            </form>
        </div>
    )
}

export default Addblog