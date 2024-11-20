import LandSlider from '../mini-components/LandSlider';
import Cat1 from '../assets/earbudCat.webp';
import Cat2 from '../assets/earneck.png'
import Cat3 from '../assets/smartw.webp'
import Cat4 from '../assets/wireHead.webp'
import Cat5 from '../assets/wirespeak.png'
import Cat6 from '../assets/wireheads.png'
import Cat7 from '../assets/wiredEar.png'

import bestVid1 from "../assets/bestvideo1.mp4"
import trend1 from "../assets/TrendVideo.mp4"
import smallimg1 from "../assets/trendsmallimg1.avif"
import lifestyle1 from "../assets/lifestyle1.webp"
import lifestyle2 from "../assets/lifestyle2.webp"
import lifestyle3 from "../assets/lifestyle3.webp"
import lifestyle4 from "../assets/lifestyle4.webp"
import img1 from "../assets/yearW1.svg"
import img2 from "../assets/yearcon2.svg"
import img3 from "../assets/yearcont3.svg"
import img4 from "../assets/yearcont4.svg"
import blogimg1 from "../assets/blogimg1.webp"
import { Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import CartProducts2 from './CartProducts2'
import Cartproducts from './Cartproducts';
import Cartproducts3 from './Cartproducts3';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import '../index.css'

import { useSelector , useDispatch } from 'react-redux'
import {addTOCart} from "../store/cart.js";


export default function Display() {
    const carts = useSelector(store => store.cart.items)
    console.log(carts)

    const dispatch = useDispatch()

    const handleCart = (id)=>{
        dispatch(addTOCart({
            productId: id,
            quantity: 1
        }))
    }

    return (
    <div className="relative mt-20">
        <LandSlider />

{/* //////// */}

        <div className='w-full h-[160px] flex justify-center mt-3'>
            <div className='w-[70%] h-full flex justify-evenly'>
                <div className='w-[20%] h-full flex flex-col items-center justify-center'>
                    <img src={img1} className='w-full h-[70%] ' alt="" />
                    <p className='h-[10%] text-lg font-bold'>1 year <span className='font-normal'>Warrenty</span></p>
                </div>

                <div className='w-[20%] h-ful flex flex-col items-center justify-center'>
                    <img src={img2} className='w-full h-[70%] ' alt="" />
                    <p className='h-[10%] text-lg font-bold'>7-day <span className='font-normal'>Replacement</span></p>
                </div>

                <div className='w-[20%] h-ful flex flex-col items-center justify-center'>
                    <img src={img3} className='w-full h-[70%] ' alt="" />
                    <p className='h-[10%] text-lg font-bold'>Free Express <span className='font-normal'>Delivery</span></p>
                </div>

                <div className='w-[20%] h-ful flex flex-col items-center justify-center'>
                    <img src={img4} className='w-full h-[70%] ' alt="" />
                    <p className='h-[10%] text-lg font-bold'>GST <span className='font-normal'>Billing</span></p>
                </div>

                
            </div>
        </div>

        <div className="w-full h-[500px] flex mt-10 justify-center mb-5 ">
            <div className='w-[95%] h-full'>
                <div className="w-full h-[10%] text-3xl">Summer <span className='font-semibold'>Sale</span></div>
                <div className=' w-full h-[89%] flex justify-between gap-4'>
                    <Cartproducts className ="flex" handleAddToCart={handleCart} />
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

      {/* ////////////////////////////////////////////////////////////// */}

      <div className="w-full h-[460px] flex justify-center mb-5">
        <div className="w-[95%] h-full flex flex-col">
          <div className="text-[30px] w-full h-[20%] py-5">
            Explore <span className="font-semibold">Bestseller</span>
          </div>
          <div className="w-full h-[80%] flex gap-4">
            <Swiper className='h-[full] flex'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={3.8}
            >
        
            <SwiperSlide className="h-full gap-2 rounded-xl  flex flex-col items-center justify-end">
                <div className='h-[90%] rounded-xl '>
                    <video className="rounded-xl" autoPlay muted loop>
                        <source src={bestVid1} type="video/mp4" />
                    </video>
                </div>
                <p className="text-lg h-[10%]">Smartwatches</p>
            </SwiperSlide>

            <SwiperSlide className="h-full gap-2 rounded-xl  flex flex-col items-center justify-end">
                <div className='h-[90%] rounded-xl '>
                    <video className="rounded-xl" autoPlay muted loop>
                        <source src={bestVid1} type="video/mp4" />
                    </video>
                </div>
                <p className="text-lg h-[10%]">Smartwatches</p>
            </SwiperSlide>

            <SwiperSlide className="h-full gap-2 rounded-xl  flex flex-col items-center justify-end">
                <div className='h-[90%] rounded-xl '>
                    <video className="rounded-xl" autoPlay muted loop>
                        <source src={bestVid1} type="video/mp4" />
                    </video>
                </div>
                <p className="text-lg h-[10%]">Smartwatches</p>
            </SwiperSlide>

            <SwiperSlide className="h-full gap-2 rounded-xl  flex flex-col items-center justify-end">
                <div className='h-[90%] rounded-xl '>
                    <video className="rounded-xl" autoPlay muted loop>
                        <source src={bestVid1} type="video/mp4" />
                    </video>
                </div>
                <p className="text-lg h-[10%]">Smartwatches</p>
            </SwiperSlide>
            
            <SwiperSlide className="h-full gap-2 rounded-xl  flex flex-col items-center justify-end">
                <div className='h-[90%] rounded-xl '>
                    <video className="rounded-xl" autoPlay muted loop>
                        <source src={bestVid1} type="video/mp4" />
                    </video>
                </div>
                <p className="text-lg h-[10%]">Smartwatches</p>
            </SwiperSlide>

            <SwiperSlide className="h-full gap-2 rounded-xl  flex flex-col items-center justify-end">
                <div className='h-[90%] rounded-xl '>
                    <video className="rounded-xl" autoPlay muted loop>
                        <source src={bestVid1} type="video/mp4" />
                    </video>
                </div>
                <p className="text-lg h-[10%]">Smartwatches</p>
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
                    
                    <CartProducts2/>
         
                </div>
            </div>
        </div>


        {/* ///////////////////////////////////////// */}

        <div className='flex justify-center'>
            <div className='w-[95%] h-[600px] flex flex-col'>
                <div className='text-3xl h-[10%]'>
                Shop by <span className="font-semibold">Lifestyle</span>
                </div>

                <div className='w-full h-[90%] flex gap-5 '>
                    <div className='h-full w-[24%]'>
                        <div className='w-full h-[82%] '>
                            <img src={lifestyle1} className='w-full h-full' alt="" />
                        </div>
                        <div className='w-full h-[18%] bg-blue-50 gap-1 flex flex-col items-center justify-center'>
                            <p className='text-2xl font-semibold'>For fitness</p>
                            <a href='' className='flex items-center gap-2 text-blue-900 text-sm'>View All <FaRegArrowAltCircleRight/></a>
                        </div>
                    </div>
                    
                    <div className='h-full w-[24%]'>
                        <div className='w-full h-[82%] '>
                            <img src={lifestyle2} className='w-full h-full' alt="" />
                        </div>
                        <div className='w-full h-[18%] bg-blue-50 gap-1 flex flex-col items-center justify-center'>
                            <p className='text-2xl font-semibold'>For Parties</p>
                            <a href='' className='flex items-center gap-2 text-blue-900 text-sm'>View All <FaRegArrowAltCircleRight/></a>
                        </div>
                    </div>
                    <div className='h-full w-[24%]'>
                        <div className='w-full h-[82%] '>
                            <img src={lifestyle3} className='w-full h-full' alt="" />
                        </div>
                        <div className='w-full h-[18%] bg-blue-50 gap-1 flex flex-col items-center justify-center'>
                            <p className='text-2xl font-semibold'>For Work</p>
                            <a href='' className='flex items-center gap-2 text-blue-900 text-sm'>View All <FaRegArrowAltCircleRight/></a>
                        </div>
                    </div>
                    <div className='h-full w-[24%]'>
                        <div className='w-full h-[82%] '>
                            <img src={lifestyle4} className='w-full h-full' alt="" />
                        </div>
                        <div className='w-full h-[18%] bg-blue-50 gap-1 flex flex-col items-center justify-center'>
                            <p className='text-2xl font-semibold'>For AudioPhiles</p>
                            <a href='' className='flex items-center gap-2 text-blue-900 text-sm'>View All <FaRegArrowAltCircleRight/></a>
                        </div>
                    </div>

                </div>

            </div>
        </div>


        {/* ////////////////////////////////////////// */}


        <div className="w-full h-[520px] flex mt-20 justify-center mb-5">
            <div className='w-[95%] h-full'>
                <div className="w-full h-[7%] text-3xl ">Best Of <span className='font-semibold'>boAt</span></div>
                <Cartproducts3/>
            </div>
        </div>


{/* ///////////////////////////////////////// */}

        <div className="w-full h-[600px] flex justify-center mb-5">
        <div className="w-[95%] h-[100%] flex flex-col">
          <div className="text-[27px] w-full h-[15%] pt-8">
            Join the<span className="font-semibold">Tribe</span>
          </div>
          <div className="w-full h-[85%]">
            <Swiper className='h-full flex'
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={13}
            slidesPerView={5.51}
            >
        
        <SwiperSlide className="gap-2 flex flex-col border-[1px] rounded-xl border-gray-200">
            <div className="w-[220px] h-[400px] relative">
                <video className="rounded-t-xl" autoPlay muted loop>
                    <source src={trend1} type="video/mp4" />
                </video>
                <div className='absolute bottom-1 right-[39%] bg-white w-[50px] h-[50px]'>
                    <img src={smallimg1} className='w-full h-full' alt="" />
                </div>
            </div>
            <div className="text-lg h-[5%] flex flex-col items-center" >
                <p className='text-md font-semibold mt-4'>Airdopes 71</p>
                <p className='flex gap-2 items-center mt-5'><span className='font-semibold text-md'>$1,999</span><strike className="text-gray-400 text-sm">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
            </div>
        </SwiperSlide>

            
        <SwiperSlide className="gap-2 flex flex-col border-[1px] rounded-xl border-gray-200">
            <div className="w-[220px] h-[400px] relative">
                <video className="rounded-t-xl" autoPlay muted loop>
                    <source src={trend1} type="video/mp4" />
                </video>
                <div className='absolute bottom-1 right-[39%] bg-white w-[50px] h-[50px]'>
                    <img src={smallimg1} className='w-full h-full' alt="" />
                </div>
            </div>
            <div className="text-lg h-[5%] flex flex-col items-center" >
                <p className='text-md font-semibold mt-4'>Airdopes 71</p>
                <p className='flex gap-2 items-center mt-5'><span className='font-semibold text-md'>$1,999</span><strike className="text-gray-400 text-sm">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
            </div>
        </SwiperSlide>
            
        <SwiperSlide className="gap-2 flex flex-col border-[1px] rounded-xl border-gray-200">
            <div className="w-[220px] h-[400px] relative">
                <video className="rounded-t-xl" autoPlay muted loop>
                    <source src={trend1} type="video/mp4" />
                </video>
                <div className='absolute bottom-1 right-[39%] bg-white w-[50px] h-[50px]'>
                    <img src={smallimg1} className='w-full h-full' alt="" />
                </div>
            </div>
            <div className="text-lg h-[5%] flex flex-col items-center" >
                <p className='text-md font-semibold mt-4'>Airdopes 71</p>
                <p className='flex gap-2 items-center mt-5'><span className='font-semibold text-md'>$1,999</span><strike className="text-gray-400 text-sm">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
            </div>
        </SwiperSlide>

        <SwiperSlide className="gap-2 flex flex-col border-[1px] rounded-xl border-gray-200">
            <div className="w-[220px] h-[400px] relative">
                <video className="rounded-t-xl" autoPlay muted loop>
                    <source src={trend1} type="video/mp4" />
                </video>
                <div className='absolute bottom-1 right-[39%] bg-white w-[50px] h-[50px]'>
                    <img src={smallimg1} className='w-full h-full' alt="" />
                </div>
            </div>
            <div className="text-lg h-[5%] flex flex-col items-center" >
                <p className='text-md font-semibold mt-4'>Airdopes 71</p>
                <p className='flex gap-2 items-center mt-5'><span className='font-semibold text-md'>$1,999</span><strike className="text-gray-400 text-sm">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
            </div>
        </SwiperSlide>

        <SwiperSlide className="gap-2 flex flex-col border-[1px] rounded-xl border-gray-200">
            <div className="w-[220px] h-[400px] relative">
                <video className="rounded-t-xl" autoPlay muted loop>
                    <source src={trend1} type="video/mp4" />
                </video>
                <div className='absolute bottom-1 right-[39%] bg-white w-[50px] h-[50px]'>
                    <img src={smallimg1} className='w-full h-full' alt="" />
                </div>
            </div>
            <div className="text-lg h-[5%] flex flex-col items-center" >
                <p className='text-md font-semibold mt-4'>Airdopes 71</p>
                <p className='flex gap-2 items-center mt-5'><span className='font-semibold text-md'>$1,999</span><strike className="text-gray-400 text-sm">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
            </div>
        </SwiperSlide>

        <SwiperSlide className="gap-2 flex flex-col border-[1px] rounded-xl border-gray-200">
            <div className="w-[220px] h-[400px] relative">
                <video className="rounded-t-xl" autoPlay muted loop>
                    <source src={trend1} type="video/mp4" />
                </video>
                <div className='absolute bottom-1 right-[39%] bg-white w-[50px] h-[50px]'>
                    <img src={smallimg1} className='w-full h-full' alt="" />
                </div>
            </div>
            <div className="text-lg h-[5%] flex flex-col items-center" >
                <p className='text-md font-semibold mt-4'>Airdopes 71</p>
                <p className='flex gap-2 items-center mt-5'><span className='font-semibold text-md'>$1,999</span><strike className="text-gray-400 text-sm">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
            </div>
        </SwiperSlide>

        <SwiperSlide className="gap-2 flex flex-col border-[1px] rounded-xl border-gray-200">
            <div className="w-[220px] h-[400px] relative">
                <video className="rounded-t-xl" autoPlay muted loop>
                    <source src={trend1} type="video/mp4" />
                </video>
                <div className='absolute bottom-1 right-[39%] bg-white w-[50px] h-[50px]'>
                    <img src={smallimg1} className='w-full h-full' alt="" />
                </div>
            </div>
            <div className="text-lg h-[5%] flex flex-col items-center" >
                <p className='text-md font-semibold mt-4'>Airdopes 71</p>
                <p className='flex gap-2 items-center mt-5'><span className='font-semibold text-md'>$1,999</span><strike className="text-gray-400 text-sm">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
            </div>
        </SwiperSlide>

        <SwiperSlide className="gap-2 flex flex-col border-[1px] rounded-xl border-gray-200">
            <div className="w-[220px] h-[400px] relative">
                <video className="rounded-t-xl" autoPlay muted loop>
                    <source src={trend1} type="video/mp4" />
                </video>
                <div className='absolute bottom-1 right-[39%] bg-white w-[50px] h-[50px]'>
                    <img src={smallimg1} className='w-full h-full' alt="" />
                </div>
            </div>
            <div className="text-lg h-[5%] flex flex-col items-center" >
                <p className='text-md font-semibold mt-4'>Airdopes 71</p>
                <p className='flex gap-2 items-center mt-5'><span className='font-semibold text-md'>$1,999</span><strike className="text-gray-400 text-sm">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
            </div>
        </SwiperSlide>

        <SwiperSlide className="gap-2 flex flex-col border-[1px] rounded-xl border-gray-200">
            <div className="w-[220px] h-[400px] relative">
                <video className="rounded-t-xl" autoPlay muted loop>
                    <source src={trend1} type="video/mp4" />
                </video>
                <div className='absolute bottom-1 right-[39%] bg-white w-[50px] h-[50px]'>
                    <img src={smallimg1} className='w-full h-full' alt="" />
                </div>
            </div>
            <div className="text-lg h-[5%] flex flex-col items-center" >
                <p className='text-md font-semibold mt-4'>Airdopes 71</p>
                <p className='flex gap-2 items-center mt-5'><span className='font-semibold text-md'>$1,999</span><strike className="text-gray-400 text-sm">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
            </div>
        </SwiperSlide>

        <SwiperSlide className="gap-2 flex flex-col border-[1px] rounded-xl border-gray-200">
            <div className="w-[220px] h-[400px] relative">
                <video className="rounded-t-xl" autoPlay muted loop>
                    <source src={trend1} type="video/mp4" />
                </video>
                <div className='absolute bottom-1 right-[39%] bg-white w-[50px] h-[50px]'>
                    <img src={smallimg1} className='w-full h-full' alt="" />
                </div>
            </div>
            <div className="text-lg h-[5%] flex flex-col items-center" >
                <p className='text-md font-semibold mt-4'>Airdopes 71</p>
                <p className='flex gap-2 items-center mt-5'><span className='font-semibold text-md'>$1,999</span><strike className="text-gray-400 text-sm">$1799</strike><span className='font-bold text-sm text-green-500'>75% off</span></p>
            </div>
        </SwiperSlide>
        </Swiper>
          </div>
        </div>
      </div>

        <div className='w-full h-[500px] mt-14 flex justify-center'>
            <div className='w-[95%] flex flex-col h-full'>
                <p className='text-2xl font-semibold'>BLogs</p>
                <div className='flex gap-5 my-4'>
                    <button className='rounded-3xl  px-7 py-[5px] bg-gray-200 font-semibold'>Popular</button>
                    <button className='rounded-3xl text-gray-500  font-semibold'>Latest</button>
                </div>
                <div className='flex gap-3'>
                   <div className='w-[24%] h-[380px] rounded-xl border bg-gray-50 border-gray-200'>
                        <img src={blogimg1} className='w-full h-[40%] rounded-t-xl' />
                        <div className='flex flex-col px-4 '>
                            <p className='mt-6 text-gray-500'>21 March 2023</p>
                            <p className='text-xl mt-2 mb-1 font-semibold'>Gaming Earbud for Travel: Compact and Portable Game..</p>
                            <p>when nothing can stop a gamer for entering a arena , we have got gaming </p>
                            <button className='flex mt-4 border w-full h-[40px] bg-white justify-center items-center rounded-xl gap-2 '>Read More <FaRegArrowAltCircleRight/> </button>
                        </div>
                   </div>

                   <div className='w-[24%] h-[380px] rounded-xl border bg-gray-50 border-gray-200'>
                        <img src={blogimg1} className='w-full h-[40%] rounded-t-xl' />
                        <div className='flex flex-col px-4 '>
                            <p className='mt-6 text-gray-500'>21 March 2023</p>
                            <p className='text-xl mt-2 mb-1 font-semibold'>Gaming Earbud for Travel: Compact and Portable Game..</p>
                            <p>when nothing can stop a gamer for entering a arena , we have got gaming </p>
                            <button className='flex mt-4 border w-full h-[40px] bg-white  justify-center items-center rounded-xl gap-2 '>Read More <FaRegArrowAltCircleRight/> </button>
                        </div>
                   </div>

                   <div className='w-[24%] h-[380px] rounded-xl border bg-gray-50 border-gray-200'>
                        <img src={blogimg1} className='w-full h-[40%] rounded-t-xl' />
                        <div className='flex flex-col px-4 '>
                            <p className='mt-6 text-gray-500'>21 March 2023</p>
                            <p className='text-xl mt-2 mb-1 font-semibold'>Gaming Earbud for Travel: Compact and Portable Game..</p>
                            <p>when nothing can stop a gamer for entering a arena , we have got gaming </p>
                            <button className='flex mt-4 border w-full bg-white  h-[40px] justify-center items-center rounded-xl gap-2 '>Read More <FaRegArrowAltCircleRight/> </button>
                        </div>
                   </div>

                   <div className='w-[24%] h-[380px] rounded-xl border bg-gray-50 border-gray-200'>
                        <img src={blogimg1} className='w-full h-[40%] rounded-t-xl' />
                        <div className='flex flex-col px-4 '>
                            <p className='mt-6 text-gray-500'>21 March 2023</p>
                            <p className='text-xl mt-2 mb-1 font-semibold'>Gaming Earbud for Travel: Compact and Portable Game..</p>
                            <p>when nothing can stop a gamer for entering a arena , we have got gaming </p>
                            <button className='flex mt-4 bg-white border w-full h-[40px] justify-center items-center rounded-xl gap-2 '>Read More <FaRegArrowAltCircleRight/> </button>
                        </div>
                   </div>
                </div>

            </div>
        </div>

    </div>

  );
}
