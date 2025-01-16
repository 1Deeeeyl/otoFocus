import Link from 'next/link';
import React, { useState } from 'react';
import ContactModal from '../contactModal/ContactModal';

function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ul className="sm:flex flex-row gap-5 mt-5 pb-5 hidden">
        <li className="">
          <Link href="/" className="flex flex-col items-center group">
            HOME
            <span className="h-[1.2px] w-[calc(100%+2px)] bg-black inline-block group-hover:scale-100 scale-0 transition-all ease-in-out duration-200 origin-left font-medium"></span>
          </Link>
        </li>
        <li className="">
          <button
            className="flex flex-col items-center group "
            onClick={() => setOpen(true)}
          >
            CONTACT
            <span className="h-[1.2px] w-[calc(100%+2px)] bg-black inline-block group-hover:scale-100 scale-0 transition-all ease-in-out duration-200 origin-left"></span>
          </button>
        </li>
      </ul>
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

          <p className="pt-5">
            I am looking forward to working with you!
          </p>
        </div>
      </ContactModal>
    </>
  );
}

export default Navigation;
