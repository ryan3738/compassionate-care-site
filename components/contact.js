import utilStyles from '../styles/utils.module.css';
import Social from './social';
import siteData from '../public/data/site-data.json';

export default function Contact() {
  return (
    <>
      {/* <div className='contact-header'>
      <h1 className={utilStyles.lightText}>CONTACT US</h1>
      </div> */}
      <div className='content-container'>
        {/* <div className='left-container'>
          <h3>RATES</h3>
          <h4>WE ACCEPT CASH OR CHECK</h4>
          <div>
            <h4 className='sub-heading'>SENIORS AND FIXED/LOW INCOME:</h4>
            <p>
              FREE 1st visit with sliding scale for future appointments
              <br />
              $35.00 Minimum
            </p>
          </div>
          <div>
            <h4>PRICES:</h4>
            <ul>
              <li>30 Minutes $35</li>
              <li>60 Minutes $65</li>
              <li>90 Minutes $90</li>
            </ul>
          </div>
            <h4>
              Please give 24-hours notice to make, change, or cancel an
              appointment
            </h4>
        </div> */}

        <div className='right-container'>
          {/* <h2>CONTACT US</h2> */}
          <div>
            {siteData.address.street}
            <br />
            {siteData.address.city}, {siteData.address.state}{' '}
            {siteData.address.zipCode}
          </div>

          <div>
            <b>
              <a href={`tel: ${siteData.phoneNumber}`}>
                {siteData.phoneNumber}
              </a>
            </b>
          </div>
          <div>
            <a href={`mailto: ${siteData.email}`}>EMAIL ME</a>
          </div>
          {/* 
              <b>
                <a
                  href='https://www.google.com/maps/dir//Frasers+Gourmet+Hideaway+1191+SE+Dock+St+STE+101,+Oak+Harbor,+WA+98277'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  Get Directions
                </a>
              </b> */}
        </div>
      </div>
      <style jsx>{`
        .left-container {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          margin: 10px;
          text-align: left;
        }
        .content-container {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          align-items: flex-start;
          font-size: 1.1rem;
          min-height: 66vh;
        }
        .right-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 2rem 0.1rem;
          border-radius: 7px;
          padding: 5%;
          background: var(--color-darker);
          min-width: 33vw;
        }

        .right-container > div {
          padding: 0.5rem;
        }
        .social-media-contents {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
