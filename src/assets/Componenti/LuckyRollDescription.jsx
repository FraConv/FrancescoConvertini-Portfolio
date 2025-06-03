import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";




function LuckyRollDescription(){
    const navigate = useNavigate();
    return(
        <>

               <button onClick={() => navigate(-1)} className="absolute top-24 left-14 -translate-y-1/2 z-10 w-8 border-[2px] hover:border-[#76ABAE] border-[#76ABAE] shadow p-2 rounded-full">
                    <div className="ml-[-8px]">
                        <ChevronLeft color="white" size={28} />
                    </div>
                </button>

                <div className="grid grid-cols-1 overflow-hidden mt-[8rem] px-5 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[36px] text-left">Lucky Roll</h1>
                    <p className="text-white text-[20px] text-left mt-5">Applicazione web che simula il lancio dei dadi a sei faccie.</p>
                </div>
                <div className="justify-center grid grid-cols-1 items-center px-5 mt-8 rounded-3xl 2xl:ml-[-24%] 2xl:w-[60%] xl:w-[60%]">
                    <img className="rounded-3xl border-2 border-white" src="sfondorollnew.svg" alt="" />
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
                        <a className="text-white hover:text-white" href="http://mimmosoftweb.netlify.app"><span className="relative z-10 2xl:transition-all 2xl:duration-500">Vedi applicazione</span></a>
                        <span className="absolute left-0 top-0 h-full w-0 bg-[#76ABAE] z-0 transition-all duration-500 ease-in-out 2xl:group-hover:w-full"></span>
                    </button>
                </div>

                <div className="grid grid-cols-1 overflow-hidden mt-[7rem] px-5 xl:pr-96 2xl:ml-[-24%]">
                    <h1 className=" text-white text-[30px] text-left">Sviluppo completo dell'app</h1>
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

                <div className="justify-center grid gap-3 grid-cols-1 items-center px-5 mt-8 rounded-3xl 2xl:ml-[-24%] 2xl:w-[60%] xl:w-[60%]">
                    <img className="rounded-3xl border-2 border-white" src="Sroll.svg" alt="" />
                    <img className="rounded-3xl border-2 border-white h-[30rem]" src="telroll.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[7rem]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#001743]" code="#001743"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#D7DFFF]" code="#D7DFFF"></ColorPallet>
                </div>
                <div className="flex justify-center items-center flex-col mt-[1rem]">
                    <ColorPallet className="bg-[#1b4455]" code="#1b4455"></ColorPallet>
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