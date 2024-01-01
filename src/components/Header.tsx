import Logo from '../../public/logo.svg';
import Image from 'next/image';
export function Header() {
  return (
    <header className="bg-[#183047] flex justify-center items-center w-screen h-72">
      <Image src={Logo} alt="" />
    </header>
  );
}
