import Link from 'next/link';

export default function NavList(props) {
  return (
    <>
      {/* <nav className='nav-list'> */}
      {console.log(props)}
      <Link href='/'>
        <a className={`nav-link ${'showOnLarge' in props && 'show-on-large'}`}>
          Home
        </a>
      </Link>
      <Link href='/about'>
        <a className={`nav-link ${'showOnLarge' in props && 'show-on-large'}`}>
          ABOUT
        </a>
      </Link>
      <Link href='/services'>
        <a className={`nav-link ${'showOnLarge' in props && 'show-on-large'}`}>
          SERVICES
        </a>
      </Link>
      <Link href='/rates'>
        <a className={`nav-link ${'showOnLarge' in props && 'show-on-large'}`}>
          Rates
        </a>
      </Link>
      <Link href='/contact'>
        <a className={`nav-link ${'showOnLarge' in props && 'show-on-large'}`}>
          Contact
        </a>
      </Link>
      {/* </nav> */}
      <style jsx>{`
        .nav-link {
          text-transform: uppercase;
          padding: 1em;
          margin: auto;
        }
      `}</style>
      <style jsx>{`
        .show-on-large {
          display: none;
        }

        @media (min-width: 460px) {
          .show-on-large {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
