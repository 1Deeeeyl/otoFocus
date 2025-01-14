import Link from 'next/link';
import React from 'react';

function Navigation() {
  return (
    <ul className="flex flex-row gap-5 mt-5 pb-5">
      <li className="">
        <Link href="/" className="flex flex-col items-center group">
          HOME
          <span className="h-[1.2px] w-[calc(100%+2px)] bg-black inline-block group-hover:scale-100 scale-0 transition-all ease-in-out duration-200 origin-left font-medium"></span>
        </Link>
      </li>
      <li className="">
        <Link href="/" className="flex flex-col items-center group ">
          CONTACT
          <span className="h-[1.2px] w-[calc(100%+2px)] bg-black inline-block group-hover:scale-100 scale-0 transition-all ease-in-out duration-200 origin-left"></span>
        </Link>
      </li>
      
    </ul>
  );
}

export default Navigation;
