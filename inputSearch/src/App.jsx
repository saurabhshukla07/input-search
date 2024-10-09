import { useState } from 'react'
import './App.css'

function App() {
const [query,setQuery]=useState('');
const [email,setEmail]=useState('');

  const users = [{
    name:'Ritik',
    email:'ritik@gmail.com'
  },
{
  name:'Saru',
  email:'saruchan@gmail.com'
}]
  const handleInput = (event)=>{
   const input = event.target.value.toLowerCase();
   setQuery(input)
  
  const user = users.find((user)=>
    user.name.toLowerCase() ===input
  )

  if(user){setEmail(user.email)}
  else{
    setEmail("")
  }
}

  return (
    <><h1>Search bar</h1>
      <input type="text" value={query} placeholder='write your name here' onChange={handleInput} />
     
      {/* {console.log(email)} */}
      {email && <p>Email: {email}</p>}
        
      
    </>
  )
}

export default App
