import React from 'react';
import img from './img1.png'

function Section1() {
    
    return (<div>

<div className='container-fluid mt-4 '>
<div className='row'>
<div className="col-sm-12">
  <h1 className='text-center'>Front-End Theme Editor</h1>
    </div>
    </div>
</div>

<div className='container mt-4 '>
<div className='row'>

<div className="col-sm-5 img-fluid mt-3">
  <p >Initiative To Use For Non-Technical Users-Activation</p>
  <p >Custom Front-End Theme Creation</p>
  <p >Render Dynamic Product Listing Using Templates</p>
  <p >Made With real-Time Bootstrap Page Builder</p>
  <p >Flexible Mobile-First Design</p>
  <p >Easy To Use Drag And Drop Builder</p>
  <p >Unlimited Theme Flexibility</p>
    </div>
    <div className="col-sm-2"></div>
    <div className="col-sm-5">
 <img src={img} alt="webnexs" class="img-fluid" />
    </div>

    </div>
</div>

  </div>);
  }
  
  export default Section1;