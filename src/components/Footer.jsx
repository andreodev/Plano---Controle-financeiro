import logo from "../../public/planoLogo.svg";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/planofinancaspessoais",
      icon: "/instagram.svg", 
    },
  ];

  return (
    <>
      <footer
        id="footer"
        className="bg-[#FEFDF9] padding-x-all-sections w-full border-t border-[#F1F1F1]"
      >
        <div className="max-w-[1224px] m-auto py-11 overflow-hidden sm:px-6">
          <div className="flex flex-col items-center lg:flex-row lg:justify-between mb-8 lg:mb-0">
            <div className="flex flex-col items-center lg:items-start">
              <img src={logo} alt="logo-empresa" style={{"maxWidth": 150, height: "auto"}} />
              <p className="text-[#454843] font-serif text-sm mt-2 AllianceNo2">
                Planno é uma empresa do Grupo SimplificaAi
              </p>
            </div>
            <nav
              className="-mx-5 -my-2 flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center mt-3 mb-3"
              aria-label="Footer"
            >
            </nav>
            <div>
              <a
                className="rounded-lg text-base tracking-tig transition-colors font-serif ease-in-out duration-300 select-none inline-flex min-w-fit items-center text-[#FBF7EA] font-semibold py-3 px-6 bg-[#129E3F] hover:bg-[#006A33] AllianceNo2"
                href="https://linktr.ee/planofinancaspessoais?fbclid=PAZXh0bgNhZW0CMTEAAae0rVb_ZMPKVFh64m5St-rmEf1R_2NhsxMFWt-oyMF4jYQX3BYpzAxGtTLRGg_aem_vN0tMBpUaep7nAjtcc63cg"
              >
                Comece gratuitamente!
              </a>
            </div>
          </div>
          <div className="w-full overflow-hidden flex flex-col-reverse items-center lg:flex-row lg:items-center lg:justify-between lg:mt-10">
            <p className="text-center text-sm text-[#454843] font-serif lg:text-left mt-6 lg:mt-0 AllianceNo2">
              ©2025 Grupo SimplificaAi. CNPJ 59.154.259/0001-30
            </p>
            <div className="flex flex-col lg:flex-row lg:space-x-10 items-center">
              <div className="flex flex-col lg:flex-row lg:space-x-10 items-center">
                <div className="flex justify-center space-x-6 mb-6 lg:mb-0">
                  {socialLinks.map(({ name, href, icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#454843] hover:text-gray-500 font-serif transition duration-200 ease-in-out"
                    >
                      <span className="sr-only">{name}</span>
                      <img src={icon} alt={name} />
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-center lg:flex-row lg:space-x-6">
                <a
                  className="text-sm leading-6 font-serif text-[#454843] mt-2 lg:mt-0 AllianceNo2"
                  href="https://termos-de-uso-one.vercel.app/"
                >
                  Política de Privacidade
                </a>
                <a
                  className="text-sm leading-6 font-serif text-[#454843] mt-2 lg:mt-0 AllianceNo2"
                  href="https://termos-de-uso-one.vercel.app/"
                >
                  Termos de Serviço
                </a>
                <div id="ra-verified-seal">
                  <script
                    type="text/javascript"
                    id="ra-embed-verified-seal"
                    src="https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js"
                    data-id="OTUyNDI6b3JnYW5penpl"
                    data-target="ra-verified-seal"
                    data-model="2"
                  ></script>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}