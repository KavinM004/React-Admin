import React from 'react'
import { IonIcon } from '@ionic/react';
import {cartOutline, pieChartOutline, walletOutline, personOutline } from 'ionicons/icons';

function grid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-8 mx-6 text-[white]">
      <div className=" relative bg-gradient-to-r from-[#1adeda] to-[#5682e9] py-9 pl-5 h-32 rounded-md hover:shadow-xl">
        <div className='font-semibold text-xl'>2050</div>
        <div className='text-lg'>Total Orders</div>
        <IonIcon icon={cartOutline} className='absolute right-5 bottom-12 text-5xl'/>
      </div>
      <div className="relative bg-gradient-to-r from-[#f4549a] to-[#ff6f78] pl-5 py-9 h-32 rounded-md hover:shadow-xl">
        <div className='font-semibold text-xl'>3250</div>
        <div className='text-lg'>Total Expennses</div>
        <IonIcon icon={walletOutline} className='absolute right-5 bottom-12 text-5xl'/>
      </div>
      <div className="relative bg-gradient-to-r from-[#42d898] to-[#3bb4ba] pl-5 py-9 h-32 rounded-md hover:shadow-xl">
        <div className='font-semibold text-xl'>87.5%</div>
        <div className='text-lg'>Total Revenue</div>
        <IonIcon icon={pieChartOutline} className='absolute right-5 bottom-12 text-5xl'/>
      </div>
      <div className="relative bg-gradient-to-r from-[#fbd147] to-[#ff8e57] pl-5 py-9 h-32 rounded-md hover:shadow-xl">
        <div className='font-semibold text-xl'>2550</div>
        <div className='text-lg'>New Users</div>
        <IonIcon icon={personOutline} className='absolute right-5 bottom-12 text-5xl'/>
      </div>
    </div>
  )
}

export default grid