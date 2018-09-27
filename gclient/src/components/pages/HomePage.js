import React from 'react';
import {Link} from 'react-router-dom';

import ApplianceInfos from '../systemstatus/ApplianceInfos';
import Services from '../systemstatus/Services';
import VirtualDevices from '../systemstatus/VirtualDevices';
import Jobs from '../systemstatus/Jobs';
import Storage from '../systemstatus/Storage';

var listStyle = {listStyleType:"none"};

const HomePage =(props) =>(

<div className="container">
		<br/>
    <h2>System Status</h2>
    <div className="row">
      <div className="col-md-6">
        <ApplianceInfos/>
      </div>
      <div className="col-md-6">
        <Services />
      </div>
    </div>    
    <div className="row">
      <div className="col-md-12">
        <VirtualDevices/>
      </div> 
    </div>  
    <div className="row">
      <div className="col-md-12">
        <Jobs/>
      </div> 
    </div> 
    <div className="row">
      <div className="col-md-12">
        <Storage/>
      </div>
    </div>
</div>

);

export default HomePage;