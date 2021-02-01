import { combineReducers } from 'redux';
import SignIn from './SignIn.js';
import Accounts from './Accounts.js';
import User from './User.js'

const myReducer = combineReducers({
  SignIn : SignIn,
  Accounts : Accounts,
  User : User,
});
export default myReducer;