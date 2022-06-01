import './App.css';
import CharacterCalculator from './components/CharacterCalculator';
import MatchupCalculator from './components/MatchupCalculator';
import NavBar from './components/NavBar';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalContext } from './contexts/GlobalContext';
const App = () => {
  const [globalState, setGlobalState] = useState({})

  return (
    <Router>
      <div className="App">
        <>
          <GlobalContext.Provider value={{globalState, setGlobalState}}>
            <NavBar />
            <Routes>
              {/* All the other stuff */}
              <Route path="/" element={<CharacterCalculator />} />
              <Route path="/matchup" element={<MatchupCalculator />} />
            </Routes>
          </GlobalContext.Provider>
        </>
      </div>
    </Router>
  );
}

export default App;