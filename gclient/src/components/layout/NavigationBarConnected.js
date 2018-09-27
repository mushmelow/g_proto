import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';


class NavigationBarConnected extends Component {

    render() {
        // return user email= localStorage.email
        return (
       		<nav className="navbar navbar-expand-lg navbar-light bg-light">
					  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					    <span className="navbar-toggler-icon"></span>
					  </button>
					  <div className="collapse navbar-collapse" id="navbarSupportedContent">
					    <ul className="navbar-nav mr-auto">
					      <li className="nav-item active">
					        <Link className="nav-link" to="/">System Status<span className="sr-only">(current)</span></Link>
					      </li>
					      <li className="nav-item dropdown">
					        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Administration
					        </a>
					        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a className="dropdown-item" href= '/VirtualTapes'>Virtual Tapes</a>
					          <a className="dropdown-item" href="#">External Data</a>
					          <a className="dropdown-item" href="#">Jobs</a>
					          <a className="dropdown-item" href="#">Virtual Devices</a>
					          <a className="dropdown-item" href="#">Mounts and Locks</a>
					          <a className="dropdown-item" href="#">System Tasks</a>
					        </div>
					      </li>
					      <li className="nav-item dropdown">
					        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Configuration
					        </a>
					        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a className="dropdown-item" href="#">Virtual Devices</a>
					          <a className="dropdown-item" href="#">Tapes and Pools</a>
					          <a className="dropdown-item" href="#">Policies</a>
					          <a className="dropdown-item" href="#">Data Encryption</a>
					          <a className="dropdown-item" href="#">System</a>
					          <a className="dropdown-item" href="#">ZFS Vaults</a>
					        </div>
					      </li>
					      <li className="nav-item dropdown">
					        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Reports
					        </a>
					        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a className="dropdown-item" href="#">Storage Report</a>
					          <a className="dropdown-item" href="#">Export Report</a>
					        </div>
					      </li>
					      <li className="nav-item dropdown">
					        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Security
					        </a>
					        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a className="dropdown-item" href="#">Access Control</a>
					          <a className="dropdown-item" href="#">Certificates</a>
					          <a className="dropdown-item" href="#">Passwords</a>
					        </div>
					      </li>
					      <li className="nav-item dropdown">
					        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					          Support
					        </a>
					        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
					          <a className="dropdown-item" href="#">System Updates</a>
					          <a className="dropdown-item" href="#">SG Map</a>
					          <a className="dropdown-item" href="#">Logs</a>
					          <a className="dropdown-item" href="#">Trouble Shooting</a>
					        </div>
					      </li>
					      <li className="nav-item">
					        <a className="nav-link" href="#">About</a>
					      </li>
					    </ul>
					    <ul className="navbar-nav navbar-right">
					      <li className="nav-item inactive">
					        <a className="nav-link" href="#">{localStorage.email}</a>
					      </li>
					      <li className="nav-item">
					        <p className="navbar-btn">
	                  <a href="#" className="nav-link" onClick={()=>{this.props.logout()}}>Logout</a>
					        </p>
					      </li>
					    </ul>
					  </div>
					</nav>
        );
    }
}

export default NavigationBarConnected;