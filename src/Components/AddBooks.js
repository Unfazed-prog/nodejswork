import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const AddBooks=()=>{

    const navigate = useNavigate();

    //add
    let [bookPicture,setBookPicture]=useState();
    let [bookName,setBookName]=useState();
    let [bookDiscription,setBookDescription]=useState();
    let [bookPrice,setBookPrice]=useState();
    let [response,setResponse]=useState();
    
    const addBooks=async()=>{
        try{
            const data = {BOOK_PICTURE:bookPicture, BOOK_NAME:bookName, BOOK_DESCRIPTION:bookDiscription, BOOK_PRICE:bookPrice}
            console.log(data);
            const response = await axios.post("http://localhost:8080/forAddBook",data);
            alert(response.data);
        }catch(error){
            console.log(error);
        }
    }

    //Go Back
    const cancel=()=>{
        navigate("/manage_books")
    };
    return(
        <div className='row pt-4'>
            <div className='col-12 d-flex align-content-center justify-content-center'>
                <div className='form-control p-4' style={{ width: '400px', height: '415px', border: '8px solid #1F75FE', borderRadius: '20px' }}>
                    <h1 className='text-center mb-4 text-primary'>Add a new book</h1>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='text' placeholder='Book Picture' onChange={(i)=>setBookPicture(i.target.value)}/>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='text' placeholder='Book Name' onChange={(i)=>setBookName(i.target.value)}/>
                    <textarea className='form-control mb-3 w-75 mx-auto text-center text-primary' placeholder='Enter the book discription here... ' rows='2' maxLength='150' onChange={(i)=>setBookDescription(i.target.value)}></textarea>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='number' placeholder='Book Price in OMR' onChange={(i)=>setBookPrice(i.target.value)}/>

                    <div className='d-flex align-items-center justify-content-center mb-3'>
                        <button onClick={addBooks} className='btn btn-outline-success me-5 w-50 border-2'>Add</button>
                        <button onClick={cancel} className='btn btn-outline-danger w-50 border-2'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddBooks;