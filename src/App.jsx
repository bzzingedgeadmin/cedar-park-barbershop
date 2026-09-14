import React, { useState } from 'react'

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // Booking Form State
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    service: "Gentleman's Haircut",
    barber: 'Any Master Barber',
    date: '',
    time: '10:00 AM'
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setBookingData(prev => ({ ...prev, [id]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setToastMessage(`Success, ${bookingData.name}! Your appointment for ${bookingData.service} on ${bookingData.date} at ${bookingData.time} is reserved at Cedar Park Barbershop.`);
    
    setBookingData({
      name: '',
      phone: '',
      service: "Gentleman's Haircut",
      barber: 'Any Master Barber',
      date: '',
      time: '10:00 AM'
    });

    setTimeout(() => {
      setToastMessage('');
    }, 6000);
  };

  return (
    <div className="app-wrapper">
      {/* Top Strip */}
      <div className="top-strip">
        <div className="container strip-flex">
          <div>💈 401 Cypress Creek Rd, Suite 300, Cedar Park, TX 78613</div>
          <div>
            <a href="tel:5122942516" className="strip-phone">📞 (512) 294-2516</a>
            <a href="#booking" className="strip-book-btn">Book Online</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="navbar">
        <div className="container nav-flex">
          <a href="#" className="logo">
            <span className="logo-icon">💈</span>
            <div className="logo-text">
              <span className="main-brand">CEDAR PARK</span>
              <span className="sub-brand">BARBERSHOP</span>
            </div>
          </a>
          <nav className={`nav-menu ${mobileNavOpen ? 'active' : ''}`}>
            <a href="#services" onClick={() => setMobileNavOpen(false)}>Services & Rates</a>
            <a href="#barbers" onClick={() => setMobileNavOpen(false)}>Master Barbers</a>
            <a href="#booking" onClick={() => setMobileNavOpen(false)}>Book Online</a>
            <a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
          </nav>
          <div className="nav-actions">
            <a href="#booking" className="btn btn-copper">Book Appointment</a>
            <button className="mobile-toggle" onClick={() => setMobileNavOpen(!mobileNavOpen)}>☰</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Classic Gentleman's Barbering & Modern Precision Cuts</h1>
          <p>Experience sharp skin fades, hot towel straight-razor shaves, and immaculate beard sculpting tailored by master barbers in a relaxed atmosphere.</p>
          <div className="hero-actions">
            <a href="#booking" className="btn btn-copper btn-lg">Reserve Your Chair</a>
            <a href="tel:5122942516" className="btn btn-outline btn-lg">Call (512) 294-2516</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Services & Transparent Rates</h2>
            <p>Tailored grooming services provided by experienced master barbers.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="icon">✂️</div>
              <h3>Classic Gentleman's Cut</h3>
              <div className="price">$35</div>
              <p>Precision haircut, neck taper, hot towel finish, and custom styling with premium pomade.</p>
            </div>
            <div className="service-card">
              <div className="icon">💈</div>
              <h3>Skin Fade & Beard Sculpt</h3>
              <div className="price">$50</div>
              <p>Zero skin fade transition paired with hot oil beard sculpting and razor edge line-up.</p>
            </div>
            <div className="service-card">
              <div className="icon">🔥</div>
              <h3>Hot Towel Straight Razor Shave</h3>
              <div className="price">$40</div>
              <p>Traditional multi-towel hot steam shave with facial massage and soothing aftershave balm.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="section">
        <div className="container max-w-700">
          <div className="section-header text-center">
            <h2>Reserve Your Chair Online</h2>
            <p>Pick your service and preferred date. Walk-ins also welcome!</p>
          </div>
          <form className="booking-card" onSubmit={handleBookingSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" required placeholder="John Smith" value={bookingData.name} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" required placeholder="(512) 555-0199" value={bookingData.phone} onChange={handleInputChange} />
              </div>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="service">Select Service *</label>
                <select id="service" value={bookingData.service} onChange={handleInputChange}>
                  <option value="Gentleman's Haircut">Gentleman's Haircut ($35)</option>
                  <option value="Skin Fade & Beard">Skin Fade & Beard ($50)</option>
                  <option value="Hot Towel Shave">Hot Towel Shave ($40)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="barber">Preferred Barber</label>
                <select id="barber" value={bookingData.barber} onChange={handleInputChange}>
                  <option value="Any Master Barber">Any Master Barber</option>
                  <option value="Marcus (Senior Barber)">Marcus (Senior Barber)</option>
                  <option value="David (Fade Specialist)">David (Fade Specialist)</option>
                </select>
              </div>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="date">Appointment Date *</label>
                <input type="date" id="date" required value={bookingData.date} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="time">Preferred Time *</label>
                <select id="time" value={bookingData.time} onChange={handleInputChange}>
                  <option value="9:00 AM">9:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:30 AM">11:30 AM</option>
                  <option value="2:00 PM">2:00 PM</option>
                  <option value="4:00 PM">4:00 PM</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-copper btn-block btn-lg">Confirm Appointment</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer bg-dark text-white">
        <div className="container footer-grid">
          <div className="footer-info">
            <h3>Cedar Park Barbershop</h3>
            <p>401 Cypress Creek Rd, Suite 300, Cedar Park, TX 78613.</p>
            <div className="contact-line">📞 Call: <a href="tel:5122942516" className="text-copper">(512) 294-2516</a></div>
          </div>
          <div className="footer-cta text-center">
            <h4>Hours of Operation</h4>
            <p>Mon - Sat: 9:00 AM - 7:00 PM | Sun: 10:00 AM - 5:00 PM</p>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>&copy; 2026 Cedar Park Barbershop. React JS Web Application.</p>
        </div>
      </footer>

      {/* React Toast */}
      {toastMessage && (
        <div className="toast-banner">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
