import React from 'react';
import useDarkMode from '../Hooks/useDarkMode';

const GoinDark = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <button onClick={toggleMode}>Toggle Sunshine</button>
  );
};

export default GoinDark;