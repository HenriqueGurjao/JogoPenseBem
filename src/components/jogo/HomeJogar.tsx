import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react";
import { useState } from "react";

function HomeJogar() {
  const [playGame, setPlayGame] = useState<"pergunta" | "jogar" | "ErroCod">(
    "pergunta"
  );
  const [programa, setPrograma] = useState<string>("");
  const [visor1, setVisor1] = useState<string>("");
  const [visor2, setVisor2] = useState<string>("");
  const [num, setNum] = useState<number>(1);
  const [tentativa, setTentativa] = useState<number>(1);
  const [pontos, setPontos] = useState<number>(0);

  const gabaritos: Record<string, string[]> = {
    "021": ['B', 'A', 'A', 'D', 'C', 'B', 'D', 'A', 'A', 'D', 'C', 'B', 'B', 'C', 'D', 'D', 'D', 'D', 'B', 'D', 'A', 'B', 'A', 'A', 'D', 'A', 'C', 'A', 'C', 'C'],
    "022": ['B', 'D', 'A', 'A', 'A', 'B', 'D', 'A', 'C', 'A', 'C', 'C', 'B', 'D', 'D', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'A', 'B', 'C', 'A', 'A'],
    "023": ['B', 'A', 'D', 'B', 'B', 'B', 'C', 'D', 'C', 'D', 'D', 'D', 'A', 'C', 'A', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'D', 'B', 'C'],
    "024": ['B', 'A', 'D', 'B', 'B', 'D', 'C', 'C', 'C', 'B', 'A', 'D', 'B', 'A', 'D', 'B', 'D', 'A', 'B', 'B', 'D', 'A', 'B', 'D', 'A', 'B', 'C', 'C', 'D', 'D'],
    "025": ['C', 'C', 'D', 'D', 'A', 'A', 'C', 'D', 'B', 'B', 'D', 'D', 'B', 'B', 'D', 'D', 'C', 'B', 'B', 'B', 'D', 'A', 'B', 'D', 'D', 'D', 'C', 'D', 'C', 'B'],
  };

  const handleJogar = () => {
    if (programa === "") {
      setPlayGame("ErroCod");
      return;
    }

    const selectedGabarito = gabaritos[programa];

    if (selectedGabarito) {
      setPlayGame("jogar");
      setVisor1(`${programa} -> ${num}: `);
      setVisor2(`Tentativa ${tentativa} de 3`);
    } else {
      setPlayGame("ErroCod");
    }
  };

  const handleVolta = () => {
    setPlayGame("pergunta");
    setPrograma("");
    setVisor1("");
    setVisor2("");
    setNum(1);
    setTentativa(1);
    setPontos(0);
  };

  const handleSairDoJogo = () => {
    window.location.href = "http://localhost:5173/home";
    window.location.reload();
  };

  const jogar = (resposta: string) => {
    setVisor1(`${programa} -> ${num}: ${resposta}`);
    
    const respostaCorreta = gabaritos[programa];
  
    if (respostaCorreta && respostaCorreta[num - 1] === resposta) {
      if (tentativa === 1) setPontos((prevPontos) => prevPontos + 3);
      else if (tentativa === 2) setPontos((prevPontos) => prevPontos + 2);
      else if (tentativa === 3) setPontos((prevPontos) => prevPontos + 1);
  
      setNum((prevNum) => prevNum + 1);
      setTentativa(1);
      setVisor1(`${programa} -> ${num}: `);
      setVisor2(`Tentativa ${tentativa} de 3`);
    } else {
      setTentativa((prevTentativa) => prevTentativa + 1);
      setVisor2(`Tentativa ${tentativa} de 3`);
  
      if (tentativa > 3) {
        setNum((prevNum) => prevNum + 1);
        setTentativa(1);
        setVisor1(`${programa} -> ${num}: `);
        setVisor2(`Tentativa ${tentativa} de 3`);
      }
    }
  
    if (num > 30) {
      setVisor1("***FIM***");
      setVisor2(`Pontuação: ${pontos}`);
    }
  };
  

  return (
    <div>
      {playGame === "pergunta" && (
        <div className="h-screen bg-[#CCCCCC] flex justify-center">
          <div className="grid content-center">
            <div className="bg-[#EEEEBB] border w-11/12 md:w-[40rem] h-11/12 md:h-[40rem] grid content-center md:rounded-xl rounded-2xl">
              <div className="text-center text-5xl font-bold mt-5 md:mt-0">
                <h1>Insira código do jogo</h1>
              </div>
              <div className="flex justify-center my-10">
                <div className="flex justify-center w-full">
                  <input
                    type="text"
                    className="w-3/4 md:w-96 h-14 text-center rounded-full border border-black"
                    id="programa"
                    value={programa}
                    onChange={(e) => setPrograma(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center mb-5 md:mb-0">
                <div className="flex justify-center text-3xl mx-4 p-2 font-bold w-full">
                  <button
                    className="w-7/12 md:w-72 border select-none p-2 bg-green-600 rounded-full border border-black"
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
      {playGame === "jogar" && (
        <div className="h-screen bg-zinc-700 flex ">
          <div
            id="Box_jogo"
            className="border h-screen bg-[#CCCCCC] grid content-center "
          >
            <div className=" m-3 mb-20">
              <h1 className="font-['Open_Sans'] text-6xl my-4 text-center">
                Pense Bem
              </h1>
            </div>
            <div className=" m-3">
              <div className="flex justify-center">
                <p>
                  <input
                    type="text"
                    id="visor1"
                    value={visor1}
                    readOnly
                    className=" text-center h-16 border-2 border-black bg-black text-red-500 text-3xl font-bold mx-auto mb-4 rounded-2xl"
                  />
                </p>
              </div>
              <div className="flex justify-center">
                <p>
                  <input
                    type="text"
                    id="visor2"
                    value={visor2}
                    readOnly
                    className="text-center w-96  h-12 border-2 border-black bg-black text-white text-lg mx-auto mb-4 rounded-2xl"
                  />
                </p>
              </div>
            </div>
            <div className="m-6">
              <div className="flex justify-center">
                <div>
                  <button
                    type="button"
                    id="botaoA"
                    value="A"
                    className="w-32 h-32 m-3 hover:bg-red-600 select-none bg-red-500 border-2 border-black text-white text-2xl rounded-lg"
                    onClick={() => jogar("A")}
                  >
                    A
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    id="botaoB"
                    value="B"
                    className="w-32 h-32 m-3 hover:bg-yellow-600 bg-yellow-500 border-2 border-black text-white select-none text-2xl rounded-lg"
                    onClick={() => jogar("B")}
                  >
                    B
                  </button>
                </div>
              </div>
              <div className="flex justify-center content-stretch">
                <div>
                  <button
                    type="button"
                    id="botaoC"
                    value="C"
                    className="w-32 h-32 m-3 hover:bg-blue-600 bg-blue-500 border-2  border-black text-white select-none text-2xl rounded-lg"
                    onClick={() => jogar("C")}
                  >
                    C
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    id="botaoD"
                    value="D"
                    className="w-32 h-32 m-3 hover:bg-green-600 bg-green-500 border-2 border-black select-none text-white text-2xl rounded-lg"
                    onClick={() => jogar("D")}
                  >
                    D
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-5 md:mb-0">
              <div className="text-xl mx-2 p-2 font-bold">
                <button
                  className="min-w-full md:w-52 border p-2 bg-[#EEEEBB] rounded-full select-none border-black"
                  onClick={handleVolta}
                >
                  inserir outro codigo
                </button>
              </div>
              <div className="text-xl mx-2 p-2 font-bold">
                <button
                  className="min-w-full md:w-52  p-2 bg-[#EEEEBB] rounded-full border select-none border-black"
                  onClick={handleSairDoJogo}
                >
                  sair
                </button>
              </div>
            </div>
          </div>
          <div className=" grid content-center  w-full h-screen">
              <div className="flex justify-between   w-full h-screen">
                <div className=" grid content-center ml-6">
                  <div className="" ><ArrowCircleLeft className="w-20 h-20 text-sky-500 hover:text-sky-700 cursor-pointer "/></div>
                </div>
                <div className=" grid content-center" >




                  <h1 className=" text-6xl">livro</h1>


                </div>
                <div className=" grid content-center mr-6">
                  <div className="" ><ArrowCircleRight className="w-20 h-20 text-sky-500 hover:text-sky-700 cursor-pointer"/></div>
                </div>
              </div>
            

          </div>
          
          
        </div>
      )}
      {playGame === "ErroCod" && (
        <div className="h-screen bg-[#CCCCCC] flex justify-center">
          <div className="grid content-center">
            <div className="bg-[#EEEEBB] border w-11/12 md:w-[40rem] h-11/12 md:h-[40rem] grid content-center md:rounded-xl rounded-2xl">
              <div className="text-center text-5xl font-bold mt-5 md:mt-0">
                <h1>Número de Programa Inválido!!!</h1>
                <h3>Digite entre 021 e 025!!!</h3>
              </div>
              <div className="flex justify-center mt-8 mb-5 md:mb-0">
                <div className="text-3xl mx-4 p-2 font-bold">
                  <button
                    className="min-w-full md:w-72 border p-2 bg-green-600 select-none rounded-full border border-black"
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
  );
}

export default HomeJogar;
