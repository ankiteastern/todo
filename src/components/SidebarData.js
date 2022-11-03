import React from 'react'
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
        titile : 'Dashboard',
        path: '/',
        icon: <AiIcons.AiFillDashboard />,
        cName: 'nav-text'
    },
    {
        titile : 'Users',
        path: '/users',
        icon: <FiIcons.FiUsers />,
        cName: 'nav-text'
    },
    {
        titile : 'Chat',
        path: '/chat',
        icon: <AiIcons.AiOutlineWechat />,
        cName: 'nav-text'
    },
    {
        titile : 'Settings',
        path: '/settings',
        icon: <FiIcons.FiSettings />,
        cName: 'nav-text'
    },
    {
        titile : 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillProfile />,
        cName: 'nav-text'
    }
]