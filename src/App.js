import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import { Suspense } from 'react';
import Home from './pages/Home/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins"
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div className="app">
    <Suspense fallback={<div />}>
      <Routes>
        <Route eaxct path="/" element={<Home />} />
        <Route path="/:name" element={<Dashboard />} />
      </Routes>
      </Suspense>
    </div>
    </ThemeProvider>
  );
}

export default App;
