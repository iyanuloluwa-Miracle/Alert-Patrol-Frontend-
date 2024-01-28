//import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/image";
import { navLinks } from "../constants";
import Button from "./Button";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={headerLogo}
            alt="header-logo"
            width={130}
            height={29}
          />
        </a>
        
        {/* Navigation links visible on screens larger than lg */}
        <ul className={`flex-1 flex justify-center items-center gap-16 ${isMobile ? 'hidden' : 'lg:flex'}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Conditionally render the Button based on screen size */}
        <div className={`max-lg:block ${isMobile ? 'hidden' : 'block'}`}>
          <Button label="Login" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
