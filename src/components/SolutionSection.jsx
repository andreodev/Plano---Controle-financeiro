import selectionSolution from "../assets/images/selectionSolution.webp"

export default function SolutionHeader() {
  return (
    <>
      <section className="w-full padding-x-all-sections bg-[#FEFDF9] pt-10 lg:pt-14 pb-4 ">
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
              <div className="lg:mb-0">
                <div className="flex flex-row md:flex-col">
                  <span className="rounded-xl mb-4 max-w-[47px] bg-[#DFFCE9] text-[#0D772F] flex items-center justify-center px-3 pt-6 pb-6 text-center text-xl font-bold leading-0 tracking-wider mr-3 AllianceNo2">
                    01
                  </span>
                  <div>
                    <h3 className="text-lg font-serif sm:text-xl max-w-[300px] text-base-text font-semibold md:max-w-[222px] tracking-wide mb-2 leading-6 AllianceNo1">
                      Suas contas e cartões num só lugar
                    </h3>
                    <span className="font-light font-serif sm:max-w-[400px] tracking-wide text-base block text-[#5C5F5A] AllianceNo1">
                      Comece cadastrando suas contas e cartões para ter uma visão mais clara do controle de finanças.
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:mb-0">
                <div className="flex flex-row md:flex-col">
                  <span className="rounded-xl mb-4 max-w-[47px] bg-[#DFFCE9] text-[#0D772F] flex items-center justify-center px-3 pt-6 pb-6 text-center text-xl font-bold leading-0 tracking-wider mr-3 AllianceNo2">
                    02
                  </span>
                  <div>
                    <h3 className="text-lg font-serif sm:text-xl max-w-[300px] text-base-text font-semibold md:max-w-[222px] tracking-wide mb-2 leading-6 AllianceNo1">
                      Cadastre todos os seus gastos
                    </h3>
                    <span className="font-light font-serif sm:max-w-[400px] tracking-wide text-base block text-[#5C5F5A] AllianceNo1">
                      Mantenha tudo sob controle cadastrando suas contas e despesas organizadas por categorias.
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:mb-0">
                <div className="flex flex-row md:flex-col">
                  <span className="rounded-xl mb-4 max-w-[47px] bg-[#DFFCE9] text-[#0D772F] flex items-center justify-center px-3 pt-6 pb-6 text-center text-xl font-bold leading-0 tracking-wider mr- AllianceNo2">
                    03
                  </span>
                  <div>
                    <h3 className="text-lg font-serif sm:text-xl max-w-[300px] text-base-text font-semibold md:max-w-[222px] tracking-wide mb-2 leading-6 AllianceNo1">
                      Saiba o destino de cada centavo
                    </h3>
                    <span className="font-light font-serif sm:max-w-[400px] tracking-wide text-base block text-[#5C5F5A] AllianceNo1">
                      Informe sua renda e ganhos extras para ter previsibilidade financeira e tomar decisões inteligentes.
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:mb-0">
                <div className="flex flex-row md:flex-col">
                  <span className="rounded-xl mb-4 max-w-[47px] bg-[#DFFCE9] text-[#0D772F] flex items-center justify-center px-3 pt-6 pb-6 text-center text-xl font-bold leading-0 tracking-wider mr-3 AllianceNo2">
                    04
                  </span>
                  <div>
                    <h3 className="text-lg font-serif sm:text-xl max-w-[300px] text-base-text font-semibold md:max-w-[222px] tracking-wide mb-2 leading-6 AllianceNo1">
                      Transforme controle financeiro em hábito
                    </h3>
                    <span className="font-light font-serif sm:max-w-[400px] tracking-wide text-base block text-[#5C5F5A] AllianceNo1">
                      Lance os gastos do dia a dia, acompanhe os relatórios e assuma o total controle das finanças.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
