import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function AboutUser() {

    let {empId} = useParams();

    let[userDeatil, setUserDeatil] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:4005/Users/${empId}`)
        .then((res)=>res.json())
        .then((data)=>setUserDeatil(data))
        .catch((err)=>console.log("Error Appeared : " +err.message))
    },[]);

  return (
    <div className='container' >
        <div className='row justify-content-center'>
            <div className='card  bg-grey col-6 '>
                <div className='row justify-content-center'>
                <div className='col-3'>ID</div>
                <div className='col-3'>{userDeatil.id}</div>
                </div>

                <div className='row justify-content-center'>
                <div className='col-3'>User Name</div>
                <div className='col-3'>{userDeatil.userName}</div>
                </div>

                <div className='row justify-content-center'>
                <div className='col-3'>Email</div>
                <div className='col-3'>{userDeatil.email}</div>
                </div>

                <div className='row justify-content-center'>
                <div className='col-3'>Street</div>
                <div className='col-3'>{userDeatil.street}</div>
                </div>

                <div className='row justify-content-center'>
                <div className='col-3'>City</div>
                <div className='col-3'>{userDeatil.city}</div>
                </div>

                <div className='row justify-content-center'>
                <div className='col-3'>ZIP Code</div>
                <div className='col-3'>{userDeatil.zipCode}</div>
                </div>
            </div>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
             
                <Link to="/service" className='btn btn-primary col-3 my-5'> <IoMdArrowRoundBack/> Back</Link>
             
          </div>
        </div>
    </div>
  )
}

export default AboutUser