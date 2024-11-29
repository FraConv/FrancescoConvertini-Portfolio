import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"
import { Link } from 'react-router-dom';

function SuperCounter(){

    return(

        <>

            <Navbar></Navbar>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 text-[48px] text-left min-[1400px]:text-[70px] xl:text-[50px]">Super Counter</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Applicazione web che permette di usare un contatore in 
                    maniera originale.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <img className="scale-105 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80] border-white border-[2px]" src="supercountermario.svg" alt=""/>
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
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Logo design:</h3>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-white text-[17px] flex justify-center items-center min-[1400px]:text-[26px] min-[768px]:text-[22px] list-disc'>
                        Illustrator
                    </li>
                </ul> 


                <div className="flex justify-center items-center mt-[100px]">
                    <div className="w-[194px] h-[64px] rounded-full mt-[200px] min-[1400px]:w-[194px]">
                        <Link className="w-10 h-[200px] border-black" to="/App Super Counter">
                            <div  className="border-[3px] border-[#db8f8f] w-[194px] h-[60px] xl:hover:bg-[#db8f8f] xl:hover:rounded-full 
                            transition-colors duration-150 rounded-full mt-[16px]" >     
                                <h6 className="mt-[-15px] p-5 pt-[18px] text-white xl:hover:text-black Stransition-colors duration-150">Prova applicazione</h6>
                             </div>
                        </Link>
                    </div>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 text-left min-[1400px]:text-[70px] text-[30px]">Design web app</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[17px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il design dell'app è basato su uno stile molto minimal 
                    per via del contenuto che offre e per un esperienza pulita.
                        <br />
                        <br />
                    L'header comprende solo il logo.
                        <br />
                        <br />
                    Allineati al centro troviamo l'icona di una moneta con accanto il numero 0, poco sotto troviamo il famoso blocco di mattoni di Super Mario.
                        <br />
                        <br />
                    Cliccando avremmo un'animazione in cui il blocco si muoverà e da esso uscirà una moneta, facendo ciò il punteggio in alto aumenterà di 1.
                    </p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#213a46]" code="##213a46"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#181c20]" code="#181c20"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#232630]" code="#232630"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#ea580c]" code="#ea580c"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#fbbf24]" code="#fbbf24"></ColorPallet>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#f59e0b]" code="#f59e0b"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 text-left min-[1400px]:text-[70px] text-[23px]">Versione mobile</h1>
                </div>

                <div className="flex justify-center items-center mt-[90px]">
                <p className=" text-white text-[17px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Per la versione mobile il design del sito rimane invariato e privo di eventuali bug.</p>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                <img className=" scale-[.80] mt-[90px]  min-[1400px]:scale-[1.26] min-[1400px]:mt-[200px] xl:scale-[1.0]
                xl:mt-[130px] min-[768px]:scale-[.43] min-[768px]:mt-[-200px] border-white border-[1px]" src="mobilecount.svg" alt="" />
                </div> 


                <div className=" h-[900px]">

                </div>

            <FooterWeb></FooterWeb>

        </>

    );

}



export default SuperCounter;