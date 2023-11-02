import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/home';
import Navigation from './Nav/navigation'
import Profile from './Profile/profile';
import Projects from './Projects/projects';

function App() {
  return (
    <>
    <Navigation />
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </Router>
      </header>
    </div>
    </>
  );
}

export default App;
