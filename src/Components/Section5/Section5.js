import React from 'react';
import './Section5.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import {BsCodeSlash  } from "react-icons/bs";
import { GrCatalog } from "react-icons/gr";
import { TbPlugConnected } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { RiFileSettingsLine } from "react-icons/ri";
import { FaGreaterThan } from 'react-icons/fa';

function Section5() {
    
    return (<div id="bac" className='pb-5'>
<div className='container-fluid mt-4 '>
<div className='row'>
<div className="col-sm-12">
  <h1 className='text-center'>Why Choose Node.js Headless Commerce</h1>
    </div>
    </div>
</div>

<div className='container mt-4 '>
<div className='row'>

<div className="col-sm-3 pt-5">
<div class="card" id='parent2'>
   
   <div class="card-body">
     <p class="card-text text-center">
     <h1 id="child2" class=" text-center "><AiOutlineShoppingCart/></h1>
        <h3>Node.js Headless Ecommerce Solutions</h3>
        <p>Let it possible for customers to shop wherever they are i.e.) online,i an app, or from all devices.</p>
     </p>
   </div>
 </div>
    </div>

    <div className="col-sm-1 pt-5"></div>

<div className="col-sm-3 pt-5">
 <div class="card" id='parent2'>
   
  <div class="card-body">
    <p class="card-text text-center">
    <h1 id="child2" class=" text-center "><BsCodeSlash/></h1>
       <h3>Backend<br></br> Flexibility</h3>
       <p>Run a promotion with your marketing team at anytime by making changes to the content layer without refiguring the back-end system.</p>
    </p>
  </div>
</div>
    </div>


    <div className="col-sm-1 pt-5"></div>

    <div className="col-sm-3 pt-5">
 <div class="card" id='parent2'>
   
  <div class="card-body">
    <p class="card-text text-center">
    <h1 id="child2" class=" text-center "><GrCatalog/></h1>
       <h3>Products<br></br> Catalog</h3>
       <p>Run a promotion with your marketing team at anytime by making changes to the content layer without refiguring the back-end system</p>
    </p>
  </div>
</div>
    </div>


    </div>
</div>



<div className='container mt-4 '>
<div className='row'>

<div className="col-sm-3 pt-5">
<div class="card" id='parent2'>
   
   <div class="card-body">
     <p class="card-text text-center">
     <h1 id="child2" class=" text-center "><TbPlugConnected/></h1>
        <h3>Easy<br></br> Connect</h3>
        <p>Go with any categories or business categories that you want to connect across commerce and sales channels</p>
     </p>
   </div>
 </div>
    </div>

    <div className="col-sm-1 pt-5"></div>

<div className="col-sm-3 pt-5">
 <div class="card" id='parent2'>
   
  <div class="card-body">
    <p class="card-text text-center">
    <h1 id="child2" class=" text-center "><MdPayment/></h1>
       <h3>Payment<br></br>Gateway</h3>
       <p>Easy to integrate and connect with any payment gateway that you desire.We have the worlds payment gateway added default for you, so you just have to start selling!</p>
    </p>
  </div>
</div>
    </div>


    <div className="col-sm-1 pt-5"></div>

    <div className="col-sm-3 pt-5">
 <div class="card" id='parent2'>
   
  <div class="card-body">
    <p class="card-text text-center">
    <h1 id="child2" class=" text-center "><RiFileSettingsLine/></h1>
       <h3>Manage <br></br>Orders</h3>
       <p>Order are processed with ease by either getting them sent directely to the vendor's backed eCommerce solution via a dedicated API.</p>
    </p>
  </div>
</div>
    </div>


    </div>
</div>
<div className='container-fluid mt-4 '>
<div className='row'>
<div className="col-sm-12">
<center><button  className="btn btn-dark text-center">EXPLORE ALL FEATURES <FaGreaterThan/></button></center>
    </div>
    </div>
</div>


  </div>);
  }
  
  export default Section5;