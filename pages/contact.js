import Head from 'next/head';
import Layout from '../components/Layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
      </Head>
      <h1>Contact</h1>
      <p>If you'd like to get in touch with me, feel free to reach out through any of the methods below:</p>
      <ul>
        <li>Email: dulara@example.com</li>
        <li>Phone: (123) 456-7890</li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/dulara-abeysuriya">linkedin.com/in/dulara-abeysuriya</a></li>
        <li>Twitter: <a href="https://twitter.com/dulara_design">@dulara_design</a></li>
      </ul>
    </Layout>
  );
}
