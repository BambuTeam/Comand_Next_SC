import logo from '@/public/Images/Navbar/logoBambuWhite.svg';
import isotipo from '@/public/Images/Navbar/bambuisotipo.svg';
import Image from 'next/image';

const Navbar: React.FC = () => {
  // TODO: revisar el comportamiento de la barra
  return (
    <nav className='left-0 right-0 top-0 z-10 flex h-20 items-center justify-between bg-[#04021af8] shadow-2xl'>
      <div className='ml-4 flex w-1/2 items-center md:ml-10 md:w-1/6'>
        <Image src={logo} height={50} width={150} alt='Logo Bambu' />
      </div>
      <div className='hidden md:flex md:w-2/3'></div>
      <div className='mr-4 flex w-1/2 items-center justify-end md:mr-10 md:w-1/6'>
        <Image src={isotipo} height={5} width={30} alt='Isotipo Bambu' />
      </div>
    </nav>
  );
};

export default Navbar;
