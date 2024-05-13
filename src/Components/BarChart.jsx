import React from 'react'
import {} from 'react-chartjs-2';
import {Chart as ChartJs, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import {Bar} from 'react-chartjs-2'
ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend :{
      position: 'top'
    },
    title:{
      display: true,
      text: ''
    }
  }
}

const data={
    labels:[1,2,3,4,5,6,7,8],
    datasets:[
        {
            label:'Laptops',
            data:[40,30,60,35,60,25,50,40],
            backgroundColor: 'orangered'
        },
        {
            label: 'Mobiles',
            data: [50,60,40,70,35,75,30],
            backgroundColor: 'palegreen'
        }
    ]
}

function BarChart() {
  return (
    <div className='mx-4'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart