import React from 'react';
import './JobCards.css';
import JobCardItem from './JobCardItem';

function JobCards() {
  return (
    <div className="jobs-section-container">
      <div className="job-cards-container">
        <ul className="job-cards">
          <JobCardItem text="Wiring Installation" />
          <JobCardItem text="Outlet Replacement" />
          <JobCardItem text="Lighting Repair" />
          <JobCardItem text="Circuit Troubleshooting" />
          <JobCardItem text="Panel Upgrade" />
          <JobCardItem text="Fixture Installation" />
          <JobCardItem text="Electrical Inspections" />
          <JobCardItem text="Surge Protection" />
        </ul>
      </div>
    </div>
  );
}

export default JobCards;
