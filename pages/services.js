import Head from 'next/head';
import Layout from '../components/layout';
import MenuSection from '../components/menu-section';

export default function Services({ open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <Head>
        <title>SERVICES</title>
      </Head>
      <section className='menu-container'>
        <h1>SERVICES</h1>
        <MenuSection category='Starters' />
        <MenuSection category='Entrees' />
        <MenuSection category='Desserts' />
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
