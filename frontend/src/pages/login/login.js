import React, { useReducer,useContext } from 'react';
//import css 
import './login.css'
//import component
import AlertDismissibleExample from '../../Components/alertDismissibleExample';
//import context
import LoginContext from '../../context/loginContext'
//import Reducer
import AppReducer from './../../reducers/appReducer'
import InputLog from './fromComonent/inputLog';


const Login = props => {
    const [state, dispatch] = useReducer(AppReducer, {
        name: '',
        gender: ''
       
    })
    const loginContext=useContext(LoginContext)
    console.log(loginContext);
    
 

   
    return (
        <LoginContext.Provider value={{
            
            state,
            dispatch

        }}>
            <div>
                {
                   
                    // massage.map(item => {
                    //     return (
                    //         <AlertDismissibleExample /*name={name}  id={item.id} massage={item.massage}*/ />
                    //     )
                    // })
                }
                
                <InputLog  propsLogin={props} />


            </div>
        </LoginContext.Provider>

    )
}

export default Login