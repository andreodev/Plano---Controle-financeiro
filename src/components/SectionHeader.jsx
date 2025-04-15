import React from "react";
import painel from "../assets/images/painel.png";
import border from "../assets/images/traced-border@2x-AJ4X7YYM.png";

export default function SectionHeader() {
  return (
    <>
      <section className="w-full px-[1rem] sm:px-[2rem] lg:pr-0 xl:px-0 overflow-hidden bg-[#EDFDF2]">
        <div className="max-w-[1224px] h-full flex items-center relative mx-auto md:items-start lg:flex-row lg:justify-between lg:m-auto">
          <div className="sm:rounded-2xl h-full w-full lg:w-auto ">
            <div className="relative flex flex-col items-center pt-0 py-8 sm:py-12 lg:py-16 lg:items-start">
              <h1 className="max-w-[590px] text-base-text text-3xl font-semibold md:leading-[64px] text-center tracking-tight sm:text-5xl lg:max-w-[460px] lg:text-5xl lg:text-left lg:m-0 xl:max-w-[550px] xl:text-6xl AllianceNo2">
                Chega de planilhas complicadas! controle seu dinheiro de forma{" "}
                <div className="inline-block relative z-10">
                  <span className="text-transparent bg-clip-text z-20 bg-[#129E3F] ">
                    prática e inteligente
                  </span>
                  <img
                    alt="separator"
                    className="absolute -left-1.5 -right-1 -bottom-[2px] -z-10 hidden md:flex w-full"
                    src={border}
                  />
                </div>{" "}
                com o Planno
              </h1>
              <p className="mt-6 mb-8 max-w-[400px] text-base font-serif text-center font-light text-[#454843] lg:text-left lg:mx-0 lg:max-w-[520px] AllianceNo2">
                Gerencie seu dinheiro em tempo real com uma solução completa,
                fácil de usar e 100% segura. Tenha, de verdade o controle
                financeiro que sempre buscou!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              <a
  href="https://play.google.com/store/apps/details?id=br.com.breaklabs.plano"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
>
  <svg
    className="w-6 h-6 mr-2"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M3.063 3.627l1.676 11.162 7.898 4.314c.39.213.85.213 1.24 0l7.89-4.314 1.68-11.162H3.063zm12.22 11.83l-2.97 1.623-2.64-1.443v-9.4l5.61 9.22zm-8.08-9.4v9.4l-2.64 1.443-2.97-1.623 5.61-9.22zm-.56-1.44h12.75L12 6.103 6.637 4.617z"/>
  </svg>
  Google Play
</a>
                <a
                  href="https://apps.apple.com/br/app/planno/id123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
                >
                  <svg
                    className="w-6 h-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  App Store
                </a>
              </div>
              <div className="mt-9 flex flex-col justify-start xl:space-x-4 xl:flex-row">
                <div className="flex items-center w-64 lg:w-72 h-20">
                  <svg
                    width="70"
                    height="52"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="42" height="42" rx="12" fill="#DFFCE9"></rect>
                    <g clipPath="url(#clip0_3202_51666)">
                      <path
                        d="M27 17H26V15C26 12.24 23.76 10 21 10C18.24 10 16 12.24 16 15V17H15C13.9 17 13 17.9 13 19V29C13 30.1 13.9 31 15 31H27C28.1 31 29 30.1 29 29V19C29 17.9 28.1 17 27 17ZM18 15C18 13.34 19.34 12 21 12C22.66 12 24 13.34 24 15V17H18V15ZM27 29H15V19H27V29ZM21 26C22.1 26 23 25.1 23 24C23 22.9 22.1 22 21 22C19.9 22 19 22.9 19 24C19 25.1 19.9 26 21 26Z"
                        fill="#0D772F"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3202_51666">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(9 9)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="ml-5 font-light font-serif text-[#454843] AllianceNo2">
                    Segurança dos seus dados em primeiro lugar
                  </p>
                </div>
                <div className="flex items-center w-64 lg:w-72 h-20">
                  <svg
                    width="70"
                    height="52"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="42" height="42" rx="12" fill="#DFFCE9"></rect>
                    <g clipPath="url(#clip0_3202_51658)">
                      <path
                        d="M13 15H31V13H13C11.9 13 11 13.9 11 15V26H9V29H23V26H13V15ZM32 17H26C25.45 17 25 17.45 25 18V28C25 28.55 25.45 29 26 29H32C32.55 29 33 28.55 33 28V18C33 17.45 32.55 17 32 17ZM31 26H27V19H31V26Z"
                        fill="#0D772F"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_3202_51658">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(9 9)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="ml-5 font-light font-serif text-[#454843] AllianceNo2">
                    Acesse quando quiser, no celular ou computador
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden h-[598px] max-w-[615px] lg:flex relative bottom-[-7px] right-[-10px]">
            <img
              className="object-cover"
              style={{ objectPosition: "20px bottom" }}
              src={painel}
              alt="Imagem com prints de diferentes funcionalidades do Organizze, um app repleto de funcionalidades para realizar um controle financeiro pessoal eficiente"
            />
          </div>
        </div>
      </section>
    </>
  );
}