// import './App.css';
// import Navbar from './components/navbar';
// import AboutUs from './components/about-us';
// import Services from './components/services';
// import Testimonials from './components/testimonials';
// import Contact from './components/contact';
// import Footer from './components/footer';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <section id="about-us">
//         <AboutUs />
//       </section>
//       <section id="services">
//         <Services />
//       </section>
//       <section id="testimonials">
//         <Testimonials />
//       </section>
//       <section id="contact">
//         <Contact />
//       </section>
//       <section id="footer">
//         <Footer />
//       </section>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import AboutUs from './components/about-us';
import Services from './components/services';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  const [activeComponent, setActiveComponent] = useState("about-us");

  const handleNavClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="App">
      <Navbar onNavClick={handleNavClick} />
      {activeComponent === "about-us" && <AboutUs />}
      {activeComponent === "services" && <Services />}
      {activeComponent === "testimonials" && <Testimonials />}
      {activeComponent === "contact" && <Contact />}
      <Footer onNavClick={handleNavClick}/>
    </div>
  );
}

export default App;