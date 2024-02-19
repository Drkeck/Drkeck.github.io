import React from 'react';
import { Bio, Footer, Portfolio, TechSkills, WorkExperience } from './Components';
import Particles, {initParticlesEngine} from '@tsparticles/react';
// import { tsParticles } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim'
import particalOps from './particles.js'
import './App.css';


function App() {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
        setInit(true)
      })
  })
 //  
  
  return (
    <>
    <div className="App">
      <Bio />
      <h2>Work Experience</h2>
      <WorkExperience />
      <h2>Personal Project Portfolio</h2>
      <Portfolio />
      <TechSkills />
      <Footer />
    </div> 
      {init && <Particles 
          id='tsparticles'
          style={{zIndex:'-1'}}
          options={particalOps}
          /> 
      }
    </>
  );
}

export default App;
