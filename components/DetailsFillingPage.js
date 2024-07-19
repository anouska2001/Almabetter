import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonalInfo from './DetailsFillingSections/PersonalInfo';
import WorkExperience from './DetailsFillingSections/WorkExperience';
import Education from './DetailsFillingSections/Education';
import KeySkills from './DetailsFillingSections/KeySkills';

const DetailsFillingPage = () => {
const [currentSection, setCurrentSection] = useState('personalInfo');

const handleSectionChange = (section) => {
setCurrentSection(section);
};

return (
<div>
<header>
{/* Logo and navigation links /}
</header>
<div className="details-container">
<div className="left-section">
{/ Template Preview */}
</div>
<div className="right-section">
<div className="tab-bar">
<button onClick={() => handleSectionChange('personalInfo')}>Personal Info</button>
<button onClick={() => handleSectionChange('workExperience')}>Work Experience</button>
<button onClick={() => handleSectionChange('education')}>Education</button>
<button onClick={() => handleSectionChange('keySkills')}>Key Skills</button>
</div>

      {currentSection === 'personalInfo' && <PersonalInfo />}
      {currentSection === 'workExperience' && <WorkExperience />}
      {currentSection === 'education' && <Education />}
      {currentSection === 'keySkills' && <KeySkills />}
    </div>
  </div>
</div>
);
};

export default DetailsFillingPage;
