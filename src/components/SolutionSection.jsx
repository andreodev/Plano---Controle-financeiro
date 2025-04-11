import selectionSolution from "../assets/images/plano.png"

export default function SolutionHeader() {
  const steps = [
    {
      number: "01",
      title: "Todas as suas contas e cartões reunidos em um só lugar",
      description:
        "Cadastre suas contas e cartões e tenha uma visão completa da sua vida financeira, sem complicação.",
    },
    {
      number: "02",
      title: "Registre seus gastos e tenha tudo sob controle",
      description:
        "Organize suas despesas por categorias e acompanhe de perto para onde seu dinheiro está indo.",
    },
    {
      number: "03",
      title: "Diga adeus aos gastos fora de controle.",
      description:
        "Registre sua renda e ganhos extras para tomar decisões financeiras com mais inteligência e segurança.",
    },
    {
      number: "04",
      title: "Torne o controle financeiro parte da sua rotina.",
      description:
        "Registre seus gastos diários, acompanhe relatórios e conquiste o controle total do seu dinheiro.",
    },
  ];
  return (
    <>
      <section className="w-full padding-x-all-sections bg-[#FEFDF9] pt-10 lg:pt-14 pb-4">
      <div className="max-w-[1224px] m-auto flex flex-col items-start lg:flex-row relative">
        <div className="hidden w-1/2 lg:flex">
          <img
            className="object-cover w-[80%]"
            src={selectionSolution}
            alt="Imagem do Organizze, um app para controle financeiro pessoal, sendo exibido na tela de um celular"
          />
        </div>
        <div className="md:mt-6 flex flex-col items-center lg:items-start w-full lg:w-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-base-text text-left tracking-wide AllianceNo1">
          Sua jornada rumo ao <p className="text-[#3DB673]">controle financeiro</p>começa aqui.
          </h2>
          <div className="w-full mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-10 md:gap-y-8 md:gap-x-14">
            {steps.map((step, index) => (
              <div className="lg:mb-0" key={index}>
                <div className="flex flex-row md:flex-col">
                  <span className="rounded-xl mb-4 max-w-[47px] bg-[#DFFCE9] text-[#0D772F] flex items-center justify-center lg:px-3 lg:pt-6 lg:pb-6 px-2 pb-2 pt-2  text-center text-xl font-bold leading-0 tracking-wider  lg:ml-0 AllianceNo2">
                    {step.number}
                  </span>
                  <div>
                      <h3 className="text-lg font-serif sm:text-xl max-w-[300px] text-base-text font-semibold md:max-w-[222px] tracking-wide ml-2 mb-2 leading-6 AllianceNo1">
                      {step.title}
                    </h3>
                    <span className="font-light font-serif sm:max-w-[400px] tracking-wide text-base block text-[#5C5F5A] ml-2 AllianceNo1">
                      {step.description}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
