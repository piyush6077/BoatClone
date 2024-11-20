import React from 'react';
import LandSlider from '../mini-components/LandSlider';
import Cat1 from '../assets/earbudCat.webp';
import Cat2 from '../assets/earneck.png'
import Cat3 from '../assets/smartw.webp'
import Cat4 from '../assets/wireHead.webp'
import Cat5 from '../assets/wirespeak.png'
import Cat6 from '../assets/wireheads.png'
import Cat7 from '../assets/wiredEar.png'
import bluet1 from '../assets/salesimg1.webp'
import bluet2 from '../assets/saleimg2.webp'
import bluet3 from '../assets/saleimg3.webp'
import bluet4 from '../assets/saleimg4.webp'
import bluet5 from '../assets/bluetooth5.webp'
import bluet6 from '../assets/bluetooth6.webp'
import bluet7 from '../assets/bluetooth7.webp'
import smart2 from '../assets/smart2watch.webp'
import speaker from '../assets/speaker.jpg'
import speaker2 from '../assets/speaker2.avif'
import earphone1 from '../assets/earphone1.webp'
import smartwatch from '../assets/smartwatch.avif'

import { IoStarSharp } from "react-icons/io5";

import { Navigation, Pagination, Scrollbar, A11y , Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Display() {
  return (
    <div className="relative">
      <LandSlider />

        {/* //////       */}

    
        <div className="w-full h-[500px] flex mt-10 justify-center mb-5">
            <div className='w-[95%] h-full'>
                <div className="w-full h-[10%] text-3xl">Summer <span className='font-semibold'>Sale</span></div>
                <div className=' w-full h-[89%] flex justify-between'>
                    
                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative '>
                            <div className='w-[140px] py-1 px-3 bg-gray-950 text-white  rounded absolute z-50 top-[5%] text-[11px]'>✍️ Engraving Available</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet1} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Nirvana Ion</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,999</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>5.5 | 77</p>
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

                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative '>
                            <div className='w-[140px] py-1 px-3 bg-gray-950 text-white  rounded absolute z-50 top-[5%] text-[11px]'>✍️ Engraving Available</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet4} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Nirvana Ion</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,999</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>5.5 | 77</p>
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
                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative '>
                            <div className='w-[140px] py-1 px-3 bg-gray-950 text-white  rounded absolute z-50 top-[5%] text-[11px]'>✍️ Engraving Available</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet3} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Nirvana Ion</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,999</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>5.5 | 77</p>
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

                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative '>
                            <div className='w-[140px] py-1 px-3 bg-gray-950 text-white  rounded absolute z-50 top-[5%] text-[11px]'>✍️ Engraving Available</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet2} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Nirvana Ion</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,999</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>5.5 | 77</p>
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
                    
                </div>
            </div>
        </div>


{/* ///////////////////////////////////// */}

        <div className="w-full h-[260px] flex justify-center mb-5">
        <div className="w-[95%] h-full flex flex-col">
          <div className="text-[30px] w-full h-[40%] pt-8">
            Shop by <span className="font-semibold">Category</span>
          </div>
          <div className="w-full h-[60%] flex gap-4">
            <Swiper className='h-[full] flex'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={8}
            >
        
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat1} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat2} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat3} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat4} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat5} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat6} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat7} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>

            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat1} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat1} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat1} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat1} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat1} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2  flex flex-col items-center justify-end">
                <img src={Cat1} className="w-[100px] h-[100px]" alt="" />
                <p className="text-lg">Earphones</p>
            </SwiperSlide>
     
        </Swiper>
          </div>
        </div>
      </div>

{/* ////////////////////////////////////////// */}


        <div className="w-full h-[500px] flex mt-20 justify-center mb-5">
            <div className='w-[95%] h-full'>
                <div className="w-full h-[10%] text-3xl ">Top Picks <span className='font-semibold'>For You</span></div>
                <div className=' w-full h-[89%] flex justify-between'>
                    
                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative '>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={speaker} alt="" />
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

                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] bg-gray-200 relative flex justify-center items-center rounded-xl '>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-[80%] h-[80%] rounded-t-xl z-10' src={speaker2} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Nirvana Ion</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,999</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>5.5 | 77</p>
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
                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative '>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={earphone1} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Nirvana Ion</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,999</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>5.5 | 77</p>
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

                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative flex justify-center items-center '>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-[80%] h-[80%] rounded-t-xl z-10' src={smartwatch} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Nirvana Ion</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,999</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>5.5 | 77</p>
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
                    
                </div>
            </div>
        </div>

        {/* ////////////////////////////////////////// */}


        <div className="w-full h-[500px] flex mt-20 justify-center mb-5">
            <div className='w-[95%] h-full'>
                <div className="w-full h-[10%] text-3xl ">Best Of <span className='font-semibold'>boAt</span></div>
                <div className=' w-full h-[89%] flex justify-between'>
                    
                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative '>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet5} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Stone 352 Pro</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,799</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>64% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>Be first to review</p>
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

                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={smart2} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Nirvana Ion</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,999</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>5.5 | 77</p>
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
                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative '>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet6} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Nirvana Ion</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,999</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>5.5 | 77</p>
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

                    <div className='w-[310px] h-[420px] bg-gray-100 border border-gray-200 rounded-xl'>
                        <div className='w-full h-[76%] relative'>
                            <div className='w-[100px] py-1 px-1 bg-gray-950 text-white rounded absolute z-50 left-0 top-[5%] text-[11px]'>✍️ New Launch</div>
                            <img className='w-full h-full rounded-t-xl z-10' src={bluet7} alt="" />
                            <div className='bg-yellow-400 w-[200px] h-[22px] font-semibold border-[1px] border-white  rounded-xl absolute z-50 bottom-[-3%] left-[16%] text-sm flex justify-center'>120 hour playback</div>
                        </div>
                        <div className='flex w-full p-3 mt-3 justify-between'>
                            <div className='flex w-[60%] gap-1 flex-col'>
                                <b className='text-sm'>Nirvana Ion</b>
                                <p className='flex gap-1 items-center'><span className='font-bold'>$1,999</span><strike className="text-gray-400 text-xs">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
                                <div className='flex gap-1 items-center'>
                                    <IoStarSharp className='text-yellow-400 text-lg'/>
                                    <p className='text-xs text-gray-700'>5.5 | 77</p>
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
                    
                </div>
            </div>
        </div>


    </div>
  );
}
