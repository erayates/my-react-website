import { animate, MotionConfig } from 'framer-motion'
import {useEffect, useState,memo} from 'react'

import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Header() {
    const [enable,setEnable] = useState(false)
    const [toggleMenu,setToggleMenu] = useState(false)

    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    window.addEventListener("resize",() => window.innerWidth >= 768 ? setEnable(false) : setEnable(true))
    useEffect(() => {
        if(window.innerWidth <= 768){
            setEnable(true)
        }
      
    },[])
    return(
        <nav className={enable && toggleMenu ? "bg-transparent px-6 sm:px-4 py-4 dark:bg-gray-800" : "bg-[#121212] px-6 sm:px-4 py-4 dark:bg-gray-800"}>
            <div className="flex justify-between md:justify-center">
                <h1 className="site__title text-3xl font-bold md:text-5xl md:font-bold">eray ates</h1>
                {enable && <div className="py-2 space-y-2 cursor-pointer w-6 h-6 bg-white mt-1 transition hover:rotate-45 motion-reduce:transition-none motion-reduce:hover:transform-none" onClick={handleMenu}>
                         </div>
                }
            </div>
           {enable ? <div className={toggleMenu ? "w-full block absolute md:relative z-10 bg-white left-0 mt-3 md:mt-0" : "hidden"}>
                <ul className="ml-5 md:ml-0 md:flex md:justify-center md:mt-5">
                    <li className="text-lg font-semibold block p-2">
                        <Link to="/" className='text-slate-700 hover:text-slate-700/50 focus:text-slate-700/50 hover:ml-3 focus:ml-3 hover:md:ml-0'>home.</Link>
                    </li>
                    <li className="text-lg font-semibold block p-2 text-slate-300/70">
                        <Link to="/about" className='text-slate-700 hover:text-slate-700/50 focus:text-slate-700/50 hover:ml-3 focus:ml-3 hover:md:ml-0'>about me.</Link>
                    </li>
                    <li className="text-lg font-semibold block p-2 text-slate-300/70">
                        <Link to="/blog" className='text-slate-700 hover:text-slate-700/50 focus:text-slate-700/50 hover:ml-3 focus:ml-3 hover:md:ml-0'>blog.</Link>
                    </li>
                    <li className="text-lg font-semibold block p-2 text-slate-300/70">
                        <Link to="/portfolio" className='text-slate-700 hover:text-slate-700/50 focus:text-slate-700/50 hover:ml-3 focus:ml-3 hover:md:ml-0'>portfolio.</Link>
                    </li>
                    <li className="text-lg font-semibold block p-2 text-slate-300/70">
                        <Link to="/contact" className='text-slate-700 hover:text-slate-700/50 focus:text-slate-700/50 hover:ml-3 focus:ml-3 hover:md:ml-0'>contact.</Link>
                    </li>
                </ul>
            </div>
        : <div className="w-full block absolute md:relative z-10 bg-[#121212] left-0 mt-3 md:mt-0">
        <ul className="ml-5 md:ml-0 md:flex md:justify-center md:mt-5">
            <li className="text-lg font-semibold block p-2">
                <Link to="/" className='text-slate-200/50 hover:text-white focus:text-white hover:ml-3 focus:ml-3 hover:md:ml-0'>home.</Link>
            </li>
            <li className="text-lg font-semibold block p-2 text-slate-300/70">
                <Link to="/about" className='text-slate-200/50 hover:text-white focus:text-white hover:ml-3 focus:ml-3 hover:md:ml-0'>about me.</Link>
            </li>
            <li className="text-lg font-semibold block p-2 text-slate-300/70">
                <Link to="/blog" className='text-slate-200/50 hover:text-white focus:text-white hover:ml-3 focus:ml-3 hover:md:ml-0'>blog.</Link>
            </li>
            <li className="text-lg font-semibold block p-2 text-slate-300/70">
                <Link to="/portfolio" className='text-slate-200/50 hover:text-white focus:text-white hover:ml-3 focus:ml-3 hover:md:ml-0'>portfolio.</Link>
            </li>
            <li className="text-lg font-semibold block p-2 text-slate-300/70">
                <Link to="/contact" className='text-slate-200/50 hover:text-white focus:text-white hover:ml-3 focus:ml-3 hover:md:ml-0'>contact.</Link>
            </li>
        </ul>
    </div>}
        </nav>
    )
}

export default memo(Header);