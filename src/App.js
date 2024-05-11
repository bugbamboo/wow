  import React from 'react';
  import { Link, Outlet, useNavigate } from 'react-router-dom';

  const App = () => {
    const navigate = useNavigate();

    return (
      <div>
        <h1>4.1 GPT (Genius Puzzle Tinkerer)</h1>
        <h2><i>To complete this puzzle, find all three passwords! When combined together, they will give you the answer.</i></h2>
        <nav>
        <button onClick={() => navigate("/")}>Reset</button>
        <button onClick={() => navigate("/puzzlea")}>Puzzle A</button>
          <button onClick={() => navigate("/puzzleb")}>Puzzle B</button>
          <button onClick={() => navigate("/puzzlec")}>Puzzle C</button>
        </nav>
        <div style={{ marginTop: '20px' }}>
          <Outlet />
        </div>
      </div>
    );
  };

  export default App;
