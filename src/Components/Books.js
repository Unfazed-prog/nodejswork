import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Books = () => {

    let [books,setBooks]=useState([]);
    const navigate = useNavigate();

    const show= async()=>{
        try{
            const response = await axios.get("http://localhost:8080/books");
            setBooks(response.data);
        }catch(error){
            console.log(error);
        }
    }
useEffect(()=>{
    show();
},[books]);

const pay=()=>{
    alert("Payment successfuly!.. ")
}
    return (
        <div className='row pt-4'>
            <div className='d-flex justify-content-end'>
                <Link to='/' className='p-2 btn btn-outline-info me-4 fs-5' style={{backgroundColor: 'rgb(235, 10, 10)', border: '3px solid', borderRadius: '20px', width: '10%'}}><span className='text-white'>Logout</span></Link>
            </div>
            <h1 className='text-center mb-0 text-white'>Which book you want? </h1>
            {
                books.map((book) => (
                    <div className='col-3 d-flex align-items-center justify-content-center p-4'>
                        <div className="card" style={{ width: '320px', height: '350px' }}>

                            <img className="card-img-top" src={book.BOOK_PICTURE} alt="Card image cap" width='100px' height='150px' />
                            <div className="card-body">
                                <h5 className="card-title text-primary">- Book Name:
                                    <p className="card-text text-dark d-inline"> {book.BOOK_NAME}</p>
                                </h5>

                                <h5 className="card-title text-primary">- Book Discription: 
                                    <p className="card-text text-dark d-inline"> {book.BOOK_DESCRIPTION}</p>
                                </h5>
                                

                                <h5 className="card-title text-primary">- Book Price: 
                                    <p className="card-text text-dark d-inline"><span className='text-danger'> {(book.BOOK_PRICE).toFixed(3)}</span> OMR</p>
                                </h5>
                                
                                <button className='btn btn-outline-success w-100' style={{alignItems: 'center'}} onClick={pay}>Pay</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
export default Books;