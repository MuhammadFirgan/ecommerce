import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'


export default function layout({ children } : {children: React.ReactNode}) {
  return (
    <>
    
    <Navbar />
    <main className="px-10 relative">
    {children}
    </main>
    <Footer />
    </>
  )
}
