import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"

function Note(){

    return(
    
        <>
    
            <Navbar></Navbar>

                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white text-[48px] text-left min-[1400px]:text-[70px] xl:text-[50px]">Airnote
                    </h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Logo per una marca di auricolari bluetooth.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <img className="scale-105 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="airnotev2.svg" alt=""/>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">software usati:</h3>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-white text-[17px] text-left min-[1400px]:text-[26px]  flex justify-center items-center  min-[768px]:text-[22px] list-disc'>
                    Illustrator
                    </li>
                    <li className='text-white text-[17px]  flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                    Photoshop
                    </li>
                </ul> 


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white scale-120 text-left min-[1400px]:text-[70px] text-[30px]">Creazione del logo</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white text-[17px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Per la creazione del logo mi sono ispirato al 
                    nome della marca di auricolari, e da questo punto di partenza ho disegnato una nota musicale che vada a ricordare allo stesso tempo due auricolari bluetooth, creando cosi un'immagine unica e identificatica.
                        <br />
                        <br />
                    Sotto di essa in bella vista compare il nome della marca di auricolari "Airnote".
                        <br />
                        <br />
                    Il risultato ottenuto è un logo professionale, estremamente indentificativo e minimal.
                    </p>
                </div>


                <div className="flex justify-center items-center flex-col">
                    <p className="text-white text-[17px] mt-[200px] text-left font-semibold min-[1400px]:text-[26px] min-[768px]:text-[22px]">Risultato finale:</p>
                        <img className="scale-[.60] xl:scale-[.80] min-[1400px]:scale-[.90] min-[768px]:scale-[.90] min-[768px]:mt-[200px] min-[1400px]:mt-[200px] xl:mt-[200px]" 
                        src="airnote per sito.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[100px] min-[1400px]:mt-[100px] xl:mt-[100px]">
                <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#000000]" code="#000000"></ColorPallet>
                    <ColorPallet className="bg-[#ffffff]" code="#ffffff"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[100px]">
                    <p className=" text-white text-[17px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">I suoi colori nero e bianco vanno a richiamare semplicità, 
                    professionalità e serietà.
                    </p>
                </div>


                <div className="flex justify-center items-center mt-[200px]">
                    <h3 className=" text-white text-[23px] text-left min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>

                <div className="flex justify-center items-center mt-[90px]">
                <p className=" text-white text-[17px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per questo logo è il Gotham Bold</p>
                </div>

                <div className="flex justify-center items-center mt-[300px]">
                <h1 className=" text-white scale-120 text-left min-[1400px]:text-[70px] text-[30px]">Mockup</h1>
                </div>

                
                <div className="flex justify-center items-center flex-col min-[1400px]:mt-[300px]">
                    <img className=" w-[400px] h-[400px]  min-[1400px]:scale-[1.30] min-[1400px]:mt-[-110px]" src="airnotev2.svg" alt="" />
                </div>


                <div className="h-[500px]"></div>


            <FooterWeb></FooterWeb>

        </>
    
    )
    
}
    


export default Note