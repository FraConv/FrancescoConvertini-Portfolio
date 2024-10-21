import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"

function Cartoons(){

    return(
    
        <>
    
            <Navbar></Navbar>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white text-[30px] text-left min-[1400px]:text-[70px] xl:text-[50px]">GreenThreads
                    </h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[20px] text-left min-[1400px]:text-[26px]
                    min-[768px]:text-[22px]">Logo per un negozio di abbigliamento che vende capi realizzati con materiali sostenibili.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <img className="scale-105 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="gt1.svg" alt=""/>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-white text-[29px] text-left min-[1400px]:text-[35px]">software usati:</h3>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-white text-[18px] text-left min-[1400px]:text-[26px] flex justify-center items-center  min-[768px]:text-[22px] list-disc'>
                    Illustrator
                    </li>
                    <li className='text-white text-[18px]  flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                    Photoshop
                    </li>
                </ul> 


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 text-left min-[1400px]:text-[70px]">Creazione del logo</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il negozio di abbigliamento sostenibile GreenThreads 
                    vorrebbe un logo che comunicasse sostenibilità, natura e moda.
                        <br />
                        <br />
                    Come soluzione ho optato per un logo davvero molto semplice, il pittogramma inquestione comprende un totale di quattro foglie divise in due coppie in fila.
                        <br />
                        <br />
                    Le foglie della stessa coppia sono unite tra di loro formando una base molto smussata, e la coppia della fila superiore è di dimensioni più grandi. 
                        <br />
                        <br />
                    In oltre questi elementi disposti cosi potrebbero andare a ricordare un intimo completo da donna.
                        <br />
                        <br />
                    Accanto a destra possiamo trovare il nome del negozio GreenThreads, dove la scritta green è colorata proprio di verde, come gli elementi naturali alla sinistra.
                        <br />
                        <br />
                    Il risultato è un logo bello e molto semplice ma che racconta tutto quello che deve raccontare natura, sostenibilità, sicurezza e abbigliamento. 
                    </p>
                </div>

                
                <div className="flex justify-center items-center flex-col">
                    <p className="text-white text-[18px] mt-[200px] text-left font-semibold min-[1400px]:text-[26px] min-[768px]:text-[22px]">Fase di progettazione:</p>
                        <img className="scale-[.75] xl:scale-[.33] min-[1400px]:scale-[.35] min-[768px]:scale-[.40] min-[1400px]:mt-[-200px] xl:mt-[-300px]" src="gt2.svg" alt="" />
                        <p className="text-white text-[18px] mt-[200px] text-left font-semibold min-[1400px]:text-[26px] min-[768px]:text-[22px] min-[1400px]:mt-[-100px] 
                        xl:mt-[-200px]">Risultato finale:</p>
                        <img className="scale-[.50] xl:scale-[.82] min-[1400px]:scale-[.87] min-[768px]:scale-[.60] min-[768px]:mt-[200px] min-[1400px]:mt-[200px] xl:mt-[200px]" src="green per sito.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[100px]  min-[1400px]:mt-[100px] xl:mt-[100px]">
                    <h3 className=" text-white text-[29px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#48b649]" code="#48b649"></ColorPallet>
                    <ColorPallet className="bg-[#000000]" code="#000000"></ColorPallet> 
                </div>


                <div className="flex justify-center items-center mt-[100px]">
                    <p className=" text-white text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il suo colore verde va a richiamare natura, 
                    energia e vitalità mentre il nero richiama serietà.</p>
                </div>


                <div className="flex justify-center items-center mt-[200px]">
                    <h3 className=" text-white text-[29px] text-left min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per questo logo è il Poppins Bold.</p>
                </div>

                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 text-left">Mockup</h1>
                </div>


                <div className="flex justify-center items-center flex-col min-[1400px]:mt-[300px]">
                    <img className=" w-[400px] h-[400px] min-[1400px]:scale-[1.30] min-[1400px]:mt-[-70px] xl:scale-[.90]
                    xl:mt-[-70px]" src="gt1.svg" alt="" />
                    <img className=" w-[400px] h-[400px]  min-[1400px]:scale-[1.30] min-[1400px]:mt-[210px] xl:scale-[.90]
                    xl:mt-[-10px]" src="gt4.svg" alt="" />
                </div>


                <div className="h-[500px]"></div>


            <FooterWeb></FooterWeb>

        </>
    
    )

}
    


export default Cartoons