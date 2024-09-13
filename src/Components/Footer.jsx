import React from 'react';
import assets from '../../public/assets/assets';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";




const Footer = () => {
    return (
        <div className='w-full h-auto py-10 bg-glpl-red px-10'>
            <div className='grid grid-cols-12 place-items-center'>
                <div className='flex flex-col items-start justify-center col-span-4 pr-12'>
                    <div className='flex items-center pb-5 space-x-4 '>
                        <img src={assets.fair_events_logo_white} width={60} alt="" srcset="" />
                        <h1 className='font-outfit text-2xl  text-white font-bold'>Goodrich Fair & Events</h1>
                    </div>
                    <p className='text-[13px] font-poppins text-normal text-white text-start '>Goodrich Fairs & Events is a market leader in event management and organization, offering exceptional solutions for trade shows, exhibitions, and corporate events. With a focus on creativity, precision, and seamless execution, we deliver unforgettable experiences that leave a lasting impression.</p>
                    <div className='h-[2px] rounded-sm w-full bg-white my-6'></div>
                    <div className='flex gap-5'>
                        <h1 className='text-xl font-outfit text-white '>Follow Us:</h1>
                        <div className='flex space-x-3'>
                            <FaFacebook className='text-3xl cursor-pointer text-white hover:scale-110 transition-all duration-300 ease-in-out' />
                            <FaInstagram className='text-3xl cursor-pointer text-white hover:scale-110 transition-all duration-300 ease-in-out' />
                            <FaLinkedinIn className='text-3xl cursor-pointer text-white hover:scale-110 transition-all duration-300 ease-in-out' />

                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start col-span-2'>
                    <h1 className='font-outfit text-xl font-semibold text-white'>Quick Links</h1>

                    <ul className='text-start space-y-1 pt-4'>
                        <li className='text-slate-50 hover:text-slate-300 font-poppins text-[14px] cursor-pointer'>Home</li>
                        <li className='text-slate-50 hover:text-slate-300 font-poppins text-[14px] cursor-pointer'>Services</li>
                        <li className='text-slate-50 hover:text-slate-300 font-poppins text-[14px] cursor-pointer'>About Us</li>
                        <li className='text-slate-50 hover:text-slate-300 font-poppins text-[14px] cursor-pointer'>Terms & Conditons</li>
                        <li className='text-slate-50 hover:text-slate-300 font-poppins text-[14px] cursor-pointer'>Privacy Policy</li>
                        <li className='text-slate-50 hover:text-slate-300 font-poppins text-[14px] cursor-pointer'>Disclaimer</li>

                    </ul>
                </div>
                <div className='flex flex-col items-start col-span-6 place-items-end'>
                    <div className='flex space-x-5'>
                        <div className='flex items-start gap-2'>
                            <div className='flex space-x-3 items-start'>
                                <FaPhoneAlt className='text-3xl text-white ' />
                                <div className='flex flex-col items-start space-x-1'>
                                    <h1 className='font-outfit font-semibold text-2xl text-white'>Phone</h1>
                                    <h2 className='font-poppins text-white text-[16px]'>+91 22 6286 2900</h2>
                                    <h2 className='font-poppins text-white text-[16px]'>+91 22 6286 2900</h2>
                                    <h2 className='font-poppins text-white text-[16px]'>+91 22 6286 2900</h2>
                                </div>
                            </div>
                            <div className='flex space-x-3 items-start'>
                                <MdEmail className='text-3xl text-white ' />
                                <div className='flex flex-col items-start space-x-1'>
                                    <h1 className='font-outfit font-semibold text-2xl text-white'>Email</h1>
                                    <h2 className='font-poppins text-white text-[16px]'>info@goodrichfair&events.com</h2>
                                    <h2 className='font-poppins text-white text-[16px]'>info@goodrichfair&events.com</h2>
                                    <h2 className='font-poppins text-white text-[16px]'>info@goodrichfair&events.com</h2>
                                </div>
                            </div>

                            <div>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full items-center justify-center'>
                        <h1 className='font-outfit text-3xl font-semibold text-white pb-3 pt-10'>Get Our Latest Updates</h1>

                        <div className="searchBox">
                            <input className="searchInput" type="text" name="" placeholder="Search something" />
                            <button className="searchButton" href="#">
                                <svg width="29" height="29" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M21.7071 2.29292C21.9787 2.56456 22.0707 2.96779 21.9438 3.33038L15.3605 22.14C14.9117 23.4223 13.1257 23.4951 12.574 22.2537L9.90437 16.2471L17.3676 7.33665C17.7595 6.86875 17.1312 6.24038 16.6633 6.63229L7.75272 14.0956L1.74631 11.426C0.504876 10.8743 0.577721 9.08834 1.85999 8.63954L20.6696 2.05617C21.0322 1.92926 21.4354 2.02128 21.7071 2.29292Z" fill="#ffffff"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                    </div>


                </div>
            </div>
           
        </div>
    )
}

export default Footer