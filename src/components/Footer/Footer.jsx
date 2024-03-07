import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className='footer-container'>
      <div className="footer-section">
        <h2>Location</h2>
        <p>Jl. Mekar Sari 2</p>
        <p>Kota Jakarta</p>
        <p>Indonesia</p>
      </div>
      <div className="footer-section">
        <h2>Contact Us</h2>
        <p>Email: Gelegar1@gmail.com</p>
        <p>Phone: +62 821 9876 3210</p>
        <p>Instagram: @GelegarNew</p>
      </div>
      <div className="footer-section">
        <h2>Address</h2>
        <p>Jl. Mekar Sari</p>
        <p>Jakarta, State</p>
        <p>Indonesia</p>
      </div>
    </footer>
  );
}

export default Footer;



// import React from "react";
// import './Footer.css'


// function Footer() {
//   return (
//     <>
//       <div className="Footer">
//         <div className="location">
//           <h4>LOCATION</h4>
//           <iframe
//             title="Makan Makan Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.6012289317867!2d2.345740915674691!3d48.874091679288066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8efd50486b%3A0x6e56613fbd0fcfb!2sMakan%20Makan!5e0!3m2!1sen!2sfr!4v1645487009597!5m2!1sen!2sfr"
//             width="370"
//             height="300"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//         <div className="reservation">
//           <h4>RESERVATION </h4>
//           <h3>
//             <a
//               href="https://reservation.laddition.com/booking/makanmakan#/date"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Reserve Here !
//             </a>
//           </h3>
//         </div>
//         <div className="contact">
//           <h4>CONTACT US</h4>
//           <h2>0627069701</h2>
//           <h5>OUR ADDRESS : </h5>
//           <h4>
//             <a
//               href="https://www.google.com/maps/place/Makan+Makan/@48.8740298,2.3447789,19.63z/data=!4m16!1m9!3m8!1s0x47e66f8efd50486b:0x6e56613fbd0fcfb!2sMakan+Makan!8m2!3d48.8740917!4d2.3457409!11m1!2e1!16s%2Fg%2F11t9kz2l8r!3m5!1s0x47e66f8efd50486b:0x6e56613fbd0fcfb!8m2!3d48.8740917!4d2.3457409!16s%2Fg%2F11t9kz2l8r?entry=ttu"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               24 Rue Richer, 75009 Paris, Prancis
//             </a>
//           </h4>
//           <h5>OUR SOSMED : </h5>
//           <a
//             href="https://www.instagram.com/makanmakanparis/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//           </a>
//         </div>
//       </div>
//       <div className="copyright">
//         <p>Copyright © 2024 MakanMakan Restaurant | All Rights Reserved.</p>
//       </div>
//     </>
//   );
// }

// export default Footer;