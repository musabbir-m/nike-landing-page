import { headerLogo } from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from "../constants"
import { useState } from "react"
import {HiMenuAlt4, HiX} from 'react-icons/hi'

const Nav = () => {
    const [toggle, setToggle]= useState(false)

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
                <img src={headerLogo} alt="Logo" 
                width={130}
                height={29}
                />
            </a>
            <ul className="flex-1 flex  justify-center items-center gap-16 max-lg:hidden">
                  {
                    navLinks.map((item)=>(
                        <li key={item.label}>
                            <a 
                            href={item.href}
                            className="font-montesrrat leading-normal text-lg text-slate-gray"
                            >
                            {item.label}    
                            </a>
                        </li>
                    ))
                  }
            </ul>

            {/* Responsive hamburger and nav */}
            <div className="hidden max-lg:block relative ">
                <HiMenuAlt4 
                onClick={()=>setToggle(true)}
                className="w-10 h-10 text-gray-500"
                />

                {
                    toggle && 
                    
                    <div 
                    className="fixed top-8 bottom-0 right-0  w-2/3 bg-slate-200"
                    > 
                        <div className="flex justify-end px-14 text-gray-500">
                            <HiX 
                            className="w-10 h-10"
                            onClick={()=> setToggle(false)}
                            />
                        </div>

                        <ul className=" flex flex-col justify-start gap-3 px-5 ">
                        {
                            navLinks.map((item)=>(
                                <li key={item.label}>
                                    <a 
                                    href={item.href}
                                    className="font-montesrrat text-lg "
                                    >
                                    {item.label}    
                                    </a>
                                </li>
                            ))
                        }
                         </ul>

                    </div>
                }
            </div>
        </nav>
    </header>
  )
}

export default Nav