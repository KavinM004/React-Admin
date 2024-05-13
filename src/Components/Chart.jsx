import React from 'react'
import ReactApexChart from 'react-apexcharts';
import { IonIcon } from '@ionic/react';
import { ellipsisHorizontal } from 'ionicons/icons';
import BarChart from './BarChart.jsx'
import LineChart from './LineChart.jsx'

function chart() {

        

  return (
    <div>
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-8 ml-4 mr-4">
      <div className="bg-[white] relative md:col-span-1 h-96 rounded-md hover:shadow-lg ">
      <div className='font-semibold py-3 pl-4'>Product Sales</div>
      <IonIcon icon={ellipsisHorizontal} className='absolute right-7 top-4 text-xl' />
      <hr className='border border-pink-200'/>
      <LineChart className='px-2' />
      </div>
      <div className="bg-[white] relative md:col-span-1 h-auto rounded-md hover:shadow-lg ">
        <div className='font-semibold py-3 pl-4'>Top Selling Catergories</div>
        <IonIcon icon={ellipsisHorizontal} className='absolute right-7 top-4 text-xl' />
        <hr className='border border-pink-200'/>
        <BarChart className='px-2 ' />
      </div>
    </div>
    </div>
  )
}

export default chart