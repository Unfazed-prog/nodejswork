import { data, Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Registration=()=>{

    let [username,setUsername]=useState();
    let [password,setPassword]=useState();
    let [confirmPassword,setConfirmPassword]=useState();
    let [email,setEmail]=useState();
    let [type,setType]=useState("Customer");
    let [date,setDate]=useState(new Date().toDateString());
    let [response,setResponse]=useState("");

    const clickRegister=async()=>{

        if(username !== "" && password !== "" && confirmPassword !== "" && email !== ""){
            
            if(password === confirmPassword){
                
                try{
                    const data = {USERNAME:username, PASSWORD:password, EMAIL:email, TYPE:type, DATE:date}
                    console.log(data);
                    const response = await axios.post("http://localhost:8080/forRegister",data);
                    setResponse(response.data);
                }catch(error){
                    console.log(error);
                }

            }else{
                setResponse("Passwords do not match");
            }

        }else{
            setResponse("Please fill all the fields");
        }

    }

    return(
        <div className='row pt-3'>
            <div className='col-12 d-flex align-content-center justify-content-center'>
                <div className='form-control p-4' style={{ width: '400px', height: '430px', border: '8px solid #1F75FE', borderRadius: '20px'}}>
                    <h1 className='text-center mb-3 text-primary'>Registration</h1>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='text' placeholder='Username' onChange={(i)=>setUsername(i.target.value)}/>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='password' placeholder='Password' onChange={(i)=>setPassword(i.target.value)}/>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='password' placeholder='Confirm Password' onChange={(i)=>setConfirmPassword(i.target.value)}/>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='email' placeholder='Email@gmail.com' onChange={(i)=>setEmail(i.target.value)}/>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='text' placeholder='Customer' onChange={(i)=>setType(i.target.value)} hidden/>
                    <input className='form-control mb-3 w-75 mx-auto text-center text-primary' type='text' placeholder='Date' onChange={(i)=>setDate(i.target.value)} hidden/>

                    <div className='d-flex align-items-center justify-content-center mb-3'>
                        <button className='btn btn-outline-primary w-100 border-2' onClick={clickRegister}>Register</button>
                    </div>

                    <h6 className='text-primary text-center'>You already have an accont? <Link to='/login' className=' text-decoration-none text-danger'>Click here</Link></h6>
                    <h6 className='d-flex align-items-center justify-content-center mb-3'>{response}</h6>
                </div>
            </div>
        </div>
    );
}
export default Registration;