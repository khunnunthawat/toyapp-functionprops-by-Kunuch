import 'tailwindcss/tailwind.css';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <div className='w-full h-screen max-w-4xl mx-auto bg-gray-100 p-5'>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
