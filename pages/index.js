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

export default function Home({ allPostsData, open, setOpen }) {
  return (
    <Layout home open={open} setOpen={setOpen}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <section id='about' className='container'>
        <h1 className='header hidden-header'>ABOUT</h1>
        <About />
      </section>
      <section id='services' className='container'>
        <h1 className='header hidden-header'>Services</h1>
        <Double
          title='Your Treatment Plan'
          imageSource='/images/massage-senior-square.jpg'
          imageAlt='shoulders being massaged'
          imageLeft
        >
          <p>
            Together we will develop a massage plan that will take into
            consideration your situation, its severity, and your overall health.
            <br />
            <br />
            On your first visit, I will ask general health questions and review
            any referring practitioners’ diagnoses and recommendations. If you
            have medical concerns about specific areas, please tell me even if
            you think they are minor. I may assess the situation by gently
            feeling for tenderness, looking at your posture, and checking for
            restricted or painful movement.
            <br />
            <br />
            Each treatment is designed to cover your input and needs. The focus
            is on particular areas incorporated into the full body massage. The
            goal is for the patient to be heard, respected, and ultimately feel
            new and improved when they exit the massage room.
          </p>
        </Double>
        <Double
          title='Our Services'
          imageSource='/images/hot-rocks-massage-square.jpg'
          imageAlt='Hot massage rocks on persons back'
        >
          <ul>
            <li>Swedish Massage</li>
            <li>Hot Rocks</li>
            <li>Reflexology</li>
            <li>Energy Work</li>
            <li>Injury Treatment</li>
            <li>Hydrotherapy</li>
            <li>Paraffin</li>
          </ul>
        </Double>
        <h1 className='header'>Benefits of Massage</h1>
        <Double
          title='Body'
          imageSource='/images/massage-back-square.jpg'
          imageAlt='shoulders being massaged'
          imageLeft
        >
          <ul>
            <li>Increase joint flexibility and range of motion</li>
            <li>Relax and loosen tight muscles</li>
            <li>Prevent injury and enhance athletic performance</li>
            <li>
              Enhance circulation to speed the recovery of tired and sore
              muscles
            </li>
            <li>Improve skin texture</li>
            <li>Diminish low back pain and fluid retention</li>
          </ul>
        </Double>
        <Double
          title='Mind'
          imageSource='/images/meditation-square.jpg'
          imageAlt='Hot massage rocks on persons back'
        >
          <ul>
            <li>Reduce the effects of stress</li>
            <li>Calm the nervous system</li>
            <li>Improve focus and the ability to concentrate</li>
            <li>
              Treat stress-related conditions such as fibromyalgia, tension
              headaches, and migraines
            </li>
          </ul>
        </Double>
      </section>
      <section id='rates' className='container'>
        <div className='header'>
          <h1 className={utilStyles.lightText}>RATES</h1>
        </div>
        <InfoCards>
          <InfoCard header='$60'>
            <div className='rate-text'>per 1 hour</div>
          </InfoCard>
          <InfoCard header='$90'>
            <div className='rate-text'>per 1 1/2 hours</div>
          </InfoCard>
          <InfoCard header='Ask About'>
            <ul>
              <li>Gift Certificates</li>
              <li>Senior Rates</li>
              <li>Package Plans</li>
              <li>Referral Incentives</li>
            </ul>

          </InfoCard>
        </InfoCards>
        <div>
          <h4>ON-SITE ONLY</h4>
          <h4>WE ACCEPT CASH OR CHECK Or Major Credit cards</h4>
          <div>
            <h4 className='sub-heading'>SENIORS AND FIXED/LOW INCOME:</h4>
            <p>Sliding scale rate with a $35.00 minimum</p>
          </div>
        </div>
      </section>
      <section id='contact'>
        <div className='header'>
          <h1 className={utilStyles.lightText}>CONTACT US</h1>
        </div>
        <strong>
          Please give 24-hour notice to make, change, or cancel an appointment
        </strong>
        <Contact></Contact>
      </section>
      <style jsx>{`
        .rate-text {
          font-size: 1.19158rem;
        }
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
        .double-text {
          display: flex;
          flex-direction: row;
        }
        @media (min-width: 460px) {
        }
      `}</style>
    </Layout>
  );
}
