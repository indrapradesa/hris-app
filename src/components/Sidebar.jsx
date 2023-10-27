import React, { useState } from "react";
import logo from "../assets/logo-white.png";
import control from "../assets/control.png";
import favicon from "../assets/favicon.png";
import { MdInsertChart } from 'react-icons/md';
import { FaUsers, FaUserGraduate, FaHandshake } from 'react-icons/fa';
import { TbLicense } from 'react-icons/tb';

const Sidebar = () => {

    const [open, setOpen] = useState(true);
    const Menus = [
        { title: "Dashboard", icon: <MdInsertChart />, path: '/dashboard' },
        { title: "Employee", icon: <FaUsers />, gap: true, path: '/employee'},
        { title: "Internship", icon: <FaUserGraduate /> , path:'/internship'},
        { title: "Mitra Kampus / SMK", icon: <FaHandshake />, path:'/mitra-kampus' },
        { title: "Kontrak", icon: <TbLicense />, path:'/kontrak' },
    ]

    return (
        // <>
        <div className={`${open ? "w-72" : "w-20"} pt-8 duration-300 h-screen bg-sidebar relative`}>
            <img src={control} alt="control" className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-black ${!open && "rotate-180"}`} 
            onClick={() => setOpen(!open)} />
        <div className={`${open ? '' : 'hidden w-12'}`}>
            <img src={logo} className={`cursor-pointer duration-500 w-44 pb-2 mx-5`} alt="Logo" />
        </div>
        <div className={`${!open ? '' : 'hidden'}`}>
            <img src={favicon} alt="lite" className={`cursor-pointer duration-500 w-10 mx-3 ${!open && "rotate-[360deg]"}`} />
        </div>
            <ul className="pt-6">
            {Menus.map((menu, index) => (
                <li key={index} className={`px-6 py-3 text-white flex items-center gap-x-4 cursor-pointer  hover:bg-hover hover:text-white hover:rounded-sm ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-menubar"}`}>
                <div className={`${!open && 'text-[19px]'}`}>
                    {menu.icon}
                </div>
                <span className={`${!open && 'hidden'} origin-left duration-200 text-sm`}>{menu.title}</span>
                </li>
            ))}
            </ul>
        </div>
        // </>
    );
}

export default Sidebar;