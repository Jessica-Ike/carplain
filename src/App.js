import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<FrontPage />} />
          <Route path="/" element={<FrontPage />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
