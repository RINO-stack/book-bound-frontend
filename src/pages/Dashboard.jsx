import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar'
React

const Dashboard = () => {
  return (
    <div className='flex-1 sm:ml-64 p-6'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard
