import React from 'react'
import Header from './Header'
import { NavLink } from 'react-router-dom'

import {IoHome} from "react-icons/io5"
import { isActiveStyles, isNotActiveStyles } from '../utils/styles'

const Dashboard = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center bg-black'>
      <Header />
        <div className='w-[60%] my-2 p-4 flex items-center justify-evenly'>
          <NavLink to={"/dashboard/home"}className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles }>
          <IoHome className='text-2xl text-textColor'/></NavLink>
          <NavLink to={"/dashboard/user"} className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles }>Users</NavLink>

        </div>
    </div>
  )
}

export default Dashboard
