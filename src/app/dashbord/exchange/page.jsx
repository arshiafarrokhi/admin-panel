import React from 'react'
import '../../ui/globals.css'
import Footer from '../../ui/dashbord/footer/footer'
import Chartexchange from '../../ui/dashbord/chartexchange/chartexchange'
import Listexchange from '../../ui/dashbord/listexchange/listexchange'

const Exchange = () => {
  return (
    <div >
      <div className='bg-[#131720] p-5 overflow-x-hidden text-[#fff]'>
        <div className='w-full h-[400px] flex mt-8 justify-between items-center'>
          <Chartexchange/>
        </div>
        <div className='w-full h-[800px] flex mt-8 justify-between items-center'>
          <Listexchange/>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Exchange