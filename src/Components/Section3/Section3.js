import React from 'react';
import img from './img2.png'

function Section3() {
    
    return (<div>

<div className='container-fluid mt-4  '>
<div className='row pt-5'>
<div className="col-sm-12">
  <h1 className='text-center'>Feature Rich Addons</h1>
    </div>
    </div>
</div>

<div className='container mt-4 '>
<div className='row'>

<div className="col-sm-5 img-fluid mt-3">
  <p >ShipStation API,Taxjar/Avalara APIs(Addon) </p>
  <p >Real-time split payment via Stripe Connect (Addon)</p>
  <p >Automated Tax & shipping management (Addon)</p>
  <p >Hyperiocal Marketplace System (Addon)</p>
  </div>
    <div className="col-sm-2"></div>
    <div className="col-sm-5">
 <img src={img} alt="webnexs" class="img-fluid"  style={{width:"510px"}}/>
    </div>

    </div>
</div>

  </div>);
  }
  
  export default Section3;