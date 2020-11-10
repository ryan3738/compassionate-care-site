import Head from 'next/head';
import Layout from '../components/layout';
import GalleryGrid from '../components/gallery-grid';
import Image from 'next/image';

export default function Rates({ open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <Head>
        <title>RATES</title>
      </Head>
      <section className='menu-container'>
        <h1>RATES</h1>
      </section>
      <style jsx>{`
        .menu-container {
          width: 100vw;
          max-width: 1200px;
          place-self: center;
        }
      `}</style>
    </Layout>
  );
}
