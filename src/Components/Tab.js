import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import { TiUserAdd } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function Tab() {

    let[user,setUser]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:4005/Users")
        .then((user)=>setUser(user.data))
        .catch((err)=>console.log(err.message))
    }, []);

    let navigate= useNavigate();

    let editUser = (userid)=>{
  navigate("/service/editUser/" +userid);

    }; 

    let deleteUser=(userid)=>{
        fetch("http://localhost:4005/Users/"+userid,{
            method:"DELETE",
        })
        .then((res)=>{
            Swal.fire({
                title: "Good job!",
                text: "Deleted Successfully",
                icon: "success",
              });
              window.location.reload(); 
        })
        .catch((err)=>
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: err.message,
          })
        );

    };

    let detailUser=(userid)=>{
         navigate("/service/aboutUser/"+userid)
    }


  return (
    <div className='container'>
        <div className='row'>
            <div className='card'>
            <div className='card-title text-center'> 
            <h1 className='text-primary border-bottom border-5 border-primary'>User's Details</h1>
            </div>
            <div className='row justify-content-center mb-2' >
            <Link to="/service/createrUser" className='btn btn-primary col-2 '>Add <TiUserAdd /></Link>
            </div>
        <Table striped bordered hover> 
            <thead>
                <tr style={{textAlign:"center"}}>
                    <th>ID</th>
                    <th>USER NAME</th>
                    <th>EMAIL </th>
                    <th>STREET</th>
                    <th>CITY</th>
                    <th>ZIPCODE</th>
                    <th>Details</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                </tr>
            </thead>
            {user.length !==0 && 
                user.map((users)=>(
                    <tbody>
                        <tr style={{textAlign:"center"}} key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.userName}</td>
                            <td>{users.email}</td>
                            <td>{users.street}</td>
                            <td>{users.city}</td>
                            <td>{users.zipCode}</td>
                            <td style={{ fontWeight : "bold"}}>
                                <button 
                                className='btn btn-success'
                                onClick={()=>detailUser(users.id)}
                                > <BiSolidUserDetail /> </button>
                            </td>
                            <td style={{ fontWeight : "bold"}}>
                                <button 
                                className='btn btn-primary'
                                onClick={()=>editUser(users.id)}
                            ><FaEdit /> </button>
                            </td>
                            <td style={{fontWeight : "bold"}}>
                                <button
                                 className='btn btn-danger'
                                 onClick={()=>deleteUser(users.id)}
                                > <MdDelete /> </button>
                            </td>
                        </tr>
                    </tbody>
                ))
            }
        </Table>
        </div>
        </div>
    </div>
  )
}

export default Tab