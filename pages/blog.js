import Head from 'next/head';
import Layout from '../components/Layout';

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
      </Head>
      <h1>Blog</h1>
      <p>Welcome to my blog! Here, I share my thoughts on design, industry trends, and insights from my projects.</p>
      <h2>Recent Posts</h2>
      <ul>
        <li><a href="#">The Importance of Minimalism in Modern Design</a></li>
        <li><a href="#">How to Create a Strong Brand Identity</a></li>
        <li><a href="#">UX/UI Design Tips for Beginners</a></li>
        <li><a href="#">Case Study: Branding for Adora Beauty Salon</a></li>
      </ul>
    </Layout>
  );
}
