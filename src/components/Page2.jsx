import {React, useState} from 'react'
import bluet5 from '../assets/bluetooth5.webp'
import { IoStarSharp } from "react-icons/io5";
import earphone1 from '../assets/earphone1.webp'
import personalPage1 from '../assets/personalGPage.png'
import giftpage2 from '../assets/giftpageI2.webp'
import giftimg3 from '../assets/giftimg2.webp'

export default function Page2() {

    const [show , setShowBox] = useState("TWS");
    const [activeBtn , setActiveBtn] = useState("tws"); 

    const handleOnClick = (buttonName) => {
        setActiveBtn(buttonName)
    }

    
    const getButtonStyle = (buttonName) => {
        return activeBtn === buttonName
        ? 'btn rounded-xl font-semibold bg-gray-100 btn-lg py-2 px-5 mx-2 '
        : 'btn  btn-lg py-2 px-6 text-gray-500'
    }
    

// // ------------------------------------------


    const [show2 , setShowBox2] = useState("TWS2");
    const [activeBtn2 , setActiveBtn2] = useState("tws2"); 

    const handleOnClick2 = (buttonName2) => {
        setActiveBtn2(buttonName2)
    }
    
    const getButtonStyle2 = (buttonName2) => {
        return activeBtn2 === buttonName2
        ? 'btn rounded-xl font-semibold bg-gray-100 btn-lg py-2 px-5 mx-2 '
        : 'btn  btn-lg py-2 px-6 text-gray-500'
    }

  return (
    <div className ='flex flex-col items-center justify-center relative mt-20'> 
        <div className=''>
            <img src={personalPage1} alt="" />
        </div>
        <div className='w-[100%]'>
            <img src={giftpage2} className='w-full'  alt="" />
        </div>
        <div className="thirdContainer w-[96%] mt-5">
            <div>
                <h1 className='text-2xl my-4'>Products Under ₹3000</h1>
                <div>
                    <button 
                        type="button"
                        className={getButtonStyle("tws")}
                        onClick={()=>{setShowBox("TWS");handleOnClick("tws")}} 
                    >
                        TWS
                    </button>
                    <button 
                        type="button" 
                        className={getButtonStyle("neckband")}
                        onClick={()=>{setShowBox("NeckBand");handleOnClick("neckband")}}
                    >
                     NeckBand
                    </button>
                    <button 
                        type="button" 
                        className={getButtonStyle("smartWatches")}
                        onClick={()=>{setShowBox("Smartwatches");handleOnClick("smartWatches")}}
                    >
                     Smartwatches
                    </button>
                    <button 
                        type="button" 
                        className={getButtonStyle("headPhone")}
                        onClick={()=>{setShowBox("HeadPhone");handleOnClick("headPhone")}}
                    >
                     HeadPhone
                    </button>
                </div>
            </div>
            <div className='w-full h-[85%] mt-4' >
                    
                    {show === "TWS" &&
                    (<div className='w-full h-full flex justify-between '>
                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50 '>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                               
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1 rounded-xl px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    )}

                    {show === "NeckBand" && 
                    (<div className='w-full h-full flex justify-between '>
                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={earphone1} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                             
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                           
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>)}

                    {show === "Smartwatches" &&
                    (<div className='w-full h-full flex justify-between '>
                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                        
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                               
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-betwee bg-slate-100'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                               
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    )}

                    {show === "HeadPhone" &&
                    (<div className='w-full h-full flex justify-between '>
                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                               
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                           
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    )}
                </div>
        </div>
        <div className='w-[100%] mt-16'>
            <img src={giftimg3} className='w-full'  alt="" />
        </div>


        <div className="fifthContainer w-[96%] mt-5 mb-20">
            <div>
                <h1 className='text-2xl my-4'>Products Under ₹2000</h1>
                <div>
                    <button 
                        type="button" 
                        className={getButtonStyle2("tws2")}
                        onClick={()=>{setShowBox2("TWS2");handleOnClick2("tws2")}} 
                    >
                        TWS
                    </button>
                    <button 
                        type="button" 
                        className={getButtonStyle2("neckband2")}
                        onClick={()=>{setShowBox2("NeckBand2");handleOnClick2("neckband2")}}
                    >
                     NeckBand
                    </button>
                    <button 
                        type="button" 
                        className={getButtonStyle2("smartWatches2")}
                        onClick={()=>{setShowBox2("Smartwatches2");handleOnClick2("smartWatches2")}}
                    >
                     Smartwatches
                    </button>
                    <button 
                        type="button" 
                        className={getButtonStyle2("headPhone2")}
                        onClick={()=>{setShowBox2("HeadPhone2");handleOnClick2("headPhone2")}}
                    >
                     HeadPhone
                    </button>
                </div>
            </div>
            <div className='w-full h-[85%] mt-4' >
                    
                    {show2 === "TWS2" &&
                    (<div className='w-full h-full flex justify-between '>
                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-b-xl rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50 '>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                               
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    )}

                    {show2 === "NeckBand2" && 
                    (<div className='w-full h-full flex justify-between '>
                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={earphone1} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                             
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                           
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>)}

                    {show2 === "Smartwatches2" &&
                    (<div className='w-full h-full flex justify-between '>
                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                        
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                               
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                       <div className='flex flex-col w-full px-2 justify-betwee bg-slate-100'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                               
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    )}

                    {show2 === "HeadPhone2" &&
                    (<div className='w-full h-full flex justify-between '>
                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                              
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                               
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                           
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='w-[210px] h-[320px] bg-gray-100  rounded-md rounded-t-xl'>
                        <div className='w-full h-[65%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                        </div>
                        <div className='bg-yellow-400 w-full h-[22px] font-semibold  rounded-b-lg text-sm flex justify-center'>120 hour playback</div>
                        <div className='flex flex-col w-full px-2 justify-between bg-slate-50'>
                            <div className='flex w-[100%] justify-between border border-b-1 border-t-0 border-l-0 border-r-0 border-gray-300 border-dashed'>
                                <b className='text-md pb-4 mt-1 '>Stone 352 Pro</b>
                                
                                {/* <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
                                    </div> */}
                            </div>
                            <div className='flex flex-col gap-1 py-1  px-1 text-sm'>
                                <div className='flex justify-between'>
                                    <p className='font-semibold'>$1,799</p>
                                    <div className='flex w-[40%] gap-2 flex-col items-end'>
                                        <div className='flex text-xs align-middle'>
                                            <div className='w-3 h-3 relative  bg-blue-900 border-[1px] border-gray-300 rounded-full '>
                                                <p className='w-3 h-3 absolute z-50 bg-pink-400 left-[-10px] rounded-full '></p>
                                            </div> +1
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-xs text-green-500'>64% off</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                    )}
                </div>
        </div>
    </div>
  )
}
