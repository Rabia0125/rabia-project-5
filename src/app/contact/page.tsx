import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
      <div className='grid md:grid-cols-2 gap 10'>
        <div className='space-y-8'>
          <h2 className='text-5xl text-blue-400 font-bold'>CONTACT</h2>
          <p className='text-blue-200 text-xl pt-2'>Get in touch with us:</p>
        </div>
        <div className='flex gap-3 text-blue-300 items-center'>
        <TfiEmail size={30}/> rabiamashkoor758@gmail.com
        </div>
        <div className='flex gap-3 text-blue-300 items-center'>
        <BsFillTelephoneFill size={30}/>(021)-111-2222
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'>
            <label className='text-blue-300' htmlFor="name">Name</label>
            <input type="text" className='h-[40px] bg-transparent border border-accent' 
            id='name' />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-blue-300' htmlFor="email">Email</label>
            <input type="text" className='h-[40px] bg-transparent border border-accent' 
            id='email' />
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-blue-300' htmlFor="message">Message</label>
            <textarea 
            className='bg-transparent border border-accent' 
            id='message' rows={8}></textarea>
          </div>
          <button className='bg-accent p-2 px-6 bg-blue-500 font-bold'>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
