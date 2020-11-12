import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Hero from '../components/hero';
import Image from 'next/image';
import Navigation from '../components/navigation';
import Button from '../components/button';
import NavList from './nav-list';

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
        <Navigation open={open} setOpen={setOpen} />
        <div className='nav-spacer'></div>
      </header>
      <main className={styles.main}>{children}</main>
      <div className='welcome-logo'>
        <Image
          src='/images/celtic-compassion-symbol.png'
          alt='Celtic compassion symbol'
          width='100px'
          height='100x'
        />
      </div>
      {!home && <Button buttonText='<== HOME' buttonLink='/'></Button>}
      <footer className={styles.footer}>
        <div>
          <span>© 2020 Compassionate Care |</span>
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
        </div>
        {/* <div className='scroll-down'>
          <h6>SCROLL DOWN</h6>
        </div> */}
        <nav className='nav-list'>
          <NavList />
        </nav>
      </footer>
      <style jsx>{`
        .welcome-logo {
          grid-area: l;
          max-width: 100%;
          max-height: auto;
          margin: auto;
          display: block;
          padding: 2rem;
        }
        .light-text {
          color: var(--color-white);
        }

        .no-wrap {
          white-space: nowrap;
        }

        .nav-spacer {
          height: 4em;
        }
        .nav-list {
          display: flex;
          flex-wrap: wrap;
          /* display: grid;
          grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
          grid-template-rows: repeat(auto-fit, 4em);
          justify-items: center; */
          /* padding: 0% 2%; */
          /* background: var(--color-darker); */
          /* position: sticky; */
          /* top: 0; */
        }
      `}</style>
    </div>
  );
}
