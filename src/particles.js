const particlesOps = {
      background: {
        color: {
          value: "#9aad91",
        }, 
      },
      fpsLimit: 120,
      interactivity: {
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#fff2f2",
        },
        links: {
          color: "#fff2f2",
          distance: 250,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 6 },
        },
      },
      detectRetina: true,
    
}

export default particlesOps 
