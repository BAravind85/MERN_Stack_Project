import "./App.css";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Car from './pages/Car';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-center" limit={1}/>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/car" element={<Car />} />F
        </Routes>
      </Router>
    </div>
  );
}

export default App;
