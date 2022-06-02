import React, { useState, useRef, forwardRef } from 'react'
import Image from 'next/image'

import logo from '../../assets/logo.svg'
import theme from '../../assets/theme.svg'
import hamburger from '../../assets/hamburger.svg'
import { NavbarContainer, NavList, NavHero } from './styles'
import Sidebar from '../Sidebar'
import useOnClickOutside from '../../hooks/useOnClickOutside'

const Navbar = () => {
  const ref = useRef()

  const [open, setOpen] = useState(true)
  useOnClickOutside(ref, () => setOpen(false))

  return (
    <>
      <NavbarContainer>
        <NavHero>
          <Image src={logo} alt="Logo of project" width={28} height={40} />
          <div className="designation">
            <h4>Satyaprakash Ray</h4>
            <h5>Product Designer</h5>
          </div>
        </NavHero>
        <NavList>
          <ul>
            <li>
              <button>
                <Image
                  src={theme}
                  alt="Theme change button"
                  width={16}
                  height={16}
                />
              </button>
            </li>
            <li>
              <button>
                <p>Get Resume</p>
              </button>
            </li>
            <li>
              <button onClick={() => setOpen((c) => !c)}>
                <Image src={hamburger} alt="Hamburger Menu" />
              </button>
            </li>
          </ul>
        </NavList>
      </NavbarContainer>
      <Sidebar setOpen={setOpen} open={open} ref={ref} />
    </>
  )
}

export default Navbar
