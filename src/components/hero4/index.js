  
import React from 'react';
import classes from '../../css/BackgroundVideo.module.css';

const BackgroundVideo = () => {
    const videoSource = "https://www.dropbox.com/s/swjjl14kcamsodn/Sample_640x360.mp4”"
    return (
      <div className="vedio-area" id="home">
          <div className={classes.Container} >
              <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>

              <div className={classes.Content}>
                    <div className="container">
                        <div className="slide-content">
                            <div className="slide-subtitle">
                                <h4>WERE GETTING MARRIED</h4>
                            </div>
                            <div className="slide-title">
                                <h2>Save Our Date</h2>
                            </div>
                            <div className="slide-text">
                                <p>15 January 2023</p>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
      </div>
    )
}

export default BackgroundVideo