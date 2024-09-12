import ColorPallet from "./ColorPallet";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar"
import { Link } from 'react-router-dom';

function SuperCounter(){

    return(

        <>

    <Navbar></Navbar>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[200px]  min-[1400px]:ml-[-250px] min-[1400px]:w-[700px]  xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px] xl:text-[50px]">Super Counter</h1>
</div>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[600px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[20px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Applicazione web che permette di usare un contatore in maniera originale.</p>
</div>

<img className="scale-105 mt-[100px] ml-[-20px] pl-[10px] min-[1400px]:scale-[.70] min-[1400px]:ml-[230px] min-[1400px]:mt-[-210px] xl:ml-[230px] xl:scale-[.60]
            xl:mt-[-70px] min-[768px]:scale-[0.80] shadow-2xl" src="supee.svg" alt=""/>

<div className="  w-[330px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[300px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
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

<div className="  w-[330px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Logo design:</h3>
</div>

<ul  className="  w-[240px] h-[30px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]'>
Illustrator
</li>
</ul> 

<div className="  w-[194px] h-[64px] rounded-full  ml-[7px] mt-[200px]  min-[1400px]:w-[194px] xl:w-[700px]
 min-[768px]:w-[500px] min-[768px]:ml-[-3550px] xl:ml-[-3550px] min-[1400px]:ml-[-200px]">
<Link className=" w-10 h-[200px] ml-[-100px] border-black min-[768px]:ml-[-3550px] " to="/App Super Counter">
<div  className=" ml-[-2px] border-[3px] border-[#d46767] w-[194px] h-[60px] xl:hover:bg-[#d46767] xl:hover:rounded-full transition-colors duration-150 rounded-full mt-[16px] min-[768px]:ml-[3580px] xl:ml-[3615px] min-[1400px]:ml-[-25px]" >     
<h6 className=" mt-[-15px] p-5 pt-[18px] text-black xl:hover:text-white transition-colors duration-150">Prova applicazione</h6>
</div>
</Link>
</div>

<div className="  w-[330px] h-[120px]  border-transparent border-[2px] ml-[-20px] mt-[250px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px]">Creazione del logo</h1>
</div>

<div className="  w-[330px] h-[570px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Per il logo ho creato degli elementi che ricordassero il blocco di mattoni di Super Mario con la moneta all'interno.
<br />
<br />
In oltre ho posizionato gli elementi in modo tale che ricordassero la S di Super.
<br />
<br />
a destra invece è posizionato il nome Super Counter, con la parola Super di un colore e la parola Counter di un altro,
in modo tale che andassero a richiamare i colori del pittogramma.
<br />
<br />
Il risultato è un logo identificativo che trasmette giocosità e divertimento e che racconta in breve l'app.
 </p>
</div>

<img className=" w-[330px] h-[300px]  mt-[100px] ml-[-85px] pl-[10px] min-[1400px]:ml-[520px] min-[1400px]:mt-[-230px] min-[1400px]:scale-[1.20] xl:ml-[200px] 
xl:mt-[-30px] xl:scale-[1.10] " src="sc4.svg" alt="" />
<img className=" w-[550px] h-[500px]  mt-[-100px] ml-[-72px] pl-[20px] scale-[1.55] min-[1400px]:ml-[820px] min-[1400px]:mt-[-310px] min-[1400px]:scale-[1.40]
 xl:ml-[530px] xl:mt-[-320px] xl:scale-[1.30]" src="super counter cop.svg" alt="" />

<div className="  w-[330px] h-[70px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette logo:</h3>
</div>

    <ColorPallet className="bg-[#ea580c]" code="#ea580c"></ColorPallet>
    <ColorPallet className="bg-[#fbbf24]" code="#fbbf24"></ColorPallet>
    <ColorPallet className="bg-[#f7931e]" code="#f7931e"></ColorPallet>

<div className="  w-[330px] h-[200px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">I suoi colori molto vivaci vanno a richiamare vivacità, vitalità e giocosità.</p>
</div>

<div className="  w-[330px] h-[70px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Tipografia:</h3>
</div>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il font utilizzato per questo logo è il Gotham Medium.</p>
</div>

<div className="  w-[330px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[250px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px]">Design web app</h1>
</div>

<div className="  w-[330px] h-[600px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il design del sito è basato su uno stile molto minimal per via del contenuto che offre e per un esperienza pulita.
<br />
<br />
L'header comprende solo il logo, posizionato al centro e il footer comprende il copyright del sito.
<br />
<br />
Allineati al centro troviamo l'icona di una moneta con accanto il numero 0, poco sotto troviamo il famoso blocco di mattoni di Super Mario.
<br />
<br />
Cliccando sul blocco avremmo un'animazione in cui il blocco si muoverà e da esso uscirà una moneta, facendo ciò il punteggio in alto aumenterà di 1.
</p>
</div>

<div className="  w-[330px] h-[90px]  border-transparent border-[2px] ml-[-20px] mt-[100px]  min-[1400px]:ml-[-250px] min-[1400px]:w-[600px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette header:</h3>
</div>

    <ColorPallet className="bg-[#000000]" code="#000000"></ColorPallet>

<div className="  w-[330px] h-[50px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[600px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette body:</h3>
</div>



    <ColorPallet className="bg-[#faf5eb]" code="#faf5eb"></ColorPallet>

<div className="  w-[330px] h-[50px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[600px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h3 className=" text-black text-[29px] ml-5 text-left min-[1400px]:text-[35px]">Color palette footer:</h3>
</div>

    <ColorPallet className="bg-[#443e3e]" code="#443e3e"></ColorPallet>

<div className="  w-[330px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[250px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px]">Versione mobile</h1>
</div>

<div className="  w-[330px] h-[100px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-250px] min-[1400px]:w-[700px] xl:ml-[50px] xl:w-[700px]
min-[768px]:ml-[10px] min-[768px]:w-[500px]">
<p className=" text-black text-[18px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Per la versione mobile il design del sito rimane invariato e privo di eventuali bug.</p>
</div>

<div className=" h-[900px]">

</div>

<FooterWeb></FooterWeb>

        </>

    );

};

export default SuperCounter;