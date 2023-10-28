// import Link from 'next/link';
import logo from '@/public/Images/Navbar/logoBambuWhite.svg';
import isotipo from '@/public/Images/Navbar/bambuisotipo.svg';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className=' ... fixed left-0 right-0 top-0 z-10 flex h-20 items-center justify-between bg-gradient-to-r from-[#0d0d0d]  text-[#fefefe]'>
      <div className='ml-20 flex w-1/6 items-center'>
        <Image src={logo} height={50} width={150} alt='Logo Bambu' />
      </div>
      <div className='w-2/3'>
        {/* <Link href='/'>Inicio</Link>
        <Link href='/acerca'>Acerca</Link>
        <Link href='/contacto'>Contacto</Link> */}
      </div>
      <div className='mr-10 flex w-1/6 items-center justify-end'>
        <Image src={isotipo} height={5} width={30} alt='Isotipo Bambu' />
      </div>
    </nav>
  );
};

export default Navbar;
