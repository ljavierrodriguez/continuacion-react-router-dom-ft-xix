import React from 'react'
import { Outlet } from 'react-router-dom'
import SubMenu from '../components/SubMenu'

const About = () => {
  return (
    <>
    <div>About</div>
    <SubMenu />
    <Outlet />
    </>
  )
}

export default About