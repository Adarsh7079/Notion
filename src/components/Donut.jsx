import React from 'react'
import {
    Chart as ChartJs,ArcElement,Tooltip,Legend
} from "chart.js"
ChartJs.register(
  ArcElement,
  Tooltip,
  Legend
);
import { Doughnut } from 'react-chartjs-2';

const Donut = () => {

  const data ={
  
    datasets:[{
      
      data:[10,20,10,40,20],
      backgroundColor:["#5E4200","#956F00","#E5A500","#FFC879","#FFDDB6"],
      borderColor:["#5E4200","#956F00","#E5A500","#FFC879","#FFDDB6"]
    }]
  }
  const options={}
  return (
    <div
     style={{width:180}}>
      <Doughnut
     
      options={options}
      data={data}>
        
      </Doughnut>
    </div>
  )
}

export default Donut