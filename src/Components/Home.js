import React from 'react'
import Footer from './Footer'

function Home() {
  return (
    <>
    <h3 style={{textAlign:"center"}}>Welcome to All</h3>
    <div className='imagecontainer' style={{height:"100vh" , width:"100vw" , backgroundColor:"grey",display:"flex" , flexDirection:"column",justifyContent:"center",
    alignItems:"center"}}>
        <div className='imageslider'>
          <img className='image image1' src="image/image1.jpg"/> 
          <img className='image image2' src="image/image2.jpg"/> 
          <img className='image image3' src="image/image3.jpg"/> 
          <img className='image image4' src="image/image4.jpg"/> 
          <img className='image image5' src="image/image5.jpg"/> 
          <img className='image image6' src="image/image6.jpg"/> 
        </div>   
    </div>
    <Footer />
    </>
  )
}

export default Home