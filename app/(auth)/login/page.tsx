
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { bebas_neue } from '@/constans';
import Image from 'next/image';
import Link from 'next/link';
import SosmedButton from '@/components/SosmedButton';
import { Button } from '@/components/ui/button';


export default async function page() {
  
  return (
    <div className="flex items-center flex-col gap-7 sm:flex-row">
        <Image src="/img/login.svg" alt="register" priority width={500} height={500}/>
        <div>
            <h1 className={`${bebas_neue.className} text-4xl`}>Login To Your Account</h1>
            <form action="" method='post' className='my-7'>
              <div className='mb-4'>
                <Label htmlFor="Username">Username</Label>
                <Input type="text" id="Username" placeholder="Username" />
              </div>
              <div className='mb-4'>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" />
              </div>
              <div className="mb-10 flex items-center justify-between">
                <div className='flex items-center space-x-2'>  
                  <Checkbox id="terms2" disabled />
                  <label
                    htmlFor="terms2"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <Link href="" className='text-sm text-blue-600'>Forgot Password</Link>
              </div>
              <Button className="w-full" variant="primary">Login</Button>

              <span className='text-sm text-center block my-5 text-gray-500'>No Account yet? <Link href="/register" className='text-blue-600'>Register Now</Link></span>

              <span className='text-xs text-center block my-4 text-gray-500'>Or</span>
              
              <SosmedButton />
            </form>
        </div>
      
    </div>
  )
}
