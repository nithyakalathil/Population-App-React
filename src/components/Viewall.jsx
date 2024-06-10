import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {

const [data,changedata]=useState(
    {"data":[]}
)

const fetchdata=()=>{
    axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population").then(
        (response)=>{
            changedata(response.data)
        }
    )
}

useEffect(()=>{fetchdata()},[])

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">nation</th>
      <th scope="col">Year</th>
      <th scope="col">population</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    
    {data.data.map((value,index)=>{
        return <tr>
        <th scope="row">{index}</th>
        <td>{value.Nation}</td>
        <td>{value.Year}</td>
        <td>{value.Population}</td>
      </tr>
    })}
   
  </tbody>
</table>

        </div>
    </div>
</div>


    </div>
  )
}

export default Viewall