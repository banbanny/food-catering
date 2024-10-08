"use client";  

import { signOut, useSession } from "next-auth/react";  
import Link from "next/link";  

const UserLinks = () => {  
  const { status } = useSession();  
  return (  
    <div className="flex items-center gap-4">  
      {status === "authenticated" ? (  
        <div className="flex items-center gap-4">  
          <Link href="/orders">Orders</Link>  
          <span className="cursor-pointer" onClick={() => signOut()}>Logout</span>  
        </div>  
      ) : (  
        <Link href="/login">Login</Link>  
      )}  
    </div>  
  );  
};  

export default UserLinks;