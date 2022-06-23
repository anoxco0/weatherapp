// import ApexCharts from "apexcharts";

// const getData = (index) => {
//     let times = [];
//     let data = [];
//     const time = new Date().toLocaleTimeString([], { hour: "2-digit" }).split(" ");
//     if(+index===0){
//         for(let i = (+time[0]); i <=12; i++){
//             times.push(i);
//             data.push(i);
//             if(i===12&&time[1]==="AM") {i = 1;}
//         }
//     }
//     return {times, data}
// }

// export const Chart = ({index})=>{
    
//     const {times,data}=getData(index);
//    var options = {
//     series: [{
//     name: 'temperature',
//     data: data
//   }],
//     chart: {
//     height: 350,
//     type: 'area'
//   },
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     curve: 'smooth'
//   },
//   xaxis: {
//     // type: 'datetime',
//     categories: times
//   },
//   tooltip: {
//     x: {
//       format: 'HH'
//     },
//   },
//   };

//   var chart = new ApexCharts(document.querySelector("#chart"), options);
//   chart.render();
//     return (
//         <div id="chart">

//         </div>
//     )
// }