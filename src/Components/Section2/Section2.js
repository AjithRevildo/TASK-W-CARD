import React from 'react';
import { BsPeopleFill } from "react-icons/bs";
import { FaStoreAlt } from 'react-icons/fa';

function Section2() {
    
    return (<div id="bac">

<div className='container-fluid mt-4 '>
<div className='row'>
<div className="col-sm-12">
  <h1 className='text-center'>Headless Commerce API-First Approach</h1>
    </div>
    </div>
</div>

<div className='container mt-4 pb-5'>
<div className='row'>

<div className="col-sm-5 img-fluid pt-5">

<div class="card">
  <div class="card-body">
    <p class="card-text text-center">
       <h3> <BsPeopleFill/></h3>
        <h3>For Users</h3>
        <p>Authentication API</p>
        <p>Product API</p>
        <p>Card API</p>
        <p>Checkout API</p>
        <p>Categories API</p>
        <p>Order API</p>
        <p>Payment Gateway API</p>
    </p>
  </div>
</div>

</div>

    <div className="col-sm-1 pt-5"></div>

    <div className="col-sm-5 img-fluid pt-5">
    <div class="card">
  <div class="card-body">
    <p class="card-text text-center">
       <h3> <FaStoreAlt/></h3>
        <h3>For Vendors</h3>
        <p>Authentication API</p>
        <p>Product API</p>
        <p>Categories API</p>
        <p>Customers API</p>
        <p>Order API</p>
        <p>Shipping API</p>
        <p>Brands API</p>
    </p>
  </div>
</div>
    </div>
    <div className="col-sm-1 pt-5"></div>
    </div>
</div>

  </div>);
  }
  
  export default Section2;