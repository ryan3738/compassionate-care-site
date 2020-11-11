import utilStyles from '../styles/utils.module.css';

export default function InfoCard({ children, header, price}) {
  return (
    <>
      <div className='info-card'>
        <h3 className={utilStyles.lightText}>{header}</h3>
        <div className='accent-text'>{children}</div>
        <p className={utilStyles.lightText}>{price}</p>
      </div>
      <style jsx>{`
        .accent-text {
          color: var(--color-white);
        }
        .info-card {
          text-align: left;
          border-radius: 7px;
          padding: 5%;
          background: var(--color-darker);
        }
      `}</style>
    </>
  );
}
