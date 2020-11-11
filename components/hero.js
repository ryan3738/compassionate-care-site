import Image from 'next/image';
import siteData from '../public/data/site-data.json';

export default function Hero() {
  return (
    <>
      <div id='welcome' className='welcome-container'>
        <div className='welcome-logo'>
          <Image
            src='/images/celtic-compassion-symbol.png'
            alt='Celtic compassion symbol'
            width='100px'
            height='100x'
          />
        </div>
        <div className='welcome-box'>
          {/* <p className='scroll-text'>SCROLL DOWN</p> */}

          <div className='welcome-inner-box'>
            <h2 className='hide-small'>Compassionate Care</h2>
            <h3>Ginny Redpath</h3>
            <div className='line'></div>
            <br />
            <h4>Licensed Massage Therapist</h4>
            <h5> CALL TO MAKE AN APPOINTMENT</h5>
            <b>
              <a href={`tel: ${siteData.phoneNumber}`}>
                {siteData.phoneNumber}
              </a>
            </b>
          </div>
        </div>
      </div>
      <style jsx>{`
      .hide-small{
        display:none;
      }
      .line {
          border: 0.5px solid var(--color-light);
          width: 100%;
          height: 0px;
        }
      .scroll-text{
        font-size: 0.5rem;
        margin: 1% 0 1%;
        /* position: absolute; */
        /* padding: 10%; */
        /* margin: 10%; */
      }
        .welcome-container {
          width: 100%;
          min-height: 50vh;
          /* margin-top: 4em; */
          display: grid;
          justify-content: center;
          align-content: center;
          grid-template-columns: 2vw auto 2vw;
          grid-template-rows: 1fr auto 1fr;
          grid-template-areas:
            '. l .'
            '. w .'
            '. . .';
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: none;
          background-color: var(--color-black);
        }

        .welcome-box {
          /* width: minmax(240px, auto); */
          /* padding: 0 10% 10%; */
          grid-area: w;
          background: var(--color-darker);
          border-radius: 7px;
        }

        .welcome-inner-box {
          /* outline: thin solid var(--color-main); */
          padding: 1rem;
        }

        .welcome-logo {
          grid-area: l;
          max-width: 100%;
          max-height: auto;
          margin: auto;
          display: block;
          padding: 2rem;
        }

        .title {
          /* font-size: 3rem; */
          color: var(--main-white);
          text-align: center;
          display: none;
        }
        @media (min-width: 460px) {
          .welcome-container {
            background-image: url('images/lake-mountain-sunset.jpg');
        }
        .hide-small{
        display:block;
      }
      `}</style>
    </>
  );
}
