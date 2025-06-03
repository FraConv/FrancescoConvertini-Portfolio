import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";




function RedesignCrunchyrollDescription(){
    const navigate = useNavigate();
    return(
        <>

               <button onClick={() => navigate(-1)} className="absolute top-24 left-14 -translate-y-1/2 z-10 w-8 border-[2px] bg-transparent hover:border-[#76ABAE] border-[#76ABAE] shadow p-2 rounded-full">
                    <div className="ml-[-8px]">
                        <ChevronLeft color="white" size={28} />
                    </div>
                </button>

                <div className="grid grid-cols-1 overflow-hidden mt-[8rem] px-5 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[36px] text-left">Redesign Crunchyroll</h1>
                    <p className="text-white text-[20px] text-left mt-5">Redesign dimostrativo del sito Crunchyroll che punta ad avere una UI migliore.</p>
                </div>
                <div className="justify-center grid grid-cols-1 items-center px-5 mt-8 rounded-3xl 2xl:ml-[-24%] 2xl:w-[60%] xl:w-[60%]">
                    <img className="rounded-3xl border-2 border-white" src="CrunchyrollCards.svg" alt="" />
                </div>

                <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 2xl:ml-[-24%]">
                    <h3 className="  text-[23px] text-left min-[1400px]:text-[35px]">Programmazione:</h3>
                    <ul className="gap-3 grid grid-cols-1 mt-5 pl-5 text-left text-white">
                        <li className="list-disc">TypeScript</li>
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
                    <h1 className=" text-white text-[30px] text-left">Sviluppo completo del sito</h1>
                    <p className="text-white text-[20px] text-left mt-5">Questo progetto è un redesign di Crunchyroll, la celebre piattaforma streaming dedicata agli anime, in cui ho voluto reinterpretare completamente l’interfaccia utente mantenendo la sua identità visiva ma potenziandone la chiarezza, l’estetica e l’esperienza di navigazione.    
                        <br />
                        <br />
                    Ho progettato l’interfaccia, sviluppato i componenti e strutturato la pagina in React con particolare attenzione alla gerarchia visisva, all’interattività e alla scalabilità su dispositivi mobili.
                        <br />
                        <br />
                    Il sito è costruito con React e TypeScript e sfrutta useState per gestire in modo dinamico i contenuti delle varie sezioni, inclusi caroselli, toggle e contenuti condizionati. 
                        <br />
                        <br />
                    Ogni categoria presenta un carosello orizzontale completamente custom, con titoli, immagini, episodi, stagioni, lingua (sub/dub) e sinossi, generati dinamicamente per garantire modularità e riutilizzabilità. 
                        <br />
                        <br />
                    I pulsanti interattivi, le sezioni filtrabili (Premium / Free), e i micro-interaction sono tutti realizzati tramite Tailwind CSS, con animazioni fluide e responsive integrate nativamente.
                        <br />
                        <br />
                    A livello estetico, l’interfaccia si ispira all’immaginario anime, combinando una palette scura con gradienti, tipografia chiara, immagini ad alto contrasto e una composizione modulare a scorrimento. 
                        <br />
                        <br />
                    Il layout è interamente responsive e ottimizzato anche per breakpoint stretti, garantendo un’esperienza fluida su mobile e desktop. 
                        <br />
                        <br />
                    Il design comunica energia, ordine e immersione, rispettando lo stile visivo originale ma alleggerendone l’impatto visivo e migliorando l’accessibilità.
                    </p>
                </div>

                <div className="justify-center grid gap-3 grid-cols-1 items-center px-5 mt-8 rounded-3xl 2xl:ml-[-24%] 2xl:w-[30%] xl:w-[30%]">
                    <img className="rounded-3xl border-2 border-white" src="CrunchyrollCards.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[7rem]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#c2410c]" code="#c2410c"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#52525b]" code="#52525b"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#284452]" code="#284452"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#ea580c]" code="#ea580c"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#436d83]" code="#436d83"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#223a46]" code="#223a46"></ColorPallet>
                </div>

                 <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[23px] text-left">Tipografia</h1>
                    <p className="text-white text-[20px] text-left mt-5">Il font utilizzato per questo sito è Baloo 2.</p>
                </div>

            <div className="h-[500px]"></div>


        <FooterWeb></FooterWeb>


        </>

    );

}



export default RedesignCrunchyrollDescription;