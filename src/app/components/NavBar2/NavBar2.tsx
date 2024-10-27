import Link from 'next/link'
import React from 'react'

const NavBar2 = () => {
  return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
        <details>
          <summary className='text-lg'>
            <Link href="/corals">Beans</Link>
          </summary>
          <ul className="p-2  z-10 flex-col">
            <li><a>Roasted</a></li>
            <li><a>Normal</a></li>
            <li><a>Premium</a></li>
          </ul>
        </details>
      </li>
      <li><a className='text-lg'>About</a></li>

      <li><a className='text-lg'>Story</a></li>

      <li><a  className='text-lg'>Special Offers</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>
  )
}

export default NavBar2
