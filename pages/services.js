import Head from 'next/head';
import Layout from '../components/layout';
import MenuSection from '../components/menu-section';
import Double from '../components/double';

export default function ServicesPage({ open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <Head>
        <title>SERVICES</title>
      </Head>
      <section className='menu-container'>
        <h1>SERVICES</h1>
        {/* <Double category='services'></Double> */}
        <MenuSection category='services' />
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
