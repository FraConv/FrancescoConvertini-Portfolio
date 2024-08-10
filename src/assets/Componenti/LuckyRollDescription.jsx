import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"
import { Link } from 'react-router-dom';

function LuckRollDescription(){

    return(

        <>

    <Navbar></Navbar>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[200px]  min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px] xl:text-[50px]">Lucky Roll</h1>
</div>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[600px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[20px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Applicazione web che simula il lancio dei dadi a sei faccie.</p>
</div>


<div className="  w-[330px] h-[50px]  border-transparent border-[2px] ml-[-20px] mt-[300px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Programmazione:</h3>
</div>

<ul  className="  w-[240px] h-[160px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]'>
HTML
</li>
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]'>
CSS
</li>
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]'>
Javascript
</li>
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]'>
Tailwind css
</li>
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]'>
React
</li>
</ul>       

<div className="  w-[330px] h-[0px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Logo design:</h3>
</div>

<ul  className="  w-[240px] h-[30px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]'>
Illustrator
</li>
</ul> 

<div className="  w-[194px] h-[64px] rounded-full  ml-[7px] mt-[200px]  min-[1400px]:ml-[-230px] min-[1400px]:w-[194px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<Link className=" w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-3550px]" to="/App Lucky Roll">
<div  className=" ml-[-2px] bg-[#d46767] w-[194px] h-[60px] rounded-full mt-[16px]" >     
<h6 className=" mt-[-40px] p-5 pt-[18px] text-white hover:text-white ">Prova applicazione</h6>
</div>
</Link>
</div>

<div className="  w-[330px] h-[120px]  border-transparent border-[2px] ml-[-20px] mt-[250px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px]">Creazione del logo</h1>
</div>

<div className="  w-[330px] h-[370px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Per la creazione del logo mi sono ispirato ad un dado a sei faccie, 
illustrandone solo gli angoli e il punteggio di una delle faccie, che in questo caso è il 6.
<br />
<br />
Il risultato è un logo indentificativo bello da vedere e in tema con il sito.</p>
</div>

<img className=" w-[330px] h-[300px]  mt-[100px] ml-[-85px] pl-[10px] min-[1400px]:ml-[520px] min-[1400px]:mt-[-230px] min-[1400px]:scale-[1.20]  xl:ml-[400px] xl:mt-[-70px]
" src="Roll v2 p2.svg" alt="" />
<img className=" w-[350px] h-[300px]  mt-[50px] ml-[-42px] pl-[20px] min-[1400px]:ml-[900px] min-[1400px]:mt-[-210px] min-[1400px]:scale-[1.40]  xl:ml-[770px] xl:mt-[-228px] 
xl:scale-[1.10] " src="Roll v2.svg" alt="" />

<div className="  w-[330px] h-[70px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette logo:</h3>
</div>

    <ColorPallet className="bg-[#5a5aba]" code="#5a5aba"></ColorPallet>
    <ColorPallet className="bg-[#000000]" code="#000000"></ColorPallet>

<div className="  w-[330px] h-[200px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il suo colore che tende verso il viola 
va ha ricchiamare il mistero (il mistero su che cosa potrebbe uscire ogni volta che si clicca sul tasto "roll") mentre il nero richiama eleganza e serietà.</p>
</div>

<div className="  w-[330px] h-[70px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Tipografia:</h3>
</div>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per questo logo è il Roboto Mono Medium.</p>
</div>

<div className="  w-[330px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[250px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px]">Design web app</h1>
</div>

<div className="  w-[330px] h-[720px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px] xl:h-[420px]
min-[1400px]:h-[720px] min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il design della app è basato su uno stile molto minimal per via del contenuto che offre e per un esperienza pulita.
L'header comprende solo il logo, posizionato al centro e il footer comprende il copyright del sito.
<br />
<br />
La pagina è strutturata con tutti gli elementi centrati in essa. 
    Una scritta al centro del sito recita "Do you feel lucky?" con sotto un quadrato, ovvero il dado, e una scritta che recita Roll the dice! e ancora più 
    sotto si trova un bottone per il lancio, animato all'hover.
    <br />
    <br />
Ad ogni click sul tasto Roll il dado si muoverà con una breve animazione, 
    dando un punteggio casuale da 1 a 6.
Al primo click su Roll la scritta Roll the dice! cambierà in Roll again!, e durante il lancio la scritta cambierà in Rolling.</p>
</div>

<div className="  w-[330px] h-[90px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[600px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette header:</h3>
</div>

    <ColorPallet className="bg-[#ffcb3c]" code="#ffcb3c"></ColorPallet>

<div className="  w-[330px] h-[50px]  border-transparent border-[2px] ml-[-20px] mt-[100px]  min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette body:</h3>
</div>

    <ColorPallet className="bg-[#faf5eb]" code="#faf5eb"></ColorPallet>

<div className="  w-[330px] h-[50px]  border-transparent border-[2px] ml-[-20px] mt-[100px]  min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette footer:</h3>
</div>

    <ColorPallet className="bg-[#443e3e]" code="#443e3e"></ColorPallet>

<div className="  w-[330px] h-[70px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Tipografia:</h3>
</div>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per questo sito è Encode Sans.</p>
</div>

<div className="  w-[330px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[250px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px]">Versione mobile</h1>
</div>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left  min-[1400px]:text-[26px] min-[768px]:text-[22px]">Per la versione mobile il design dell'app rimane invariato e privo di eventuali bug.</p>
</div>

<img className=" w-[700px] h-[400px] mt-[80px] ml-[-62px] pl-[20px] min-[1400px]:scale-[.99] min-[1400px]:ml-[400px] min-[1400px]:mt-[-100px]  xl:ml-[500px] xl:scale-[1.10]
xl:mt-[80px] min-[768px]:scale-[1.30]" src="lr2.svg" alt="" />

<div className="h-[500px]"></div>

<FooterWeb></FooterWeb>

        </>

    )

}

export default LuckRollDescription