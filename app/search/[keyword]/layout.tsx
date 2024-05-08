import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

export default function layout({ children } : {children: React.ReactNode}) {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <div className='hidden lg:block'>
          <Sidebar />
        </div>
        <section className='flex min-h-screen max-md:pb-14 '>

          {children}
        </section>
      </div>
      <Footer />
    </main>
  )
}
