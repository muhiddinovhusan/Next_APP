import usa from '../assets/images/flag-usa.svg'
import germany from '../assets/images/flag-germany.svg'
import brazil from '../assets/images/1280px-Flag_of_Germany.svg.svg'
import island from '../assets/images/1280px-Flag_of_any.svg.svg'


const page = () => {
  return (
    <div className='mb-10'>
<div className='flex px-10 justify-between items-center gap-4 mb-10 '>
  <input  placeholder='Search for a country...' className='w-[400px] p-3 h-10 shadow-gray-300 rounded-sm outline-none shadow-sm placeholder:text-gray-300 placeholder:text-sm placeholder:font-sans' type="text" name="" id="" />

  <select className='h-10 rounded-sm  shadow-gray-300  shadow-sm' name="" id="">
    <option>Select</option>
    <option>Africa</option>
    <option>America</option>
    <option>Europe</option>
  </select>
</div>
<div className='grid grid-cols-4 px-20 ml-10 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-md:px-0 max-xl:px-0 max-lg:px-0 '>
<div className='w-[262px] rounded-md  bg-[#ffffff] shadow-sm shadow-gray-300 h-80'>
  
  <div className='mb-2'>
<img src={germany.src} alt="" />
  </div>
  <div>

  </div>
</div>
<div className='w-[262px]  rounded-md bg-[#ffffff] shadow-sm shadow-gray-300 h-80'>
   
  <div className='mb-2'>
<img src={usa.src} alt="" />
  </div>
  <div>

  </div>
</div > 
<div className='w-[262px] rounded-md bg-[#ffffff] shadow-sm shadow-gray-300 h-80'>
   
  <div className='mb-2'>
<img src={brazil.src} alt="" />
  </div>
  <div>

  </div>
</div> 
<div className='w-[262px] rounded-md bg-[#ffffff] shadow-sm shadow-gray-300 h-80'>
   <div className='mb-2'>
<img src={island.src} alt="" />
  </div>
  <div>

  </div>
</div>
</div>

    </div>
  )
}

export default page