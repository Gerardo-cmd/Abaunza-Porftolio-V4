import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

/*The following is all the pages I made that I'm importing*/
import HomePage from './pages/Home/HomePage.js';
import AboutPage from './pages/About/AboutPage.js';
import ProjectPage from './pages/Projects/ProjectsPage.js';
import HistoryPage from './pages/History/HistoryPage.js';
import ContactPage from './pages/Contact/ContactPage.js';
import SkillsPage from './pages/Skills/SkillsPage.js';
import CoursesPage from './pages/Courses/CoursesPage.js';
import NotFoundPage from './pages/NotFound/NotFoundPage.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectPage} />
          <Route exact path="/history" component={HistoryPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/skills" component={SkillsPage} />
          <Route exact path="/courses" component={CoursesPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
