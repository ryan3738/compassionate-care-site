import Link from 'next/link';
import { bool } from 'prop-types';
import NavList from './nav-list';

BurgerMenu.propTypes = {
  open: bool.isRequired,
};

export default function BurgerMenu({ open }) {
  return (
    <>
      <nav className='styled-menu'>
        <NavList burgerMenuLink />
      </nav>
      <style jsx>{`
        .styled-menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--color-darker);
          height: 100vh;
          /* text-align: right; */
          padding: 2rem;
          position: absolute;
          top: 0;
          right: 0;
          transition: transform 0.2s ease-in-out;
        }

        @media (max-width: 460px) {
          width: 100%;
        }

        a {
          font-size: 2rem;
          text-transform: uppercase;
          padding: 2rem 0;
          font-weight: bold;
          letter-spacing: 0.5rem;
          /* color: var(--color-darker); */
          text-decoration: none;
          transition: color 0.3s linear;
        }
        @media (max-width: 460px) {
          font-size: 1.5rem;
          text-align: center;
        }

        a:hover {
          color: var(--color-darker);
        }
      `}</style>
      <style jsx>{`
        .styled-menu {
          /* hide and show menu */
          transform: ${open ? 'translateX(0)' : 'translateX(100%)'};
        }
      `}</style>
    </>
  );
}
