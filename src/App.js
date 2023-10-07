import { Bio, Footer, Portfolio, TechSkills, WorkExperience } from './Components';
import Particles from 'react-tsparticles';
import './App.css';

function App() {

  const particlesInit = (main) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  return (
    <div className="App">
      <Bio />
      <h2>Work Experience</h2>
      <WorkExperience />
      <h2>Personal Project Portfolio</h2>
      <Portfolio />
      <TechSkills />
      <Footer />
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#BEBEBE",
            opacity: 0,
            size: 0,
          },
        },
        fullScreen: {
          zIndex: -1,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 1,
            },
            connect: {
              distance: 1200,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            }
          },
        },
        particles: {
          color: {
            value: "#FFFFFF",
          },
          links: {
            color: "#FFFFFF",
            distance: 80,
            enable: true,
            opacity: 0.25,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: true,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 180,
            },
            value: 150,
          },
          opacity: {
            value: 0.75,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 3,
          },
        },
        detectRetina: true,
      }}
    />
    </div>
  );
}

export default App;
