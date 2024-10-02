import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"


function FrancescoConvertiniPortfolioDescription(){

    return(

        <>

            <Navbar></Navbar>

                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className="text-black text-[1.7em] ml-5 text-left  min-[1400px]:text-[70px] xl:text-[50px]">
                    FrancescoConvertini Portfolio</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[20px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">
                    Sito web personale per far conoscere e mostrare le proprie abilità di graphic design e programazzione.</p>
                </div>


                <div className="scaflex justify-center items-center mt-[300px]">
                    <img className="scale-105 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80] shadow-2xl" src="mioo2.svg" alt=""/>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">
                        Programmazione:
                    </h3>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-black text-[18px] text-left min-[1400px]:text-[26px]  flex justify-center items-center  min-[768px]:text-[22px] list-disc'>
                        HTML
                    </li>
                    <li className='text-black text-[18px]  flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        CSS
                    </li>
                    <li className='text-black text-[18px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        Javascript
                    </li>
                    <li className='text-black text-[18px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        Tailwind css
                    </li>
                    <li className='text-black text-[18px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        React
                    </li>                   
                </ul>       


                <div className="flex justify-center items-center mt-[300px]">            
                    <h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">
                        Logo design:
                    </h3> 
                </div>


                <ul  className="mt-[90px]">               
                    <li className='text-black text-[18px] flex justify-center items-center min-[1400px]:text-[26px] min-[768px]:text-[22px] list-disc'>
                        Illustrator
                    </li>          
                </ul> 


                <div className="flex justify-center items-center mt-[300px]">            
                    <h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px]">
                        Creazione del logo
                    </h1> 
                </div>


                <div className="flex justify-center items-center mt-[90px]">     
                    <p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px]  min-[768px]:text-[22px]">Il logo personale è un logo isometrico di tipo 
                        monogramma che va ha rappresentare due F (iniziale del mio nome) inclinate, specchiate e divise in tre parti leggermente distanziate.
                        Il risultato ottenuto è un logo minimal, elegante e identificativo. 
                    </p>    
                </div>


                <div className="flex justify-center items-center flex-col">
                    <p className="text-black text-[18px] mt-[200px] text-left font-semibold min-[1400px]:text-[26px] min-[768px]:text-[22px]">Fase di progettazione:</p>
                        <img className="scale-[.55] xl:scale-[.23] min-[1400px]:scale-[.27] min-[768px]:scale-[.40]" src="Cattura9.svg" alt="" />
                </div>
                
                
                <div className="flex justify-center items-center flex-col">
                    <p className="text-black text-[18px] mt-[200px] text-left font-semibold min-[1400px]:text-[26px] min-[768px]:text-[22px]">Fase di progettazione:</p>
                        <img className="scale-[.55] xl:scale-[.23] min-[1400px]:scale-[.27] min-[768px]:scale-[.40]" src="Logo mio.svg" alt="Francesco Convertini Logo" />
                </div>


                <div className="flex justify-center items-center mt-[100px] min-[1400px]:mt-[-300px]">               
                    <h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">
                        Color palette logo:
                    </h3>           
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#000000]" code="#000000"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[100px]">              
                    <p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px]  min-[768px]:text-[22px]">
                        Il suo colore nero va ha ricchiamare eleganza e serietà.
                    </p>    
                </div>


                <div className="flex justify-center items-center mt-[300px]">         
                    <h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px]">
                        Design sito web
                    </h1>   
                </div>


                <div className="flex justify-center items-center mt-[90px]">    
                    <p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px]  min-[768px]:text-[22px]">Il design del sito è basato su uno stile semplice e ordinato, 
                        con pochi elementi sullo schermo per un esperienza utente pulita. 
                            <br />
                            <br />
                        La navbar ha un design unico e originale e comprende il logo alla sinistra e alla destra le
                        opzioni: Home, Chi sono e Portfolio.
                            <br />
                            <br />
                         Il sito si apre con un loader con due rombi di diverso colore 
                        e dimensione che girano con tempi diversi. 
                            <br />
                            <br />
                        Dopo il loader si viene portati nella home della pagina, con a sinistra la descrizione del sito e a destra in 
                        bella vista una foto personale con sotto un bottone animato che cliccandolo porterà l'utente nella casella di posta eletronica per il contatto.
                            <br />
                            <br />
                        Cliccando sull'opzione Chi sono l'utente verrà portato nella pagina dove ci saranno
                        varie informazioni personali tra cui le skill di web design e graphic design con accanto le rispettive immagini.
                            <br />
                            <br />
                        Cliccando sull'opzione Portfolio si verrà portati in una pagina con varie
                        cards, ogni cards mostra un progetto personale diverso di web design e graphic design, descritto in maniera pulita, coerente e con le varie immagini.
                    </p>
                </div>


                <div className="flex justify-center items-center mt-[300px] flex-col">
                    <img className=" scale-105 mt-[100px]  min-[1400px]:scale-[.70]  min-[1400px]:mt-[-190px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80] shadow-2xl" src="mioo2.svg" alt="" />
                    <img className=" scale-105 mt-[100px] min-[1400px]:scale-[.70] min-[1400px]:mt-[-160px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80] shadow-2xl" src="mioo3.svg" alt="" />
                    <img className=" scale-105 mt-[100px] min-[1400px]:scale-[.70] min-[1400px]:mt-[-160px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80] shadow-2xl" src="mioo4.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[300px">
                    <h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette header:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#8bd3dd]" code="#ffcb3c"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[150px]">
                    <h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette body:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#faf5eb]" code="#ffffff"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[150px]">
                    <h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette footer:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#443e3e]" code="#443e3e"></ColorPallet>
                </div>

                <div className="flex justify-center items-center flex-col mt-[100px]">
                <h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>

                <div className="flex justify-center items-center mt-[90px]">
                <p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px]  min-[768px]:text-[22px]">Il font utilizzato per questo sito è il Poppins.</p>
                </div>

                <div className="flex justify-center items-center mt-[300px]">
                <h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px]">Versione mobile</h1>
                </div>

                <div className="flex justify-center items-center mt-[90px]">
                <p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px]  min-[768px]:text-[22px]">Per la versione mobile è stato fatto un lavoro accurato, per rendere il tutto 
                    più chiaro, leggibile e coerente possibile alle varie piattaformi mobile.</p>
                </div>

                <div className="flex justify-center items-center mt-[90px]">
                <img className=" scale-[.80] mt-[90px]  min-[1400px]:scale-[.26] min-[1400px]:mt-[-700px] xl:scale-[.25]
                xl:mt-[-780px] min-[768px]:scale-[.43] min-[768px]:mt-[-200px] shadow-2xl" src="mioo5.svg" alt="" />
                </div> 

                <div className="h-[900px]"></div>

            <FooterWeb></FooterWeb>

        </>

    )

}

export default FrancescoConvertiniPortfolioDescription;