import React from 'react'
import Link from 'next/link'

const footer = () => {
    return (
        <div className='flex items-center justify-center w-full h-[50px] bg-[#171F2A] mt-5 mb-1 rounded-2xl'>
            Made With ❤️<Link href="https://arshiafarrokhi.com/" className='text-[#3EBF77]'>Arshia Farrokhi</Link>
        </div>
    )
}

export default footer