import React from 'react';
import Homescreen from './Screens/Dashboards/Homescreen';
import Movies from './Screens/Dashboards/Movies';
import Login from './Screens/Dashboards/Login';
import Register from './Screens/Dashboards/Register';
import NotFound from './Screens/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homescreen/>} />
      <Route path="/movies" element={<Movies/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}
export default App;