// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChooseUser from './components/ChooseUser';
import AdminSignIn from './components/AdminSignIn';
import StudentSignIn from './components/StudentSignIn';
import TeacherSignIn from './components/TeacherSignIn';
import AboutUs from './components/AboutUs'; // Import the new About Us page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />
        <Route path="/admin-signin" element={<AdminSignIn />} />
        <Route path="/student-signin" element={<StudentSignIn />} />
        <Route path="/teacher-signin" element={<TeacherSignIn />} />
        <Route path="/about-us" element={<AboutUs />} /> {/* Add About Us route */}
      </Routes>
    </Router>
  );
};

export default App;

