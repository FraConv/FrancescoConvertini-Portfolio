import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"


function MimmoSoftWebDescription(){

    return(

        <>

            <Navbar></Navbar>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white text-[36px] min-[1400px]:text-[70px] text-left xl:text-[50px]">MimmoSoftWeb</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className="text-white text-[20px] min-[1400px]:text-[26px] min-[768px]:text-[22px] text-left">Sito web di guide tech su vari progetti 
                    con raspberry, MySQL e Python.</p>
                </div>


                <div className="scaflex justify-center items-center mt-[300px]">
                    <img src="homemimmo.svg" alt=""/>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Programmazione:</h3>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-white text-[17px] text-left min-[1400px]:text-[26px]  flex justify-center items-center  min-[768px]:text-[22px] list-disc'>
                        HTML
                    </li>
                    <li className='text-white text-[17px]  flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        CSS
                    </li>
                    <li className='text-white text-[17px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        Javascript
                    </li>
                    <li className='text-white text-[17px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        Tailwind css
                    </li>
                    <li className='text-white text-[17px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        React
                    </li>
                </ul> 
  

                <div className="flex justify-center items-center mt-[300px]">
                    <h2 className=" text-white text-[23px] min-[1400px]:text-[35px]">Logo design:</h2>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-white text-[17px] flex justify-center items-center min-[1400px]:text-[26px] min-[768px]:text-[22px] list-disc'>
                        Illustrator
                    </li>
                </ul> 


                <div className="flex justify-center items-center mt-[100px] hover:text-black    ">
                    <a href="https://mimmosoftweb.netlify.app" className=" border-[#db8f8f] border-[3px] w-[170px] h-[60px] rounded-full mt-10 decoration-none hover:border-[#db8f8f] focus:outline-none focus:ring 
                        focus:ring-transparent bg-transparent hover:text-black">
                      
                            <span className="absolute mt-[13px] ml-[-38px] font-semibold text-white">Vai al sito</span>
                        
                    </a>
                </div>
            

                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 min-[1400px]:text-[70px] text-[30px] text-left">Design sito web </h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[17px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il sito si presenta con l'avvio di un loader basato 
                    su quatro linee che si muovono su e giù in maniera assimetrica mentra cambiano colore. 
                        <br />
                        <br />
                    La home si presenta in maniera accattivante con uno sfondo scuro mentre dalla parte alta della pagina scendono fino al footer in maniera 
                    frenetica i caratteri katakana in stile Matrix colorati in bianco in modo tale che si abbinassero con il colore dello sfondo.
                        <br />
                        <br />
                    Il titolo del sito e la descrizione sono allineati verso sinistra mentre nella parte superiore (se il sito viene visualizzato con laptop e pc con schermi larghi) 
                    troviamo una navbar particolare, con il logo in alto a sinistra e il menù inserito in un contenitore rettangolare giallo con gli angoli inclinati.
                        <br />
                        <br />
                    Essendo che il sito parla di Raspberry e Python il menù comprende come opzioni Home, Raspberry e Python.
                        <br />
                        <br />
                    Cliccando su Raspberry o Python si verrà portati nella pagina della scelta degli argomenti, dove si deciderà che guida o progetto consultare 
                    cliccando sull'apposita card animata al hover.
                        <br />
                        <br />
                    Gli argomenti che trattano varie dinamiche tech sono esposti in maniera pulita e legibile con le varie immagini appropriate.
                    </p>
                </div>


                <div className="flex justify-center items-center mt-[300px] flex-col">
                    <img className=" scale-105 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px]  xl:scale-[.60]
                    xl:mt-[70px] min-[768px]:scale-[0.80]" src="homemimmo.svg" alt="" />
                    <img className=" scale-105 mt-[100px]  min-[1400px]:scale-[.70] min-[1400px]:mt-[-210px]  xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="mimmo2.svg" alt="" />
                    <img className=" scale-105 mt-[100px]  min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="mimmo3.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#f9b65d]" code="#f9b65d"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#2b1f26]" code="#2b1f26"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#1b4455]" code="#1b4455"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[200px]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[17px] text-left min-[1400px]:text-[26px] min-[768px]:text-[20px]">Il font utilizzato per questo sito è Roboto Mono.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 text-[30px] text-left min-[1400px]:text-[70px]">Versione mobile</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[17px] text-left min-[1400px]:text-[26px] min-[768px]:text-[20px]">Per la versione mobile il design 
                    rimane pressoché invariato e privo di eventuali bug.</p>
                </div>


             

            <div className="h-[500px]"></div>


        <FooterWeb></FooterWeb>


        </>

    );

}



export default MimmoSoftWebDescription;