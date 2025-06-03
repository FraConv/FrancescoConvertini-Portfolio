import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";




function MimmoSoftWebDescription(){
    const navigate = useNavigate();
    return(
        <>

               <button onClick={() => navigate(-1)} className="absolute top-24 left-14 -translate-y-1/2 z-10 w-8 border-[2px] bg-transparent hover:border-[#76ABAE] border-[#76ABAE] shadow p-2 rounded-full">
                    <div className="ml-[-8px]">
                        <ChevronLeft color="white" size={28} />
                    </div>
                </button>

                <div className="grid grid-cols-1 overflow-hidden mt-[8rem] px-5 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[36px] text-left">MimmoSoftWeb</h1>
                    <p className="text-white text-[20px] text-left mt-5">Sito web di guide tech su vari progetti con raspberry, MySQL e Python.</p>
                </div>
                <div className="justify-center grid grid-cols-1 items-center px-5 mt-8 rounded-3xl 2xl:ml-[-24%] 2xl:w-[60%] xl:w-[60%]">
                    <img className="rounded-3xl border-2 border-white" src="Homemimmo.svg" alt="" />
                </div>

                <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 2xl:ml-[-24%]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Programmazione:</h3>
                    <ul className="gap-3 grid grid-cols-1 mt-5 pl-5 text-left text-white">
                        <li className="list-disc">JavaScript</li>
                        <li className="list-disc">React</li>
                        <li className="list-disc">Tailwind css</li>
                    </ul>
                </div>

                 <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 2xl:ml-[-24%]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Design:</h3>
                    <ul className="gap-3 grid grid-cols-1 mt-5 pl-5 text-left text-white">
                        <li className="list-disc">Figma</li>
                        <li className="list-disc">Illustrator</li>
                    </ul>
                </div>

                <div className="flex justify-start mt-10 px-5 2xl:ml-[-24%]">
                    <button className="relative overflow-hidden group border-[2px] border-[#76ABAE] text-white w-auto rounded-full mb-[7%] font-semibold focus:outline-none px-6 py-2 2xl:hover:border-[#76ABAE] 2xl:hover:text-[#173b3d]">
                        <a className="text-white hover:text-white" href="http://mimmosoftweb.netlify.app"><span className="relative z-10 2xl:transition-all 2xl:duration-500">Vedi sito</span></a>
                        <span className="absolute left-0 top-0 h-full w-0 bg-[#76ABAE] z-0 transition-all duration-500 ease-in-out 2xl:group-hover:w-full"></span>
                    </button>
                </div>

                <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 xl:pr-96 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[30px] text-left">Sviluppo completo dell'sito</h1>
                    <p className="text-white text-[20px] text-left mt-5">Un portale tech progettato da zero, pensato per chi vuole imparare e sperimentare con Python, SQL e Raspberry Pi. 
                        <br />
                        <br />
                    Ho realizzato questo sito curando ogni aspetto, dal design fino al codice, con l’idea di creare non solo una raccolta di guide, ma un’esperienza immersiva per l’utente.
                        <br />
                        <br />
                    Il design è ispirato all’estetica cyber—con richiami visivi al codice che scorre, effetti tipo “Matrix” animati, e una palette scura che mette in risalto i contenuti tecnici. 
                        <br />
                        <br />
                    Ogni elemento è pensato per evocare il mondo della programmazione: dinamico, logico, ma anche affascinante.
                        <br />
                        <br />
                    Il sito è costruito in React e suddiviso in componenti riutilizzabili, come la navbar reattiva, animazioni personalizzate, un loader visivo e un footer tematico. 
                        <br />
                        <br />
                    La navigazione tra le sezioni è gestita con react-router-dom, garantendo fluidità e struttura. Il layout si adatta a tutti i dispositivi, offrendo un’esperienza coerente e funzionale anche in mobilità.
                        <br />
                        <br />
                    Un progetto che unisce la passione per la tecnologia alla cura per i dettagli, pensato per dimostrare la mia capacità di progettare ambienti digitali completi: funzionali, coerenti e con una forte identità visiva.
                    </p>
                </div>

                <div className="justify-center grid gap-3 grid-cols-1 items-center px-5 mt-8 rounded-3xl 2xl:ml-[-24%] 2xl:w-[60%] xl:w-[60%]">
                    <img className="rounded-3xl border-2 border-white" src="mimmo2.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white" src="mimmo3.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white" src="Homemimmo.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white h-[30rem]" src="mimmomobile.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[7rem]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#f9b65d]" code="#f9b65d"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#2b1f26]" code="#2b1f26"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#1b4455]" code="#1b4455"></ColorPallet>
                </div>

                 <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[23px] text-left">Tipografia</h1>
                    <p className="text-white text-[20px] text-left mt-5">Il font utilizzato per questo sito è Roboto Mono.</p>
                </div>
             

            <div className="h-[500px]"></div>


        <FooterWeb></FooterWeb>


        </>

    );

}



export default MimmoSoftWebDescription;