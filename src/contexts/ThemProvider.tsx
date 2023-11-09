import {createContext, useContext, useRef} from 'react';

interface ThemeContextType {
  backgroundColor: string;
  bgLight: string;
  bgLighter: string;
  color: string;
}

type PropTypes = {
  children: React.ReactElement;
};

const ThemeContext = createContext<ThemeContextType>({
  backgroundColor: '',
  bgLight: '',
  bgLighter: '',
  color: '',
});

const ThemeProvider = ({children}: PropTypes) => {
  const theme = useRef<ThemeContextType>({
    backgroundColor: 'green',
    bgLight: '#c6f6d5',
    bgLighter: '#e7f6e6',
    color: '#fff',
  });

  return (
    <ThemeContext.Provider
      value={{
        backgroundColor: theme.current?.backgroundColor,
        bgLight: theme.current?.bgLight,
        bgLighter: theme.current?.bgLighter,
        color: theme.current.color,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return context;
};
