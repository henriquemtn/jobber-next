import React from 'react'
import Navigation from './_components/navigation'

export default function Home() {
  return (
    <>
      <Navigation />
      <div className='min-h-screen flex justify-center items-center'>
        <h1 className='text-2xl'>Welcome to new app!</h1>
      </div>
    </>
  )
}
