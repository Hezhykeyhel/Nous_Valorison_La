import './App.css';
import './App.scss'
import{useState} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//Components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import Sidedrawer from "./components/Sidedrawer";
//Screens
import HomeScreen from "./screens/HomeScreen";


function App() {

    const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)}/>
      <Sidedrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
        </Routes>
        </main>
      </Router>
      
  );
}
export default App;

