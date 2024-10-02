import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"

function Thing(){

    return(

        <>

            <Navbar></Navbar>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-black text-[30px] text-left min-[1400px]:text-[70px] xl:text-[50px]">The Thing under the bed
                    </h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Illustrazione per la copertina di un libro di genere horror. </p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <img className="scale-90 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="La cosav2.svg" alt=""/>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h3 className=" text-black text-[29px] text-left min-[1400px]:text-[35px]">software usati:</h3>
                </div>


                <ul  className="mt-[90px]">
                    <li className='text-black text-[18px] text-left min-[1400px]:text-[26px] flex justify-center items-center  min-[768px]:text-[22px] list-disc'>
                    Illustrator
                    </li>
                    <li className='text-black text-[18px] flex justify-center items-center text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] mt-[10px] list-disc'>
                    Photoshop
                    </li>
                </ul> 


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-black text-[37px] text-left min-[1400px]:text-[70px]">Creazione dell'illustrazione</h1>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">lo scrittore Luke Smith per la copertina
                    del suo nuovo libro horror "The Thing under the bed" vuole un'illustrazione semplice che descriva il libro.
                        <br />
                        <br />
                    L'illustrazione comprende una stanza avvolta nell'oscurita, con tutti gli elementi che non si vedono completamente.
                        <br />
                        <br />
                    In basso a sinistra si puo vedere un tappeto rotondo, mentre nella parte superiore a destra un comodino, poco sotto il comodino si trova il letto da cui sbuca la 
                    creatura mostruosa dell'libro.
                        <br />
                        <br />
                    Il alto a destra in bella vista si trova il titolo del libro con poco più in basso il nome dell'autore.
                    Il risultato è una illustrazione di impatto, che mette curiosità e inquietudine."
                    </p>
                </div>


                <div className="flex justify-center items-center flex-col">
                    <img className="scale-[.55] xl:scale-[.23] min-[1400px]:scale-[.30] min-[768px]:scale-[.40]" src="mostro letto.svg" alt="" />
                </div>


                <div className="flex justify-center items-center mt-[100px] min-[1400px]:mt-[-100px]">
                    <h3 className=" text-black text-[29px] text-left min-[1400px]:text-[35px]">Color palette illustrazione:</h3>
                </div>


                <div className="flex justify-center items-center flex-col mt-[100px]">
                    <ColorPallet className="bg-[#040411]" code="#040411"></ColorPallet>
                    <ColorPallet className="bg-[#96381b]" code="#96381b"></ColorPallet>
                    <ColorPallet className="bg-[#4c0808]" code="#4c0808"></ColorPallet>
                    <ColorPallet className="bg-[#ffffff]" code="#ffffff"></ColorPallet>
                    <ColorPallet className="bg-[#ffff00]" code="#ffff00"></ColorPallet>
                    <ColorPallet className="bg-[#930909]" code="#930909"></ColorPallet>
                    <ColorPallet className="bg-[#a8a34a]" code="#a8a34a"></ColorPallet>
                    <ColorPallet className="bg-[#8c6239]" code="#8c6239"></ColorPallet>
                    <ColorPallet className="bg-[#0071bc]" code="#0071bc"></ColorPallet>
                    <ColorPallet className="bg-[#1b1464]" code="#1b1464"></ColorPallet>
                    <ColorPallet className="bg-[#a83e22]" code="#a83e22"></ColorPallet>
                </div>


                <div className="flex justify-center items-center mt-[100px]">
                    <p className=" text-black text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">I sui colori leggermente scuri vanno a dare un senso 
                    di tensione e inquietudine.
                    </p>
                </div>


                <div className="flex justify-center items-center mt-[200px]">
                    <h3 className=" text-black text-[29px] text-left min-[1400px]:text-[35px]">Tipografia:</h3>
                </div>


                <div className="flex justify-center items-center mt-[90px]">
                    <p className=" text-black text-[18px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per questa illustrazione è il Minion Variable Concept.</p>
                </div>


                <div className="flex justify-center items-center mt-[300px]">
                    <h1 className=" text-black scale-120 text-left">Mockup</h1>
                </div>


                <div className="flex justify-center items-center flex-col min-[1400px]:mt-[300px]">
                    <img className=" scale-90 mt-[100px] min-[1400px]:scale-[.70]  min-[1400px]:mt-[-210px] xl:scale-[.60]
                    xl:mt-[-70px] min-[768px]:scale-[0.80]" src="La cosav2.svg" alt="" />
                </div>


                <div className="h-[500px]"></div>

            <FooterWeb></FooterWeb>

        </>

    )

}

export default Thing