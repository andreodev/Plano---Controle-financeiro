import selectionSolution from "../assets/images/selectionSolution.webp"

export default function SolutionHeader() {
  const steps = [
    {
      number: "01",
      title: "Suas contas e cartões num só lugar",
      description:
        "Comece cadastrando suas contas e cartões para ter uma visão mais clara do controle de finanças.",
    },
    {
      number: "02",
      title: "Cadastre todos os seus gastos",
      description:
        "Mantenha tudo sob controle cadastrando suas contas e despesas organizadas por categorias.",
    },
    {
      number: "03",
      title: "Saiba o destino de cada centavo",
      description:
        "Informe sua renda e ganhos extras para ter previsibilidade financeira e tomar decisões inteligentes.",
    },
    {
      number: "04",
      title: "Transforme controle financeiro em hábito",
      description:
        "Lance os gastos do dia a dia, acompanhe os relatórios e assuma o total controle das finanças.",
    },
  ];
  return (
    <>
      <section className="w-full padding-x-all-sections bg-[#FEFDF9] pt-10 lg:pt-14 pb-4">
      <div className="max-w-[1224px] m-auto flex flex-col items-start lg:flex-row relative">
        <div className="hidden w-1/2 lg:flex">
          <img
            className="object-cover w-[100%]"
            src={selectionSolution}
            alt="Imagem do Organizze, um app para controle financeiro pessoal, sendo exibido na tela de um celular"
          />
        </div>
        <div className="md:mt-6 flex flex-col items-center lg:items-start w-full lg:w-auto">
          <p className="mb-2 md:mb-4 font-light font-serif text-center text-base md:text-lg text-[#5C5F5A] AllianceNo1">
            Organize suas finanças
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-base-text text-left tracking-wide AllianceNo1">
            A solução para um controle <br />
            financeiro de sucesso
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
