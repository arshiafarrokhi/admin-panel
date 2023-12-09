"use client"
import Link from 'next/link'
import '../globals.css'
import React, { useRef } from "react";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

  const inputName = useRef();
  const inputEmail = useRef();

  const inputClick = () => {
    toast('Enter Admin',
      {
        icon: '📌',
        style: {
          borderRadius: '8px',
          background: '#171F2A',
          color: '#fff',
        },
      }
    );
  }

  const loginclick = (e) => {
    if (inputName.current.value == '' || inputName.current.value == null || inputEmail.current.value == '' || inputEmail.current.value == null) {
      e.preventDefault()
      toast('Enter Your Name And Email',
        {
          icon: '❌',
          style: {
            borderRadius: '8px',
            background: '#171F2A',
            color: '#fff',
          },
        }
      );
    }
  }
  return (
    <div className='loginPage'>
      <h1 className='wlcToLogin'>LogIn To AdminPanel</h1>
      <input onClick={inputClick} ref={inputName} placeholder='Your Name...' className='logIn-input' type="text" />
      <input onClick={inputClick} ref={inputEmail} placeholder='Your Email...' className='logIn-input' type="email" />
      <Link className='LogIn-Button' href={"/dashbord"} onClick={loginclick}>LogIn</Link>
      <Toaster />
    </div>
  )
}

export default Login