import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"
import {Link} from 'react-router-dom';

function LuckRollDescription(){

    return(
        
        <>


            <Navbar></Navbar>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 min-[1400px]:text-[70px] text-left xl:text-[50px]">Lucky Roll</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[18px] min-[1400px]:text-[26px] min-[768px]:text-[22px]">Applicazione web che simula il lancio dei dadi a sei faccie.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <img src="sfondorollnew.svg" alt=""/>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h2 className=" text-white text-[29px] min-[1400px]:text-[35px]">Programmazione:</h2>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-white text-[18px] text-left min-[1400px]:text-[26px]  flex justify-center items-center  min-[768px]:text-[22px] list-disc'>
                        HTML
                    </li>
                    <li className='text-white text-[18px]  flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        CSS
                    </li>
                    <li className='text-white text-[18px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        Javascript
                    </li>
                    <li className='text-white text-[18px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        Tailwind css
                    </li>
                    <li className='text-white text-[18px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                        React
                    </li>
                </ul> 


                <div className="flex justify-center items-center mt-[300px]">
                    <h2 className=" text-white text-[29px] min-[1400px]:text-[35px]">Logo design:</h2>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-white text-[18px] flex justify-center items-center min-[1400px]:text-[26px] min-[768px]:text-[22px] list-disc'>
                        Illustrator
                    </li>
                </ul> 


                <div className="flex justify-center items-center mt-[100px]">
                    <div className="w-[194px] h-[64px] rounded-full mt-[200px] min-[1400px]:w-[194px]">
                        <Link className="w-10 h-[200px] border-black" to="/App Lucky Roll">
                            <div  className="border-[3px] border-[#db8f8f] w-[194px] h-[60px] xl:hover:bg-[#db8f8f] xl:hover:rounded-full 
                            transition-colors duration-150 rounded-full mt-[16px]" >     
                                <h6 className="mt-[-15px] p-5 pt-[18px] text-white xl:hover:text-black transition-colors duration-150">Prova applicazione</h6>
                             </div>
                        </Link>
                    </div>
                </div>


                
                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 min-[1400px]:text-[70px] text-left">Design web app</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il design dell'app è basato su uno stile 
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
                    <h3 className=" text-white text-[29px] min-[1400px]:text-[35px]">Color palette:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#001743] mt-[100px]" code="#001743"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#D7DFFF]" code="#D7DFFF"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#000000]" code="#000000"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[200px]">
                    <h3 className=" text-white text-[29px] text-left min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per l'applicazione è Encode Sans.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 text-left min-[1400px]:text-[70px]">Versione mobile</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className="text-whitek text-[18px] flex justify-center items-center text-left  min-[1400px]:text-[26px] min-[768px]:text-[22px]">Per la 
                    versione mobile il design dell'app rimane invariato, eccetto per 
                    le decorazioni che cambieranno posizione rispetto al dispositivo che si usa, per il resto l'app fornisce un ottima UI anche su dispositivi mobile.</p>
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