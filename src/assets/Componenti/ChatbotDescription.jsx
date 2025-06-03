import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";




function ChatbotDescription(){
    const navigate = useNavigate();
    return(
        <>

               <button onClick={() => navigate(-1)} className="absolute top-24 left-14 -translate-y-1/2 z-10 w-8 border-[2px] hover:border-[#76ABAE] border-[#76ABAE] shadow p-2 rounded-full">
                    <div className="ml-[-8px]">
                        <ChevronLeft color="white" size={28} />
                    </div>
                </button>

                <div className="grid grid-cols-1 overflow-hidden mt-[8rem] px-5 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[36px] text-left">Chatbot</h1>
                    <p className="text-white text-[20px] text-left mt-5">Piccolo chatbot che risponde a varie domande.</p>
                </div>
                <div className="justify-center grid grid-cols-1 items-center px-5 mt-8 rounded-3xl 2xl:ml-[-24%] 2xl:w-[60%] xl:w-[60%]">
                    <img className="rounded-3xl border-2 border-white" src="falsa ai.svg" alt="" />
                </div>

                <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 2xl:ml-[-24%]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Programmazione:</h3>
                    <ul className="gap-3 grid grid-cols-1 mt-5 pl-5 text-left">
                        <li className="list-disc">JavaScript</li>
                        <li className="list-disc">React</li>
                        <li className="list-disc">Tailwind css</li>
                    </ul>
                </div>

                 <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 2xl:ml-[-24%]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Design:</h3>
                    <ul className="gap-3 grid grid-cols-1 mt-5 pl-5 text-left">
                        <li className="list-disc">Figma</li>
                        <li className="list-disc">Illustrator</li>
                    </ul>
                </div>

                <div className="flex justify-start mt-10 px-5 2xl:ml-[-24%]">
                    <button className="relative overflow-hidden group border-[2px] border-[#76ABAE] text-white w-auto rounded-full mb-[7%] font-semibold focus:outline-none px-6 py-2 2xl:hover:border-[#76ABAE] 2xl:hover:text-[#173b3d]">
                        <span className="relative z-10 2xl:transition-all 2xl:duration-500">Vedi applicazione</span>
                        <span className="absolute left-0 top-0 h-full w-0 bg-[#76ABAE] z-0 transition-all duration-500 ease-in-out 2xl:group-hover:w-full"></span>
                    </button>
                </div>

                <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 xl:pr-96 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[30px] text-left">Sviluppo completo dell'app</h1>
                    <p className="text-white text-[20px] text-left mt-5">Il progetto "ChatBot" non è altro che una web app interattiva in cui ho realizzato sia il design personalizzato e la logica funzionale. 
                        <br />
                        <br />
                    L'app simula una conversazione con un assistente virtuale in grado di riconoscere alcune domande predefinite e rispondere in modo coerente e con un tono molto amichevole.
                        <br />
                        <br />
                    Ho realizzato l’interfaccia utilizzando React con Javascript e Tailwind css per lo stile, curando ogni dettaglio dell'esperienza utente, dalla gestione dello stato dei messaggi con useState all’animazione fluida degli elementi visivi. 
                        <br />
                        <br />
                    Tutta la logica conversazionale è scritta da zero, con risposte dinamiche basate su condizioni if e else e variabili..
                    </p>
                </div>

                <div className="justify-center grid gap-3 grid-cols-1 items-center px-5 mt-8 rounded-3xl 2xl:ml-[-24%] 2xl:w-[30%] xl:w-[30%]">
                    <img className="rounded-3xl border-2 border-white" src="falsa ai2.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white" src="falsa ai3.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white" src="falsa ai4.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[7rem]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#207381]" code="#207381"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#3b8f9e]" code="#3b8f9e"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#dbeafe]" code="#dbeafe"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#d1fae5]" code="#d1fae5"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#ffffff]" code="#ffffff"></ColorPallet>
                </div>

                 <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[23px] text-left">Tipografia</h1>
                    <p className="text-white text-[20px] text-left mt-5">Il font utilizzato per questo sito è Poppins.</p>
                </div>
             

            <div className="h-[500px]"></div>


        <FooterWeb></FooterWeb>


        </>

    );

}



export default ChatbotDescription;