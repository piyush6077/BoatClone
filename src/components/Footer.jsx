import React from 'react'
import BoatL from '../assets/botlo.svg'

export default function Footer() {
  return (
    <div className='flex w-full rounded-t-lg h-[400px] justify-center bg-blue-100'>
        <div className='w-[90%] h-full flex pt-12 justify-between'>
            <div className='w-[29%] gap-3 h-full flex flex-col'>
                <img src={BoatL} className="w-[40%] h-20" alt="" />
                <p className='text-3xl font-bold text-gray-800'>Subscribe to our email alert! </p>
                <input type="email" className='h-8 outline-none text-sm rounded py-5 pl-4' placeholder='Enter your email address' />
            </div>
            <div className='w-[66%] h-full flex'>
                <div className='w-[20%] h-full flex flex-col gap-3 pt-4'>
                    <h1 className='font-semibold mb-2 text-lg'>shop</h1>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                </div>
                <div className=' w-[25%] h-full flex flex-col gap-3 pt-16'>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                </div>
                <div className='w-[28%] h-full flex flex-col gap-3 pt-4'>
                    <h1 className='font-semibold mb-2 text-lg'>Help</h1>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                </div>
                <div className='w-[25%] h-full flex flex-col gap-3 pt-4'>
                    <h1 className='font-semibold mb-2 text-lg'>Company</h1>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                    <p className='text-sm'>words are correct </p>
                </div>
            </div>
        </div>
    </div>
  )
}
