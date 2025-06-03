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
                    <p className="text-white text-[20px] text-left mt-5">Lucky Roll è un'app web interattiva che simula il lancio di un dado con un'esperienza visiva ispirata al mondo del gioco e della casualità. 
                            <br />
                            <br />
                        In questo progetto ho curato sia l’interfaccia grafica che la logica funzionale, con particolare attenzione all’animazione del dado e al design responsive.
                            <br />
                            <br />
                        L’app si basa su React e utilizza useState per gestire lo stato del dado, lo stato di lancio e il messaggio di stato. L’effetto animato del dado in movimento è stato ottenuto tramite classi dinamiche in Tailwind CSS, restituendo un’interazione realistica e reattiva. 
                            <br />
                            <br />
                        Il bottone centrale “Roll” attiva un’animazione temporizzata e restituisce un numero casuale da 1 a 6, offrendo così un’interazione pulita.
                            <br />
                            <br />
                        Dal punto di vista estetico, l’interfaccia è progettata per evocare un’atmosfera da gioco notturno, con sfondo a gradiente blu scuro, immagini di dadi lanciati sullo sfondo, testi in bianco e un layout completamente centrato. 
                            <br />
                            <br />
                        Il design punta a essere miniaml con un'atmosfera suggestiva e misteriosa, lasciando che sia l’esperienza interattiva a catturare l’utente.
                    </p>
                </div>

                <div className=" justify-center grid grid-cols-1 items-center flex-col gap-3 px-5 mt-8 rounded-3xl 2xl:ml-[-24%]" >
                    <img className="rounded-3xl border-2 border-white  2xl:w-[60%] xl:w-[60%]" src="portfolio.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white  2xl:w-[60%] xl:w-[60%]" src="portfolio2.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white  2xl:w-[60%] xl:w-[60%]" src="portfolio3.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white  2xl:w-[60%] xl:w-[60%]" src="portfolio4.svg" alt="" />
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