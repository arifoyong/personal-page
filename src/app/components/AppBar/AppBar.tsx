"use client"

import React, { useState } from 'react'
import Link from 'next/link'


const AppBar = () =>  {
  const [isOpen, setIsOpen] = useState(true)

  return (
  <nav className="flex items-center justify-between flex-wrap py-4 px-6 shadow-md">
    <div className="font-extrabold text-teal-800">
      <Link href="/">
        AO
      </Link>
    </div>

    <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
    </div>

    <div className={`w-full md:w-auto ${isOpen ? "block pt-2" : "hidden"}`}
     >
       <div className="flex flex-col md:flex-row md:gap-4 gap-2">
        <Link href="/"
            className="hover:text-blue-800">
              Resume
        </Link>
        <Link href="/personal_project"
            className="hover:text-blue-800">
          Personal Project
        </Link>
       </div>
     </div>
  </nav>
)}

export default AppBar