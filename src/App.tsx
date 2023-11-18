import "./App.css";
import HomeJogar from "./components/jogo/HomeJogar";
import HomeAddJogo from "./components/HomeAddJogo";
import React, { useState, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Adicione um ouvinte de evento popstate para tratar as alterações de URL do navegador
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '');
      setCurrentPage(path);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Atualize a URL com base na página atual
  useEffect(() => {
    window.history.pushState(null, '', `/${currentPage}`);
  }, [currentPage]);

  const handleJogarClick = () => {
    setCurrentPage("jogar");
  };

  const handleAddJogoClick = () => {
    setCurrentPage("addJogo");
  };

  return (
    <div>
      <div>
        {currentPage === "home" && (
          <div className="h-screen bg-[#CCCCCC] flex justify-center">
            <div className="grid content-center">
              <div className="bg-[#EEEEBB] w-[65rem] h-[50rem] grid content-evenly">
                <div className="text-center text-5xl font-bold">
                  <h1>Bem vindo ao Pense Bem</h1>
                </div>
                <div className="flex justify-center">
                  <div className="text-3xl mx-4 p-2 font-bold">
                    <button className="w-48 border p-2 bg-green-600 rounded-full border select-none border-black" onClick={handleJogarClick}>JOGAR</button>
                  </div>
                  <div className="text-3xl mx-4 p-2 font-bold">
                    <button className="w-48 border p-2 bg-green-600 rounded-full border select-none border-black" onClick={handleAddJogoClick}>ADD LIVRO</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === "jogar" && <HomeJogar />}
        {currentPage === "addJogo" && <HomeAddJogo />}
      </div>
    </div>
  );
}

export default App;
