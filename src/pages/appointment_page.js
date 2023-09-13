import {React, Component} from 'react';
import img from '../images/logo.jpg'
import '../App.css'

class AppointmentPage extends Component{
    render(){
        return(
            <div>
                <nav>
                <img src={img} alt='logo'  className='logo' />
                <div className='navbar-menu'>
                    <a href='/' className='navbar-menu-a'><p>Home</p></a>
                    <button className='appointment-btn'>Book Appointment</button>
                </div>
        </nav>

            </div>
        )
    }
}

export default AppointmentPage