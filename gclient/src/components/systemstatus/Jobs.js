import React from 'react';

class Jobs extends React.Component{

  render(){
    return(
      <div className="dashboard-element">
        <h4 className="">Job Status</h4> <p className="dashboard-element-title">Displays running jobs, jobs that are scheduled to run in the next 4 hours and jobs that completed in the last 4 hours</p>
        <table className="table">
          <thead className="thead-sphinx">
            <tr>
              <th scope="col">Job Name</th>
              <th scope="col">Job Type</th>
              <th scope="col">Job Description</th>
              <th scope="col">Time</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Decrypt011218121323</td>
              <td>Decrypt Job</td>
              <td>Decrypt 3 cartridges</td>
              <td>Fri Jan 12 12:17 2018</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>Decrypt011218121322</td>
              <td>Decrypt Job</td>
              <td>Decrypt 3 cartridges</td>
              <td>Fri Jan 12 11:17 2018</td>
              <td>Failed</td>
            </tr>
            <tr>
              <td>Decrypt011218121321</td>
              <td>Decrypt Job</td>
              <td>Decrypt 3 cartridges</td>
              <td>Fri Jan 12 10:17 2018</td>
              <td>Failed</td>
            </tr>

          </tbody>  
        </table>    
      </div>  
    );
  }
}

export default Jobs;
