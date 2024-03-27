import React from 'react'

export default function Feed({data}) {
    return (
    <div className='mt-3  flex '>
      {
        data.map((user)=>{
          return (
            <div key={user.id} className='relative group rounded-full t-4 mx-3'>
                <img className='rounded-full w-16 transition duration-300 ease-in-out group-hover:scale-110' src={user.avatar} alt="" />
                <p className='text-black text-center'>{user.first_name}</p>
            </div>
        );
        })
      }
    </div>
  )
}
