'use client';

import React from 'react';
import '../globals.css'
import Link from 'next/link';

const tools = [
  {
    id: 1,
    title: "Pricing Calculator",
    description: "Calculate optimal pricing for your photography services based on costs, time, and market rates.",
    status: "Available",
    gradient: "linear-gradient(135deg, #4281a4 0%, #1b264F 100%)",
    url: "/tools/pricing-tool"
  },
  {
    id: 2,
    title: "Business Goal Calculator", 
    description: "Set and track your photography business goals with smart analytics and projections.",
    status: "Available",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    url: "/tools/photography-business-goal-calculator"
  }
//   {
//     id: 3,
//     title: "Client Management System",
//     description: "Organize and manage your photography clients with contracts, schedules, and communications.",
//     status: "Coming Soon",
//     gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
//   },
//   {
//     id: 4,
//     title: "Revenue Analytics",
//     description: "Track your photography business revenue with detailed charts and growth insights.",
//     status: "Coming Soon", 
//     gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
//   },
//   {
//     id: 5,
//     title: "Contract Generator",
//     description: "Create professional photography contracts and agreements with automated templates.",
//     status: "Coming Soon",
//     gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
//   },
//   {
//     id: 6,
//     title: "Session Planner",
//     description: "Plan and coordinate photo sessions with clients, locations, and equipment tracking.",
//     status: "Coming Soon",
//     gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
//   },
//   {
//     id: 7,
//     title: "Expense Tracker",
//     description: "Monitor business expenses and calculate tax deductions for photography equipment.",
//     status: "Coming Soon",
//     gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
//   },
//   {
//     id: 8,
//     title: "Portfolio Builder",
//     description: "Create stunning online portfolios to showcase your photography work to potential clients.",
//     status: "Coming Soon",
//     gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
//   }
];

export default function PhotographyToolsPage() {
  return (
    <div className="photography-tools-container">
      {/* Background Elements */}
      <div className="background-gradient"></div>
      <div className="floating-elements">
        <div className="float-element float-1"></div>
        <div className="float-element float-2"></div>
        <div className="float-element float-3"></div>
      </div>

      {/* Header Section */}
      <header className="header-section">
        <div className="header-content">
          <div className="hero-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
              <circle cx="12" cy="13" r="3"/>
            </svg>
          </div>
          <h1 className="main-title">Photography Business Tools</h1>
          <p className="main-subtitle">
            Professional tools designed specifically for photography businesses. 
            Streamline your workflow, optimize pricing, and grow your creative enterprise.
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="main-content">
        <div className="tools-grid">
          {tools.map((tool) => (
            <div key={tool.id} className="tool-card-wrapper">
              <div className="tool-card">
                <div className="tool-gradient" style={{ background: tool.gradient }}></div>
                
                <div className="tool-content">
                  <div className="tool-header">
                    <h3 className="tool-title">{tool.title}</h3>
                    <span className={`tool-status ${tool.status === 'Available' ? 'available' : 'coming-soon'}`}>
                      {tool.status}
                    </span>
                  </div>
                  
                  <p className="tool-description">{tool.description}</p>
                  <Link href={tool.url}>
                  <button 
                    className={`tool-button ${tool.status === 'Available' ? 'available' : 'disabled'}`}
                    disabled={tool.status !== 'Available'}
                    >
                    {tool.status === 'Available' ? 'Launch Tool' : 'Coming Soon'}
                  </button>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-card">
          <h3 className="footer-title">Ready to Transform Your Photography Business?</h3>
          <p className="footer-description">
            Join thousands of photographers using our tools to streamline operations, 
            increase profits, and focus on what they love most - creating beautiful images.
          </p>
          <Link href={"https://app.photostudioapp.com/signup"}>
            <button className="footer-cta-button">
              Get Started Today
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}