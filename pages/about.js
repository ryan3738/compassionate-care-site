import Head from 'next/head';
import Layout from '../components/layout';
import Double from '../components/double';

export default function About({ open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <Head>
        <title>ABOUT</title>
      </Head>
      <section className='menu-container'>
        <h1>ABOUT</h1>
        {/* <Double category='services' /> */}
        <Double category='about' />
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
