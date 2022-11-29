import React from  'react';

// components
import Couple from '../../components/couple';
import SimpleSlider from '../../components/hero';
import Welcome from '../../components/welcome-area';
import People from '../../components/people';
import Location from '../../components/location';
import Gallery from '../../components/gallery';
import Rsvp from '../../components/rsvp';
import Navbar from '../../components/Navbar'
import Saveday from '../../components/countdown'


const Homepage = () => {
    return(
       <div>
           <Navbar/>
           <SimpleSlider/>
           <Saveday/>
           <Couple/>
           <Location/>
           <Welcome/>
           <People/>
           <Gallery/>
           <Rsvp/>
       </div>
    )
}

export default Homepage;