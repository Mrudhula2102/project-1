import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'

const Guestuser = (props) => {
  return (
    <div align="center">
      <div>
    <Topbar xxx={props.checkLogout}/>
    <Sidebar/></div>
      <h2>Guestuser</h2>
    </div>
  )
}

export default Guestuser
