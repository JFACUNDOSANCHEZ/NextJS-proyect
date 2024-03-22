import React from 'react'

export default function Feed({data}) {
  return (
    <div className='  flex flex-wrap'>
      {
        data.map((user)=>{
            return (
                <div key={user.id} className=' mx-3'>
                     <img className=' rounded-full   w-16' src={user.avatar} alt="" />
               <p className='text-black text-center'>{user.first_name} </p>
                </div>
            )
        })
      }
    </div>
  )
}
