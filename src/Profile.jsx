import React from 'react'
import Table from './Table.jsx';
import Navbar from './Navbar.jsx';


const Profile = () => {
  return (
    <>
    <Navbar/>
    <div className='m-0 p-0  w-full h-[28vh] '><img className='w-full h-full object-cover ' src='https://as2.ftcdn.net/v2/jpg/03/54/94/49/1000_F_354944901_SzU5v3KbpDM0752i9d7C3gSMjFexisw1.jpg'/></div>
        <div className='absolute w-full  flex mt-[18vh] flex-col items-center z-10 top-0 left-0'>
           <div className='mx-auto h-[150px] w-[150px] bg-slate-700 border-double flex justify-center items-center overflow-hidden rounded-[50%]'>
           <h1 className=' text-[45px] font-bold text-white '>B</h1>
           </div>
            <div className='flex flex-col items-center gap-2 text-[30px] font-bold mt-5 '>
            
            <div id="name">Mark Aentony</div>
            <div className='text-[18px]'>abc@gmail.com</div>
            <div className='text-[18px]'>9862155454</div>
            </div>
            <div className='m-5 shadow-xl'>
            <Table />
            </div>
        </div>

</>
  )
}

export default Profile