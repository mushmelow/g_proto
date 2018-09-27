import React from 'react';

class VirtualDevices extends React.Component{

  render(){
    return(
      <div className="dashboard-element">
        <h4 className="dashboard-element-title">Virtual Devices Status</h4>
        <div id="services">
          <table className="table">
            <thead className="thead-sphinx">
              <tr>
                <th scope="col">Status</th>
                <th scope="col">Device Name</th>
                <th scope="col">Type</th>
                <th scope="col">Last Command</th>
                <th scope="col">KB/sec</th>
                <th scope="col">Bytes Transferred</th>
                <th scope="col">Virtual Media</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Enabled</td>
                <td>vtd01</td>
                <td>ULT3580-TD4</td>
                <td>MODE_SELECT_6</td>
                <td>0</td>
                <td>0 Bytes</td>
                <td>/VAULT40/QPool01/QU0118</td>
              </tr>
              <tr>
                <td>Enabled</td>
                <td>vtd02</td>
                <td>ULT3580-TD4</td>
                <td>MODE_SELECT_6</td>
                <td>0</td>
                <td>0 Bytes</td>
                <td>/VAULT40/QPool02/QU0209</td>
              </tr>
              <tr>
                <td>Enabled</td>
                <td>vtd03</td>
                <td>ULT3580-TD4</td>
                <td>MODE_SELECT_6</td>
                <td>0</td>
                <td>0 Bytes</td>
                <td>/VAULT40/QPool03/QU0303</td>
              </tr>
            </tbody>  
          </table>    
        </div> 
      </div>  
    );
  }
}

export default VirtualDevices;



