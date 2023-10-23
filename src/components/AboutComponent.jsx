import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class AboutComponent extends Component {
 

render() {

    return (
        <div className="main-layout">

            {/* <!-- <div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="#" /></div>
    </div> --> */}
            {/* <!-- end loader --> */}

           

            <div className="text-center my-3">
                <h1>Click the button below to create your own customized playlist</h1>
                {/* <form id="redirectForm" onSubmit={handleSubmit}> */}
                <form>
                    {/* <!-- <input type="submit" value="Redirect"> --> */}
                    <button type="submit" className="btn btn-info btn-lg text-white px-5 py-2" >Create Playlist</button>
                </form>
            </div>

            <br></br>

            {/* <!--  footer --> */}
            <footer id="footer_with_contact">
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 width">
                                <div className="address">
                                    <h3>Contact Us</h3>
                                    <ul className="locarion_icon">
                                        <li><img src="icon/1.png" alt="icon" />Erie, PA , USA</li>
                                        <li><img src="icon/2.png" alt="icon" />Phone : ( +814 218-2216 )</li>
                                        <li><img src="icon/3.png" alt="icon" />Email : mrsdevsupport@gmail.com</li>

                                    </ul>

                                    {/* <!-- <ul className="contant_icon">
                                <li><img src="icon/fb.png" alt="icon" /></li>
                                <li><img src="icon/tw.png" alt="icon" /></li>
                                <li><img src="icon/lin(2).png" alt="icon" /></li>
                                <li><img src="icon/instagram.png" alt="icon" /></li>
                            </ul> --> */}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </footer>
            {/* end footer */}

            {/* Javascript files */}
            {/* <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery-3.0.0.min.js"></script>
    <script src="js/plugin.js"></script>
    <!-- sidebar -->
    <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
    <script src="js/custom.js"></script>
    
    <script>
      document.getElementById('redirectForm').addEventListener('submit', function(e) {
          e.preventDefault();
          window.location.href = 'playlist.html'; // Replace with the target page URL
      });

  }
  </script> */}

        </div>

    );
}
}

export default AboutComponent