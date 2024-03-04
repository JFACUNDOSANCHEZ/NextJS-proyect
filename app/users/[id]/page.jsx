

const fetchdata = async(id)=>{
const res = await fetch(`https://reqres.in/api/users/${id}`)
const data = await res.json()
console.log(data);
return data
}

const userPage= async(id)=>{
    
    
    const user = id.params.id
    console.log(user);
    const data = await fetchdata(user)
 const userData = data.data



return(
<div className="bg-gray-700 rounded-xl  justify-center p-10">
    <img src={userData.avatar}
    className=" m-auto my-4 rounded-full"
     alt="" />
    <h3 className="text-white font-bold text-3xl p-4">
Name: {userData.first_name} {userData.last_name}    </h3>
    <p className=" p-6 text-2xl font-bold">Email: {userData.email}</p>
</div>

)

}
export default userPage