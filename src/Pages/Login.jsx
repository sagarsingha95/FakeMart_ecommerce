import React, { useState } from 'react'
import UserSignUp from './UserSignUp';
import UserLogin from '../components/UserLogin'


const Login = () => {
    const [loged,setLoged] = useState(true);

    if(!loged) return(
        <>
        <UserSignUp setLoged={setLoged}/>
        klmk
        </>
    )
  return (
   <>
   <UserLogin setLoged={setLoged} />
   </>
  )
}

export default Login