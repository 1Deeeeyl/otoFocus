import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-5 my-[100px] pt-5 border-t-2 border-black/[0.1]">
      <nav className="">
        <ul className="flex flex-row gap-8">
          <li>
            <a href="https://www.youtube.com/">Home</a>
          </li>
          <li>
            <a href="https://www.youtube.com/">Portfolio</a>
          </li>
          <li>
            <a href="https://www.youtube.com/">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        <p>Copyright © 2025 - All right reserved by OtoFocus</p>
      </div>
    </footer>
  );
}

export default Footer;
