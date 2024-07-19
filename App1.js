import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsFillingPage from './components/DetailsFillingPage';
import PreviewPage from './components/PreviewPage';
import AboutUsPage from './components/AboutUsPage';

const App = () => {
return (
<Router>
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/details" element={<DetailsFillingPage />} />
<Route path="/preview" element={<PreviewPage />} />
<Route path="/about" element={<AboutUsPage />} />
</Routes>
</Router>
);
};

export default App;

