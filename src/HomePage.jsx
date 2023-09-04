import { SaveOutlined } from '@mui/icons-material'
import { SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'

export default function HomePage() {
    var icons=[
        {icon:<SaveOutlined/> ,name:"Save"}
    ]
  return (
    <>
       <SpeedDial ariaLabel='my-s'>
           <SpeedDialAction icon={<SaveOutlined/>}  tooltipTitle="Save"> </SpeedDialAction>

           <SpeedDialAction icon={<SaveOutlined/>}  tooltipTitle="Save"> </SpeedDialAction>

           <SpeedDialAction icon={<SaveOutlined/>}  tooltipTitle="Save"> </SpeedDialAction>

           <SpeedDialAction icon={<SaveOutlined/>}  tooltipTitle="Save"> </SpeedDialAction>

       </SpeedDial>x
    </>
  )
}
