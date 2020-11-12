import Double from './double';

export default function About() {
  return (
    <>
      <section className='menu-container'>
        <Double
          title='Ginny Redpath'
          imageSource='/images/ginny-redpath-square.jpg'
          imageAlt='Ginny Redpath portrait'
          imageLeft={true}
        >
          <ul>
            <li>I am a fully qualified and insured massage therapist.</li>
            <li>
              My goal is to offer techniques that best serve the needs of the
              individual and support a lifetime of health maintenance and
              harmony.
            </li>
            <li>
              I offer a sliding scale for seniors and fixed/low income clients
              with a $35.00 minimum
            </li>
          </ul>
          {/* <p>
            is a graduate of Mueller College of Holistic Studies in San Diego
            and Brian Utting School of Massage in Seattle. With over 25 years of
            experience as a Licensed Massage Therapist, Ginny has worked at
            spas, salons, privates practices, retirement homes, and chiropractic
            clinics. Ginny’s goal is to offer techniques that best serve the
            needs of the individual supporting a lifetime of health maintenance
            and harmony.
          </p> */}
        </Double>
        <Double
          title='Qualifications'
          imageSource='/images/lotus-flower-square.jpg'
          imageAlt='Lotus flower'
          imageLeft={false}
        >
          {/* <div className='line'></div> */}
          <ul className='no-bullets'>
            <li>
              Professional Member of the American Massage Therapy Association
            </li>
            {/* <div className='line'></div> */}
            <li>
              Graduate of professional massage licensing programs at Mueller
              College of Holistic Studies in San Diego and Brian Utting School
              of Massage in Seattle.
            </li>
            {/* <div className='line'></div> */}
            <li>
              25 years of experience as a Licensed Massage Therapist serving
              Labor & Industry, Auto, and HMO claims.
            </li>
            {/* <div className='line'></div> */}
            <li>
              Worked at spas, salons, privates practices, retirement homes, and
              chiropractic clinics.
            </li>
            {/* <div className='line'></div> */}
            <li>Fully licensed and insured in the U.S.</li>
          </ul>
          {/* is a graduate of Mueller College of Holistic Studies in San Diego and
          Brian Utting School of Massage in Seattle. With over 25 years of
          experience as a Licensed Massage Therapist, Ginny has worked at spas,
          salons, privates practices, retirement homes, and chiropractic
          clinics. Ginny’s goal is to offer techniques that best serve the needs
          of the individual supporting a lifetime of health maintenance and
          harmony. */}
        </Double>
      </section>
      <style jsx>{`
        .no-bullets {
          display: table-row;
          /* list-style-type: none; */
          /* padding: 0; */
          /* margin-left: 1.2em; */
          /* border: 2px solid #c141f4; */
        }
        .no-bullets > li {
          padding: 10px -10px;
          border-bottom: 2px solid var(--color-main);
        }
        .line {
          border: 0.5px solid var(--color-main);
          width: 100%;
          height: 0px;
        }
        .menu-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }
      `}</style>
    </>
  );
}
