import Link from 'next/link';  
import Menu from './Menu';  
import React from 'react';  
import CartIcon from './CartIcon';  
import Image from 'next/image';  
import UserLinks from './UserLinks';  

const Navbar = () => {  
    const user = false;  

    return (  
        <div className="h-16 text-red-500 p-4 flex items-center justify-between   
        border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">  

            {/* LOGO */}  
            <div className="flex items-center gap-4">  
                <Image src="/logo.png" alt="Logo" width={150} height={150} />  
            </div>  

            {/* LEFT LINKS */}  
            <div className="hidden md:flex gap-4 flex-1">  
                <Link href="/">Home</Link>  
                <Link href="/menu">Menu</Link>  
                <Link href="/">Contact</Link>  
            </div>  

            {/* TITLE */}  
            <div className="flex-grow text-center flex-1 md:text-center">  
                <div className="text-xl md:font-bold">  
                    <Link href="/">Kuya Card's</Link>  
                </div>  
            </div>  

            {/* MOBILE MENU */}  
            <div className="ml-auto md:hidden">  
                <Menu />  
            </div>  

            {/* RIGHT LINKS */}  
            <div className="hidden md:flex gap-4 items-center justify-end flex-1">   
                <div className="flex items-center gap-0 cursor-pointer bg-orange-300 px-1 py-0 rounded-md">   
                    <Image src="/call.png" alt="Call Icon" width={20} height={20}/>  
                    <span>123 456 78</span>  
                </div>  
                <UserLinks />  
                <CartIcon />  
            </div>  
        </div>  
    );  
}  

export default Navbar;