import Head from 'next/head';
import Layout from '../components/layout';
import Image from 'next/image';
import Double from '../components/double'
import Contact from '../components/contact'

export default function Rates({ open, setOpen }) {
  return (
    <Layout open={open} setOpen={setOpen}>
      <Head>
        <title>RATES</title>
      </Head>
      <section className='menu-container'>
        <h1>INFO</h1>
        <Contact></Contact>
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
