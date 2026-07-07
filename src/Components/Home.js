import HomePageImage from '../Images/HomePageImage.png';
import { useNavigate } from 'react-router-dom';
const Home=()=>{

    const navigate = useNavigate();

    //To show the Login page.. 
    const showLoginPage=()=>{
        navigate("/login")
    }

    return(
        <div className='row pt-5'>
            <div className='col-6 align-content-center text-center text-white'>
                <h2 className='p-3'>{'Bookstore Managment System'.toUpperCase()}</h2>
                <h5 className=' ms-5 pb-3'>It is a system that allows you to buy books by choosing the book and then paying. The system is easy to use and not complicated. </h5>
                <button onClick={showLoginPage} className='btn btn-outline-primary w-50' style={{backgroundColor: 'rgb(44, 44, 245)', border: '3px solid', borderRadius: '20px'}}><span className='text-white'>Let's start... </span></button>
            </div>

            <div className='col-6 d-flex justify-content-center'>
                <img className='img-fluid' src={HomePageImage} alt='Home Page image.. ' style={{ width: '330px', height: '330px' }}/>
            </div>
        </div>
    );
}
export default Home;