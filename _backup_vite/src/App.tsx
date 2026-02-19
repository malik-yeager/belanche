
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import PlaceDetails from './pages/PlaceDetails';
import About from './pages/About';
import Travels from './pages/Travels';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="place/:id" element={<PlaceDetails />} />
        <Route path="about" element={<About />} />
        <Route path="travels" element={<Travels />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
