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
            <li>
              I am a fully qualified, licensed, and insured massage therapist
            </li>
            <li>
              My goal is to offer techniques that best serve the needs of the
              individual and support a lifetime of health maintenance and
              harmony
            </li>
            <li>
              I offer a sliding scale for seniors and fixed/low income clients
            </li>
          </ul>
        </Double>
        <Double
          title='Qualifications'
          imageSource='/images/lotus-flower-square.jpg'
          imageAlt='Lotus flower'
          imageLeft={false}
        >
          <ul className='list-style'>
            <li>Fully licensed and insured</li>
            <li>
              Professional Member of the American Massage Therapy Association
            </li>
            <li>
              Graduate of professional massage licensing programs at Mueller
              College of Holistic Studies in San Diego and Brian Utting School
              of Massage in Seattle
            </li>
            <li>
              Over 25 years of practice experience serving
              L&I, Auto, and HMO claims
            </li>
            <li>
              Worked at spas, salons, private practices, retirement homes, and
              chiropractic clinics
            </li>
          </ul>
        </Double>
      </section>
      <style jsx>{`
        .list-style {
          display: table-row;
        }
        .list-style > li {
          padding: 10px 0;
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
