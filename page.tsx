import TourPackages from "@/components/TourPackages";

export default function Home() {
  return (
    <>
      <main className="desktop-page">
        <div className="desktop-shell">
          {/* Top Strip */}
          <div className="top-strip">
            <span>📍 Kerala based tour support</span>
            <span>📞 +91 98765 43210</span>
          </div>

          {/* Navbar */}
          <nav className="navbar">
            <a className="logo" href="#">
              <div className="logo-mark">O</div>
              ONNAYI TOURS
            </a>
            <div className="nav-links">
              <a href="#packages">Packages</a>
              <a href="#details">Details</a>
              <a href="#why">Why Us</a>
              <a href="#reviews">Reviews</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="nav-actions">
              <button className="nav-call">WhatsApp</button>
              <button className="nav-btn">Enquire Now</button>
            </div>
          </nav>

          {/* Static Hero Section (Desktop) */}
          <section className="hero">
             {/* Add your static HTML Hero content here, ensuring class is converted to className */}
             <div className="hero-left">
               <div>
                 <span className="hero-badge">Kerala & International Tour Packages</span>
                 <h1>നിങ്ങളുടെ അടുത്ത യാത്ര ഇവിടെ നിന്ന് തുടങ്ങാം</h1>
                 {/* ...rest of hero left */}
               </div>
             </div>
             
             {/* You can also abstract the Quick Travel Enquiry form into a separate Client Component later if you want the price to update based on selections! */}
             <div className="hero-right">
                {/* ...rest of hero right */}
             </div>
          </section>

          {/* Inject the Interactive React Component */}
          <TourPackages />

          {/* Why Choose Us & Info Grid */}
          <div className="section-head" id="why">
            <div>
              <h2>Why choose Onnayi Tours?</h2>
              <p>Simple, safe and custom travel planning for Kerala families and groups.</p>
            </div>
          </div>
          
          <section className="info-grid">
             {/* Add your static info grid HTML here (Custom itinerary, Verified stays, etc.) */}
          </section>

          {/* Testimonials & FAQ & Footer */}
          {/* Add your static HTML for these sections here */}
          
        </div>
      </main>

      {/* Static Mobile Header (The rest of the mobile view is handled inside TourPackages.tsx) */}
      <main className="mobile-page">
        <section className="mobile-top">
          <div className="mobile-status">
            <span>ONNAYI TOURS</span>
            <span>☰</span>
          </div>
          <div>
            <div className="mobile-brand">✈ Travel Agency</div>
            <h1>യാത്ര പ്ലാൻ ചെയ്യാം</h1>
            <p>Kerala, India, Dubai package details, itinerary, stay and booking support.</p>
          </div>
          <div className="mobile-search">
            <span>Search destination or package</span>
            <strong>⌕</strong>
          </div>
        </section>

        <section className="mobile-quick">
          <div>📍<strong>Pickup</strong></div>
          <div>🏨<strong>Stay</strong></div>
          <div>💬<strong>Enquiry</strong></div>
        </section>
      </main>
    </>
  );
}