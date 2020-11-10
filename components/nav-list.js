import Link from 'next/link';

export default function NavList() {
  return (
    <>
      {/* <nav className='nav-list'> */}
      <Link href='/#about'>
        <a className='nav-link'>ABOUT</a>
      </Link>
      <Link href='/#menu'>
        <a className='nav-link'>MENU</a>
      </Link>
      <Link href='/#contact'>
        <a className='nav-link'>CONTACT</a>
      </Link>
      {/* </nav> */}
      <style jsx>{`
        .nav-link {
          padding: 1em;
          margin: auto;
          display: none;
        }

        @media (min-width: 460px) {
          .burger {
            display: none;
          }
          .nav-link {
            padding: 1em;
            margin: auto;
            display: block;
          }
        }
      `}</style>
    </>
  );
}
