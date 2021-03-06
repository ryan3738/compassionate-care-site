import MenuItem from './menu-item';

export default function MenuSection(props) {
  return (
    <div className='menu-container'>
      <h2 className='menu-header'>{props.category}</h2>
      <div className='line'></div>
      <MenuItem category={props.category} />
      <style jsx>{`
        .menu-header {
          display: inline-block;
          /* max-width: 640px; */
          padding: 3rem 0 0;
          /* margin: 0 auto 4rem auto; */
        }

        /* .menu-container {
          max-width: 1200px;
          place-self: center;
        } */
        .line {
          border: 0.5px solid var(--color-light);
          width: 100%;
          height: 0px;
        }
      `}</style>
    </div>
  );
}
