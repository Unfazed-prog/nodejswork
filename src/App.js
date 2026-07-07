import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import icon from './Images/icon.png';
import Home from './Components/Home';
import Books from './Components/Books';
import ManageBooks from './Components/ManageBooks';
import AddBooks from './Components/AddBooks';
import UpdateBooks from './Components/UpdateBooks';
import Registration from './Components/Registration';
import Login from './Components/Login';

function App() {
  let currentDate = new Date().toDateString();
  return (
    <div className='container-fluid' style={{backgroundImage: 'linear-gradient( #0b1557, #4357c9)', minHeight: '100vh'}}>
      <BrowserRouter>
        <div className='row pt-3'>
          <div className='col-2 d-flex align-items-center justify-content-center'>
            <img className='img-fluid' src={icon} alt='Logo.. ' style={{ width: '100px', height: '90px' }}/>
          </div>
          <div className='col-8 d-flex align-items-center'>
            <nav className='nav'>
              <Link to='/' className='btn btn-outline-primary me-4 fs-5' style={{backgroundColor: 'rgb(44, 44, 245)', border: '3px solid', borderRadius: '20px'}}><span className='text-white'>Home</span></Link>
              <Link to='/login' className='btn btn-outline-primary me-4 fs-5' style={{backgroundColor: 'rgb(44, 44, 245)', border: '3px solid', borderRadius: '20px'}}><span className='text-white'>Books</span></Link>            </nav>
          </div>
          <div className='col-2 d-flex align-items-center text-white pb-2' style={{fontSize: '25px'}}>{currentDate}</div>
        </div>
        <div className='row d-flex justify-content-center align-items-center' hidden>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/books' element={<Books/>}></Route>
            <Route path='/manage_books' element={<ManageBooks/>}></Route>
            <Route path='/add_books' element={<AddBooks/>}></Route>
            <Route path='update_books' element={<UpdateBooks/>}></Route>
            <Route path='/registration' element={<Registration/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
          </Routes>
        </div>
        <div className='row fixed-bottom'>
            <h5 className='text-white text-center p-3' style={{bottom:0, position:'absolute'}}>Copyrights to Bookstore Oman {new Date().getFullYear()}</h5>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
