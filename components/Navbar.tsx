import { bebas_neue } from "@/constans";
import Link from "next/link";
import { BiCart } from "react-icons/bi";

import MobileNav from "./MobileNav";

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
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from '@clerk/nextjs'



export default async  function Navbar() {

  const user = await currentUser()
  

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
              <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={user.imageUrl} />
                  <AvatarFallback>{user?.firstName[0]} {user?.lastName[0]}</AvatarFallback>
                </Avatar> 
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Welcome, {user?.firstName}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  <SignOutButton />
                </DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>
            
              
            ) : (
              
              <div>
                <Link href="/sign-in">
                  <span className="text-stone-800 hover:text-stone-600 px-4 border-r border-stone-300 ">Login</span>
                </Link>
                <Link href="/sign-up">
                  <span className="text-stone-800 hover:text-stone-600 px-4 ">Register</span>
                </Link>
              </div>
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