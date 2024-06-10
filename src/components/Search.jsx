import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {

const [data,changedata]=useState(
    {
        "nation":""
    }
)

const inputH=(event)=>{
    changedata({...data,[event.target.name]:event.target.value})
}

const Read=()=>{
    console.log(data)
}

  return (
    <div>
<Navbar/>
<div className="container">
    <div className="row g-3">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<label htmlFor="" className="form-label">Nation</label>
<input type="text" className="form-control"  name='nation' value={data.nation} onChange={inputH} />

        </div>
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<button className="btn btn-success" onClick={Read}>Search</button>

        </div>
    </div>
</div>

    </div>
  )
}

export default Search