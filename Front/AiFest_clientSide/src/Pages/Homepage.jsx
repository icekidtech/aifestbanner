import React from 'react'
import Header from '../components/Header'
import "./Homepage.css"


const Homepage = () => {
  return (
    <div className='bg-[#220D49] h-[100vh] w-full p-10 justify-center content-center '>
      <Header/>
      
      <section className='text-white'>
        <h2 className='text-white text-3xl'>I WILL BE ATTENDING </h2>

        <div className='flex gap-5'>
          <div className='w-[403px] h-[409px] content-baseline bg-slate-200 '>
            <div className='absolute left-[140px] bottom-[150px]'>
              <input type="text" className='text-black w-[200px] h-[30px] border-solid bg-[#8BF2B3]' />
            </div>
          </div>
          <div className=''>
              <div>
                <h1 className='font-bold text-white'>ADVANCING GROWTH AND <span className='text-[#14F195]'>INNOVATION</span></h1>
                <p>Where Africa meets the Future of AI</p>
              </div>
              <div>
                <p>Uyo,Akwa December 7,2024 9:00am</p>
              </div>
          </div>
        </div>
      </section>
      
      
    </div>
  )
}

export default Homepage