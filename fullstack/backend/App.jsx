// import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Loginadmin from './ADMIN/Loginadmin';
import Home from './USER/Home';
import Events from './USER/Events';
import MyBookings from './USER/MyBookings';
import Dashboard from './USER/Dashboard';
//import BookingsList from './ADMIN/BookingsList';
import EventForm from './ADMIN/EventForm';
import BookingForm from './USER/BookingForm';
import PaymentForm from './USER/PaymentForm';
import Regiadmin from './ADMIN/Regiadmin';
import Mainpage from './Mainpage';
//import PaymentHistory from './USER/PaymentHistory';
//import Login from './USER/Login';
const App = () => {
  return (
    <div>
   <Router>
   <Routes>
  <Route path="/" element={<Loginadmin/>}></Route>


   <Route path="/Home" element={<Home/>}></Route>
   <Route path="/Events" element={<Events/>}></Route>
   <Route path="/MyBookings" element={<MyBookings/>}></Route>
   <Route path="/Dashboard" element={<Dashboard/>}></Route>
   <Route path="/Regiadmin" element={<Regiadmin/>}></Route>
   <Route path="/EventForm" element={<EventForm/>}></Route>
   <Route path="/BookingForm" element={<BookingForm/>}></Route>
   <Route path="/PaymentForm" element={<PaymentForm/>}></Route>
   <Route path="/Mainpage" element={<Mainpage/>}></Route>
 

   </Routes>
   </Router>
    </div>
  )
}

export default App
