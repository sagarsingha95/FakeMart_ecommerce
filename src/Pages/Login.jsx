import React, { useState } from 'react'
import UserSignUp from '../components/UserSignUp'
import UserLogin from '../components/UserLogin'


const Login = () => {
    const [loged,setLoged] = useState(true);

    if(!loged) return(
        <>
        <UserSignUp setLoged={setLoged}/>
        </>
    )
  return (
   <>
   <UserLogin setLoged={setLoged} />
   </>
  )
}

export default Login