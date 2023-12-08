"use client"
import React, { useRef } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";

const navbar = () => {

  const useHamb = useRef()
  const useMenu = useRef()

  const hambToggle = () => {
    useHamb.current.classList.toggle("scale-[2]");
    useMenu.current.classList.toggle("");
  }

  return (
    <div className='w-full flex justify-between bg-[#212B39] h-[100px] text-[#D2D9E4] p-6'>
      <div className='lg:flex hidden items-center'>
        <input type="search" className='bg-inherit border rounded-lg border-slate-600 py-2 px-2 w-64 outline-none' placeholder='Search...' />
        <FaSearch className='ml-2 cursor-pointer' />
      </div>
      <div className='flex lg:hidden' ref={useHamb} onClick={hambToggle}>
        <GiHamburgerMenu className='cursor-pointer text-[40px]' />
      </div>
      <div className='flex items-center w-80 justify-evenly'>
        <MdOutlineChat className=' bg-[#171f2a] p-1  scale-[3] rounded-md mx-4 cursor-pointer' />
        <IoMdNotificationsOutline className='bg-[#171f2a] p-1 mx-3 scale-[3] rounded-md  cursor-pointer' />
        <img src="/avatar.png" className='scale-[0.8]' alt="" />
        <div >
          <p className='text-xs text-[14px]'>Arshia Farrokhi</p>
          <p className='text-xs text-[14px]'>Arshiafarrokhi@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default navbar