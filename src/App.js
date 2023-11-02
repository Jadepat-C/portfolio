import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home/home';
import Navigation from './Nav/navigation'
import Profile from './Profile/profile';
import Projects from './Projects/projects';


const routes = [
  { path: '/', element: <Home /> },
  { path: '/profile', element: <Profile /> },
  { path: '/projects', element: <Projects /> },
];


function App() {
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <Router>
        <Navigation />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </header>
    </div>
    </>
  );
}

export default App;
