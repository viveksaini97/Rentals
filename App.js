import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filter from './Components/Filter';
import FormRooms from './Components/FormRooms';
import Navbar from './Components/Navbar';
import PropertyList from './Components/PropertyList';
import PropertyDetails from './Components/PropertyDetails';

function App() {
  return (
    <Router>
      <div className=''>
        <div className="w-[80%] mx-auto">
          <Navbar />
        
          
          <Routes>
            <Route path="/" element={<PropertyList/>} />
            <Route path="/form-room" element={<FormRooms/>} />
            <Route path="/property/:id" element={<PropertyDetails/>} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
