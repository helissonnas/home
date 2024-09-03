import { useState } from 'react';
import Home from './pages/home';

import './index.css';

function App() {
  const [language, setLanguage] = useState('pt');

  return <Home language={language} changeLanguage={setLanguage} />;
}

export default App;
