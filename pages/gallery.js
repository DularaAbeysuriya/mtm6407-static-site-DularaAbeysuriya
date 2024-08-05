import Head from 'next/head';
import GalleryLayout from '../components/GalleryLayout';

export default function Gallery() {
  return (
    <GalleryLayout>
      <Head>
        <title>Gallery</title>
      </Head>
      <h1>Gallery</h1>
      <p>Explore some of my design works:</p>
      <div className="gallery">
        <img src="/images/project1.jpg" alt="Project 1" />
        <img src="/images/project2.jpg" alt="Project 2" />
        <img src="/images/project3.jpg" alt="Project 3" />
        <img src="/images/project4.jpg" alt="Project 4" />
        <img src="/images/project5.jpg" alt="Project 5" />
      </div>
    </GalleryLayout>
  );
}
