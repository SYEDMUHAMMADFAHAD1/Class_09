
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='w-full'>
            <div className="bg-black text-center p-3">
                 <p className=" text-white text-center text-xs lg:text-base font-serif hover:text-lime-400">Homework DONE</p>
                 <p className="lg:text-base text-xs font-serif text-white">Slot: Tuesday 7:00 p.m to 10:00 p.m</p>

                 <p className="text-white text-center text-md bg-black">Made by:
                 <Link href="https://www.linkedin.com/in/syed-muhammad-fahad-64a01b2aa/" target="_blank"
                 className="hover:text-blue-400 cursor-pointer font-extrabold font-serif"> SYED MUHAMMAD FAHAD</Link>
                </p>
            </div> 
        </div>
    )
}

export default Footer