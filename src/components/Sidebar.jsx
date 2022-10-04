import {AnimatePresence, motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse  } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from  "react"
import NavPages from './NavPages';
import "../css/Sidebar.css"

const routes =[{
    path : '/',
    name : 'Home',
    icon: <FaHome />
},{
    path: "/users",
    name: "Users",
    icon: <FaUser />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <BiAnalyse />,
  },
  {
    path: "/file-manager",
    name: "File Manager",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },

]


const Sidebar = () => {

const [isOpen, setIsOpen] = useState(false)
const toggle = () => setIsOpen(!isOpen);

const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.5,
    },
  },
};

  return (
    <>
    <div className='main-container'>
      
        <motion.div animate={{width: isOpen ? "200px" : "40px",
      transition: {
        duration: 0.5,
        type: "spring",
        damping: 10,
      }}} className="sidebar" >

          <div className="top_section">
          
          <AnimatePresence>
{isOpen && ( <motion.h1 
variants={showAnimation}
initial="hidden"
animate="show"
exit="hidden"
className="logo">Company Name
</motion.h1>)}</AnimatePresence>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
          </div>

           <section className="routes" >
{routes.map((route)=>(
    <NavLink className='link' activeclassname="active" to={route.path} key={route.name}>
        <div className="icon">{route.icon}</div>
        <AnimatePresence>
                    {isOpen && (
                      <motion.div
                      variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
    </NavLink>
) )}

           </section>
        </motion.div>
    </div>
    </>
  )
}

export default Sidebar