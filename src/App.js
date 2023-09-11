
import {React, Component} from 'react';
import img from './images/logo.jpg'
import './App.css';




class App extends Component{
  render(){
    return <body>
     
      <nav>
        <img src={img} alt='logo'  className='logo'/>
        <div className='navbar-menu'>
          <a href='/'><p>Home</p></a>
          <a href='#services'><p>Services</p></a>
          <a href='#'><p>Contact</p></a>
          <button className='appointment-btn'>Book Appointment</button>
        </div>
        <button className='apt-btn appointment-btn'>Book Appointment</button>
      </nav>
      <div className='intro'>
            <img className='img1' src='https://img.freepik.com/free-photo/beautiful-young-woman-with-white-tulip-her-attractive-perfect-legs-indoors_186202-4427.jpg?w=826&t=st=1694269605~exp=1694270205~hmac=693c4f284a1e3d02d94c14acf54cf931f230507ddc5609b714659ed3530a15c8'></img>
            
            <div className='intro-card'>            
                    <h1 className='title'>BARE SKIN LASER</h1>
                  <div className='circle-card'>
                    <p>Hair
                    Removal Laser
                      Treatment</p>
                      <img src='https://img.freepik.com/free-photo/young-beautiful-girl-lies-beautician-s-table-receives-procedures_343596-4234.jpg?w=900&t=st=1694328506~exp=1694329106~hmac=916338e64422fc0353abf5512f4d458af3470d244b50984c64359722cab4e4be'/>
                  </div>
                  <div  className='certified-card'>
                    <h1>CERTIFIED LASER TECHNICIAN</h1>
                    
                  </div>
            </div>
            
      </div>
        {/* <div>
                  <p>
                    Introducing Holistic Facials at Bare Skin Laser.

                    A Holistic facial is a non-invasive cosmetic treatment that uses
                    various massage techninques with aromatherapy and all-natural skincare 
                    products to help the skin fight internal and external factors that cause damage.
                  </p>
                </div> */}
      <div className=' service' id='services'>
         <h1 className='service-title'>Services</h1>
         <div className='service-list'>

                  <div className='service-card'>
                      <div>
                        <h1>Package of 6 - Head To Toe</h1>
                        <p>Price: <span>$1975</span> <br/> <span className='discount'>Discount Available On First Treatment</span></p>
                        <button className='appointment-btn'>Book Appointment</button>
                      </div>
                      <img src='https://img.freepik.com/free-photo/female-patient-getting-rf-lifting-procedure_107420-74032.jpg?size=626&ext=jpg&ga=GA1.2.1139177812.1679995113&semt=ais'/>
                  </div>
                  <div className='service-card'>
                    <div>
                        <h1>Full Face</h1>
                        <p>Price: <span>$95</span> <br/> <span className='discount'>Discount Available On First Treatment</span></p>
                        <button className='appointment-btn'>Book Appointment</button>
                      </div>
                      <img src='https://img.freepik.com/free-photo/young-beautiful-girl-lies-beautician-s-table-receives-procedures_343596-4226.jpg?w=900&t=st=1694451706~exp=1694452306~hmac=0c6cb8910ae14ed20b6feaba7860aaa357e07bf965ad853628fef0a43180b3ea'/>
                  </div>
                  <div className='service-card'>
                    <div>
                        <h1>Full Arms</h1>
                        <p>Price: <span>$135</span> <br/> <span className='discount'>Discount Available On First Treatment</span></p>
                        <button className='appointment-btn'>Book Appointment</button>
                    </div>
                    <img src='https://img.freepik.com/premium-photo/body-care-underarm-laser-hair-removal_98890-141.jpg?w=900'/>
                  </div>
                  <div className='service-card'>
                  <div>
                      <h1>Lip & Chin</h1>
                      <p>Price: <span>$75</span> <br/> <span className='discount'>Discount Available On First Treatment</span></p>
                      <button className='appointment-btn'>Book Appointment</button>
                    </div>
                    <img src='https://img.freepik.com/free-photo/specialist-doing-face-procedure-with-instrument_1098-21234.jpg?size=626&ext=jpg&ga=GA1.2.1139177812.1679995113&semt=ais'/>
                  </div>
                  <div className='service-card'>
                      <div>
                          <h1>Stomach</h1>
                          <p>Price: <span>$85</span> <br/> <span className='discount'>Discount Available On First Treatment</span></p>
                          <button className='appointment-btn'>Book Appointment</button>
                        </div>
                        <img src='https://img.freepik.com/free-photo/female-therapist-giving-reductive-reaffirming-treatment-client-focusing-her-belly_662251-2042.jpg?w=900&t=st=1694452426~exp=1694453026~hmac=f762396a5a0e18a5599bd71da8405195401f682d4166d0d2726baee3e21aa56d'/>
                  </div>
                  <div className='service-card'>
                    <div>
                        <h1>Full Legs</h1>
                        <p>Price: <span>$395</span> <br/> <span className='discount'>Discount Available On First Treatment</span></p>
                        <button className='appointment-btn'>Book Appointment</button>
                      </div>
                      <img src='https://img.freepik.com/free-photo/woman-cosmetology-studio-laser-hair-removal_1157-34877.jpg?size=626&ext=jpg&ga=GA1.1.1139177812.1679995113&semt=ais'/>
                  </div>
         </div>
      </div>
      <div className='benefits'>
        <h1 className='benefits-title'>Benefits of Laser hair Removal</h1>
          <div className='benefits-card'>
              <div className='benefits-left-card'>
                  <p><span>1</span>Stops Hair Ingrowth</p>
                  <p><span>2</span>Precise Results</p>
                  <p><span>3</span>Saves Time</p>
                  <p><span>4</span>Personalized Treatment</p>
                  <p><span>5</span>Cost Effective</p>
                  <p><span>6</span>Painless</p>
                  <p><span>7</span>No Waiting For Regrowth</p>
              </div>
              <img className='benefits-image' src='https://img.freepik.com/premium-vector/feminine-hairless-smooth-legs-hair-removal-banner_82574-5264.jpg?w=1060'/>
          </div>
      </div>
      {/* <footer className='contact'>

      </footer> */}
    </body>
  }
}


export default App