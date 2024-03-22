'use client'
import  Link from "next/link";
const Users =({users})=>{

    return (
      <div className=' mx-auto'>
<h2 className="text-gray-500  mx-16">Sugerencias para ti</h2>
        <div className='flex justify-center'>
        <ul>
  
    {
        users.map(user =>(
          <Link 
          href={ `users/${user.id}`}
          key={user.id}>
            <li
            onClick={()=>{console.log('holi');}}
            className='mb-2 p-4 rounded-xl flex justify-between items-center'>
  
          <img className=' rounded-full w-16' src={user.avatar} alt="" />
        <div className='p-4' >
  <p className='text-black font-bold p-2 text-1xl ' >{user.first_name} {user.last_name}
  </p>
          <p className="text-black text-1xl">Sugerencia para ti</p>
        </div>
        <button className="text-blue-400 text-1xl">Seguir</button>
        </li>
    </Link>
      ) )
    }
    </ul>
  </div>
  
    </div>
  
  )
}

export default  Users