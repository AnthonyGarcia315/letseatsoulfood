export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Location & Contact</h3>
          <p>546 W Compton Blvd</p>
          <p>Compton, CA 90220</p>
          <p>Phone: <a href="tel:+13107382397">(310) 738-2397</a></p>
          <p><a href="https://www.google.com/maps/dir/?api=1&destination=546+W+Compton+Blvd,+Compton,+CA+90220" target="_blank" rel="noreferrer">📍 Get Directions</a></p>
            <p><a href="https://www.yelp.com/biz/lets-eat-compton?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)" target="_blank" rel="noreferrer">⭐ Review us on Yelp</a></p>
            <p><a href="https://www.instagram.com/letseatsoulfoodlosangeles/" target="_blank" rel="noreferrer">📷 @letseatsoulfoodlosangeles</a></p>
        </div>
        
        <div className="footer-section">
          <h3>Hours of Operation</h3>
          <p>Wed - Sat: 12:00 PM - 8:00 PM</p>
          <p>Sun: 12:00 PM - 6:00 PM</p>
          <p>Mon - Tue: Closed</p>
        </div>
        
        <div className="footer-section">
          <h3>Dining Options</h3>
          <p>Dine-in & Takeout</p>
          <p>Casual & Cozy</p>
        </div>
        
        <div className="footer-section">
          <h3>Amenities</h3>
          <p>Free Parking Lot</p>
          <p>Wheelchair Accessible</p>
          <p>Cards Accepted</p>
        </div>
      </div>

      <div className="map-embed map-embed-full">
        <iframe
          title="Let's Eat Soul Food location map"
          src="https://www.google.com/maps?q=546+W+Compton+Blvd,+Compton,+CA+90220&output=embed"
          width="100%"
          height="320"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Let's Eat Soul Food. All rights reserved.</p>
      </div>
    </footer>
  );
}