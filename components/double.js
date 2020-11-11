import doubleItems from '../public/data/double.json';
import Image from 'next/image';

export default function Double({ children, imageLeft }) {
  return (
    <>
      <div className='double-container'>
        <div className='double-item double-pic right'>
          {/* <Image
            src={data.imageSource}
            alt={data.imageAlt}
            height='612'
            width='612'
          /> */}
        </div>
        <div className='double-item double-text left'>
          <h3 className='alternating-color'>TItle</h3>
          <h4 className='alternating-color'>Subtitle</h4>
          <p className='alternating-color'>content</p>
        </div>
        <style jsx>{`
          .double-container {
            display: grid;
            justify-content: center;
            align-content: center;
            grid-template-columns: 0.25em repeat(10, minmax(10px, 108px)) 0.25em;
            grid-row: repeat(8, minmax(200px, 500px));
            grid-row: repeat(2, minmax(200px, 500px));
            /* background-color: var(--color-darker); */
            grid-template-areas:
              '. p1 p1 p1 p1 p1 p1 p1 p1 p1 p1 .'
              '. t1 t1 t1 t1 t1 t1 t1 t1 t1 t1 .';
          }

          .double-item {
            margin: 0 10% 0;
            text-align: left;
          }

          .double-item > img {
            padding-top: 4rem;
            object-fit: cover;
            width: 100%;
            max-height: 100%;
          }

          .double-pic {
            grid-area: p1;
          }

          .double-text {
            margin: 1rem 10% 5rem;
            grid-area: t1;
          }

          .alternating-color:nth-child(odd) {
            color: var(--color-white);
          }

          @media (min-width: 460px) {
            /* .double-text { */
            /* padding-top: 4rem; */
            /* } */
            .double-item {
              margin: 5vh 2vw;
            }
            .double-container {
              grid-template-areas: '. l l l l l r r r r r .';
            }
            .double-pic {
              grid-area: ${imageLeft ? 'l' : 'r'};
            }

            .double-text {
              grid-area: ${imageLeft ? 'r' : 'l'};
            }
          }
        `}</style>
      </div>
    </>
  );
}
