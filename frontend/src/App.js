import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import Success from './pages/SuccessPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <ToastContainer />
      </>
    </Router>
  );
}

export default App;
