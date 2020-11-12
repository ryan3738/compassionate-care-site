import Link from 'next/link';

export default function NavList(props) {
  return (
    <>
      <Link href='/'>
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          Home
        </a>
      </Link>
      <Link href='/#about'>
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          ABOUT
        </a>
      </Link>
      <Link href='/#services'>
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          SERVICES
        </a>
      </Link>
      <Link href='/#rates'>
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          Rates
        </a>
      </Link>
      <Link href='/#contact'>
        <a
          className={`nav-link ${'showOnLarge' in props && 'show-on-large'} ${
            'burgerMenuLink' in props && 'burger-menu-link'
          }`}
        >
          Contact
        </a>
      </Link>
      <style jsx>{`
        .nav-link {
          text-transform: uppercase;
          padding: 1em;
          margin: auto;
        }
      `}</style>
      <style jsx>{`
        .burger-menu-link {
          margin: 0;
        }
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
