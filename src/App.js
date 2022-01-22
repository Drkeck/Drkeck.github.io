import { Bio, Portfolio, WorkExperience } from './Components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Bio />
      <h2>Work Experience</h2>
      <WorkExperience />
      <h2>Portfolio</h2>
      <Portfolio />
      <div>contacts</div>
      <div>footer</div>
    </div>
  );
}

export default App;
