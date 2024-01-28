import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/image";
import { navLinks } from "../constants";
import { useState } from "react";
import Button from "./Button";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

        {/* Hamburger icon visible on mobile screens */}
        <div className="lg:hidden">
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            onClick={toggleMobileMenu}
          />
        </div>

        {/* Navigation links visible on screens larger than lg */}
        <ul className="flex-1 flex justify-center items-center gap-16 hidden lg:flex">
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

        {/* Login button visible on desktop view */}
        <div className="hidden lg:block">
          <Button label="Login" />
        </div>

        {/* Mobile menu visible on mobile screens */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-white z-20">
            <ul className="flex flex-col justify-center items-center h-full">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray py-4"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {/* Login button inside the mobile menu */}
              <li>
                <Button label="Login" />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
