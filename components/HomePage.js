import React from 'react';
import { Link } from 'react-router-dom';
import ResumeTemplate1 from './ResumeTemplates/Template1';
import ResumeTemplate2 from './ResumeTemplates/Template2';
import ResumeTemplate3 from './ResumeTemplates/Template3';
import ResumeTemplate4 from './ResumeTemplates/Template4';

const HomePage = () => {
return (
<div>
<header>
{/* Logo and navigation links */}
</header>
<h1>Welcome to our Resume Builder!</h1>
<p>Create stunning resumes in minutes.</p>

  <div className="template-container">
    <h2>Choose a Template:</h2>
    <div className="template">
      <ResumeTemplate1 />
      <button>Use Template</button>
    </div>
    <div className="template">
      <ResumeTemplate2 />
      <button>Use Template</button>
    </div>
    <div className="template">
      <ResumeTemplate3 />
      <button>Use Template</button>
    </div>
    <div className="template">
      <ResumeTemplate4 />
      <button>Use Template</button>
    </div>
  </div>
  <Link to="/about">About Us</Link>
</div>
);
};

export default HomePage;
