import React from 'react';
import axios from "axios/index";

class VirtualTapes extends React.Component{
    constructor (props){
        super();
        this.state = {
            mount: []
        }
    }

    componentDidMount() {
        axios.get('/mount/all')
            .then(response=>{
                console.log("this state" +response.data)
                this.setState({
                    mount: response.data
                });
            })
    }


    clicked(mountParam){
        console.log("mount clicked!!"+ mountParam._id)
        console.log("mount clicked!!"+ mountParam.tape)
        console.log("mount clicked!!"+ mountParam.driverName)



        if(mountParam.state=="load_completed"){
            axios.put( '/mount/'+ mountParam._id, {
                state: "load_todo",
                tape:  mountParam.tape,
                driverName: mountParam.driverName
            })
                .then(function (res){
                    if (res.status === 200) {
                        console.log("Update Success")
                    }
                })
                .catch(function (response){
                    console.log(response)
                });
            //reload page
            window.location.reload();
        }else if(mountParam.state=="load_todo"){
            axios.put( '/mount/'+ mountParam._id, {
                state: "load_completed",
                tape:  mountParam.tape,
                driverName: mountParam.driverName
            })
                .then(function (res){
                    if (res.status === 200) {
                        console.log("Update Success")
                    }
                })
                .catch(function (response){
                    console.log(response)
                });
            //reload page
            window.location.reload();
        }

    }

    renderMount(mountStatus){
        console.log("test"+  mountStatus.state)
        if(mountStatus.state=="load_completed"){
            return(
            <button type="button" onClick={(e) => {e.preventDefault(); this.clicked(mountStatus);}}  className="btn btn-primary">mount</button>
            )
        }else if(mountStatus.state=="load_todo"){
            return(
            <button onClick={(e) => {e.preventDefault(); this.clicked(mountStatus);}} type="button" className="btn btn-danger">unmount</button>
            )
        }
    }

    renderTable = () => {
        return this.state.mount.map((value,i) => {
            return (
                    <tr key={i}>
                        <td>{value.tape}</td>
                        <td>
                            {this.renderMount(value) }
                        </td>
                        <td>{value.state}</td>
                    </tr>
            )
        })
    };

    render(){
        return(
            <div >
                <h1>  virtual tapes </h1>
                <table className="table table-bordered table-dark"  >
                    <thead>
                    <tr>
                        <td>Tape</td>
                        <td>Mount</td>
                        <td>State</td>
                    </tr>
                    </thead>
                    <tbody >
                        {this.renderTable()}
                    </tbody>
                </table>
            </div>
            )
    }
}
export default VirtualTapes