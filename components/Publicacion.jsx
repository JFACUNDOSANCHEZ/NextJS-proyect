import React from 'react'

export default function Publicacion({data}) {
    console.log(`aca esta el coso de data` + data);
  return (
    <div>
      {data.data.map((p)=> {
        return (
            <div key={p.id}  >
                <div className='flex mb-5 mt-4 items-center'>
                <img src={p.avatar} className='  w-10 rounded-full' alt="" /> 
                <p className='m-3'> {p.first_name} {p.last_name} </p>
                </div>
<img src={p.avatar} alt="" className='w-full' />
            </div>
        )
      })}
    </div>
  )
}
