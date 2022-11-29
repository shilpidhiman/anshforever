import React from "react";
import { Link } from "react-router-dom";
import Sectiontitle from "../section-title";
import strory1 from "../../images/events/1.jpg";
import strory2 from "../../images/events/2.jpg";
import strory3 from "../../images/events/3.jpg";

import "./style.css";

const Location = () => {
  return (
    <div id='event' className='service-area section-padding'>
      <div className='container'>
        <Sectiontitle section={"When & Where"} />
        <div className='service-area-menu'>
          <div className='Ceremony-wrap'>
            <div className='row'>
              <div className='col-lg-5'>
                <div className='ceromony-img'>
                  <img src={strory1} alt='' />
                </div>
              </div>
              <div className='col-lg-7'>
                <div className='ceromony-content'>
                  <h3>Wedding Ceremony</h3>
                  <span>Sunday, 15 January 23, 7.00 PM onwards</span>
                  <span>Taj Palace, Delhi</span>
                  <Link to='/'>See Location</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='Ceremony-wrap'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='ceromony-content ceromony-content2'>
                <h3>Engagement and Sagan</h3>
                <span>Saturday 14 January, 6.00 PM</span>
                <span>Pride Plaza Hotel,Aerocity</span>
                <Link to='/'>See Location</Link>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className='ceromony-img'>
                <img src={strory2} alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='Ceremony-wrap'>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='ceromony-img'>
                <img src={strory3} alt='' />
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='ceromony-content'>
                <h3>Haldi Ceremony</h3>
                <span>Sunday, 15 July 23, 10 AM onwards</span>
                <span>Poolside, Pride Plaza Hotel</span>
                <Link to='/'>See Location</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Location;
