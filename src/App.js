import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import FirstProject from './components/first/FirstProject';
import SecondProject from './components/second/SecondProject'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header title="Matchless@D"/>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />
        {/* First */}
        <Route path="/first/*" element={<FirstProject />} />

        {/* Second */}
        <Route path="/second/*" element={<SecondProject />} />

      </Routes>
    </Router>
  );
}

export default App;
