import React, { createContext, useState } from 'react';

// Crear el contexto
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Estado para manejar el tema (claro u oscuro)
  const [theme, setTheme] = useState('light'); // Tema por defecto: claro

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
