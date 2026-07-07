import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const ManageBooks=()=>{

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

//To show the Login page.. 
const showAddBookPage=()=>{
    navigate("/add_books")
}

//For delete: 
    const handleDelete= async(id)=>{
        if(window.confirm("Are you sure to delete?")===true){
            try{
                const response = await axios.delete(`http://localhost:8080/forDelete/${id}`);
                if(response.data === "ok"){
                    alert("Book deleted successfully!.. ");
                }else{
                    alert("Book not deleted!.. ");
                }
            }catch(error){
                console.log(error);
            }
        }
    }

//For update: 
    const handleUpdate= async(BookData)=>{
        navigate("/update_books",{state:BookData});
    }

    return(
        <div className='row pt-3'>
            <div className='d-flex justify-content-end'>
                <Link to='/' className='p-2 btn btn-outline-info me-4 fs-5' style={{backgroundColor: 'rgb(235, 10, 10)', border: '3px solid', borderRadius: '20px', width: '10%'}}><span className='text-white'>Logout</span></Link>
            </div>
            <div className='col-12'>
                <table className='table table-bordered mx-auto' style={{width: '1200px', border: '8px solid #1F75FE', borderRadius: '4px'}}>
                <caption className='text-white text-center' style={{captionSide: 'top', }}>
                    <h1>Manage Books</h1>
                    <button onClick={showAddBookPage} className='btn btn-outline-primary align-content-center mb-2 w-25' style={{backgroundColor: 'red', border: '3px solid', borderRadius: '20px'}}>
                        <span className='text-white'>Add a new book </span>
                    </button>
                </caption>
                    <thead className='table-primary text-center'>
                        <tr>
                            <th>No</th>
                            <th>Picture: </th>
                            <th>Name: </th>
                            <th>Description: </th>
                            <th>Price: </th>
                            <th>Update/ Delete</th>
                        </tr>
                    </thead>
                    <tbody className='table-success text-center'>
                        {
                            books.map((book,i)=>(
                                <tr>
                                    <td>{i+=1}</td>
                                    <td><img src={book.BOOK_PICTURE} alt='' height='50px' width='50px'/></td>
                                    <td>{book.BOOK_NAME}</td>
                                    <td>{book.BOOK_DESCRIPTION}</td>
                                    <td>{(book.BOOK_PRICE).toFixed(3)} OMR</td>
                                    <td>
                                        <button className='btn btn-primary me-3' onClick={()=>handleUpdate(book)}>Update</button>
                                        <button className='btn btn-danger' onClick={()=>handleDelete(book._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default ManageBooks;