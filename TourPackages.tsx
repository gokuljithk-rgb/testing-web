"use client";

import { useState } from "react";
import { packages } from "@/data/tours";

export default function TourPackages() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mobileActiveTab, setMobileActiveTab] = useState("overview");

  const selectedPackage = packages[selectedIndex];

  return (
    <>
      {/* ================= DESKTOP VIEW ================= */}
      <div className="desktop-page">
        {/* Section Header */}
        <div className="section-head" id="packages">
          <div>
            <h2>Popular Packages</h2>
            <p>Click a package to view full details</p>
          </div>
        </div>

        {/* Desktop Package Grid */}
        <section className="package-grid">
          {packages.map((item, index) => (
            <button
              key={index}
              className={`package-card ${index === selectedIndex ? "active" : ""}`}
              onClick={() => {
                setSelectedIndex(index);
                setMobileActiveTab("overview");
              }}
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <div className="package-card-content">
                <h3>{item.title}</h3>
                <p>{item.place}</p>
                <div className="card-meta">
                  <span>{item.duration}</span>
                  <span>{item.price}</span>
                </div>
              </div>
            </button>
          ))}
        </section>

        {/* Desktop Details Layout */}
        <section className="details-layout" id="details">
          <div className="detail-box">
            <h2>{selectedPackage.title}</h2>
            <div
              className="detail-image"
              style={{ backgroundImage: `url('${selectedPackage.image}')` }}
            >
              <span className="detail-chip">{selectedPackage.tag}</span>
            </div>
            <p>{selectedPackage.description}</p>
            <div className="highlight-grid">
              {selectedPackage.highlights.map((h, i) => (
                <div key={i} className="highlight">✓ {h}</div>
              ))}
            </div>
          </div>

          <div className="itinerary-box">
            <h2>യാത്രാ പ്ലാൻ</h2>
            <div className="timeline">
              {selectedPackage.itinerary.map((row, i) => (
                <div key={i} className="timeline-item">
                  <span className="timeline-icon"></span>
                  <h3>{row[0]}</h3>
                  <p>{row[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="mobile-page">
        <section className="mobile-section">
          <h2>Popular Packages</h2>
          <div className="mobile-cards">
            {packages.map((item, index) => (
              <button
                key={index}
                className={`mobile-package ${index === selectedIndex ? "active" : ""}`}
                onClick={() => setSelectedIndex(index)}
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <div className="mobile-package-content">
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                  <div className="card-meta">
                    <span>{item.duration}</span>
                    <span>{item.price}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Mobile Tabs */}
        <section className="mobile-tabs">
          <button
            className={`mobile-tab ${mobileActiveTab === "overview" ? "active" : ""}`}
            onClick={() => setMobileActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`mobile-tab ${mobileActiveTab === "plan" ? "active" : ""}`}
            onClick={() => setMobileActiveTab("plan")}
          >
            Plan
          </button>
          <button
            className={`mobile-tab ${mobileActiveTab === "include" ? "active" : ""}`}
            onClick={() => setMobileActiveTab("include")}
          >
            Includes
          </button>
        </section>

        {/* Mobile Details Panel */}
        <section className="mobile-details">
          {mobileActiveTab === "overview" && (
            <div className="mobile-panel active">
              <div
                className="mobile-detail-image"
                style={{ backgroundImage: `url('${selectedPackage.image}')` }}
              ></div>
              <h3>{selectedPackage.title}</h3>
              <p>{selectedPackage.description}</p>
              <div className="mobile-list">
                <div>📍 {selectedPackage.place}</div>
                <div>⭐ {selectedPackage.rating}</div>
                <div>🕒 {selectedPackage.duration}</div>
              </div>
            </div>
          )}

          {mobileActiveTab === "plan" && (
            <div className="mobile-panel active">
              <h3>യാത്രാ പ്ലാൻ</h3>
              <div className="mobile-list">
                {selectedPackage.itinerary.map((row, i) => (
                  <div key={i}>
                    <strong>{row[0]}</strong><br />{row[1]}
                  </div>
                ))}
              </div>
            </div>
          )}

          {mobileActiveTab === "include" && (
            <div className="mobile-panel active">
              <h3>പാക്കേജിൽ ഉൾപ്പെടുന്നത്</h3>
              <div className="mobile-list">
                {selectedPackage.includes.map((inc, i) => (
                  <div key={i}>✓ {inc}</div>
                ))}
              </div>
            </div>
          )}
        </section>
        
        {/* Mobile Sticky Booking Bar */}
        <div className="mobile-book-bar">
          <div>
            <strong>{selectedPackage.price}</strong>
            <small>{selectedPackage.duration}</small>
          </div>
          <button>Book Ticket</button>
        </div>
      </div>
    </>
  );
}