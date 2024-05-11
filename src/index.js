// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PasswordProvider } from './PasswordContext';
import App from './App';
import PuzzleA from './PuzzleA';
import PuzzleB from './PuzzleB';
import PuzzleC from './PuzzleC';
import PasswordProtected from './PasswordProtected';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <PasswordProvider>
                <Routes>
                    <Route path="/" element={<App />}>
                        
                        <Route path="puzzlea" element={<PuzzleA />} />
                        <Route path="puzzleb" element={<PasswordProtected puzzleId="puzzleB" Component={PuzzleB} />} />
                        <Route path="puzzlec" element={<PasswordProtected puzzleId="puzzleC" Component={PuzzleC} />} />
                    </Route>
                </Routes>
            </PasswordProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
