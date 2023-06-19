import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddEvent from './components/AddEvent';
import AllEvents from './components/AllEvents';
import Home from './components/Home';
import Login from './components/Login';
import MyEvents from './components/MyEvents';
import MyFavourites from './components/MyFavourites';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import Register from './components/Register';
import EventDetail from './components/EventDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/all-events' element={<AllEvents/>}></Route>
        <Route path='/my-events' element={<MyEvents/>}>
          <Route path='/my-events/add' element={<AddEvent/>}></Route>
        </Route>
        <Route path='/my-favourites' element={<MyFavourites/>}></Route>
        <Route path='/events/:id' element={<EventDetail/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
