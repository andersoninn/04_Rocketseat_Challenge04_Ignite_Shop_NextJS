import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import backgroundImage from '@/assets/Coverheader.svg';

export function Header() {
  return (
    <header
      className="flex justify-center items-center w-screen h-72 bg-cover"
      style={{ backgroundImage: `url(${backgroundImage.src})` }}
    >
      <Image src={Logo} alt="" className="mb-36" />
    </header>
  );
}

//"
