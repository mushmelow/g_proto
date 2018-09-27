import React from 'react';

class Services extends React.Component{

	render(){
		return(
      <div className="dashboard-element">
      <h4 className="dashboard-element-title">Services</h4>
        <table className="table">
          <thead className="thead-sphinx">
            <tr>
              <th scope="col">Service</th>
              <th scope="col">Active</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TAPESERVER</td>
              <td>YES</td>
            </tr>
          </tbody>  
        </table>    
      </div> 
		);
	}
}

export default Services ;