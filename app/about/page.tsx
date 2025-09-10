export default function AboutPage() {
  return (
    <div className="about-us-container">
     
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
          and professionals alike. Whether it&#39;s a quick city ride or a luxury weekend getaway, 
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
    </div>
  );
}