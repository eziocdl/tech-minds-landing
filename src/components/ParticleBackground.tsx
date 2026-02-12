import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";
import type { Engine } from "@tsparticles/engine";

export default function ParticleBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
        await loadPolygonMaskPlugin(engine);
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none" id="tsparticles-container">
            <Particles
                id="tsparticles"
                // @ts-ignore
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    background: {
                        color: {
                            value: "#000000",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble",
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 40,
                                duration: 2,
                                opacity: 8,
                                size: 6,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff", // Pure white for max contrast
                        },
                        links: {
                            color: "#22d3ee", // Cyan links
                            distance: 120,
                            enable: true,
                            opacity: 0.8, // High opacity links
                            width: 1.5,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: "bounce",
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: false,
                                // @ts-ignore
                                area: 800,
                            },
                            value: 150, // More particles
                        },
                        opacity: {
                            value: 0.9, // Almost solid particles
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 2, max: 4 }, // Larger particles
                        },
                    },
                    detectRetina: true,
                    polygon: {
                        draw: {
                            enable: true,
                            stroke: {
                                color: "#22d3ee", // Brighter Cyan
                                width: 1,
                                opacity: 0.5
                            },
                        },
                        enable: true,
                        move: {
                            radius: 10,
                        },
                        position: {
                            x: 50,
                            y: 50,
                        },
                        inline: {
                            arrangement: "equidistant",
                        },
                        scale: 1.5, // Larger scale
                        type: "inline",
                        url: "/brain.svg",
                    },
                }}
                className="absolute inset-0"
            />
        </div>
    );
}
