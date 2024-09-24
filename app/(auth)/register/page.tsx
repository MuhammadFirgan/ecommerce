
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { bebas_neue } from '@/constans';
import Image from 'next/image';
import Link from 'next/link';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';
import SosmedButton from '@/components/SosmedButton';

export default function page() {

  return (
    <div className="flex items-center flex-col gap-7 px-10 sm:px-0 lg:flex-row">
        <Image src="/img/register.svg" alt="register" width={500} height={500}/>
        <div>
            <h1 className={`${bebas_neue.className} text-4xl`}>Create New Account</h1>
            <form action="" className='my-7'>
              <div className='mb-4 flex gap-3'>
                <div>
                  <Label htmlFor="first_name">First Name</Label>
                  <Input type="text" id="first_name" placeholder="First Name" />
                </div>
                <div>
                  <Label htmlFor="last_name">Last Name</Label>
                  <Input type="text" id="last_name" placeholder="Last Name" />
                </div>
              </div>
              <div className='mb-4'>
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className='mb-4'>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" />
              </div>
              <div className='mb-4'>
                <Label htmlFor="repeat_password">Repeat Password</Label>
                <Input type="password" id="repeat_password" placeholder="Repeat Password" />
              </div>
              
              <Button className="w-full" variant="primary">Register</Button>

              <span className='text-sm text-center block my-5 text-gray-500'>Already Registered? <Link href="/login" className='text-blue-600'>Login Now</Link></span>

              <span className='text-xs text-center block my-4 text-gray-500'>Or</span>
              <div className="flex justify-center">

                <SosmedButton />
              </div>
            </form>
        </div>
      
    </div>
  )
}
