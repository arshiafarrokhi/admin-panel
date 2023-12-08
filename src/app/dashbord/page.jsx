import React from 'react'
import Card1 from '../ui/dashbord/card1/card1'
import Card2 from '../ui/dashbord/card2/card2'
import Card3 from '../ui/dashbord/card3/card3'
import Card4 from '../ui/dashbord/card4/card4'
import Chartone from '../ui/dashbord/chartone/chartone'
import Charttwo from '../ui/dashbord/charttwo/charttwo'
import Listone from '../ui/dashbord/listone/listone'
import Listtwo from '../ui/dashbord/listtwo/listtwo'
import Footer from '../ui/dashbord/footer/footer'
import '../ui/globals.css'

const Dashbord = () => {
  return (
    <div className='bg-[#131720] p-5 overflow-x-hidden text-[#fff]'>
      <div className='flex items-center justify-around mt-4'>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
      <div className='flex mt-8 justify-between items-center'>
        <Chartone />
        <Charttwo />
      </div>
      <div className='flex mt-8 justify-between items-center'>
        <Listone />
        <Listtwo />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Dashbord