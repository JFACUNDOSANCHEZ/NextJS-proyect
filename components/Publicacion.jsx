import React from 'react'

export default function Publicacion({data}) {
    
const mg=  Math.floor(Math.random() * 900) + 100;

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
<br />
<div className=' flex'>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyjdMBZVclfCempeD5wO1rWd_m8KkkorVMhil6DmW-nPv6XhKAgCfPC5cUfOLqJ8jaCq0&usqp=CAU" className='w-7 mr-4 ' alt="" />
<img src="https://cdn.icon-icons.com/icons2/1875/PNG/512/comment_120216.png" className=' w-9 ' alt="" />
<img src="https://e7.pngegg.com/pngimages/625/782/png-clipart-send-icon-x-plane-computer-mouse-aircraft-airplane-pointer-mouse-cursor-miscellaneous-angle-thumbnail.png" className=' w-8 ml-2 ' alt="" />
<img src="https://cdn-icons-png.flaticon.com/512/5662/5662990.png" className=' w-8 ml-auto' alt="" />
</div>
<br />
<p className=' font-bold text-blue-00'>

      {Math.floor(Math.random() * 900) + 100} Me gusta
</p>
<p className='text-gray-500 ml-2 mt-2'> Agregar comentario ...</p>
            </div>
        )
      })}
    </div>
  )
}
