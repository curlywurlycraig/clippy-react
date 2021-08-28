import React, { useState } from 'react';
import './App.css';
import Clippy from "./components/clippy";

function App() {
    const [clippyText, setClippyText] = useState('');

    const onInputChange = (e) => {
        setClippyText(e.target.value);
    };

    return (
        <div className="App">
            <input value={clippyText} onChange={(e) => onInputChange(e)} />
            <Clippy speak={clippyText} character="Clippy" />
        </div>
      );
}

export default App;
