import { Bio, Footer, Portfolio, TechSkills, WorkExperience } from './Components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Bio />
      <TechSkills />
      <h2>Work Experience</h2>
      <WorkExperience />
      <h2>Portfolio</h2>
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
