import React from "react"
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Link,
  HashRouter
} from "react-router-dom";
import DocumentTitle from "react-document-title"
import {Component} from "./components/component"
import TextHolder from "./components/textholder"
import { Carousel } from 'react-responsive-carousel';
import Menu from './components/menu'
import venue from "./images/venue6.jpg"
import ban from "./images/Bangalore.png"
import  chen  from "./images/chennai.png"
import mumbai from "./images/mumbai.png"
import pune from "./images/pune.png"
import hyd from "./images/hyderabad.png"
import delhi from "./images/dehli.png"
import venueone from "./images/venueone.png"
import venuetwo from "./images/venuetwo.png"
import venuethree from "./images/venuethree.png"
import venuefour from "./images/venuefour.png"
import venuefive from "./images/venuefive.png"
import venuesix from "./images/venuesix.png"
import leftarrow from "./images/leftarrow.png"
import rightarrow from "./images/rightarrow.png"
import bdayhall from "./images/Birthdayhall.png"
import phall from "./images/partyhall.png"
import djhall from "./images/djhalls.png"
import wedhall from "./images/weddinghall.png"
import annualhall from "./images/annualdinners.png"
import partyhall from "./images/partyhall.png"
import logo from "./images/logo.png"
import footerimg from "./images/footerimg.png"
import services from "./images/services-sprite.png"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./less/theme.less"
import "./App.css";
import City1 from "./pages/City1"
import City2 from "./pages/City2"
import Home from "./pages/Home"
const JSON = {
  image1 : {
    type: 'MQ Palace Function Hall',
portfolioImage: <img src={chen} width="160" height="160"/>
},
image2: {
type: 'Pai Comforts - Flamingo',
portfolioImage:  <img src={pune} width="160" height="160"/>
},
image3: {
type: 'Siddiqua Function Hall',
portfolioImage: <img src={ban} width="160" height="160"/>
},
image4: {
  type: 'Siddiqua Function Hall',
  portfolioImage: <img src={mumbai} width="160" height="160"/>
  },
  image5:{
     heading:'Juhu club Millenum ',
     address:'Kolkata',
     venueone:<img src={venueone} width="300" height="220"/>
  },
  image6:{
    heading:'MQ palace function hall ',
    address:'Banglore',
    venueone:<img src={venuetwo} width="300" height="220"/>
  },
  image7:{
    headingtwo:'Pai comforts-femen ',
    addresstwo:'Hyderabad',
    venuetwo:<img src={venuethree} width="300" height="220"/>
  },
  image8:{
    headingtwo:'The  Cornthisis right club ',
    addresstwo:'Chenaai',
    venuetwo:<img src={venuefour} width="300" height="220"/>
  },
  image9:{
    headingthree:'Panvandu JP Hotel ',
    addressthree:'Mumbai',
    venuethree:<img src={venuefive} width="300" height="220"/>
  },
  image10:{
    headingthree:'The Siddiqua function hall  ',
    addressthree:'Dehli',
    venuethree:<img src={venuesix} width="300" height="220"/>
  },
  image11:{
   
    hallsone:<img src={bdayhall} width="300" height="220"/>,
    details:''
  },
  image12:{
    
    hallsone:<img src={partyhall} width="300" height="220"/>,
    details:''
  },
  image13:{
    
     hallstwo:<img src={djhall} width="300" height="220"/>,
     details2:''
   },
   image14:{
     
     hallstwo:<img src={annualhall} width="300" height="220"/>,
     details2:''
   },
   image15:{
    
     hallsthree:<img src={wedhall} width="300" height="220"/>,
     details3:''
   },
   image16:{
     
     hallsthree:<img src={phall} width="300" height="220"/>,
     details3:''
   },
   image17:{
     popularservice:<img src={services} width="90%" height="100%"/> 
   }
};


export default class App extends Component {
  render() {
    return (
      <div >
     
      <header className="App-header" ><img className="marginclass" src={logo} height="80%"/>
      <div id = "header">
       <ul>
        <li><a color="white"className="anchor" href="#">VENUE</a></li>
        <li><a href="#">Add venue</a></li>
        <li><a href="#">Login</a></li>
     </ul> 
   </div>  
      </header>
      <DocumentTitle title="React Ultimate :: About">
        
        <TextHolder>
        <div>
         <img src={venue} width="100%" height="50%"/>
         <div className="cities">
        <center>
         <h3>Discoveries in Cities</h3>
         <hr/>
         <Router>
           <div>
        <Link to="/"><img src={leftarrow} width="30" height="160"/></Link>
         
        <Link to="/City1"><img src={ban} width="160" height="160"/></Link>
        <Link to="/City2"><img src={hyd} width="160" height="160"/></Link>
        
        <Route exact path="/" component={Home} />
        <Route exact path="/City2" component={City2} />
        <Route exact path="/City1" component={City1} />
        </div>
        </Router>
        </center>
       
        </div>
       

        <div className="venueclass">
        <center><h3 className="venuecolor">VENUES</h3></center>
        
        <div className="row">
          

          <div className="col-4" >
        {Object.keys(JSON).map(key => (
          <div align="center" >
             {JSON[key].venueone} 
             <p>{JSON[key].heading}</p><p>{JSON[key].address}</p>
              </div>
                ))}
          </div>

          <div className="col-4">
        {Object.keys(JSON).map(key => (
          <div align="center">
             {JSON[key].venuetwo} 
             <p>{JSON[key].headingtwo}</p><p>{JSON[key].addresstwo}</p>
              </div>
                ))}
          </div>
          <div className="col-4">
        {Object.keys(JSON).map(key => (
         <div align="center">
             {JSON[key].venuethree} 
             <p>{JSON[key].headingthree}</p><p>{JSON[key].addressthree}</p>
              </div>
                ))}
          </div>
          </div>
     </div>
     <div className="hallclass">
     <div className="row">
       <div className="col-4">
         {Object.keys(JSON).map(key=>(
           <div align="center">
              {JSON[key].hallsone}
              <p>{JSON[key].details}</p>
              </div>
         ))}
           </div>
       <div className="col-4">
       {Object.keys(JSON).map(key=>(
           <div align="center">
              {JSON[key].hallstwo}
              <p>{JSON[key].details2}</p>
              </div>
         ))}
       </div>
       <div className="col-4">
       {Object.keys(JSON).map(key=>(
           <div align="center">
              {JSON[key].hallsthree}
              <p>{JSON[key].details3}</p>
              </div>
         ))}
       </div>
     </div>
     </div>
     <center>
     <h3>Popular Services</h3>
     <hr/>
     </center>
     <div className="popularserviceclass">
       {Object.keys(JSON).map(key=>(
         <div align="center">
           {JSON[key].popularservice}
         </div>
       ))}
       </div>
       </div>
       
</TextHolder>
 </DocumentTitle>

 <footer >
   <div >
    

<img src={footerimg} width="100%" height="60%"/>
<div className="footerclass"><p  align="center">Copyright @2017 |  Venefly All rights reserved</p></div>
</div>

 
     </footer>
    </div>
    
    
    )
  }
}

<link href="carousal.css" rel="stylesheet"/>


