import Publicacion from '@/components/Publicacion'
import Users from '@/components/Users'
import React from 'react'
import Feed from '@/components/Feed'
import Menu from '@/components/Menu'

const fetchdata = async()=>{
const res = await fetch('https://reqres.in/api/users')
const data =await res.json()
return data

}



const page = async  () => {
  

  const data = await fetchdata()
  const users = data.data.slice(0, 5)
  const history = data.data.slice(1,10)
  console.log(users);
  return (
  <div className=' ' >
<div  className='lg:w-[40%]  w-full  mx-auto'>
<Feed data={history}></Feed>
</div>
<br />
<div className='flex w-full lg:w-screen'>
    <div className='w-[27%] hidden lg:block'>
      <p>
        <Menu></Menu>
      </p>
    </div>
    <div className='lg:w-[35%] w-full'>
      <Publicacion data={data}></Publicacion>
    
    </div>
    <div className='w-[28%] justify-end items-end  hidden lg:block'>
      <Users users={users} />
    </div>
  </div>

  </div>
  
  
  )
}
export default  page