import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


export default function layout({ children } : {children: React.ReactNode}) {
  return (
    <main className="flex justify-center items-center h-screen">
    {children}
    </main>
  )
}
