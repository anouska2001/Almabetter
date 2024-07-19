import React from 'react';
import { Link } from 'react-router-dom';

const PreviewPage = () => {
return (
<div>
<header>
{/* Logo and navigation links /}
</header>
<div className="preview-container">
<div className="left-section">
{/ Render the chosen template with filled details */}
</div>
<div className="right-section">
<input type="text" placeholder="Resume Name" />
<Link to="/details">Back</Link>
<button>Save</button>
</div>
</div>
</div>
);
};

export default PreviewPage;
