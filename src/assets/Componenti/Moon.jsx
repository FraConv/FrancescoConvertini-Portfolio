import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"


function Moon(){

    return(
    
        <>
    

            <Navbar></Navbar>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-black text-[50px] text-left  min-[1400px]:text-[70px] xl:text-[50px]">Wanderlust Adventures
                    </h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Logo per un'agenzia di viaggi.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <img className="scale-105 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80] shadow-2xl" src="wa2.svg" alt=""/>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-black text-[29px] text-left min-[1400px]:text-[35px]">software usati:</h3>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-black text-[18px] text-left min-[1400px]:text-[26px]  flex justify-center items-center  min-[768px]:text-[22px] list-disc'>
                    Illustrator
                    </li>
                    <li className='text-black text-[18px]  flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                    Photoshop
                    </li>
                </ul> 


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-black scale-120  text-left min-[1400px]:text-[70px]">Creazione del logo</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">l'agenzia di viaggo Wanderlust Adventures ha richiesto un logo 
                    che trasmetta avventura, esplorazione e meraviglia.
                        <br />
                        <br />
                    Per creare un logo in linea alle esigenze dell'agenzia ho scelto di progettare un pittogramma che raffigurasse una rosa dei venti in una maniera semplice ma 
                    originale, con in basso il nome Wanderlust Adventures colorato allo stesso modo del pittogramma.
                        <br />
                        <br />
                    Il risultato ottenuto è un logo combinato di impatto che trasmette esplorazione, sicurezza e sopratutto voglia di viaggire.
                    </p>
                </div>


                <div className="flex justify-center items-center flex-col">
                    <p className="text-black text-[18px] mt-[200px] text-left font-semibold min-[1400px]:text-[26px] min-[768px]:text-[22px]">Fase di progettazione:</p>
                        <img className="scale-[.60] xl:scale-[.23] min-[1400px]:scale-[.30] min-[768px]:scale-[.40] min-[1400px]:mt-[-200px] xl:mt-[-300px]" src="wa3.svg" alt="" />
                            <p className="text-black text-[18px] mt-[200px] text-left font-semibold min-[1400px]:text-[26px] min-[1400px]:mt-[-100px] min-[768px]:text-[22px] xl:mt-[-200px]">
                            Risultato finale:</p>
                                <img className="scale-[.60] xl:scale-[.23] min-[1400px]:scale-[.37] min-[768px]:scale-[.40] min-[1400px]:mt-[-200px] xl:mt-[-300px]" src="wa4.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[100px] min-[1400px]:mt-[-10px] xl:mt-[-100px]">
                    <h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette logo:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#385666]" code="#385666"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[100px]">
                    <p className=" text-black text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il suo colore richiama la sicurezza e il mare.</p>
                </div>


                <div className="flex justify-center items-center mt-[200px]">
                    <h3 className=" text-black text-[29px] text-left min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per questo logo è Gotham-Medium.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-black scale-120 text-left min-[1400px]:text-[70px]">Mockup</h1>
                </div>


                <div className="flex justify-center items-center flex-col min-[1400px]:mt-[300px]">
                    <img className=" scale-105 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="wa2.svg" alt="" />
                    <img className=" scale-105 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="wa6.svg" alt="" />
                </div>


                <div className="h-[500px]"></div>


            <FooterWeb></FooterWeb>

        </>
    
    )
    
}
    


export default Moon