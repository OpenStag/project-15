import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaUser } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="about-us-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">
          <div className="nav-tripgo-two-tone">
            <span className="nav-trip-part">Trip</span>
            <span className="nav-go-part">Go</span>
          </div>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/vehicles">Vehicles</a>
          <a href="/contact">Contact Us</a>
          <a href="/about" className="active">About Us</a>
          
          {/* Login/Register with icon */}
          <a href="/login" className="login-btn">
            <FaUser className="login-icon" />
            Login | Register
          </a>
        </div>
      </nav>

      {/* Thick Orange Divider Line */}
      <div className="nav-divider"></div>

      {/* Large Two-Color TripGo Header Section */}
      <header className="tripgo-header">
        <div className="tripgo-two-tone">
          <span className="tripgo-part1">Trip</span>
          <span className="tripgo-part2">Go</span>
        </div>
        <p className="tagline">Drive your way, anytime, anywhere.</p>
      </header>

      {/* Our Story Section */}
      <section className="content-section">
        <h2 className="section-title centered-title">Our Story</h2>
        <p className="section-text">
          At TripGo Rentals, we believe car rentals should be simple, affordable, and stress-free. 
          What started as a small local service has grown into a trusted platform for travelers 
          and professionals alike. Whether it's a quick city ride or a luxury weekend getaway, 
          we provide vehicles that fit every lifestyle.
        </p>
      </section>

      <div className="light-divider"></div>

      {/* Mission & Vision Sections */}
      <div className="mission-vision-container">
        <section className="mission-section">
          <h3>MISSION</h3>
          <p>
            To deliver convenient, affordable, and reliable vehicle rentals that empower people 
            to travel with freedom and peace of mind.
          </p>
        </section>

        <section className="vision-section">
          <h3>VISION</h3>
          <p>
            To become the most trusted car rental brand, known for innovation, customer care, 
            and a wide range of vehicles that cater to every journey.
          </p>
        </section>
      </div>

      <div className="light-divider"></div>

      {/* Cards Section with Public Folder Icons */}
      <div className="cards-container">
        <div className="card">
          <div className="card-icon">
            <img src="/icons/vehicle-icon.png" alt="Vehicle Icon" className="icon-img" />
          </div>
          <div className="card-content">
            <h4>Vehicle</h4>
            <p>Available in Various Types</p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-icon">
            <img src="/icons/service-icon.png" alt="Service Icon" className="icon-img" />
          </div>
          <div className="card-content">
            <h4>Service</h4>
            <p>Cover 25 Districts in Country</p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-icon">
            <img src="/icons/rating-icon.png" alt="Rating Icon" className="icon-img" />
          </div>
          <div className="card-content">
            <h4>Rated 4.5 /5</h4>
            <p>By Happy Clients</p>
          </div>
        </div>
        
        <div className="card">
          <div className="card-icon">
            <img src="/icons/booking-icon.png" alt="Booking Icon" className="icon-img" />
          </div>
          <div className="card-content">
            <h4>800 +</h4>
            <p>Booking completed</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="modern-footer">
        <div className="footer-content">
          {/* Two-tone TripGo Branding */}
          <div className="footer-brand">
            <div className="footer-tripgo-two-tone">
              <span className="footer-trip-part">Trip</span>
              <span className="footer-go-part">Go</span>
            </div>
            <p className="footer-tagline">Drive your way, anytime, anywhere.</p>
          </div>

          {/* Footer Columns */}
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li>Home</li>
                <li>Vehicles</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li>FAQs</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Customer Support</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li>
                  <span className="footer-icon">📧</span>
                  <span className="email-with-arrow">
                    Email <span className="arrow">→</span>
                  </span>
                </li>
                <li>
                  <span className="footer-icon">📞</span>
                  +94 73 5072458
                </li>
                <li>
                  <span className="footer-icon">📍</span>
                  Colombo, Sri Lanka
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="social-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Stylish Divider */}
        <div className="footer-divider"></div>

        {/* Two-tone Copyright Section */}
        <div className="copyright-section">
          <p className="copyright-text">
            <span className="copyright-part1">Copyright © 2025 Trip</span>
            <span className="copyright-part2">Go.</span>
            <span className="copyright-part1"> All rights reserved.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}