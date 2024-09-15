import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"

function Cactus(){

    return(
    
    <>

<Navbar></Navbar>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[200px] min-[1400px]:ml-[-250px] min-[1400px]:w-[900px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px]">
<h1 className=" text-black text-[30px] ml-5 text-left min-[1400px]:text-[70px] xl:text-[50px]">Agenda 2024
</h1>
</div>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[600px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px]">
<p className=" text-black text-[20px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Illustrazione per la copertina di un'agenda per il 2024.</p>
</div>

<img className=" w-[400px] h-[300px]  mt-[90px] ml-[-20px] pl-[20px] min-[1400px]:scale-[1.40] min-[1400px]:ml-[530px] min-[1400px]:mt-[-40px] xl:ml-[700px] xl:scale-[1.20]
xl:mt-[20px] min-[768px]:scale-[1.20] min-[768px]:mt-[100px]" src="cactussv2.svg" alt="" />

<div className="  w-[330px] h-[50px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Softwer usati:</h3>
</div>

<ul  className="  w-[240px] h-[30px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px]">
<li className='text-black text-[18px] ml-12 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] list-disc'>
Illustrator
</li>
<li className='text-black text-[18px] ml-12 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] list-disc'>
Photoshop
</li>
</ul> 

<div className="  w-[330px] h-[120px]  border-transparent border-[2px] ml-[-20px] mt-[250px] min-[1400px]:ml-[-250px] min-[1400px]:w-[1000px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px]">
<h1 className=" text-black text-[40px] ml-5 text-left min-[1400px]:text-[70px]">Creazione dell'illustrazione</h1>
</div>

<div className="  w-[330px] h-[630px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] min-[1400px]:h-[800px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px] min-[768px]:h-[780px] xl:h-[600px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">l'azienda Papper Moon per la copertina della sua nuova agenda vuole un'illustrazione di impatto a tema spaziale.
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

<img className=" w-[400px] h-[300px]  mt-[90px] ml-[-52px] pl-[20px] min-[1400px]:scale-[1.90] min-[1400px]:ml-[530px] min-[1400px]:mt-[-70px] xl:ml-[600px] xl:mt-[-20px]
xl:scale-[1.50] min-[768px]:scale-[1.50]" src="cactusv3.svg" alt="" />

<br />
<br />
<br />
<br />
<br />
<br />

<div className="  w-[330px] h-[70px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[600px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette illustrazione:</h3>
</div>

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
 
<div className="  w-[330px] h-[200px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">I sui colori vivaci sono di impatto e vanno a richiamare energia e vivacità.
</p>
</div>

<div className="  w-[330px] h-[70px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Tipografia:</h3>
</div>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[100px]  min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per questa illustrazione è il Roboto Mono.</p>
</div>

<div className="  w-[330px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[250px]  min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[-70px] min-[768px]:w-[500px]">
<h1 className=" text-black scale-120 ml-5 text-left">Mockup</h1>
</div>
    
<img className=" w-[400px] h-[300px]  mt-[90px] ml-[-20px] pl-[20px] min-[1400px]:scale-[1.30] min-[1400px]:ml-[530px] min-[1400px]:mt-[-70px] xl:ml-[600px] xl:scale-[1.20]
xl:mt-[20px] min-[768px]:scale-[1.20]" src="cactussv2.svg" alt="" />
<img className=" w-[400px] h-[300px]  mt-[90px] ml-[-20px] pl-[20px] min-[1400px]:scale-[1.30] min-[1400px]:ml-[530px] min-[1400px]:mt-[140px] xl:ml-[600px] xl:scale-[1.20]
xl:mt-[140px] min-[768px]:scale-[1.20]" src="cactussv3.svg" alt="" />

<div className="h-[500px]"></div>

<FooterWeb></FooterWeb>

    </>
    
    )
    
    }
    
    export default Cactus