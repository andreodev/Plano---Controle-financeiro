import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // navbar
  // const links = [
  //   { label: "Início", href: "/" },
  //   { label: "Quem somos", href: "/quem-somos" },
  //   { label: "Recursos", href: "/#recursos" },
  //   { label: "Planos e preços", href: "/planos" },
  //   { label: "Blog", href: "https://www.organizze.com.br/blog/" },
  // ];

  useEffect(() => {
    const openButton = document.getElementById("open-top-navigation-mobile");
    const closeButton = document.getElementById("close-top-navigation-mobile");

    const toggleMenu = (e) => {
      e.preventDefault();
      setMobileMenuOpen((prev) => !prev);
    };

    openButton?.addEventListener("click", toggleMenu);
    closeButton?.addEventListener("click", toggleMenu);

    return () => {
      openButton?.removeEventListener("click", toggleMenu);
      closeButton?.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      <header className="h-40 lg:h-28 flex-none padding-x-all-sections bg-[#EDFDF2]">
        <div className="relative">
          <div className="flex items-center justify-between max-w-[1224px] mx-auto py-12 lg:py-4">
            <div className="flex justify-center w-full lg:justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Organizze</span>
                <img
                  className="flex h-20   w-full lg:h-18 sm:h-18 "
                  src={logo}
                  alt="Logo Organizze"
                />
              </a>
            </div>

            {/* BOTÃO ABRIR MENU MOBILE */}
            <div className="-mr-2 -my-2 lg:hidden">
              <button
                id="open-top-navigation-mobile"
                className="absolute right-4 top-6 p-2 inline-flex text-[#129E3F] focus:outline-none"
              >
                <span className="sr-only">Abrir Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                className="rounded-lg text-base tracking-tig transition-colors font-serif ease-in-out duration-300 select-none inline-flex min-w-fit items-center ml-8 z-20 text-[#FBF7EA] font-semibold py-3 px-6 bg-[#129E3F] hover:bg-[#006A33] AllianceNo1"
                href="https://play.google.com/store/apps/details?id=br.com.breaklabs.plano&pli=1"
              >
                Comece já!
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div
        id="top-navigation-mobile"
        className={`absolute z-50 top-0 inset-x-0 p-2 transition-all duration-300 transform ${
          mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        } lg:hidden`}
      >
        <div className="rounded-lg shadow-lg  bg-[#FEFDF9] ">
          <div className="">
            <div className="flex items-center justify-between">
              <img width="50" className="m-3" src={logo} alt="Logo" />
              <button
                id="close-top-navigation-mobile"
                className=" rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <span className="sr-only">Fechar Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="py-6 px-5">
            <div className="mt-6">
              <a
                className="w-full flex items-center justify-center bg-[#14A35B] px-4 py-2 rounded-md shadow-sm text-base font-medium text-white hover:bg-[#0F7641]"
                href="https://play.google.com/store/apps/details?id=br.com.breaklabs.plano&pli=1"
              >
                Comece já
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
