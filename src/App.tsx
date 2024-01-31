import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/homePage/Home'; 
import GettingStarted from './components/gettingStarted/GettingStarted';
import CoursePage from './components/studentPage/CoursePage';
import CourseLivePage from './components/studentPage/CourseLivePage';
import ZoomLivePage from './components/studentPage/ZoomLivePage';
import CourseLibrary from './components/studentPage/CourseLibrary';

const App = () => (
  <div style={{ height: '100%' }}>  

    <Router>
      <Routes>
        <Route path="/" element={<Home />} >
        </Route>
        <Route path="/getting-started" element={<GettingStarted />} >
        </Route>
        <Route path="/course-page" element={<CoursePage />} >
        </Route>
        <Route path="/course-live-page" element={ <CourseLivePage />} >
        </Route>
        <Route path="/zoom-live-page" element={<ZoomLivePage />} >
        </Route>
        <Route path="/course-library" element={<CourseLibrary />} >
        </Route>
      </Routes>
    </Router>
      
  </div>
);

export default App;
