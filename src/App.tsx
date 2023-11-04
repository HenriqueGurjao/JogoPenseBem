import "./App.css";

function App() {



  
  return (
    <div className="h-screen bg-[#CCCCCC] flex justify-center ">
      <div className=" grid content-center">
        <div className="bg-[#EEEEBB] w-[65rem] h-[50rem] grid content-evenly">
          <div className="text-center text-5xl font-bold">
            <h1>Bem vindo ao Pense Bem</h1>
          </div>

          <div className="flex justify-center">
            <div className="">
              <input type="text" className="w-96 h-14 text-center"/>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-3xl mx-4 p-2 font-bold">
              <button className="w-40 border bg-green-600">Jogar</button>
            </div>
            <div className="text-3xl mx-4 p-2 font-bold">
              <button className="w-40 border bg-green-600">Add Livro</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
