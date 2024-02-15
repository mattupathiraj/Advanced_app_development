
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Componenets/Home'

import UserApply from './Componenets/UserApply'
import Profile from './Componenets/Profile'
import AdminDetails from './Admin/AdminDetails'
import AdminAccept  from './Admin/AdminAccept'

import NavBar from './NavBar';
import NavBar1 from './NavBar1';
import MainPage from './MainPage';
import MainHome from './MainHome';
import ContactUs from './ContactUs';
import About from './About';
import Cont from './Cont';

import Loginn from './Componenets/Loginn';
import SignUp from './Componenets/SignUp';
import AllBookings from './Componenets/AllBookings';



import Payment from './Componenets/Payment'
import AdminHome from './Admin/AdminHome';
import  LoanStatus from './Admin/LoanStatus'
import SchemeDetails from './Admin/SchemeDetails';
import AdminProfile from './Admin/AdminProfile'
import AllEvents from './Componenets/AllEvents'
import MyBookings from './Componenets/MyBookings'
import BookingForm from './Componenets/BookingForm'
import Events from './Componenets/Events'
import HomeAdmin from './Admin/HomeAdmin';
import AdminCourse from './Admin/AdminCourse';
import AdminLogin from './Admin/AdminLogin';


function App() {
  

  return (
    <BrowserRouter>
      <div>
          
          {/* <Login/> */}
          {/* <Signup/> */}
          
        <Routes>
          
        
          <Route path="/" element={<Home/>}/>
          <Route path="/AllBookings" element={<AllBookings/>}/>
         
          <Route path="/NavBar1" element={<NavBar1/>}/>
          <Route path="/nav" element={<NavBar/>}/>
          <Route path="/Cont" element={<Cont/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        
          <Route path="/loginn" element={<Loginn/>}/>
          <Route path="/MainHome" element={<MainHome/>}/>
          <Route path="/loan" element={<UserApply/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/Payment" element={<Payment/>}/>
          <Route path='/adminHome'element={<AdminHome/>}></Route>
          <Route path="/details" element={<AdminDetails/>}/>
          <Route path="/accept" element={<AdminAccept/>}/>
          <Route path="/loanStatus" element={<LoanStatus/>}/>
          <Route path="/schemes" element={<SchemeDetails/>}/>
          <Route path="/adminProfile" element={<AdminProfile/>}/>
 
          <Route path="/AllEvents" element={<AllEvents/>}/>
          <Route path="/MyBookings" element={<MyBookings/>}/>
          <Route path="/BookingForm" element={<BookingForm/>}/>
          <Route path="/MainPage" element={<MainPage/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="/HomeAdmin" element={<HomeAdmin/>}/>
          <Route path="/admincourse" element={<AdminCourse/>}/>
          <Route path="/AdminLogin" element={<AdminLogin/>}/>
          <Route path="/ContactUs" element={<ContactUs/>}/>
          <Route path="/About" element={<About/>}/>



        </Routes>
        
      </div>
      </BrowserRouter>
  
  
  )
}

export default App
