import { Home, Payment } from '@mui/icons-material'
import { Tab ,Tabs} from '@mui/material'
import React, { useState } from 'react'
import HomePage from './HomePage'
import PaymentPage from './PaymentPage'
import Profile from './Profile'

export default function MyTabs() {
    var [pages,setPages]=useState(0)
  return (
    
    <>
     {pages===0&&<HomePage/>}
     {pages===1&&<PaymentPage/>}
     {pages===2&&<Profile/>}
    <Tabs className='bottom-tabs'>
        <Tab label="Home" onClick={e=>setPages(0)} />
        <Tab label="Payment" onClick={e=>setPages(1)} />
        <Tab label="Profile"  onClick={e=>setPages(2)}/>
    </Tabs>
    </>
  )
}
