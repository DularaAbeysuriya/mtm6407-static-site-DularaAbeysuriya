import Head from 'next/head';
import Layout from '../components/Layout';

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Portfolio</title>
      </Head>
      <h1>Portfolio</h1>
      <p>Here are some of the projects I've worked on:</p>
      <ul>
        <li>
          <strong>Adora Beauty Salon:</strong> Branding and logo design for a luxury hair and beauty salon in Melbourne City.
        </li>
        <li>
          <strong>Wortee Tire Recycling:</strong> Branding for a tire recycling company based in Melbourne.
        </li>
        <li>
          <strong>Auto Mexta:</strong> Website UI and branding for a mechanic shop in Melbourne.
        </li>
        <li>
          <strong>Eco View Tyre Recycling:</strong> Logo design and branding for an Australian tire recycling company.
        </li>
        <li>
          <strong>AutoMobex:</strong> Branding and social media marketing for a JDM car dealership and importer/re-seller in Melbourne.
        </li>
      </ul>
    </Layout>
  );
}
