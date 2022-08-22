import React from 'react'
import { Link } from 'react-router-dom';

export default function Disclaimer() {
  return (
    <div className="disclaimer-container">
      <h2 className="disclaimer-heading">WARNING!</h2>
      <p className="disclaimer-text">The information on this site is intended solely for entertainment purposes and may not be used as a substitute for professional advice and/or 
        information, as circumstances will vary from person to person. You should not act or rely upon this information without seeking professional advice. Do 
        not attempt any of the suggested actions, solutions, remedies, or instructionsfound on this site without first consulting a qualified professional. 
      </p>
      <button className="disclaimer-btn">
        <Link to="/" className="disclaimer-btn">
          I Understand
        </Link>
      </button>
    </div>
  )
}
