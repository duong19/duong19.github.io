import React from 'react'
// import './src/utils/prism-line-number.css';
// import './src/utils/prism-theme-dark.css';
// import './src/utils/prism-theme-light.css';
import './src/utils/prism.css'
import { ThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = ({element}) => (
    <ThemeProvider>{element}</ThemeProvider>
)