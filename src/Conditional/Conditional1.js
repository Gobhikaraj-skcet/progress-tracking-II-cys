
import React,{ useState } from 'react'
import SignInSide from './SignInSide.js'
import SignUp from './SignUp.js'
const Conditional = () => {
    const [state,setState] = useState({isLogged:true});
        return(
            state.isLogged?<SignInSide/>:<SignUp/>
        )
};
export default Conditional;