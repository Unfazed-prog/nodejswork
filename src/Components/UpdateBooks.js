import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const UpdateBooks=()=>{

    const navigate = useNavigate();
    const location = useLocation();
    const book = location.state;
    
    let [bookPicture,setBookPicture]=useState(book.BOOK_PICTURE);
    let [bookName,setBookName]=useState(book.BOOK_NAME);
    let [bookDiscription,setBookDescription]=useState(book.BOOK_DESCRIPTION);
    let [bookPrice,setBookPrice]=useState(book.BOOK_PRICE);
    let [response,setResponse]=useState("");

    //Update
    const Update=async()=>{
        try{
            const data = {id:book._id, BOOK_PICTURE:bookPicture, BOOK_NAME:bookName, BOOK_DESCRIPTION:bookDiscription, BOOK_PRICE:bookPrice};
            const response = await axios.put("http://localhost:8080/updateBooks",data)
            alert(response.data);
        }catch(error){
            console.log(error);
        }
    };

    //Go Back
    const cancel=()=>{
        navigate("/manage_books")
    };
    
    return(
        <div className='row pt-4'>
            <div className='col-12 d-flex align-content-center justify-content-center'>
                <div className='form-control p-4' action='#' method='#' style={{ width: '400px', height: '410px', border: '8px solid #1F75FE', borderRadius: '20px' }}>
                    <h1 className='text-center mb-4 text-primary'>Update the book</h1>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='text' placeholder='Book Picture' onChange={(i)=>setBookPicture(i.target.value)} value={bookPicture}/>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='text' placeholder='Book Name' onChange={(i)=>setBookName(i.target.value)} value={bookName} disabled/>
                    <textarea className='form-control mb-3 w-75 mx-auto text-center text-primary' placeholder='Enter the book discription here... ' rows='2' maxLength='150' onChange={(i)=>setBookDescription(i.target.value)} value={bookDiscription}></textarea>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='number' placeholder='Book Price in OMR' onChange={(i)=>setBookPrice(i.target.value)} value={bookPrice}/>

                    <div className='d-flex align-items-center justify-content-center mb-3'>
                        <button onClick={Update} className='btn btn-outline-success me-5 w-50 border-2'>Update</button>
                        <button onClick={cancel} className='btn btn-outline-danger w-50 border-2'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default UpdateBooks;