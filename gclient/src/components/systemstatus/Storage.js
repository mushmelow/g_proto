import React from 'react';

var listStyle = {listStyleType:"none"};

class Storage extends React.Component{

  render(){
    return(
     <div className="dashboard-element">
        <h4 className="dashboard-element-title">Storage</h4>
        <ul id="applianceInfos" style={listStyle}>
          <li><b>Licensed Capacity:</b> 500TB</li>
          <li><b>Used Capacity:</b> 2.1TB</li>
        </ul>
        <table className="table">
          <thead className="thead-sphinx">
            <tr>
              <th scope="col">Storage Location</th>
              <th scope="col">Sized</th>
              <th scope="col">Used</th>
              <th scope="col">Quota</th>
              <th scope="col">Available</th>
            </tr>
          </thead>
          <tbody>
            <tr className="trbold">
              <td>Storage(zfs)</td>
              <td>2.61T</td>
              <td>11.17G</td>
              <td></td>
              <td>2.60T (100%)</td>
            </tr>
            <tr>
              <td>VAULT01</td>
              <td></td>
              <td>11.17G</td>
              <td>100.00G</td>
              <td>2.60T (100%)</td>
            </tr>               
            <tr className="trbold">
              <td>VAULT00(ext4)</td>
              <td>223G</td>
              <td>63M</td>
              <td></td>
              <td>212G (99%)</td>
            </tr>              
          </tbody>  
        </table>  
      </div>    
    );
  }
}

export default Storage;
