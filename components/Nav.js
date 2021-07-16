import Link from 'next/link';
const Nav = () => {
  const linkClass = 'text-blue-500 mr-6';
  return (
    <div className='mb-4'>
      <Link href='/'>
        <a className={linkClass}>Index</a>
      </Link>
      <Link href='/foodlist'>
        <a className={linkClass}>Food list</a>
      </Link>
      <Link href='/userinfo'>
        <a className={linkClass}>User info</a>
      </Link>
      <Link href='/modaltest'>
        <a className={linkClass}>Modal test</a>
      </Link>
    </div>
  );
};

export default Nav;
