// import Link from 'next/link';
import logo from '@/public/Images/Navbar/logo_bambu_oficial.png';
import isotipo from '@/public/Images/Navbar/bambuisotipo.svg';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className=' flex h-20 items-center justify-between bg-[#0d0d0d] p-3 text-[#fefefe]'>
      <div className='ml-20 flex w-1/6 items-center'>
        <Image src={logo} height={10} width={200} alt='Logo Bambu' />
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
