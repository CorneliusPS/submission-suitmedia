import React from 'react'

export default function index() {
  return (
    <div className='mb-6'>
            <h2 className='mt-16 text-center font-bold text-xl'>OUR VALUES</h2>
        <div className='flex justify-center mt-4 text-center text-white'>
            <div className='w-64 mr-4 p-8 pb-8' style={{backgroundColor : "#EA7C6F", border : "2px solid #E15242"}}>
                <div className='flex justify-center'>
                    <div></div>
                    <div>
                        <img src='icons/lightbulb-o.png'  />
                    </div>
                    <div></div>
                </div>
                <h5 className='mb-4 mt-2'>INNOVATIVE</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='w-64 text-warp mr-4 p-8' style={{backgroundColor : "#6A996F", border : "2px solid #69996F"}}>
                                <div className='flex justify-center'>
                    <div></div>
                    <div>
                        <img src='icons/bank.png'  />
                    </div>
                    <div></div>
                </div>
                <h5 className='mb-4 mt-2'>LOYALTY</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='w-64 p-8' style={{backgroundColor : "#5696C2", border : "2px solid #2E70A0"}}>
                                <div className='flex justify-center'>
                    <div></div>
                    <div>
                        <img src='icons/balance-scale.png'  />
                    </div>
                    <div></div>
                </div>
                <h5 className='mb-4 mt-2'>RESPECT</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    </div>
  )
}
