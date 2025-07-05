// src/components/ParticlesBackground.jsx
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#0f0f23" }
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: { value: "#ffffff" },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.7,
            random: true
          },
          size: {
            value: 3,
            random: true
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce"
            }
          }
        },
        fullScreen: {
          enable: true,
          zIndex: -1
        }
      }}
    />
  );
};

export default ParticlesBackground;