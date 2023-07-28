import React from 'react';
import ReactDom from 'react-dom';
//import Card from './Cards';
//import Sdata from './Sdata';
//import "/index.css";
import App from './App';
// function ncard(val){
//   return(
//     <Card imgsrc={val.imgsrc}
//     title = {val.title}
//     sname = {val.sname}
//     link = {val.links}
//     /> 
//   );
// }

ReactDom.render(
<>
{/* 
<h1 className='heading_style'> List of top 5 Netflix series in 2023</h1>
 {Sdata.map(function ncard(val){
   return(
    <Card imgsrc={val.imgsrc}
    title = {val.title}
    sname = {val.sname}
    link = {val.links}
    /> 
  );

 })} */
 <App></App>
 }
</>,document.getElementById('root')

);