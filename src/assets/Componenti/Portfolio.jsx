import Cards from "./Cards";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar";
import { Link } from 'react-router-dom';

function Portfolio () {

    return(
    
    <>
    
    <Navbar></Navbar>

<div className="  w-[330px] h-[80px]  border-transparent border-[2px] ml-[-20px] mt-[200px]  min-[1400px]:ml-[-250px] min-[1400px]:w-[400px] xl:ml-[-50px] xl:w-[500px] xl:h-[150px]
 min-[768px]:ml-[-150px] min-[768px]:w-[500px]">
    <h1 className=" text-black scale-120 ml-5 text-left min-[1400px]:text-[70px]">Portfolio.</h1>
</div>
        <div className="  w-[330px] h-[70px]  border-transparent border-[2px] ml-[-20px] mt-[50px] min-[1400px]:ml-[-250px] min-[1400px]:w-[600px]  
        xl:ml-[-50px] xl:mt-[-30px] xl:w-[500px] xl:h-[80px] min-[768px]:ml-[-150px] min-[768px]:w-[500px]">
            <p className=" text-black text-[20px] ml-5 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Qui trovate tutti i lavori che ho realizzato.</p>
        </div>

<div className="min-[1400px]:grid min-[1400px]:grid-cols-6 min-[1400px]:gap-80 xl:grid-cols-4 xl:gap-80 xl:grid">

<Link className="border-2 border-[#443e3e] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1950px] xl:ml-[-1950px]" to="/FrancescoConvertini Portfolio">
    <div className=" border-2 border-[#443e3e] w-[260px] h-[574px] ml-[-20px] absolute mt-[214px] z-10 rounded-br-[125px] min-[1400px]:ml-[1720px] min-[1400px]:mt-[215px]
     xl:ml-[1920px] xl:mt-[215px]">
         <div className=" w-[200px] h-[30px] border-[3px] border-[#d46767] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#d46767] rounded-full
       hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
    </div>
    
</Link>
<Cards Immagine="mioo.svg" Titolo="FrancescoConvertini Portfolio" Descrizione="Sito web personale per far conoscere e mostare le proprie abilità di graphic design e programazzione.">
</Cards>

<Link className="border-2 border-[#443e3e] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1950px] xl:ml-[-1950px]" to="/MimmoSoftWeb">
    <div className=" border-2 border-[#443e3e] w-[260px] h-[574px] ml-[-20px] absolute mt-[214px] z-10 rounded-br-[125px] min-[1400px]:ml-[1720px] min-[1400px]:mt-[215px]
     xl:ml-[1920px] xl:mt-[215px]">
     <div className=" w-[200px] h-[30px] border-[3px] border-[#d46767] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#d46767] rounded-full
       hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
    </div>
    
</Link>
<Cards Immagine="Mimmocopp.svg" Titolo="MimmoSoftWeb" Descrizione="Sito web di guide tech su vari progetti con raspberry, MySQL e Python.">
</Cards>

<Link className="border-2 border-[#443e3e] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1950px] xl:ml-[-1950px]" to="/Lucky Roll">
    <div className="border-2 border-[#443e3e] w-[260px] h-[575px] ml-[-20px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[1720px] min-[1400px]:mt-[217px]
     xl:ml-[1920px]">
         <div className=" w-[200px] h-[30px] border-[3px] border-[#d46767] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#d46767] rounded-full
       hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
    </div>
</Link>
<Cards Immagine="roll cop.svg" Titolo="Lucky Roll" Descrizione="Applicazione web che simula il lancio dei dadi a sei faccie.">
</Cards>

<Link className="border-2 border-[#443e3e]  w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-650px] xl:ml-[-1950px]" to="/Super Counter">
    <div className="border-2 border-[#443e3e] w-[260px] h-[575px] ml-[-20px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[420px] min-[1400px]:mt-[217px]
    xl:ml-[1920px]">
         <div className=" w-[200px] h-[30px] border-[3px] border-[#d46767] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#d46767] rounded-full
       hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
    </div>
</Link>
<Cards Immagine="sc1.svg" Titolo="Super Counter" Descrizione="Applicazione web che permette di usare un contatore in maniera originale.">
</Cards>

<Link className="border-2 border-[#443e3e] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1500px] xl:ml-[-1950px]" to="/Wanderlust Adventures">
    <div className=" border-2 border-[#443e3e] w-[260px] h-[575px] ml-[-20px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[1270px] min-[1400px]:mt-[217px]
    xl:ml-[1920px]">
         <div className=" w-[200px] h-[30px] border-[3px] border-[#d46767] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#d46767] rounded-full
       hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
    </div>
</Link>
<Cards Immagine="wa1.svg" Titolo="Wanderlust Adventures" Descrizione="Logo per un'agenzia di viaggi.">
</Cards>

<Link className="border-2 border-[#443e3e] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1800px] xl:ml-[-1950px]" to="/Airnote">
    <div className="border-2 border-[#443e3e] w-[260px] h-[575px] ml-[-20px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[1570px] min-[1400px]:mt-[217px]
    xl:ml-[1920px]">
         <div className=" w-[200px] h-[30px] border-[3px] border-[#d46767] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#d46767] rounded-full
       hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
    </div>
</Link>
<Cards Immagine="airnotecop.svg" Titolo="Airnote" Descrizione="Logo per una marca di auricolari bluetooth.">
</Cards>

<Link className="border-2 border-[#443e3e] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1000px] xl:ml-[-1950px]" to="/GreenThreads">
    <div className="border-2 border-[#443e3e] w-[260px] h-[575px] ml-[-20px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[770px] min-[1400px]:mt-[217px]
    xl:ml-[1920px]">
         <div className=" w-[200px] h-[30px] border-[3px] border-[#d46767] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#d46767] rounded-full
       hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
    </div>
</Link>
<Cards Immagine="green1.svg" Titolo="GreenThreads" Descrizione="Logo per un negozio di abbigliamento che vende capi realizzati con materiali sostenibili.">
</Cards>

<Link className="border-2 border-[#443e3e] w-10 h-[200px] ml-[-100px] border-none  min-[1400px]:ml-[-1500px] xl:ml-[-1950px]" to="/Agenda 2024">
    <div className="border-2 border-[#443e3e] w-[260px] h-[575px] ml-[-20px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[1270px] min-[1400px]:mt-[217px]
    xl:ml-[1920px]">
         <div className=" w-[200px] h-[30px] border-[3px] border-[#d46767] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#d46767] rounded-full
       hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
    </div>
</Link>
<Cards Immagine="agenda.svg" Titolo="Agenda 2024" Descrizione="Illustrazione per la copertina di un'agenda per il 2024.">
</Cards>

<Link className="border-2 border-[#443e3e] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1800px] xl:ml-[-1950px]" to="/The Thing under the bed">
    <div className="border-2 border-[#443e3e] w-[260px] h-[575px] ml-[-20px] absolute mt-[215px] z-10 rounded-br-[130px]  min-[1400px]:ml-[1570px] min-[1400px]:mt-[217px]
    xl:ml-[1920px]">
         <div className=" w-[200px] h-[30px] border-[3px] border-[#d46767] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#d46767] rounded-full
       hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
    </div>
</Link>
<Cards Immagine="la cosacop.svg" Titolo="The Thing under the bed" Descrizione="Illustrazione per la copertina di un libro horror.">
</Cards>

</div>

<div className="w-2 h-[900px]"></div>

<FooterWeb></FooterWeb>
    
    </>
    
);
    
};
    
    export default Portfolio;