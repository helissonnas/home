import Home from './pages/home';
import { useState } from 'react';

function App() {
  const [language, setLanguage] = useState('pt');

  return <Home language={language} changeLanguage={setLanguage} />;
}

export default App;
