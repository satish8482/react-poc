import React from "react"
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
import logo from "./images/logo.png"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Theme from "./less/theme.less"
import "./App.css";

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
  }
};


export default class App extends Component {
  render() {
    return (
      <div >
      <Menu></Menu>
      <header className="App-header" ><img src={logo} height="80%"/></header>
      <DocumentTitle title="React Ultimate :: About">
        
        <TextHolder>
        <div>
         <img src={venue} width="100%" height="50%"/>
         <div className="cities">
        <center>
         <h3>Discoveries in Cities</h3>
         <a href=""><img src={leftarrow} width="30" height="160"/></a>
        <a href=""><img src={ban} width="160" height="160"/></a>
        <a href=""><img src={hyd} width="160" height="160"/></a>
        <a href=""><img src={delhi} width="160" height="160"/></a>
        <a href=""><img src={chen} width="160" height="160"/></a>
        <a href=""><img src={mumbai} width="160" height="160"/></a>
        <a href=""><img src={pune} width="160" height="160"/></a>
        <a href=""><img src={rightarrow} width="30" height="160"/></a>
        </center>
        </div>
        <div className="venueclass">
        <center><h3 className="venuecolor">VENUES</h3></center>
        <div className="row">
          

          <div className="col-4" >
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venueone} 
             <p>{JSON[key].heading}</p><p>{JSON[key].address}</p>
              </div>
                ))}
          </div>

          <div className="col-4">
        {Object.keys(JSON).map(key => (
          <div >
             {JSON[key].venuetwo} 
             <p>{JSON[key].headingtwo}</p><p>{JSON[key].addresstwo}</p>
              </div>
                ))}
          </div>
          <div className="col-4">
        {Object.keys(JSON).map(key => (
         <div >
             {JSON[key].venuethree} 
             <p>{JSON[key].headingthree}</p><p>{JSON[key].addressthree}</p>
              </div>
                ))}
          </div>
          </div>
     </div>
       </div>
</TextHolder>
 </DocumentTitle>
    </div>
    )
  }
}
<link href="carousal.css" rel="stylesheet"/>