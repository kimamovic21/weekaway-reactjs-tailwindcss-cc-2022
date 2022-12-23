import React, {useState} from 'react';
import {FaBars,  FaTimes, FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram} from 'react-icons/fa';

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const closeMobileMenu = () => setNav(false);

  return (
    <nav className='w-full min-h-[2rem] flex justify-between items-center fixed top-0 z-10 text-[#f5f5f5] bg-gray-700/80'>

        <ul className='hidden sm:flex px-4'>
            <li>
                <a href="#topbar">Home</a>
            </li>
            <li>
                <a href="#deals">Deals</a>
            </li>
            <li>
                <a href="#gallery">Gallery</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>

        {/* Social icons */}
        <div className='flex justify-between'>
            <FaFacebookF className='mx-4 cursor-pointer hover:scale-150 duration-200' size={20}/>
            <FaTwitter className='mx-4 cursor-pointer hover:scale-150 duration-200' size={20}/>
            <FaGooglePlusG className='mx-4 cursor-pointer hover:scale-150 duration-200' size={20}/>
            <FaInstagram className='mx-4 cursor-pointer hover:scale-150 duration-200' size={20}/>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className='sm:hidden z-10 p-2'>
            { nav ? (<FaTimes size={40} className='mr-2 p-1 cursor-pointer'/>) 
                  : (<FaBars size={40} className='mr-2 p-1 cursor-pointer'/>)
            }
        </div>

        {/* Mobile menu */}
        <div className={
            nav ? 'overflow-y-hidden sm:hidden ease-in-out duration-500 absolute text-gray-100 left-0 top-0 w-full h-screen bg-[#333]/90 px-4 py-7 flex flex-col' 
                : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-500'}>
            <ul className='h-full w-full text-center pt-15'>
                <li className='text-2xl pt-20 py-10'>
                    <a href="#topbar" onClick={closeMobileMenu}>Home</a>
                </li>
                <li className='text-2xl py-10'>
                    <a href="#deals" onClick={closeMobileMenu}>Deals</a>
                </li>
                <li className='text-2xl py-10'>
                    <a href="#gallery" onClick={closeMobileMenu}>Gallery</a>
                </li>
                <li className='text-2xl py-10'>
                    <a href="#contact" onClick={closeMobileMenu}>Contact</a>
                </li>
            </ul>
        </div>

    </nav>
  );
};

export default Navbar;




// 1. stiliziramo nav roditelj element
// 2. dodajemo i stiliziramo ul i li elemente
// 3. dodajemo div element u kojem se nalaze ikonice za drustvene mreze
// 4. dodajemo i uredujemo div element za humburger menu (humburger ikonicu)
// 5. dodajemo i stiliziramo div element za mobile menu
// 6. dodajemo useState hook
// 7. dodajemo uslov za klasu u mobile menu div elementu
// 8. kreiramo funkciju handleNav
// 9. dodajemo onClick dodagadaj div elementu za humburger menu
// 10. dodajemo onClick dogadaj div elementu za mobile menu
