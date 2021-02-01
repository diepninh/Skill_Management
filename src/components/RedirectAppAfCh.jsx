import React from 'react';
import { Redirect } from 'react-router-dom';
import ChangePassAfLog from '../components/User/ChangePassAfLog.js';
 
export function RedirectAppAfCh(props) {
   if(props.statusLogin === 'user'){
     return(
       <Redirect to='/user'/>
     )
   }
   else{
     return(
       <ChangePassAfLog/>
     )
   }

}


 