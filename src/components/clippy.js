import React, { useEffect, useRef, useState } from 'react';
import './clippy.css';
import clippy from 'clippyjs';

const Clippy = ({ animation, speak, character }) => {
    const containerRef = useRef(null);
    const [agent, setAgent] = useState(null);

    useEffect(() => {
        window.CLIPPY_CDN = './agents/';
        clippy.load(character, (newAgent) => {
            setAgent(newAgent);
            newAgent.show();
        });

        return () => {
            if (agent) {
                agent.stop();
            }
        }
    }, [character]);

    useEffect(() => {
        if (!agent || !animation) {
            return;
        }

        agent.stop();
        agent.play(animation);
    }, [agent, animation]);

    useEffect(() => {
        if (!agent || !speak) {
            return;
        }

        agent.stop();
        agent.speak(speak);
    }, [agent, speak]);

    return (
        // TODO Position the agent inside the div
        <div ref={containerRef} />
    );
};

Clippy.defaultProps = {
    animation: null,
    speak: null,
    character: 'Clippy'
};

export default Clippy;