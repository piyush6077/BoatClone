import React , { useEffect , useState } from 'react'
import {useParams } from 'react-router-dom'
import {products} from './products'
// import {products2} from './products'
import {useDispatch} from "react-redux";
import {addTOCart} from "../store/cart.js";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

import './foronlyswiper.css'

export default function Details() {
    const {slug} = useParams();
    const [detail , setDetail] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState(null)

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const dispatch = useDispatch();

    const handleAddProductCart = () => {
        dispatch(addTOCart({
            productId:detail.id,
            quantity:1,
        }));
    }



    useEffect(() => {
        const findDetail = () =>{
            const allProducts = [...products.products1,...products.products2];
            const foundProducts = allProducts.find(product => product.slug === slug);

            if(foundProducts){
                setDetail(foundProducts);
            }else{
                setError('Product Not Found')
            }
            setLoading(false);
        };

        findDetail();
    },[slug]);

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>{error}</div>
    }

    return(
        <>
            <div className='flex mt-[90px] relative'>
                <div className="w-[50%] bg-red-600 flex flex-row-reverse p-5 py-14">
                <Swiper
                        style={{
                          '--swiper-navigation-color': '#fff',
                          '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="w-[85%] h-[600px] rounded-md"
                    >
                <SwiperSlide>
                    <img src={detail?.image} alt="" className='w-full h-full rounded-xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={detail?.image} alt="" className='w-full h-full rounded-xl' />
                </SwiperSlide>
            </Swiper>


            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="w-[10%] gap-6 custom-swiper-column"         
            >
                    <SwiperSlide className='w-[100%] rounded-md h-[80px] SwiperSlide' style={{width:"100%"}}>
                        <img src={detail?.image} alt="" className='w-full rounded-md h-full' />
                    </SwiperSlide>
                    <SwiperSlide className='w-[100%] h-[80px] SwiperSlide' style={{width:"100%"}}>
                        <img src={detail?.image} alt="" className='w-full rounded-md h-full' />
                    </SwiperSlide>
                </Swiper>
            </div>
           
                <div className="w-[50%] bg-blue-600 pt-20 px-8">
                    <h1 className='text-3xl font-bold'>{detail?.name}</h1>
                    <p className='text-gray-800'>Bluetooth Soundbar with 5.1 Channel Sorround Sound , Bluetooth 5.3 , EQ Modes , Master Remote Control</p>
                    <div className='flex items-end h-10 gap-2' >
                        <p className="text-2xl mt-2 font-semibold">
                            ${detail?.price}
                        </p>
                        <strike className="text-lg text-gray-800">$24900.00</strike>
                        <p className='text-green-500 mb-1'>74% Off</p>
                    </div>
                    <p className='text-sm text-gray-800'> MPR( Inclusive of all taxes )</p>
                    <div>
                        <p>Choose your colour : </p>
                        <div className='flex gap-3 mt-2'>
                            <p className='bg-black rounded-3xl w-10 h-10'></p>
                            <p className='bg-black rounded-3xl w-10 h-10'></p>
                            <p className='bg-black rounded-3xl w-10 h-10'></p>
                            <p className='bg-black rounded-3xl w-10 h-10'></p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className="mb-3 font-semibold">Check Delivery</p>
                        <div className='pt-5 pb-3 bg-gray-100 px-5 rounded-lg'>
                            <input type="number" className="p-[10px] px-4 rounded-md mb-3 border border-black w-[300px] text-md" placeholder='Pincode eg: 412563' />
                            <p><span className="text-green-600 font-semibold text-sm">Free delivery </span></p>
                            <p className="text-grauy-800 text-sm">If ordered within <span className="text-red-400 ">24 Hours</span></p>
                        </div>
                    </div>
                    <div>
                        <h1>Users Love</h1>
                        <div>
                            <img src="" alt="" />
                            <div>
                                <p>25 Lacs+ Units sold on Flipkart</p>
                                <p>3 Lacs+  reviews</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-6'>
                        <div className='w-[120px] h-[160px] flex gap-7 bg-black border relative border-green-600 rounded-lg border-b-0'>
                            <div className=' absolute bottom-[-1px] rounded-md text-xs left-[-10px] w-[140px] justify-center py-1 flex text-white  bg-green-600  uppercase '>
                                Most Popular
                            </div>
                        </div>
                        <div className='w-[120px] h-[160px] flex gap-7 bg-black border relative border-green-600 rounded-lg border-b-0'>
                            <div className=' absolute bottom-[-1px] rounded-md text-xs left-[-10px] w-[140px] justify-center py-1 flex text-white  bg-green-600  uppercase '>
                                Most Popular
                            </div>
                        </div>
                        <div className='w-[120px] h-[160px] flex gap-7 bg-black border relative border-green-600 rounded-lg border-b-0'>
                            <div className=' absolute bottom-[-1px] rounded-md text-xs left-[-10px] w-[140px] justify-center py-1 flex text-white  bg-green-600  uppercase '>
                                Most Popular
                            </div>
                        </div>
                    </div>
                    <p className='mt-2'>Reward and Payment Offers</p>
                    <div>
                        <div className='flex flex-col items-center w-[412px] bg-green-600 justify-center pt-1 rounded-2xl '>
                            <p className="text-xs text-white mb-1">Personalise your Products</p>
                            <div className='flex gap-4 p-4 mt-0 bg-white rounded-lg w-[410px]'>
                                <button
                                    className='px-12 py-3 rounded-lg bg-black text-white'
                                    onClick={handleAddProductCart}
                                >
                                    Add to Cart
                                </button>

                                <button className='px-12 py-3 rounded-lg bg-green-600 text-white'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}