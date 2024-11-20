import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { IoStarSharp } from "react-icons/io5";
import { products } from './products';



function Cartproducts3() {
    const[activeButton , setActiveButton] = useState('BestSeller');

    const handleButtonClick = (buttonName) =>{
        setActiveButton(buttonName);
    }

    
    const getButtonStyle = (buttonName) =>{
        return activeButton === buttonName 
        ? 'px-4 py-2 bg-blue-200 font-semibold rounded-xl'
        : 'px-2 py-0 bg-white font-normal'
    }

    const[show , setShowBox] = useState("bestSeller");

    const ProductArray = show === "bestSeller" ? products.products3
                        :show === "homeThreator" ? products.products4
                        :show === "earbuds" ? products.products5
                        :show === "topWatches" ? products.products6
                        :[];
  return (
    <div>
      <div className='flex gap-5 h-[7%] my-4'>
                    <button 
                            className={getButtonStyle('BestSeller')}
                            onClick={()=>{setShowBox('bestSeller');handleButtonClick('BestSeller');}}>
                            Best Seller
                    </button>


                    <button 
                            className={getButtonStyle('HomeThreator')} 
                            onClick={()=>{setShowBox('homeThreator');handleButtonClick('HomeThreator');}}  >
                            Home Threator and Sound bar
                    </button>
                    <button 
                            className={getButtonStyle('Earbuds')} 
                            onClick={()=>{setShowBox('earbuds');handleButtonClick('Earbuds');}}>
                            Earbuds
                    </button>
                    <button 
                           className={getButtonStyle('TopWatches')} 
                           onClick={()=>{setShowBox('topWatches');handleButtonClick('TopWatches');}}>
                           Top watches
                    </button>
                </div>

                <div className='w-full h-[85%] flex justify-between'>
                {ProductArray.map((products) => (
                    <div key={products.id} className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                    <div className='w-full h-[76%] relative '>
                        <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                        <Link to={products.slug}>
                            <img className='w-full h-full rounded-t-xl z-10' src={products.image} alt="" />
                        </Link>
                        <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                    </div>
                    <div className='flex w-full p-3 mt-3 justify-between'>
                        <div className='flex w-[60%] gap-1 flex-col'>
                            <b className='text-sm'>Stone 352 Pro</b>
                            <p className='flex gap-1 items-center'><span className='font-bold'>$1,799</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>64% off</span></p>
                            <div className='flex gap-1 items-center'>
                                <IoStarSharp className='text-yellow-400 text-lg'/>
                                <p className='text-xs text-gray-700'>Be first to reviw</p>
                            </div>
                        </div>
                        <div className='flex w-[40%] gap-2 flex-col items-end'>
                            <div className='flex'>
                                <p className='w-5 h-5 bg-white border-[1px] border-gray-300 rounded-full '></p>
                                <p className='w-5 h-5 bg-blue-900 rounded-full '></p>
                            </div>
                            <button className='py-2 w-full bg-gray-950 rounded-xl text-white'>Add to cart</button>
                        </div>
                    </div>
                </div>
                ))}
    </div>
    </div>
  )
}

export default Cartproducts3
