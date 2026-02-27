import Image from 'next/image'
import React from 'react'

function DashboardHero() {
  return (
    <div className='relative w-full h-full rounded-2xl overflow-hidden hero-container'>
      <div
        className="absolute inset-0
        bg-[url('/herobanner2.png')]
        bg-cover
        bg-center"
      />
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/40" />

      <div className="relative z-10 w-full h-full">
        <h1 className="text-3xl font-bold text-gray-900 absolute top-10 left-10">
          Welcome back John Doe
        </h1>
        <button className='text-white px-8 py-3 rounded-4xl absolute bottom-6 right-10 border-none cursor-pointer shadow bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-colors'>Quick add event</button>
      </div>
    </div>
  )
}

export default DashboardHero