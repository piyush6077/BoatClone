import React from 'react'
import {Link} from 'react-router-dom'
import { IoStarSharp } from "react-icons/io5";
import { products } from './products';

export default function () {
  return (
    <>
    {products.products2.map((products)=>( 
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
    </>
  )
}