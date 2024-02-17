import { Bio, Footer, Portfolio, TechSkills, WorkExperience } from './Components';
import './App.css';


function App() {
  return (
    <div className="App">
      <Bio />
      <h2>Work Experience</h2>
      <WorkExperience />
      <h2>Personal Project Portfolio</h2>
      <Portfolio />
      <TechSkills />
      <Footer />
    </div>
  );
}

export default App;
