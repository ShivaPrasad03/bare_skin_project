import { React, Component } from "react";
import './modal.css'

 class Modal extends Component{
     fun = this.props.change
    toggle = ()=>{
        this.fun()
    }
    render(){
        
        return(
            <div className="modal">
                {/* <button onClick={this.toggle}>close</button> */}
                <div className="card">
                    <div className="close-btn" onClick={this.toggle}><button>X</button></div>
                    <h1 style={{textAlign:'center',color:'white',marginTop:'0px'}}>Make Appointment</h1>
                    <div className="input-card">
                        <div className="input-label">
                            <label>Full Name</label>
                            <input type="text" placeholder="Your Name"></input>
                        </div>
                        <div className="input-label">
                            <label>Email</label>
                            <input type="text" placeholder="Your Email"></input>
                        </div>
                        <div className="input-label">
                            <label>Mobile Number</label>
                            <input type="text" placeholder="Your Number"></input>
                        </div>
                        <div className="input-label">
                            <label>Treatment Type</label>
                            <select  className="dropdown" >
                                <option>Package of 6 - Head To Toe</option>
                                <option>Full Body - Head To Toe</option>
                                <option>Full Legs</option>
                                <option>Full Arms</option>
                                <option>Full Face</option>
                                <option>Neck</option>
                                <option>Lip & Chin</option>
                                <option>Stomach</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className="input-label">
                            <label>Date</label>
                            <input type="date"></input>
                        </div>
                        <div className="input-label">
                            <label>Available Slots</label>
                            <input type="time"></input>
                        </div>
                        <button className="submit-btn">Submit</button>
                    </div>
                    
                </div>      
            </div>
               
        )
    }
}

export default Modal