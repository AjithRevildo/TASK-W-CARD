import React from 'react';
import './Header.css'


function Header() {
    
    return (<div>
<div className='pt-5 pb-5 ' id="gra">
<div className='container-fluid mt-4 '>
    <div className='row'>

    <div className="col-sm-5 m-3">
<h1 className='text-white'>Wcart Headless Commerce APIs To Fuel Ecommerce Businesses</h1>

<p className='text-white'>With Full-Fledged Frontend (Theme Editor) & Ready Build 
    Mobile Apps for Growth!</p>

    <button type="button" class="btn btn-dark">REQUEST FOR A FREE LIVE DEMO</button>

    <p className='text-white'>(Your live demo will be created in less than two minutes- Click Here)</p>
    </div>
    <div className="col-sm-2"></div>
    <div className="col-sm-3">
   
   <div className="card m-3" id="glass">
<article className="card-body">
<h4 className="card-title text-center mb-4 mt-1 text-white" >Create Your Demo Store In Less Than Two Minutes</h4>
<form action="#" >
   <div className="mb-3">
      <input type="text" className="form-control" id="text" placeholder="Store Name" name="text"/>
    </div>
     <div className="mb-3 mt-3">
      <input type="email" className="form-control" id="email" placeholder="Email" name="email"/>
    </div>
    <center><button type="submit" className="btn btn-dark text-center">CREATE YOUR STORE NOW</button></center>
  </form>
</article>
</div>
  
    </div>

    <div className="col-sm-2"></div>
   
</div>
</div>
</div>
  </div>);
  }
  
  export default Header;