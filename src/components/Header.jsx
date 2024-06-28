import React, {useState} from 'react'
import {Logo} from '../assets/img/index'
import { NavLink, useNavigate } from 'react-router-dom'
import {isActiveStyles , isNotActiveStyles , bgColors} from '../utils/styles'
import {FaCrown} from 'react-icons/fa'
import {useStateValue} from '../context/StateProvider'
import { getAuth } from 'firebase/auth'
import { app } from '../config/firebase.config'
import { motion } from 'framer-motion'

function Header() {

  const [{user}, dispatch] = useStateValue()
  const [isMenu, setIsMenu] = useState(false)
  const navigate = useNavigate()

  const logOut = () =>{
    const firebaseAuth = getAuth(app);
    firebaseAuth.signOut().then(()=>{
      window.localStorage.setItem("auth" , "false")
    }).catch((e)=>{console.log(e)})

    navigate('/login', {replace: true})

  }
return (
  <header className='flex items-center w-full p-4 md:py-2 md:px-6'>
    <NavLink to={"/"}>
      <img src={Logo} alt='Logo' className='w-44 '/>
    </NavLink>

    <ul className="flex items-center justify-center ml-7">
        <li className="mx-5 text-lg  text-white"><NavLink to={'/home'} className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles}>Home</NavLink></li>
        <li className="mx-5 text-lg  text-white"><NavLink to={'/info'} className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles}>Info</NavLink></li>
        <li className="mx-5 text-lg  text-white"><NavLink to={'/about us'} className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles}>About US</NavLink></li>
        <li className="mx-5 text-lg  text-white"><NavLink to={'/contact'} className={({isActive}) => isActive ? isActiveStyles : isNotActiveStyles}>Contact</NavLink></li>
      </ul>




<div 
className="flex items-center ml-auto cursor-pointer gap-2 relative"
onMouseEnter={() => setIsMenu(true)}
onMouseLeave={() => setIsMenu(false)}
>
  <img src={user?.user?.imageURL} className= 'w-12 h-12 min-w-[44px] object-cover rounded-full shadow-lg' alt="" referrerPolicy='no-reffer' />
  <div className='flex flex-col text-white'>
    <p className='text-lg hover:font-bold'>{user?.user?.name}</p>
    <p className='flex items-center gap-2 text-s font-normal'> Premuim Member<FaCrown className='text-sm -ml -1 text-yellow-500'/></p>
   
    {isMenu && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute z-10 top-12 right-0 w-275 p-4 gap-4 bg-card shadow-lg rounded-lg backdrop-blur-sm flex flex-col"
          >
            <NavLink to={"/userProfile"}>
              <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                Profile
              </p>
            </NavLink>
            <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
              My Favourites
            </p>

            <hr />
            {user?.user.role === "admin" && (
              <>
                <NavLink to={"/dashboard/home"}>
                  <p className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out">
                    Dashboard
                  </p>
                </NavLink>
                <hr />
              </>
            )}
            <p
              className="text-base text-textColor hover:font-semibold duration-150 transition-all ease-in-out"
              onClick={logOut}
            >
              Sign out
            </p>
          </motion.div>
        )}
    </div>
    </div>
</header>
  )
}

export default Header
