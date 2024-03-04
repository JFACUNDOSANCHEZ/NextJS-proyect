import Nav from '@/components/Nav'
import Users from '@/components/Users'
import React from 'react'


const fetchdata = async()=>{
const res = await fetch('https://reqres.in/api/users')
const data =await res.json()
return data

}


const page = async  () => {
  

  const data = await fetchdata()
  const users = data.data
  console.log(users);
  return (
   <div  >

  <Users users={users}  />
   </div>

  
  
  )
}
export default  page