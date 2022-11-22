import './App.css';
import './fonts.css';
import TheHeader from "./components/TheHeader.jsx";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import BookingOverview from './components/BookingOverview';
import NoMatch from './components/NoMatch';


function App() {
  return (
    <div>
      <div className='wrapper'>
        <TheHeader />
        <div className='content'>
        <Routes>
          <Route index element={<LoginPage title="Login" />} />
          <Route path="/home" element={<HomePage title="Home" />} />
          <Route path="/overview" element={<BookingOverview title="Overview" />} />
          <Route path="*" element={<NoMatch />} />
          
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;