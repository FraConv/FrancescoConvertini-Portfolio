import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"


function FrancescoConvertiniPortfolioDescription(){

    return(

        <>

            <Navbar></Navbar>

                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className="text-white text-[48px] text-left min-[1400px]:text-[70px] xl:text-[50px]">
                    Francesco Convertini</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">
                    Portfolio personale per far conoscere le proprie abilità di Graphic Design e programazzione.</p>
                </div>


                <div className="scaflex justify-center items-center mt-[300px]">
                    <img className="scale-105 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80] border-white border-[2px]" src="mio.svg" alt=""/>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">
                        Programmazione:
                    </h3>
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
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">
                        Logo design:
                    </h3> 
                </div>


                <ul  className="mt-[90px]">               
                    <li className='text-white text-[17px] flex justify-center items-center min-[1400px]:text-[26px] min-[768px]:text-[22px] list-disc'>
                        Illustrator
                    </li>          
                </ul> 


                <div className="flex justify-center items-center mt-[300px]">         
                    <h1 className=" text-white scale-120 text-[30px] text-left min-[1400px]:text-[70px]">
                        Design sito web
                    </h1>   
                </div>


                <div className="flex justify-center items-center mt-[90px]">    
                    <p className=" text-white text-[17px]  text-left min-[1400px]:text-[26px]  min-[768px]:text-[22px]">Il design del sito è basato su uno stile semplice e ordinato, 
                        con pochi elementi sullo schermo per un esperienza utente pulita. 
                            <br />
                            <br />
                        La navbar ha un design unico e originale, e comprende il logo alla sinistra e alla destra le
                        opzioni: Home, Chi sono, Portfolio e Contatti.
                            <br />
                            <br />
                         Il sito si apre con un loader composto da due rombi di diverso colore 
                        e dimensione che girano con tempi diversi. 
                            <br />
                            <br />
                        Alla fine del caricamento si viene portati nella home del sito, con a sinistra la descrizione del sito e a destra in 
                        bella vista una foto personale, sotto invece possiamo trovare vari testi su diversi argomenti di design. 
                            <br />
                            <br />
                        Cliccando sull'opzione "Chi sono" l'utente verrà portato in una pagina dove ci saranno
                        varie informazioni personali tra cui le varie skill con accanto le rispettive immagini.
                            <br />
                            <br />
                        Cliccando sull'opzione Portfolio si verrà portati in una pagina con varie
                        cards, ogni card mostra un progetto diverso di web design, graphic design e programmazione, descritto in maniera pulita, coerente e con le varie immagini.
                    </p>
                </div>


                <div className="flex justify-center items-center mt-[300px] flex-col">
                    <img className=" scale-105 mt-[100px]  min-[1400px]:scale-[.70]  min-[1400px]:mt-[-190px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80] border-white border-[2px]" src="mio.svg" alt="" />
                    <img className=" scale-105 mt-[100px] min-[1400px]:scale-[.70] min-[1400px]:mt-[-160px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80] border-white border-[2px]" src="mio2.svg" alt="" />
                    <img className=" scale-105 mt-[100px] min-[1400px]:scale-[.70] min-[1400px]:mt-[-160px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80] border-white border-[2px]" src="mio3.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#76abae]" code="#76abae"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#181c20]" code="#181c20"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#213a46]" code="#213a46"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#232630]" code="#232630"></ColorPallet>
                </div>

                <div className="flex justify-center items-center flex-col mt-[100px]">
                <h3 className=" text-white text-[23px]  text-left min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>

                <div className="flex justify-center items-center mt-[90px]">
                <p className=" text-white text-[17px]  text-left min-[1400px]:text-[26px]  min-[768px]:text-[22px]">Il font utilizzato per questo sito è il Poppins.</p>
                </div>

                <div className="flex justify-center items-center mt-[300px]">
                <h1 className=" text-white scale-120 text-[30px] text-left min-[1400px]:text-[70px]">Versione mobile</h1>
                </div>

                <div className="flex justify-center items-center mt-[90px]">
                <p className=" text-white text-[17px]  text-left min-[1400px]:text-[26px]  min-[768px]:text-[22px]">Per la versione mobile è stato fatto un lavoro accurato, per rendere il tutto 
                    più chiaro, leggibile e coerente possibile alle varie piattaformi mobile.</p>
                </div>

                <div className="flex justify-center items-center mt-[90px]">
                <img className=" scale-[.80] mt-[90px]  min-[1400px]:scale-[1.26] min-[1400px]:mt-[200px] xl:scale-[1.0]
                xl:mt-[130px] min-[768px]:scale-[.43] min-[768px]:mt-[-200px] border-white border-[1px]" src="mio4.svg" alt="" />
                </div> 

                <div className="h-[900px]"></div>

            <FooterWeb></FooterWeb>

        </>

    )

}

export default FrancescoConvertiniPortfolioDescription;