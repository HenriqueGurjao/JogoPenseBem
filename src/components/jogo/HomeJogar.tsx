import { useState } from "react";

function HomeJogar() {
  const [PlayGame, setPlayGame] = useState("pergunta");
  let num: number;

  let tentativa: number;
  let pontos: number;
  let gabarito: string[] = new Array(30);

  const gabarito021: string[] = ['B', 'A', 'A', 'D', 'C', 'B', 'D', 'A', 'A', 'D', 'C', 'B', 'B', 'C', 'D', 'D', 'D', 'D', 'B', 'D', 'A', 'B', 'A', 'A', 'D', 'A', 'C', 'A', 'C', 'C'];
  const gabarito022: string[] = ['B', 'D', 'A', 'A', 'A', 'B', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'D', 'D', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A'];
  const gabarito023: string[] = ['B', 'A', 'D', 'B', 'B', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'D', 'B', 'C'];
  const gabarito024: string[] = ['B', 'A', 'D', 'B', 'B', 'D', 'C', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'D', 'A', 'B', 'B', 'D', 'A', 'B', 'D', 'A', 'B', 'C', 'C', 'D', 'D'];
  const gabarito025: string[] = ['C', 'C', 'D', 'D', 'A', 'A', 'C', 'D', 'B', 'B', 'D', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'B', 'B', 'D', 'A', 'B', 'D', 'D', 'D', 'C', 'D', 'C', 'B'];


  const handleJogar = () => {
    const programaInput = document.getElementById(
      "programa"
    ) as HTMLInputElement;

    if (programaInput.value === "021") {
      gabarito = gabarito021;
      setPlayGame("jogar");
    } else if (programaInput.value === "022") {
      gabarito = gabarito022;
      setPlayGame("jogar");
    } else if (programaInput.value === "023") {
      gabarito = gabarito023;
      setPlayGame("jogar");
    } else if (programaInput.value === "024") {
      gabarito = gabarito024;
      setPlayGame("jogar");
    } else if (programaInput.value === "025") {
      gabarito = gabarito025;
      setPlayGame("jogar");
    } else {
      setPlayGame("ErroCod");
    }
  };

  const handleVolta = () => {
    setPlayGame("pergunta");
  };

  return (
    <div>
      <div>
        {PlayGame === "pergunta" && (
          <div className="h-screen bg-[#CCCCCC] flex justify-center">
            <div className="grid content-center">
              <div className="bg-[#EEEEBB] border w-11/12 md:w-[40rem] h-11/12 md:h-[40rem] grid content-center md:rounded-xl rounded-2xl">
                <div className="text-center text-5xl font-bold mt-5 md:mt-0">
                  <h1>Insira codigo do jogo</h1>
                </div>

                <div className="flex justify-center my-10">
                  <div className="">
                    <input
                      type="text"
                      className=" min-w-full md:w-96  h-14 text-center rounded-full border border-black"
                      id="programa"
                    />
                  </div>
                </div>

                <div className="flex justify-center mb-5 md:mb-0">
                  <div className="text-3xl mx-4 p-2 font-bold">
                    <button
                      className="min-w-full md:w-72 border p-2 bg-green-600 rounded-full border border-black"
                      onClick={handleJogar}
                    >
                      JOGAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {PlayGame === "jogar" && (
          <div className="h-screen bg-[#EEEEBB] flex justify-end">
            <div id="Box_jogo" className="border h-48 w-48 bg-[#CCCCCC]"></div>
            <div className="flex justify-center mb-5 md:mb-0">
              <div className="text-3xl mx-4 p-2 font-bold">
                <button
                  className="min-w-full md:w-72 border p-2 bg-green-600 rounded-full border border-black"
                  onClick={handleVolta}
                >
                  SAIR
                </button>
              </div>
            </div>
            <div
              id="box_livro"
              className="border h-screen w-3/4 bg-[#d18888] flex justify-center"
            >
              <div className=" grid content-center">
                <div className="bg-[#CCCCCC] h-48 w-48">
                  <h1>LIVRO</h1>
                </div>
              </div>
            </div>
          </div>
        )}
        {PlayGame === "ErroCod" && (
          <div className="h-screen bg-[#CCCCCC] flex justify-center">
            <div className="grid content-center">
              <div className="bg-[#EEEEBB] border w-11/12 md:w-[40rem] h-11/12 md:h-[40rem] grid content-center md:rounded-xl rounded-2xl">
                <div className="text-center text-5xl font-bold mt-5 md:mt-0">
                  <h1>
                    Número de Programa Inválido!!!
                  </h1>
                  <h3>
                    Digite entre 021 e 025!!!
                  </h3>
                </div>

                <div className="flex justify-center mb-5 md:mb-0">
                  <div className="text-3xl mx-4 p-2 font-bold">
                    <button
                      className="min-w-full md:w-72 border p-2 bg-green-600 rounded-full border border-black"
                      onClick={handleVolta}
                    >
                      tentar novamente
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeJogar;
