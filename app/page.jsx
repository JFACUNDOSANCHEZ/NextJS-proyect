import Nav from '@/components/Nav'
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
  <div className='w-[95%] ' >
<div  className='w-[40%] mx-auto'>
<Feed data={history}></Feed>
</div>
  <div className='flex w-screen ' >
  
    <div  className='w-[30%] '>
      <p>
        <Menu></Menu>

      </p>
    </div>
<div  className='w-[30%] '>
  <p>1</p>

</div>


<div  className='w-[30%]  bg-slate-50'>
  <Users users={users}  />
</div>
   </div>

  </div>
  
  
  )
}
export default  page