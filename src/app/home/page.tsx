import React from 'react'
import Navbar from '../navbar/page'
import About from '../about/page'

const Home = () => {
  return (
    <div id='home' className='min-h-screen bg-no-repeat bg-[url(/student-free-photo.jpg)] bg-left lg:bg-[24%] bg-cover'
    style={{backgroundSize: "35%"}} >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h[cals(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[120px] font-bold leading-tight flex justify-center items-center'>
          <div>
          <p>I'm</p>
          <p className='text-blue-500'>Rabia</p>
          <p className='text-blue-500'>Mashkoor</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
