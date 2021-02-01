import React from 'react';
import { Redirect } from 'react-router-dom';
import ResetPassword  from '../components/ForgetPass/ResetPassword.js';
 
export function RedirectAppReset(props) {
   if(props.statusLogin === 'login'){
     return(
       <Redirect to='/'/>
     )
   }
   else{
     return(
       <ResetPassword/>
     )
   }
}


 