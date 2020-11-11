import Head from 'next/head';
import Layout from '../components/layout';
import About from '../components/about';

export default function AboutPage({ open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <Head>
        <title>ABOUT</title>
      </Head>
      <section className='menu-container'>
        <h1>ABOUT</h1>
        {/* <Double category='services' /> */}
        <About />
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
