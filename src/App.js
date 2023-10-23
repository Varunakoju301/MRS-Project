// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import About from './components/AboutComponent';
// import Playlist from './components/Playlist';

const App = () => {

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         window.location.href = './components/Playlist.js'; // Replace with the target page route
//         // window.location.href = '/playlist'; // Replace with the target page route
//     };

//     function submitForm() {

//         alert("Thank you for your Response!");
//     }

//     return (
//         <div className="main-layout">
//             {/* <Routes>
//                 <Route path="*"> */}
//                     <header>
//                         {/* header inner */}
//                         <div className="header">
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col logo_section">
//                                         <div className="full">
//                                             <div className="center-desk">
//                                                 <div className="logo">
//                                                     <Link to="/"><img src="images/MrsLogo.png" alt="logo" /></Link>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10">
//                                         <div className="menu-area">
//                                             <div className="limit-box">
//                                                 <nav className="main-menu">
//                                                     <ul className="menu-area-main">
//                                                         <li className="active"> <Link to="/">Home</Link> </li>
//                                                         <li> <Link to="/about">About</Link> </li>
//                                                         <li> <Link to="/blog">Blog</Link> </li>
//                                                         <li> <Link to="/contact">Contact</Link> </li>
//                                                         <li> <Link to="/login">Login</Link> </li>
//                                                     </ul>
//                                                 </nav>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
//                                         <form className="search">
//                                             <input className="form-control" type="text" placeholder="Search" />
//                                             <button><img src="images/search_icon.png" alt="search icon" /></button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         {/* end header inner */}
//                     </header>
//                     {/* <!-- end header --> */}

//                     {/* Routes */}
//                     <Routes>
//                         {/* <Route index element={<App />} /> */}
//                         {/* <Route exact path="/about" element={<AboutComponent />} /> */}
//                         {/* <Route exact path="/playlist" element={<Playlist />} /> */}

//                         {/* <Route path="/blog" element={<About />} />
//                         <Route path="/contact" element={<About />} /> */}
//                         {/* <Route path="/login" element={<About />} /> */}
//                     </Routes>

//             <section className="banner_section">
//                 <div className="banner-main">
//                     <img src="images/banner2.jpg" />
//                     <div className="container">

//                         <div className="text-bg relative">
//                             {/* <h1><br><span className="Perfect">The Perfect Music</span><br>Welcome To The Music Recommendation App /> */}
//                             <h1><br /><span className="Perfect" >The Perfect Music</span> <br /> Welcome To The Music Recommendation App <br /> </h1>
//                             <p>"Enjoy a Personalized Music Experience Made Just for You!"</p>
//                         </div>

//                     </div>
//                 </div>

//             </section>

//             {/* <!-- music-box  --> */}
//             <div className="music-box">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
//                             <div className="for-box">
//                                 <i><img src="icon/icon1.png" alt="icon" /></i>
//                                 <h3>Custom Music Playlist</h3>
//                                 <p>Custom Music Playlist helps you to build a customized playlist for you based on your input</p>
//                             </div>
//                         </div>
//                         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
//                             <div className="for-box">
//                                 <i><img src="icon/icon2.png" alt="icon" /></i>
//                                 <h3>Easy customize</h3>
//                                 <p>Customize your music based on your mood, location, genres, etc.,</p>
//                             </div>
//                         </div>
//                         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
//                             <div className="for-box">
//                                 <i><img src="icon/icon3.png" alt="icon" /></i>
//                                 <h3>Music Search</h3>
//                                 <p>Music Search helps you to find best music for you</p>
//                             </div>
//                         </div>
//                         <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
//                             <div className="for-box">
//                                 <i><img src="icon/icon4.png" alt="icon" /></i>
//                                 <h3>Colloborative Playlist</h3>
//                                 <p>Colloborative Playlist helps you share you personalized playlist with your friends</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <!-- end music-box  --> */}

//             <div className="text-center my-3">
//                 <h1>Click the button below to create your own customized playlist</h1>
//                 {/* <form id="redirectForm" onSubmit={handleSubmit}> */}
//                 <form onSubmit={handleSubmit}>
//                     {/* <!-- <input type="submit" value="Redirect"> --> */}
//                     <button type="submit" className="btn btn-info btn-lg text-white px-5 py-2" >Create Playlist</button>
//                 </form>
//             </div>

//             <br></br>

//             {/* <!--  footer --> */}
//             <footer id="footer_with_contact">
//                 <div className="footer">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-3 col-md-6 col-sm-12 width">
//                                 <div className="address">
//                                     <h3>Contact Us</h3>
//                                     <ul className="locarion_icon">
//                                         <li><img src="icon/1.png" alt="icon" />Erie, PA , USA</li>
//                                         <li><img src="icon/2.png" alt="icon" />Phone : ( +814 218-2216 )</li>
//                                         <li><img src="icon/3.png" alt="icon" />Email : mrsdevsupport@gmail.com</li>

//                                     </ul>

//                                     {/* <!-- <ul className="contant_icon">
//                                 <li><img src="icon/fb.png" alt="icon" /></li>
//                                 <li><img src="icon/tw.png" alt="icon" /></li>
//                                 <li><img src="icon/lin(2).png" alt="icon" /></li>
//                                 <li><img src="icon/instagram.png" alt="icon" /></li>
//                             </ul> --> */}
//                                 </div>
//                             </div>


//                         </div>
//                     </div>
//                 </div>
//             </footer>
//             {/* end footer */}

//             {/* Javascript files */}
//             {/* <script src="js/jquery.min.js"></script>
//     <script src="js/popper.min.js"></script>
//     <script src="js/bootstrap.bundle.min.js"></script>
//     <script src="js/jquery-3.0.0.min.js"></script>
//     <script src="js/plugin.js"></script>
//     <!-- sidebar -->
//     <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
//     <script src="js/custom.js"></script>
    
//     <script>
//       document.getElementById('redirectForm').addEventListener('submit', function(e) {
//           e.preventDefault();
//           window.location.href = 'playlist.html'; // Replace with the target page URL
//       });

//   }
//   </script> */}
//                 {/* </Route>
//             </Routes> */}
//         </div>
//     );
};

export default App;
