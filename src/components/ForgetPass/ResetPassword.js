import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bunbu from '../../image/bunbu.png';
import { useSelector,useDispatch } from 'react-redux';
import * as actions from '../../Actions/index.js';
import axios from '../../axios.js';
import { useLocation } from 'react-router-dom';


function ResetPassword(props) {
  const [displayAlert, setDisplayAlert] = useState('none');
  const password = useSelector(state => state.SignIn.passReset);
  const passConf = useSelector( state => state.SignIn.passResetConfirm);
  const dispatch = useDispatch();
  const queryString = require('query-string');
  const headersUrl = queryString.parse(useLocation().search);
  const clickToSend = (event) => {
    event.preventDefault();
    
  }

  return (
    <div className='container' style={{ width: '40%' }}>
      <div style={{ display: displayAlert }}>
        <div className='alert alert-danger' role='alert'>
          change pass is not successful!
          <button type="button" className="close" onClick={() => setDisplayAlert('none')}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
      <div className='text-center'>
        <img src={bunbu} width={150} height={150} className='mt-4' />
        <h1 className='textStyle'>Bunbu</h1>
      </div>
      <div className='mt-5'>
        <form className='needs-validation' noValidate onSubmit={clickToSend}>
          <div className='form-group'>
            <label></label>
            <input type='password' className='form-control form-control-lg' placeholder='Enter your password'
              onChange={e => dispatch(actions.getPassReset(e.target.value))} />
          </div>
          <div className='form-group'>
            <label></label>
            <input type='password' className='form-control form-control-lg' placeholder='Confirm your password' 
            onChange={e => dispatch(actions.getPassResetConf(e.target.value))}/>
          </div>
          <button type='submit' className='btn btn-primary mt-5 button btn-lg btn-block'>Send</button>
        </form>
      </div>
    </div>

  );
}

export default ResetPassword;