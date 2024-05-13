import React from 'react'
import {} from 'react-chartjs-2';
import {Chart as ChartJs, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend, PointElement} from 'chart.js';
import {Line} from 'react-chartjs-2'
ChartJs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
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
            label:'Apple',
            data:[0,60,25,80,35,75,30,0],
            fill: true,
            backgroundColor: 'orangered'
        },
        {
            label: 'Samsung',
            data: [0,30,60,25,60,25,50,0],
            fill: true,
            backgroundColor: 'palegreen'
        }
    ]
}

function LineChart() {
  return (
    <div className='mx-4'>
      <Line options={options} data={data} />
    </div>
  )
}

export default LineChart