import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { GrUpdate } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";

function EditUser() {
    let{empId} = useParams();

    let [id,setId]=useState('');
    let[userName,setUserName]=useState("");
    let[email,setEmail] = useState("");
    let[street,setStreet]= useState("");
    let[city,setCity] = useState("");
    let[zipCode,setZipCode]=useState("");

    useEffect(()=>{
        fetch(`http://localhost:4005/Users/${empId}`)
        .then((res)=>res.json())
        .then((data)=>{
            setId(data.id);
            setUserName(data.userName);
            setEmail(data.email);
            setStreet(data.street);
            setCity(data.city);
            setZipCode(data.zipCode);
        })
    },[]);

    let navigate=useNavigate();


    let handlePost=(e)=>{
        e.preventDefault();

    let newUser= {id, userName, email , street , city , zipCode}    
  
  
    fetch("http://localhost:4005/Users/"+empId,{
        method :"PUT",
        headers :{
            "Content-type" : "application/json",
        },
        body: JSON.stringify(newUser),
    })
    .then((res)=>{
        Swal.fire({
            title: "Good job!",
            text: "User Updated Successfully",
            icon: "success",
          });
          navigate("/service");
    })
    .catch((err)=>
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      })
    );
    }


  
    return (
    <div>
        <div className='container'>
        <div className='card'>
            <div className='card-title text-center'>
                <h1 className='text-primary border-bottom border-2 border-primary'>Updated New User</h1>
            </div>
            <form className='container' onSubmit={handlePost}>
                <div className='row justify-content-center'>
                  <div className='form-floating my-5 col-8'>
                    <input className='form-control' value={id}  onChange={(e)=>setId(e.target.value)} />
                    <label>Enter Id</label>
                  </div>

                  <div className='form-group mb-5 col-8'>
                    <input className='form-control' value={userName} placeholder='Enter Your Name' onChange={(e)=>setUserName(e.target.value)}/>
                  </div>

                  <div className='form-group mb-5 col-8'>
                    <input className='form-control' value={email} placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
                  </div>

                  <div className='form-group mb-5 col-8'>
                    <input className='form-control' value={street} placeholder='Enter Your Street'onChange={(e)=>setStreet(e.target.value)}/>
                  </div>

                  <div className='form-group mb-5 col-8'>
                    <input className='form-control' value={city} placeholder='Enter Your City' onChange={(e)=>setCity(e.target.value)}/>
                  </div>

                  <div className='form-group mb-5 col-8'>
                    <input className='form-control' value={zipCode} placeholder='Enter Your ZIP Code' onChange={(e)=>setZipCode(e.target.value)} />
                  </div>

                </div>
            <div className='row justify-content-center mb-3'>
                <button type='submit' className='btn btn-success col-3'>Update <GrUpdate /> </button>
            </div>
            </form>
        </div>
        <div className='row justify-content-center my-5' >
            <Link to="/service" className='btn btn-primary col-2'> <IoMdArrowRoundBack /> Back</Link>
        </div>
        
    </div>
    </div>
  )
}

export default EditUser