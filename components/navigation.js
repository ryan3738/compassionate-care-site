import Link from 'next/link';
import Burger from './burger';
import BurgerMenu from './burger-menu';
import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../hooks/hooks';
import NavList from './nav-list';

export default function Navigation({ open, setOpen }) {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <>
      <div className='nav-bar'>
        <div className='burger'>
          {/* <div>
            <Link href='/'>
              <a className='title'>FRASERS</a>
            </Link>
          </div> */}
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
          </div>
          <BurgerMenu open={open} setOpen={setOpen} />
        </div>
        {/* <NavList></NavList> */}
        <nav className='nav-list'>
          <Link href='/'>
            <a className='title'>
              <div>COMPASSIONATE</div>
              <div className='subtitle'>CARE</div>
            </a>
          </Link>
          <NavList showOnLarge />

          {/* <Link href='/'>
            <a className='nav-link'>HOME</a>
          </Link>
          <Link href='/about'>
            <a className='nav-link'>ABOUT</a>
          </Link>
          <Link href='/about'>
            <a className='nav-link'>ABOUT</a>
          </Link>
          <Link href='/services'>
            <a className='nav-link'>SERVICES</a>
          </Link>
          <Link href='/contact'>
            <a className='nav-link'>CONTACT</a>
          </Link> */}
        </nav>
      </div>
      <style jsx>{`
        .title {
          padding: 0.5rem;
          font-size: 1.55rem;
          color: var(--color-white);
          text-align: left;
        }
        .subtitle {
          font-size: 1.38316rem;
        }
        .nav-bar {
          right: 0;
          left: 0;
          z-index: 999;
          position: fixed;
          background: var(--color-darker);
        }
        .nav-list {
          display: flex;
          justify-content: left;
          align-items: center;
          height: 4em;
          position: sticky;
          top: 0;
        }

        .nav-list a:hover {
          background: var(--color-light);
          color: var(--color-black);
        }

        .nav-links {
          display: none;
        }

        @media (min-width: 460px) {
          .burger {
            display: none;
          }
          .title {
            display: none;
          }
          .nav-links {
            padding: 1em;
            margin: auto;
            /* display: block; */
          }
        }
      `}</style>
    </>
  );
}
