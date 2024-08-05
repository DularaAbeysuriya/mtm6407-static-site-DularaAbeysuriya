import Layout from './Layout';

export default function GalleryLayout({ children }) {
  return (
    <Layout>
      <div className="gallery-layout">
        {children}
      </div>
    </Layout>
  );
}
