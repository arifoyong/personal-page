import Link from 'next/link'
import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import { IoDocument } from 'react-icons/io5'

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between bg-secondary px-4 py-4'>
      <Link href='/'>
        AO
      </Link>

      <div className='flex items-center gap-4'>
        <Link href='/resume' className='flex items-center'><IoDocument size='16' />Resume</Link>
        <Link href='https://github.com/arifoyong' className='flex items-center'><FaGithubSquare size='16' />Github</Link>
        <Link href='https://www.linkedin.com/in/arif-oyong/' className='flex items-center'><FaLinkedin size='16' />LinkedIn</Link>
      </div>
    </nav>
  )
}

export default NavBar