'use client';
import React from 'react';
import Link from 'next/link';
import ContactModal from '../contactModal/ContactModal';
import { useState } from 'react';


function Footer() {
  const year = new Date().getFullYear();
    const [open, setOpen] = useState(false);
  
  return (
    <>
      <footer className="flex flex-col items-center gap-5 mt-[100px] pt-5 border-t-2 border-black/[0.1] ">
        <div className="flex xl:flex-row xl:items-center w-full xl:justify-between flex-col items-center gap-5">
          <nav className="">
            <ul className="flex flex-row gap-8">
              <li className="">
                <Link href="/" className="hover:underline underline-offset-4">
                  Home
                </Link>
              </li>
  
              <li>
                <button
                  onClick={() => setOpen(true)}
                  className="hover:underline underline-offset-4"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <ul className="flex flex-row gap-5">
            <li className="">
              <a
                href="https://www.facebook.com/OtoFocusPH"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Opens CodePen on a new tab."
              >
                <svg
                  className="h-10 w-auto fill-gray-400 hover:fill-gray-800 transition-all ease-in-out duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/otofocus_ph/"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Opens CodePen on a new tab."
              >
                <svg
                  className="h-10 w-auto fill-gray-400 hover:fill-gray-800 transition-all ease-in-out duration-200"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-center">
            Copyright © {year} - All right reserved by OtoFocus
          </p>
        </div>
      </footer>
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

export default Footer;
