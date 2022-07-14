import React from 'react'

export default function Footer() {
  return (
    <div className='h-14's style={{backgroundColor: '#333333'}}>
        <p className='text-white text-center pt-2 text-sm'>Copyright &#169; 2016. PT Company</p>
        <div className='flex justify-center'>
            <img className='w-4 mx-1' src='icons/facebook-official.png'></img>
            <img className='w-4 mx-1' src='icons/twitter.png'></img>
        </div>
    </div>
  )
}
