
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { add } from '../features/cartSlice';
// import axios from 'axios'
// import Table from 'react-bootstrap/Table';



function Section() {

  let[products,setProducts]=useState([]);
  let[error,setError]=useState();
  let[isLoading,setIsLoading]=useState(true);
  // let[axiosData,setAxiosData]= useState([]);
  // let[axiosData2,setAxiosData2]=useState([]);

useEffect(()=>{
  fetch("http://localhost:4001/products")
  .then((value)=>value.json())
  .then((data)=>{
  setProducts(data);
  setIsLoading(false);
})
  .catch((err)=>{
  setError(`Not Found a Page
  Something went Wrong.Please Try again Later`);
  setIsLoading(false);
  })
})

// useEffect(()=>{
//   axios.get("https://jsonplaceholder.typicode.com/users")
//   .then((res)=> setAxiosData(res.data))
//   .catch((err)=> console.log(err.message))
// },[])

// useEffect(()=>{
//   axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then((res)=>setAxiosData2(res.data))
//   .catch((err)=> console.log(err.message))
// },[])

// useEffect(()=>{
//   axios.get("http://localhost:4002/user")
//   .then((user)=>setAxiosData(user.data))
//   .catch((err)=> console.log(err.message))
// },[])

 let dispatch = useDispatch();

const addProduct=(product)=>{
     dispatch(add(product))
}

  return ( 
    <section className='carts'>
      { isLoading && ( <h1>Loading.......Please wait</h1>)}
      {error && <h1>{error}</h1>}
       {
        products.length !==0 &&
        products.map((product)=>(
          <div className='cart' key={product.id}>
            <div className='image'> 
            <img className='innerimage' src={product.image} />
            </div>
            <article className='artcile_heading'>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            </article>
            <div className='price_list'>
              <ul>
                <li className='price'>Price :<b><FaDollarSign />{product.price}</b> <s className='offer_price'><FaDollarSign />{Math.floor(product.price*3)}</s> 60% Offer</li>
                <li className='rating'>Rating :{product.rating.rate} <span className='star'><FaStar /></span></li>
                <li className='count'>Only {product.rating.count} left </li>
              </ul>
            </div>
            <button className='btn' onClick={()=>addProduct(product)}>Add to Cart</button>
          </div>
        ))
       }
       {/* {
        JSON.stringify(axiosData)
       }
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       {
        JSON.stringify(axiosData2)
       } */}
       
    </section>
  )
};

export default Section