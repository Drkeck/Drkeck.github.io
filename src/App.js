import { Bio, Footer, Portfolio, WorkExperience } from './Components';
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
      <Footer />
    </div>
  );
}

export default App;
