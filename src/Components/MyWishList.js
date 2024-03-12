import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { remove } from '../features/cartSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MyWishList() {

    let products = useSelector(state=>state.cart);

    let dispatch = useDispatch();

    let removeItem=(productID)=>{
        dispatch(remove(productID))
    }

   let myWishListProduct=products.map((product)=>(
    <section className='carts'>
    <div className='cart'>
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
      <button className='btn' onClick={()=>removeItem(product.id)}>Remove</button>
    </div>
    </section>

    //-----------------------------------------------------------------
  //   <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src={product.image} />
  //   <Card.Body>
  //     <Card.Title>{product.title}</Card.Title>
  //     <Card.Text>
  //     {product.description}
  //     </Card.Text>
  //     <Button variant="primary" onClick={()=>removeItem(product.id)} >Remove </Button>
  //   </Card.Body>
  // </Card>

  //---------------------------------------
  ))
  return (
    <div className='container'>
      <div className='row'>
        <div className='card text-white bg-primary my-3 d-inline-block" style="max-width: 20rem;'>
          <div className='card-title text-center'>
            <h2 className=''>My Cart List</h2>
            {
            myWishListProduct.length ===0 && <h2 className='text-center'>Cart is Empty</h2>
        }
            </div>
    </div>
    <div className='container'>
      <div className='row '>
        {myWishListProduct}
        </div>
       </div>
   </div>
   </div>
  )
}

export default MyWishList