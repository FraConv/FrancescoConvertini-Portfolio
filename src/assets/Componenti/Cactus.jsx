import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"

function Cactus(){

    return(
    
        <>


            <Navbar></Navbar>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white text-[30px] text-left min-[1400px]:text-[70px] xl:text-[50px]">Agenda 2024
                    </h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white  text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Illustrazione per la copertina di un'agenda per il 2024.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <img className="scale-90 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="cactussv2.svg" alt=""/>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-white  text-[29px] text-left min-[1400px]:text-[35px]">software usati:</h3>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-white text-[18px] text-left min-[1400px]:text-[26px] flex justify-center items-center  min-[768px]:text-[22px] list-disc'>
                    Illustrator
                    </li>
                    <li className='text-white  text-[18px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                    Photoshop
                    </li>
                </ul> 


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white  text-[37px] text-left min-[1400px]:text-[70px]">Creazione dell'illustrazione</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white  text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">l'azienda Papper Moon per la copertina 
                    della sua nuova agenda vuole un'illustrazione di impatto a tema spaziale.
                        <br />
                        <br />
                    L'illustrazione a tema spaziale non comprende il solito razzo o il solito ufo, ma comprende in primo piano una specie di sonda che custodisce al suo interno una pianta, ovvero un cactus, mentre fluttua nello spazio profondo.
                        <br />
                        <br />
                    Lo scenario comprende lo spazio stellato dove in basso a sinistra si può notare una parte di un pianeta e in alto a destra due stelle cadenti di diverso colore.
                        <br />
                        <br />
                    In alto a sinistra si trova la scritta "Agenda 2024" mentre in basso a destra in maniera meno impattante si trova il nome dell'azienda ovvero "Papper Moon"
                    </p>
                </div>


                <div className="flex justify-center items-center flex-col">
                    <img className="scale-[.62] xl:scale-[.28] min-[1400px]:scale-[.35] min-[768px]:scale-[.40] min-[1400px]:mt-[-300px] xl:mt-[-400px]" src="cactusv3.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[100px] min-[1400px]:mt-[-100px] xl:mt-[-250px]">
                <h3 className=" text-white  text-[29px] text-left min-[1400px]:text-[35px]">Color palette:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#00ff00]" code="#00ff00"></ColorPallet>
                    <ColorPallet className="bg-[#006736]" code="#006736"></ColorPallet>
                    <ColorPallet className="bg-[#020214]" code="#020214"></ColorPallet>
                    <ColorPallet className="bg-[#7e7f7f]" code="#7e7f7f"></ColorPallet>
                    <ColorPallet className="bg-[#b2b2b2]" code="#b2b2b2"></ColorPallet>
                    <ColorPallet className="bg-[#2b2b2b]" code="#2b2b2b"></ColorPallet>
                    <ColorPallet className="bg-[#00ffff]" code="#00ffff"></ColorPallet>
                    <ColorPallet className="bg-[#0000ff]" code="#0000ff"></ColorPallet>
                    <ColorPallet className="bg-[#ff8f8f]" code="#ff8f8f"></ColorPallet>
                    <ColorPallet className="bg-[#f15a24]" code="#f15a24"></ColorPallet>
                    <ColorPallet className="bg-[#fbb03b]" code="#fbb03b"></ColorPallet>
                    <ColorPallet className="bg-[#ffffff]" code="#ffffff"></ColorPallet>
                    <ColorPallet className="bg-[#7d7d85]" code="#7d7d85"></ColorPallet>
                </div>

                
                <div className="flex justify-center items-center mt-[100px]">
                    <p className=" text-white  text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">I sui colori vivaci sono di impatto e vanno a richiamare energia e vivacità.
                    </p>
                </div>


                <div className="flex justify-center items-center mt-[200px]">
                    <h3 className=" text-white  text-[29px] text-left min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-white  text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per questa illustrazione è il Roboto Mono.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-white  scale-120 text-left">Mockup</h1>
                </div>
                    

                <div className="flex justify-center items-center flex-col min-[1400px]:mt-[300px]">
                    <img className=" scale-105 mt-[100px] min-[1400px]:scale-[.50]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="cactussv2.svg" alt="" />
                    <img className=" scale-105 mt-[100px] min-[1400px]:scale-[.50]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="cactussv3.svg" alt="" />
                </div>


                <div className="h-[500px]"></div>


            <FooterWeb></FooterWeb>


        </>
    
    )
    
}
    


    export default Cactus