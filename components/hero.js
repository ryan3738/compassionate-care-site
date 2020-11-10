import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';

export default function Hero(props) {
  return (
    <>
      <div id='welcome' className='welcome-container'>
        
      </div>
      <style jsx>{`
      .scroll-text{
        font-size: 0.5rem;
        margin: 1% 0 1%;
        /* position: absolute; */
        /* padding: 10%; */
        /* margin: 10%; */
      }
        .welcome-container {
          margin-top: 4em;
          display: grid;
          justify-content: center;
          align-content: center;
          grid-template-columns: 2vw auto 2vw;
          grid-template-rows: 1fr 20fr 1fr;
          grid-template-areas:
            '. . .'
            '. w .'
            '. . .';
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          background-image: none;
          background-color: var(--color-black);
        }

        .welcome-box {
          width: minmax(240px, auto);
          padding: 0 10% 10%;
          grid-area: w;
          background: var(--color-darker);
        }

        .welcome-inner-box {
          outline: thin solid var(--color-main);
          padding: 10%;
        }

        .welcome-logo {
          max-width: 100%;
          max-height: auto;
          margin: auto;
          display: block;
        }

        .title {
          /* font-size: 3rem; */
          color: var(--main-white);
          text-align: center;
          display: none;
        }
        @media (min-width: 460px) {
          .welcome-container {
            background-image: url('images/calamari-blue-cheese-sauce.jpg');
        }
      `}</style>
    </>
  );
}
