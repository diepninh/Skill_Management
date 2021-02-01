import React, { useReducer } from 'react';
import Admin from './components/Admin/Admin.js';
import ListStaffs from './components/Admin/Accounts/ListStaffs.js';
import SkillUser from './components/User/SkillUser/SkillUser.js';
import ProjectUser from './components/User/ProjectUser/ProjectUser.js';
import Profile from './components/User/Profile/Profile.js';
import AddAnAccount from './components/Admin/Accounts/AddAnAccount.js';
import Require from './components/Admin/Skills/Require.js';
import SkillList from './components/Admin/Skills/SkillList.js'
import Projects from './components/Admin/Projects/Projects.js';
import Hr from './components/Hr/Hr.js';
import AccountHr from './components/Hr/AccountHr.js';
import SkillListHr from './components/Hr/SkillHr/SkillList.js';
import User from './components/User/User.js';
import ProfileAdmin from './components/Admin/Profile/ProfileAdmin.js';
import RequireHr from './components/Hr/SkillHr/Require.js';
import ProfileHR from './components/Hr/Profile/ProfileHR.js';


const routes = [
  {
    path: '/admin',
    exact: false,
    main: () => <Admin/>
  },
  {
    path: '/accounts',
    exact: false,
    main: () => <ListStaffs/>
  },
  {
    path: '/skilluser',
    exact: false,
    main: () => <SkillUser/>
  },
  {
    path: '/projectuser',
    exact: false,
    main: () => <ProjectUser/>
  },
  {
    path: '/profile',
    exact: false,
    main: () =><Profile/>
  },
  {
    path: '/listStaff',
    exact: false,
    main: () => <ListStaffs/>
  },
  {
    path: '/addanaccount',
    exact: false,
    main: () => <AddAnAccount/>
  },
  {
    path: '/skills',
    exact: false,
    main: () => <SkillList/>
  },
  {
    path: '/skillStaff',
    exact: false,
    main: () => <RequireHr/>
  },
  {
    path: '/skillListHr',
    exact: true,
    main: () => <SkillListHr/>
  },
  {
    path: '/skillList',
    exact: false,
    main: () => <SkillList/>
  },
  {
    path: '/project',
    exact: false,
    main: () => <Projects/>
  },
  {
    path: '/hr',
    exact: false,
    main: () => <Hr/>
  },
  {
    path: '/accountHr',
    exact: false,
    main: () => <AccountHr/>
  },
  {
    path: '/skillHr',
    exact: false,
    main: () => <SkillListHr/>
  },
  {
    path: '/skillListHr',
    exact: false,
    main: () => <SkillListHr/>
  },
  {
    path: '/user',
    exact: false,
    main: () => <User/>
  },
  {
    path: '/profileAdmin',
    exact: false,
    main: () => <ProfileAdmin/>
  },
  {
    path: '/requirements',
    exact: false,
    main: () => <Require/>
  },
  {
    path: '/profileHr',
    exact: false,
    main: () => <ProfileHR/>
  }
];
export default routes;