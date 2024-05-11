// PasswordProtected.js
import React, { useState } from 'react';
import { usePassword } from './PasswordContext';

const PasswordProtected = ({ puzzleId, Component }) => {
    const [password, setPassword] = useState('');
    const { access, verifyAccess } = usePassword();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = () => {
        if (!verifyAccess(puzzleId, password)) {
            alert('Incorrect password');
        }
    };

    if (access[puzzleId]) {
        return <Component />;
    }

    return (
        <div>
            <p>Please enter the password to access this puzzle:</p>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default PasswordProtected;
