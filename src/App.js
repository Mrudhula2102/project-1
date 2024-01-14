
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Myprofile from "./components/Myprofile";
import Guestuser from "./components/Guestuser";
import Employeedetails from "./components/Employeedetails";
import Recruitment from "./components/Recruitment";
import Training from "./components/Training";
import Navbar from "./Login/Navbar";
import LoginCard from "./Login/LoginCard";
import Login from "./Login/Login";
import TrainingView from "./components/TrainingView";
import Sidebar from "./Sidebar/Sidebar";



function App() {
  return (
    <div>
 
      <BrowserRouter>
       <Routes>
       <Route path='/'element={<Navbar/>}></Route>
       <Route path='/login' element={<LoginCard/>}></Route>
       <Route path='/adlogin'element={<Login method='post'/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/Myprofile' element={<Myprofile/>}></Route>
       <Route path='/Guestuser' element={<Guestuser/>}></Route>
       <Route path='/Employeedetails' element={<Employeedetails/>}></Route>
       <Route path='/Recruitment' element={<Recruitment/>}></Route>
       <Route path='/Training' element={<Training method='post'/>}></Route>
       <Route path="/TrainingView" element={<TrainingView/>}></Route>
       </Routes>
      </BrowserRouter>
     
     
      
    </div>
  );
}

export default App;
