import { bebas_neue } from "@/constans";
import Link from "next/link";
import { BiCart } from "react-icons/bi";

import MobileNav from "./MobileNav";
import { auth } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import SearchInput from "./SearchInput";
import MobileFilter from "./MobileFilter";



export default async function Navbar() {

  const user = await auth()

  
  return (
    <nav className="bg-transparent p-4 lg:w-[calc(100% - 256px)]">
      <div className="flex justify-between items-center gap-5 px-7 md:container md:mx-auto">
        <Link href="/" className="text-stone-800 font-bold text-xl hidden md:block">
          <h1 className={`text-4xl ${bebas_neue.className}`}>FirShop</h1>
        </Link>
        <SearchInput />
        <div className="">
          <div className="flex items-center">
            <div className="lg:hidden">

              <MobileFilter />
            </div>
            
          {user ? (
            <>
              <Link href="/" className="mr-4">
                <BiCart className="text-2xl" />
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src={user.image} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/api/auth/signout">Logout</Link>
                  </DropdownMenuItem>
                 
                </DropdownMenuContent>
              </DropdownMenu>

              

            </>
        ) : (
            <>
            <Link href="/login">
                <span className="text-stone-800 hover:text-stone-600 px-4 hidden border-r border-stone-300 md:block">Login</span>
              </Link>
              <Link href="/register">
                <span className="text-stone-800 hover:text-stone-600 px-4 hidden md:block">Register</span>
              </Link>
            </>
          )}
            
          </div>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Icon */}
          <MobileNav />
          
        </div>
      </div>
      
    </nav>
  );
};