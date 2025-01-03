import { useContext } from 'react';
import { ThemeContext } from '../contexts/Themecontext';

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
