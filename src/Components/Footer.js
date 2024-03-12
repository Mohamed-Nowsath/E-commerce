import React from 'react'
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { MdPhoneIphone } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { SiPhonepe } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa6";
import { HiAtSymbol } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";



function Footer() {
  return (
    <footer>
         <div className='footer'>
             <h1 className='footer_heading'> <AiOutlineShoppingCart /> Nowsath $hOpPErz <PiGooglePodcastsLogoBold/></h1>
             <h3> <FaRegAddressCard /> 12/25,Abcd Street, xyz , Chennai-600 008</h3>
             <h3> <MdPhoneIphone /> +91 73739 31589</h3>
             <h3 > <MdPhoneIphone /> +91 74485 15046</h3>
             <ul className='icon_list'>
               <li className='icon icon1'><h3><FaWhatsapp /></h3></li>
               <li className='icon icon2'><h3><FaFacebook /></h3></li>
               <li className='icon icon3'><h3><FaTwitter /></h3></li>
               <li className='icon icon4'><h3><FaGoogle /></h3></li>
               <li className='icon icon5'><h3><SiPhonepe /></h3></li>
               <li className='icon icon6'><h3><SiGmail /></h3></li>
             </ul>
             <p> <FcGoogle />www.NowsathShopperz.com</p>
             <p><SiGmail />nowsathshopperz@gmail.com</p>
             <p> <FaRegCopyright />2008 Copyrights <HiAtSymbol /> Nowsath $hOpPErz</p>
         </div> 
    </footer>
   )
}
export default Footer