import React from 'react'

// components
import TopTitle from '../top-title'

// TODO: implement followers component
export default function FollowersComponent() {
  return (
    <div className='bg-white dark:bg-[#1F1E22] w-full rounded-md shadow-lg p-4 mr-4'>
        <TopTitle label='Seguidores:' />
        <p>Seguidores</p>
    </div>
  )
}
