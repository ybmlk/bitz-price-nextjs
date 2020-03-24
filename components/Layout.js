import Head from 'next/head';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <link rel='stylesheet' href='https://bootswatch.com/4/cerulean/bootstrap.min.css' />
      </Head>
      <Navbar />
      <div className='container'>{children}</div>
    </div>
  );
};

export default Layout;
