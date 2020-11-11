export default function InfoCards({ children, header}) {
  return (
    <div className='menu-container'>
      <h2 className='info-header'>{header}</h2>
      <div className='line'></div>
      <div className='info-section'>{children}</div>
      <style jsx>{`
        .info-section {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
          grid-gap: 20px;
          padding: 5%;
          /* justify-items: center; */
          /* align-items: start; */
          justify-content: stretch;
        }

        .line {
          border: 0.5px solid var(--color-light);
          width: 100%;
          height: 0px;
        }
      `}</style>
    </div>
  );
}
