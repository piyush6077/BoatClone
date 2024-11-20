import {React, useState} from 'react'
import { NavLink } from 'react-router-dom';
import boatL from '../assets/boatL.png' 
import { IoPersonOutline } from "react-icons/io5"
import { LuPlus, LuShoppingBag } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import {useSelector} from "react-redux";
import CartMain from "./CartMain"
import blogimg1 from "../assets/blogimg1.webp"
import Cat1 from '../assets/earbudCat.webp';

export default function Navbar() {
  
  const [showElement , setShowElement] = useState(false)

  const [ isHovered , setIsHovered] = useState(false);
  
  return (
    <>
    <div className="nav w-[100%] fixed top-0 z-[899] bg-white h-[13vh] flex items-center border-b-1 border-l-0 border-r-0 border border-gray-300">
      <div className='w-[12%] h-[50%] text-xl flex justify-center'>
        <NavLink to="/" className="flex justify-center"><img src={boatL}  className='w-[100%] h-[100%]' alt="logo" /></NavLink>
      </div> 
      <div className='navComp text-lg text-gray-600 flex items-center w-[50%] justify-between'>
        <NavLink 
          className="hover:font-semibold"
          onMouseOver={()=>setIsHovered(true)}
          onMouseEnter={()=>setIsHovered(true)}
          // onMouseLeave={()=>setIsHovered(false)}
        >
            Categories
        </NavLink>
        {isHovered && (
          <div className="absolute w-[95%] pr-7 py-1 top-full right-[-50%] left-[1%] translate-x-5 bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="list-none p-2 flex justify-between"
            onMouseLeave={()=>setIsHovered(false)}
            onMouseEnter={()=>setIsHovered(true)}
          >
            <div className='flex flex-col items-start'>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>True Wire Earbuds</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Wireless Speaker</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Party Speaker</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Car Accessiories</p>
              </li>
            </div>  
            <div className='flex flex-col items-start'>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>True Wire Earbuds</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Wireless Speaker</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Party Speaker</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Car Accessiories</p>
              </li>
            </div>  
            <div className='flex flex-col items-start'>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>True Wire Earbuds</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Wireless Speaker</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Party Speaker</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Car Accessiories</p>
              </li>
            </div>  
            <div className='flex flex-col items-start'>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>True Wire Earbuds</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Wireless Speaker</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Party Speaker</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Car Accessiories</p>
              </li>
            </div>  
            <div className='flex flex-col items-start'>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>True Wire Earbuds</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Wireless Speaker</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Party Speaker</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex gap-2 justify-center items-center">
                  <img src={Cat1} className='w-[55px] h-[50px]' alt="" />
                  <p className='text-xs'>Car Accessiories</p>
              </li>
            </div>  
          </ul>
      </div>

        )}
        <NavLink to="/boatPersonalization" className="hover:font-semibold">boAt Personalisation</NavLink>
        <NavLink to="/giftWithBoat" className="hover:font-semibold ">Gift with boAt</NavLink>
        <NavLink to="/corprateOrder" className="hover:font-semibold">Corparate Orders</NavLink>
        <NavLink to="/more" className="hover:font-semibold">More</NavLink>
      </div>
      <div className='flex w-[38%] justify-end gap-6' >
        <div className='flex justify-end w-[80%] '>
            <div className='w-[65%] h-[38px] relative '>
                <input type="search" className='w-[100%] h-[100%] outline-none text-sm pl-14 border-grey-300 rounded-3xl bg-gray-100 focus:bg-white  border-[0.1px]' placeholder='Search for products , brands and more'  />
                <CiSearch className='text-xl absolute opacity-50 w-[30px] h-[28px] left-[10px] top-[5px]'/>           
            </div>
        </div>
        <div className="w-[20%] text-2xl flex justify-start">
            <div className='flex w-[40%] items-center'>
                <IoPersonOutline className=''/>   
            </div>
            <div className='flex w-[40%] items-center'>
                <LuShoppingBag className='' onClick={(prev)=>setShowElement(prev => !prev)} />
            </div>
        </div>
      </div>
    </div>
    {showElement?(
        <CartMain handleCloseCart={() => setShowElement(prev => !prev)} />
      ):""}
    </>
  )
}
