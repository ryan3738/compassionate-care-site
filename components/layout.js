import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Hero from '../components/hero';
import Image from 'next/image';
import Navigation from '../components/navigation';
import Button from '../components/button';

const name = 'Compassionate Care';
export const siteTitle = 'Compassionate Care | Massage | Bellingham';

export default function Layout({ children, home, open, setOpen }) {
  return (
    <div className={styles.container}>
      <Head>
        <html lang='en' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Massage for seniors and low income in Bellingham, Washington | Techniques that best serve the needs of the individual to support a lifetime of health maintenance and harmony.'
        />
        <meta
          name='keywords'
          content='massage, senior, geriatric, low, income, bellingham'
        />
        {/* <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' /> */}
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Navigation open={open} setOpen={setOpen} />
            <Hero />
          </>
        ) : (
          <>
            <Navigation open={open} setOpen={setOpen} />
            <div className='nav-spacer'></div>
            <Link href='/'>
              <a>
                <Image
                  className='link'
                  src='/images/ginny-redpath-square.jpg'
                  alt='Picture of Massage Therapist Ginny Redpath'
                  height='240'
                  width='240'
                  // layout='fixed'
                  // unsized='true'
                />
              </a>
            </Link>
          </>
        )}
      </header>
      <main className={styles.main}>{children}</main>
      {!home && <Button buttonText='<== HOME' buttonLink='/'></Button>}
      <footer className={styles.footer}>
        <span className='no-wrap'>© 2020 Frasers Gourmet Hideaway |</span>
        <span className='no-wrap'>
          &nbsp;Built by:&nbsp;
          <a
            className='light-text'
            href='https://github.com/ryan3738'
            target='_blank'
            rel='noreferrer noopener'
          >
            Ryan Fraser
          </a>
        </span>
        <nav className='nav-list'>
          <Link href='/'>
            <a className='nav-link'>HOME</a>
          </Link>
          <Link href='/about'>
            <a className='nav-link'>ABOUT</a>
          </Link>
          <Link href='/services'>
            <a className='nav-link'>SERVICES</a>
          </Link>
          <Link href='/rates'>
            <a className='nav-link'>RATES</a>
          </Link>
          <Link href='/contact'>
            <a className='nav-link'>CONTACT</a>
          </Link>
        </nav>
      </footer>
      <style jsx>{`
        .light-text {
          color: var(--color-white);
        }

        .no-wrap {
          white-space: nowrap;
        }

        .nav-spacer {
          height: 5em;
        }
        .nav-link {
          /* font-size: 0.5rem; */
          padding: 1em;
          margin: auto;
          text-decoration: underline;
          white-space: nowrap;
        }
        .nav-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
          grid-template-rows: 4em;
          justify-items: center;
          padding: 0% 2%;
          background: var(--color-darker);
          position: sticky;
          top: 0;
        }
      `}</style>
    </div>
  );
}
