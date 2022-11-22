import './App.css';
import './fonts.css';
import MainContent from './components/MainContent.jsx';
import TheHeader from "./components/TheHeader.jsx";

function App() {
  return (
    <div>
      <div className='wrapper'>
        <TheHeader title="Quote" />
        <MainContent />
      </div>
    </div>
  );
}

export default App;