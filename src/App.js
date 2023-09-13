
import {React, Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from './pages/main_page';
import AppointmentPage from './pages/appointment_page';




export default class App extends Component{
render(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='appointment' element={<AppointmentPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}
}