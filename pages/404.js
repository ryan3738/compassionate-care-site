import Image from 'next/image';
import styles from '../components/layout.module.css';

// pages/404.js
export default function Custom404() {
  return (
    <>
      <div className={styles.container}>
        <h1>404 - Page Not Found</h1>
        <Image
          className='image404'
          src='/images/lotus-flower-square.jpg'
          alt='Lotus flower'
          height='612'
          width='612'
        />
      </div>
    </>
  );
}
