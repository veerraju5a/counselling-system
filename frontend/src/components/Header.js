import React, {useState} from 'react'
import {AppBar, Tabs, Tab, Toolbar, Typography} from '@mui/material'
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: '#232F3D'}} position='sticky'>
        <Toolbar>
        <AssuredWorkloadIcon/>
        <Typography>Counselling and Visitor Management System</Typography>
        <Tabs textColor='inherit' indicatorColor='primary' 
        sx={{ml:"auto"}} value={value} 
        onChange={(e,val)=>setValue(val)}>
          <Tab LinkComponent={NavLink} to='/signup' label='SignUp'/>
          <Tab LinkComponent={NavLink} to='/signin' label='SignIn'/>
          <Tab LinkComponent={NavLink} to='/counsellor' label='Add Counsellor'/>
          <Tab LinkComponent={NavLink} to='/visitor' label='Add Visitor'/>
          <Tab LinkComponent={NavLink} to='/fetchregistrations' label='Registrations'/>
          <Tab LinkComponent={NavLink} to='/appointment' label='Appointment'/>
        </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header