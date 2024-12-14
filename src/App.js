import logo from './logo.svg';
import './App.css';
import { MainPage } from './page/main';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { SelectPage } from './page/select';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/select" element={<SelectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
