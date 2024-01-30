import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/homePage/Home'; 
import GettingStarted from './components/gettingStarted/GettingStarted';

const App = () => (
  <div style={{ height: '100%' }}>  

    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
        </Route>
        <Route path="/getting-started" element={<GettingStarted />} >
        </Route>
      </Routes>
    </Router>
      
  </div>
);

export default App;
