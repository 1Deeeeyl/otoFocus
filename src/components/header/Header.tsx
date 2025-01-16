'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../navigation/Navigation';
import logo from '../../../public/images/logo/black logo.png';
import logoMobile from '../../../public/images/logo/oflogo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ContactModal from '../contactModal/ContactModal';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className=" flex flex-row justify-between items-center pb-[100px]">
        <img
          src={logo.src.toString()}
          alt=""
          className="sm:h-[15px] lg:h-[25px] xl:h-[30px] hidden sm:inline-block"
        />
        <img
          src={logoMobile.src.toString()}
          alt=""
          className="h-[50px] sm:hidden"
        />

        <Navigation />
        <div
          className="inline-block sm:hidden cursor-pointer h-9 w-fit"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              className="h-9 w-9"
            >
              <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
              className="h-9 w-9"
            >
              <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
            </svg>
          )}
        </div>

        <div
          className={`py-5 top-32 absolute sm:hidden left-0 w-full bg-white flex flex-col items-center gap-6 transform transition-all ease-in-out duration-500 drop-shadow-[0_100px_45px_rgba(0,0,0,0.20)] z-[2] ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-5 items-center w-full">
            <li className="w-full">
              <Link
                href="/"
                className="w-full text-center px-6 py-3 bg-transparent text-black hover:bg-sky-500 hover:text-white transition-all duration-300 active:bg-sky-700 block"
              >
                HOME
              </Link>
            </li>
            <li className="w-full">
              <button
                onClick={() => setOpen(true)}
                className="w-full text-center px-6 py-3 bg-transparent text-black hover:bg-sky-500 hover:text-white transition-all duration-300 active:bg-sky-700 block"
              >
                CONTACT
              </button>
            </li>
          </ul>
        </div>
      </header>
      <ContactModal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-80 py-5 text-sm">
          <p className="pt-5">Click my email to send me a message.</p>
          <p className="pt-5">
            <a
              className="text-sky-500 hover:text-sky-700 underline underline-offset-1 tracking-wide"
              target="_blank"
              rel="noopener noreferrer"
              href="https://mail.google.com/mail/u/0/?view=cm&amp;fs=1&amp;tf=1&amp;source=mailto&amp;to=juanpydro@gmail.com"
            >
              juanpydro@gmail.com
            </a>
          </p>

          <p className="pt-5">I am looking forward to working with you!</p>
        </div>
      </ContactModal>
    </>
  );
}

export default Header;
