import React from 'react';
import {Line} from 'react-chartjs-2';
import styles from './Chart.css';

const Chart = ({chart}) => {
  // console.log(dataChart[1]);
  const data = {
    labels: [],
     datasets: [
            {
                label: "На следущие 5 дней",
                backgroundColor: 'rgba(1, 126, 24, 0.53)',
                borderColor: '#ff6384',
                data: (chart),
              }, 
            ]
          }
    const options = {
            tooltips: {
                mode: 'index'
              },
              legend: {
                position:'top',
                display: true,
                backgroundColor: 'rgb(255,255,255)',
                labels: {
                    fontColor: 'white',
                    fontSize: 20, 
                }
            },

            title: {
                display: true,
                text: 'График температуры',
                position:'top',
                fontColor: 'white',
                opacity: '1',
                fontSize: 20, 
            },
        
    
          }
  return (
    <div>
      <div className={styles.ddd}>
        <Line  data={data} options={options}/>
      </div>
    </div>
  );
};

export default Chart;