import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"
import {Link} from 'react-router-dom';

function LuckRollDescription(){

    return(
        
        <>


            <Navbar></Navbar>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-black scale-120 min-[1400px]:text-[70px] text-left xl:text-[50px]">Lucky Roll</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[18px] min-[1400px]:text-[26px] min-[768px]:text-[22px]">Applicazione web che simula il lancio dei dadi a sei faccie.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <img src="sfondorollnew.svg" alt=""/>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h2 className=" text-black text-[29px] min-[1400px]:text-[35px]">Programmazione:</h2>
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
                    <h2 className=" text-black text-[29px] min-[1400px]:text-[35px]">Logo design:</h2>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-black text-[18px] flex justify-center items-center min-[1400px]:text-[26px] min-[768px]:text-[22px] list-disc'>
                        Illustrator
                    </li>
                </ul> 


                <div className="flex justify-center items-center mt-[100px]">
                    <div className="w-[194px] h-[64px] rounded-full mt-[200px] min-[1400px]:w-[194px]">
                        <Link className="w-10 h-[200px] border-black" to="/App Lucky Roll">
                            <div  className="border-[3px] border-[#db8f8f] w-[194px] h-[60px] xl:hover:bg-[#db8f8f] xl:hover:rounded-full 
                            transition-colors duration-150 rounded-full mt-[16px]" >     
                                <h6 className="mt-[-15px] p-5 pt-[18px] text-black xl:hover:text-black Stransition-colors duration-150">Prova applicazione</h6>
                             </div>
                        </Link>
                    </div>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-black scale-120 min-[1400px]:text-[70px] text-left">Creazione del logo</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Per la creazione del logo mi sono ispirato ad un dado a sei faccie, 
                    illustrandone solo gli angoli e il punteggio di una delle faccie, che in questo caso è il 6.
                        <br />
                        <br />
                    Il risultato è un logo indentificativo bello da vedere e in tema con il sito.</p>
                </div>

              
                <div className="flex justify-center items-center flex-col ">
                    <p className="text-black text-[18px] mt-[200px] text-left font-semibold min-[1400px]:text-[26px] min-[768px]:text-[22px]">Fase di progettazione:</p>
                        <img className="scale-[.55] xl:scale-[.23] min-[1400px]:scale-[.23] min-[768px]:scale-[.40]" src="Roll v2 p2.svg" alt="" />
                </div>


                <div className="flex justify-center items-center flex-col min-[1400px]:mt-[-800px]">
                    <p className="text-black text-[18px] text-left mt-[400px] font-semibold min-[1400px]:text-[26px] min-[768px]:text-[22px]">Risultato finale:</p>
                        <img className="scale-[.65] xl:scale-[.33] min-[1400px]:scale-[.30] min-[768px]:scale-50" src="Roll v2.50.svg" alt="" />
                </div>
             

                <div className="flex justify-center items-center mt-[100px] min-[1400px]:mt-[-300px]">
                    <h3 className=" text-black text-[29px] min-[1400px]:text-[35px]">Color palette logo:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#ffffff]" code="#ffffff"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[100px]">
                    <p className=" text-black text-[18px] min-[1400px]:text-[26px] min-[768px]:text-[22px] text-left">Il suo colore bianco 
                    va ha ricchiamare semplicità e legerezza.</p>
                </div>


                <div className="flex justify-center items-center mt-[200px]">
                    <h3 className=" text-black text-[29px] min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per questo logo è il Roboto Mono Medium.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-black scale-120 min-[1400px]:text-[70px] text-left">Design web app</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il design della app è basato su uno stile 
                    minimal per via del contenuto che offre e per un esperienza pulita.
                        <br />
                        <br />
                    La pagina è strutturata con il logo e tutti gli elementi centrati, eccetto per le decorazioni, che sarebbero due elementi 
                    quadrati di diversa dimensione che vanno a rapresentare dei dadi con il punteggio di 6. 
                        <br />
                        <br />
                    Una scritta al centro dell'app recita "Do you feel lucky?" con sotto un quadrato, ovvero il dado, e una scritta che recita Roll the dice! e ancora più 
                    sotto si trova un bottone, per il lancio del dado.
                        <br />
                        <br />
                    Ad ogni click sul tasto Roll il dado si muoverà con una breve animazione, 
                    dando un punteggio casuale da 1 a 6.
                    Al primo click su Roll la scritta Roll the dice! cambierà in Roll again!, e durante il lancio la scritta cambierà in Rolling.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-black text-[29px] min-[1400px]:text-[35px]">Color palette body:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#001743] mt-[100px]" code="#001743"></ColorPallet>
                </div>
                
                
                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#000000]" code="#000000"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[150px]">
                    <h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette elements:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#D7DFFF]" code="#D7DFFF"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#000000]" code="#000000"></ColorPallet>
                </div>

                
                <div className="flex justify-center items-center mt-[150px]">
                    <h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette typograph:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#ffffff]" code="#ffffff"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[200px]">
                    <h3 className=" text-black text-[29px]  text-left min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per l'applicazione è Encode Sans.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-black scale-120 text-left min-[1400px]:text-[70px]">Versione mobile</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className="text-black text-[18px] flex justify-center items-center text-left  min-[1400px]:text-[26px] min-[768px]:text-[22px]">Per la 
                    versione mobile il design dell'app rimane invariato, eccetto per 
                    le decorazioni che cambieranno posizione, per il resto l'app fornisce un ottima UI Design anche su dispositivi mobile.</p>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <img className=" scale-[.80] min-[1400px]:scale-[.56] xl:scale-[.50] min-[768px]:scale-[.63]" src="telroll.svg" alt="" />
                </div> 


                <div className="h-[500px] mt-[300px]"></div>


            <FooterWeb></FooterWeb>


        </>
    
    )

}



export default LuckRollDescription