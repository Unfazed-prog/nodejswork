import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login=()=>{

    const Navigate = useNavigate();
    let [username,setUsername]=useState("");
    let [password,setPassword]=useState("");
    let [response,setResponse]=useState("");

    const clickLogin= async()=>{
        try{
            const response = await axios.post("http://localhost:8080/forLogin",{USERNAME: username,PASSWORD:password});
            if(response.data === "Success"){
                Navigate("/books");
            }else if(username === "admin" && password == "1234"){
                Navigate("/manage_books");
            }else{
                alert("Invalid username or password!.. ");
            }
        }catch(error){
            console.log(error);
            setResponse("There is something wrong! try again later.. ");
        }
    }

    return(
        <div className='row pt-5'>
            <div className='col-12 d-flex align-content-center justify-content-center'>
                <div className='form-control p-4' action='#' method='#' style={{ width: '400px', border: '8px solid #1F75FE', borderRadius: '20px'}}>
                    <h1 className='text-center mb-4 text-primary'>Login</h1>
                    <input className='form-control mb-4 w-75 mx-auto text-center text-primary' type='text' placeholder='Username' onChange={(i)=>setUsername(i.target.value)}/>
                    <input className='form-control mb-4 w-75 mx-auto text-center text-primary' type='password' placeholder='Password'onChange={(i)=>setPassword(i.target.value)} />

                    <div className='d-flex flex-column align-items-center justify-content-center'>
                        <button className='btn btn-outline-primary w-50 mb-3 border-2' onClick={()=>clickLogin(username, password)}>Login</button>
                        <h6 className='text-primary text-center'>if you don't have account <Link to='/registration' className=' text-decoration-none text-danger'>Click here... </Link></h6>                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;