'use client'
import  Link from "next/link";
const Users =({users})=>{

    return (
      <div className='container mx-auto'>

        <div className='flex justify-center'>
        <ul>
  
    {
        users.map(user =>(
          <Link 
          href={ `users/${user.id}`}
          key={user.id}>
            <li
            onClick={()=>{console.log('holi');}}
            className='bg-gray-700 mb-2 p-7 rounded-xl flex justify-between items-center'>
  
        <div className='' >
  <h2 className='text-black font-bold p-8 ' >{user.id } {user.first_name} {user.last_name}
  </h2>
          <p>Email: {user.email}</p>
        </div>
          <img className=' rounded-full' src={user.avatar} alt="" />
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