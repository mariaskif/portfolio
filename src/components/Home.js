import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
const Home = () => {
  return (
    
    <div name="Home" className='w-full h-screen bg-[#0a192f]'>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'> Hi,my name is</p>
<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Maria Skif</h1>
<h3 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I am a front end developer</h3>
<p className='text-[#8892b0] py-4 max-w-[700px]'>I am front end developer i started this job from a more than year and I always updating my self for new technolges</p>
<div>

 <button className='text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300'>View Workes
   <span className='group-hover:rotate-90 duration-300'><HiArrowNarrowRight className='ml-3'/></span> </button>
  
 
</div>
      </div>

    

   </div>
  )
}

export default Home