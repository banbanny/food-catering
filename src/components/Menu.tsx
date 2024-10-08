"use client"
import React,{ useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CartIcon from './CartIcon';


const links = [
    {id: 1, title: "Homepage", url:"/"},
    {id: 2, title: "Menu", url:"/menu"},
    {id: 2, title: "Working Hours", url:"/"},
    {id: 2, title: "Contact", url:"/"},
]

const Menu = () => {
    const [open,setOpen] = useState (false)

    const user = false
  return (
    <div>
        {!open ? (
      <Image 
      src="/iconslogo.png" 
      alt="icon" 
      width={20} 
      height={20} 
      onClick={()=>setOpen(true)}/>
    ) : (
      <Image 
      src="/close.jpg" 
      alt="icon" 
      width={30} 
      height={30} 
      onClick={()=>setOpen(false)}/>
    )}
    {open && (
    <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] 
    flex flex-col gap-8 items-center justify-center text-3xl z-10">
        {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
                {item.title}
            </Link>
        ))}
        {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
        ) : (
        <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>
        )}
        <Link href="/cart">
        <CartIcon />
        </Link>    
    </div>
)}
    </div >
  )
}

export default Menu
