import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import List from './components/List';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
