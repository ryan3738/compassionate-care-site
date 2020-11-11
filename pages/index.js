import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import MenuSection from '../components/menu-section';
import Double from '../components/double';
import Contact from '../components/contact';
import Button from '../components/button';
import Hero from '../components/hero';
import InfoCards from '../components/info-cards';
import InfoCard from '../components/info-card';
import About from '../components/about';

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   // const menuData = await menu.json();
//   // const menu = await import('../public/data/menu.json');
//   // const menu = await import('../public/data/menu.json');
//   return {
//     props: {
//       allPostsData,
//       // menu,??
//     },
//   };
// }

export default function Home({ allPostsData, open, setOpen }) {
  return (
    <Layout home open={open} setOpen={setOpen}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <section id='about' className='container'>
        <h1 className='header hidden-header'>ABOUT</h1>

        {/* <Double category="special"/> */}
        {/* <Double category='about' /> */}
        {/* <Button buttonText='LEARN MORE ABOUT GINNY' buttonLink='/about' /> */}
        <About />
      </section>
      <section id='menu' className='container'>
        <h1 className='header hidden-header'>MENU</h1>
        <InfoCards header=''>
          <InfoCard header='Services'>
            <ul>
              <li>Swedish Massage</li>
              <li>Hot Rocks</li>
              <li>Reflexology</li>
              <li>Energy Work</li>
              <li>Injury Treatment</li>
              <li>Hydrotherapy</li>
              <li>Paraffin Wax</li>
              <li>And More</li>
            </ul>
          </InfoCard>
          <InfoCard header='body'>
            <ul>
              <li>Increase joint flexibility and range of motion</li>
              <li>Relax and loosen tight muscles</li>
              <li>Prevent injury and enhance athletic performance</li>
              <li>
                Enhance circulation to speed the recovery of tired and sore
                muscles
              </li>
              <li>Improve skin texture</li>
              <li>Diminish low back pain and fluid retention from pregnancy</li>
            </ul>
          </InfoCard>
          <InfoCard header='mind'>
            <ul>
              <li>Reduce the effects of stress</li>
              <li>Improve focus and the ability to concentrate</li>
              <li>Calm the nervous system</li>
              <li>
                Treat stress-related conditions such as fibromyalgia, tension
                headaches, and migraines
              </li>
            </ul>
          </InfoCard>
          <InfoCard header='ask about'>
            <ul>
              <li>Gift Certificates</li>
              <li>Scar Tissue Release</li>
              <li>Senior Rate</li>
              <li>Package Plans</li>
              <li>Referral Incentives</li>
            </ul>
          </InfoCard>
        </InfoCards>
        {/* <MenuSection category='services' /> */}
        {/* <Button buttonText='Learn More ==>' buttonLink='/services' /> */}
      </section>
      <section>{/* <GalleryGrid /> */}</section>
      <section id='contact'>
        <div className='header'>
          <h1 className={utilStyles.lightText}>CONTACT US</h1>
        </div>
        <Contact></Contact>
      </section>
      <style jsx>{`
        .header {
          padding: 5rem 0 0;
        }
        .hidden-header {
          padding: 0;
          visibility: hidden;
        }
        .container {
          width: 100vw;
          max-width: 1200px;
        }
        @media (min-width: 460px) {
        }
      `}</style>
    </Layout>
  );
}
