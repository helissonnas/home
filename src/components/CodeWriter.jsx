import { useEffect, useState } from 'react';

function Codewriter() {
  const fullText = '"fullstack developer."';
  const [blink, setBlink] = useState(true);
  const [semicolon, setSemicolon] = useState(true);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    setIndex(0);
    setSemicolon(false);
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (index < fullText.length) {
        setIndex(prev => (prev+1));
      } else if (!semicolon) {
        setSemicolon(true);
      }
    }, parseInt(Math.random()*350));
    
    return () => clearTimeout(timeout);
  }, [index, semicolon])

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 700);
    
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="font-code text-gray-300 min-w-max">
      <span className="text-green-500">{fullText.substring(0, index)}</span><span className="text-gray-300">{semicolon ? ';' : ''}</span><span className="text-gray-200">{blink ? '|' : ''}</span>
    </div>
  )
}

export default Codewriter;