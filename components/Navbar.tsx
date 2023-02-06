import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/next.svg" width={128} height={77} alt="Team"/>
      </div>
      <Link href='/'>
        Home
      </Link>
      <Link href='/about'>
        About
      </Link>
      <Link href='/team'>
        Team List
      </Link>
    </nav>
  );
};

export default Navbar;
