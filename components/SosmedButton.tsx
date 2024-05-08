'use client'
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from "next-auth/react"
import { Button } from '@/components/ui/button';

export default function SosmedButton() {
  return (
    <div className='space-x-2'>
                
        <Button variant="outline" onClick={(e) => { 
          e.preventDefault() 
          signIn("google", { callbackUrl: '/' })
        }}>
            <FcGoogle className="mr-2 h-5 w-5" /> Login with Google
        </Button>
        <Button variant="outline" onClick={(e) => { 
          e.preventDefault() 
          signIn("facebook", { callbackUrl: '/' })
          
        }}>
            <BiLogoFacebookCircle className="mr-2 h-5 w-5 text-blue-700" /> Login with Facebook
        </Button>
    </div>
  )
}
