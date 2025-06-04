import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";




function LuckyRollDescription(){
    const navigate = useNavigate();
    return(
        <>

               <button onClick={() => navigate(-1)} className="absolute top-24 left-14 -translate-y-1/2 z-10 w-8 bg-transparent border-[2px] hover:border-[#76ABAE] border-[#76ABAE] shadow p-2 rounded-full">
                    <div className="ml-[-8px]">
                        <ChevronLeft color="white" size={28} />
                    </div>
                </button>

                <div className="grid grid-cols-1 overflow-hidden mt-[8rem] px-5 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[36px] text-left">Portfolio Francesco Convertini</h1>
                    <p className="text-white text-[20px] text-left mt-5">Portfolio personale per far conoscere le proprie abilità di Design e programmazione.</p>
                </div>
                <div className=" justify-center grid grid-cols-1 items-center px-5 mt-8 rounded-3xl 2xl:ml-[-24%] 2xl:w-[70%] xl:w-[60%]">
                    <img className="rounded-3xl border-2 border-white" src="portfolio.svg" alt="" />
                </div>

                <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 2xl:ml-[-24%]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Programmazione:</h3>
                    <ul className="gap-3 grid grid-cols-1 mt-5 pl-5 text-left text-white">
                        <li className="list-disc">JavaScript</li>
                        <li className="list-disc">React</li>
                        <li className="list-disc">Tailwind css</li>
                    </ul>
                </div>

                 <div className="grid grid-cols-1 overflow-hidden mt-[3rem] px-5 2xl:ml-[-24%]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Design:</h3>
                    <ul className="gap-3 grid grid-cols-1 mt-5 pl-5 text-left text-white">
                        <li className="list-disc">Figma</li>
                        <li className="list-disc">Illustrator</li>
                    </ul>
                </div>

                <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 xl:pr-96 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[30px] text-left">Sviluppo completo del sito</h1>
                    <p className="text-white text-[20px] text-left mt-5">Il mio portfolio personale nasce dall’unione delle mie due passioni: il design e la programmazione. Ogni progetto è il risultato di un processo completo, che va dall’idea iniziale alla realizzazione finale, con attenzione a ogni tipo di dettaglio.
                        <br />
                        <br />
                    L’interfaccia è sviluppata interamente in React con Tailwind CSS, sfruttando componenti personalizzati per garantire coerenza visiva e massima flessibilità. 
                        <br />
                        <br />
                    Per la UI in oltre ho cercato di creare un stile unico, riconoscibile e bello da vedere, con forme smussate innovative, con tonalità di vario tipo di blu/azzuro e con una 
                    tipografia funzionale, come se fosse la creazione di una brand identity.
                        <br />
                        <br />
                    La struttura modulare mi consente di presentare i progetti come in una galleria interattiva, ispirata a app di streaming e portfolio da collezione. 
                        <br />
                        <br />
                    Il routing è gestito con React Router, mentre elementi dinamici come caroselli e hover effects sono creati con useState e animazioni CSS su misura.
                        <br />
                        <br />
                    Ogni sezione riflette una parte del mio percorso: sviluppo web, design grafico, branding, UI/UX e altro ancora. Dietro ogni progetto c’è uno studio mirato del colore, del layout e dell’esperienza utente, per raccontare non solo cosa so fare, ma anche come penso e progetto.
                        <br />
                        <br />
                    Il codice è pulito, responsive e accessibile, pensato per garantire una navigazione fluida su ogni dispositivo. 
                        <br />
                        <br />
                    In oltre, ho integrato ottimizzazioni SEO, dati strutturati e pratiche moderne per migliorare la visibilità e le performance.
                        <br />
                        <br />
                    Questo portfolio, che nel corso dei mesi ha avuto varie modifiche e molto probabilmente ne avrà anche in futuro, è una racconto interattivo del mio stile, delle mie competenze e della mia visione del design e dello sviluppo.
                    </p>
                </div>

                <div className=" justify-center grid grid-cols-1 items-center flex-col gap-3 px-5 mt-8 rounded-3xl 2xl:ml-[-24%]" >
                    <img className="rounded-3xl border-2 border-white  2xl:w-[60%] xl:w-[60%]" src="portfolio.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white  2xl:w-[60%] xl:w-[60%]" src="portfolio2.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white  2xl:w-[60%] xl:w-[60%]" src="portfolio3.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white  2xl:w-[60%] xl:w-[60%]" src="portfolio4.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white h-[30rem] 2xl:h-[40rem] xl:h-[40rem]" src="portfolio6.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[7rem]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#76ABAE]" code="#76ABAE"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#173b3d]" code="#173b3d"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#415e5f]" code="#415e5f"></ColorPallet>
                </div>
                 <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#ffffff]" code="#ffffff"></ColorPallet>
                </div>
                 <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#181c20]" code="#181c20"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#232630]" code="#232630"></ColorPallet>
                </div>

                 <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[23px] text-left">Tipografia</h1>
                    <p className="text-white text-[20px] text-left mt-5">Il font utilizzato per questo sito è Encode Sans.</p>
                </div>
             
            <div className="h-[500px]"></div>


        <FooterWeb></FooterWeb>


        </>

    );

}



export default LuckyRollDescription;