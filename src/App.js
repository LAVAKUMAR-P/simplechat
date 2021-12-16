import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainchat from "./components/Mainchat";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Forgotpassword from "./components/Forgotpassword";
import Resetpassword from "./components/Resetpassword";


function App() {
 

  return (
   <>
  
   <Router>
      <Routes>
        <Route path="/" element={<Login/>} exact={true}/>
        <Route path="/register" element={<Register/>} exact={true}/>
        <Route path="/home" element={ <Mainchat/>} exact={true}/>
        <Route path="/forgetpassword" element={<Forgotpassword/>} exact={true}/>
        <Route path="/resetpassword/:userId/:token" element={<Resetpassword/>} exact={true}/>
      </Routes>
    </Router>
   </>
  );
}

export default App;
