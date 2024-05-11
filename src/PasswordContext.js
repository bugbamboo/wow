// PasswordContext.js
import React, { createContext, useState, useContext } from 'react';

const PasswordContext = createContext(null);

export const usePassword = () => useContext(PasswordContext);

export const PasswordProvider = ({ children }) => {
    const [access, setAccess] = useState({ puzzleB: false, puzzleC: false });

    const verifyAccess = (puzzle, password) => {
        // Assume passwords are 'passwordB' and 'passwordC' for Puzzle B and C
        if ((puzzle === 'puzzleB' && (password === 'PISTOL'||password === 'pistol')) ||
            (puzzle === 'puzzleC' && (password === 'RIFLE'||password === 'rifle'))) {
            setAccess(prev => ({ ...prev, [puzzle]: true }));
            return true;
        }
        return false;
    };

    return (
        <PasswordContext.Provider value={{ access, verifyAccess }}>
            {children}
        </PasswordContext.Provider>
    );
};
