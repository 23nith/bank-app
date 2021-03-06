import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export function Chart({currentUser}) {
    const theLabels = currentUser.expenses.map((item)=>{
        return item.expenseName
      })
    const theAmounts = currentUser.expenses.map((item)=>{
        return item.amount
      })
    const data = {
    labels: theLabels,
    datasets: [
        {
        label: '# of Votes',
        data: theAmounts,
        backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        },
    ],
    };
  return <Pie data={data}
    options={{plugins: {
      legend: {
        labels: {
          color: 'black',
          font: {
            size: 18
          }
        }
      }
    }}}
  />;
}

export default Chart