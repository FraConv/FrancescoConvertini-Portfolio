import Cards from "./Cards";
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar";
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';


function Portfolio () {

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });


  return(
    <>

    
  <div className="grid grid-cols-1 sm:grid-cols-1 absolute top-0 left-0 w-[100%] justify-center items-center">
          <div className="col-span-1 sm:col-span-2 h-[100px]">
           <Navbar></Navbar>
          </div>
          <div className=""><h1 ref={ref} className={` text-white scale-120  pt-24 p-10 text-[48px] text-left min-[1400px]:text-[70px] transition-all duration-1000 ${inView ? 
          'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>Portfolio.😎</h1>
              <p ref={ref} className={` text-white text-[17px]   pt-5 p-10 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]transition-all duration-1000 
          ${inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>Qui trovate tutti i lavori che ho realizzato.
          </p>
          </div>
        </div>


        <div className="min-[1400px]:grid min-[1400px]:grid-cols-6 min-[1400px]:gap-80 xl:grid-cols-4 xl:gap-80 xl:grid mt-96">

          <Link className="border-2 border-[#213a46] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1950px] xl:ml-[-1950px]" to="/FrancescoConvertini Portfolio">
            <div className=" border-2 border-[#213a46] w-[260px] h-[574px] ml-[24px] absolute mt-[214px] z-10 rounded-br-[125px] min-[1400px]:ml-[1720px] min-[1400px]:mt-[215px]
            xl:ml-[1920px] xl:mt-[215px]">
              <div className=" w-[200px] h-[30px] border-[3px] border-[#db8f8f] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#db8f8f] rounded-full
              hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4>
              </div>
            </div>
          </Link>
          <Cards Immagine="screenhome.svg" Titolo="Francesco Convertini" Descrizione="Portfolio personale per far conoscere le proprie abilità di Graphic Design e programazzione.">
          </Cards>


          <Link className="border-2 border-[#213a46] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1950px] xl:ml-[-1950px]" to="/MimmoSoftWeb">
            <div className=" border-2 border-[#213a46] w-[260px] h-[574px] ml-[24px] absolute mt-[214px] z-10 rounded-br-[125px] min-[1400px]:ml-[1720px] min-[1400px]:mt-[215px]
            xl:ml-[1920px] xl:mt-[215px]">
              <div className=" w-[200px] h-[30px] border-[3px] border-[#db8f8f] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#db8f8f] rounded-full
            hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4>
              </div>
            </div>   
          </Link>
          <Cards Immagine="sfondomimmo.svg" Titolo="MimmoSoftWeb" Descrizione="Sito web di guide tech su vari progetti con raspberry, MySQL e Python.">
          </Cards>


          <Link className="border-2 border-[#213a46] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1950px] xl:ml-[-1950px]" to="/Lucky Roll">
            <div className="border-2 border-[#213a46] w-[260px] h-[575px] ml-[24px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[1720px] min-[1400px]:mt-[217px]
            xl:ml-[1920px]">
              <div className=" w-[200px] h-[30px] border-[3px] border-[#db8f8f] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#db8f8f] rounded-full
            hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4>
              </div>
            </div>
          </Link>
          <Cards Immagine="sroll.svg" Titolo="Lucky Roll" Descrizione="Applicazione web che simula il lancio dei dadi a sei faccie.">
          </Cards>


          <Link className="border-2 border-[#213a46]  w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-650px] xl:ml-[-1950px]" to="/Super Counter">
            <div className="border-2 border-[#213a46] w-[260px] h-[575px] ml-[24px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[420px] min-[1400px]:mt-[217px]
            xl:ml-[1920px]">
              <div className=" w-[200px] h-[30px] border-[3px] border-[#db8f8f] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#db8f8f] rounded-full
              hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4>
              </div>
            </div>
          </Link>
          <Cards Immagine="sfondosuper.svg" Titolo="Super Counter" Descrizione="Applicazione web che permette di usare un contatore in maniera originale.">
          </Cards>


          <Link className="border-2 border-[#213a46] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1500px] xl:ml-[-1950px]" to="/Wanderlust Adventures">
            <div className=" border-2 border-[#213a46] w-[260px] h-[575px] ml-[24px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[1270px] min-[1400px]:mt-[217px]
            xl:ml-[1920px]">
              <div className=" w-[200px] h-[30px] border-[3px] border-[#db8f8f] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#db8f8f] rounded-full
              hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4>
              </div>
            </div>
          </Link>
          <Cards Immagine="wa1.svg" Titolo="Wanderlust Adventures" Descrizione="Logo per un'agenzia di viaggi.">
          </Cards>


          <Link className="border-2 border-[#213a46] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1800px] xl:ml-[-1950px]" to="/Airnote">
            <div className="border-2 border-[#213a46] w-[260px] h-[575px] ml-[24px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[1570px] min-[1400px]:mt-[217px]
            xl:ml-[1920px]">
              <div className=" w-[200px] h-[30px] border-[3px] border-[#db8f8f] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#db8f8f] rounded-full
            hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4>
              </div>
            </div>
          </Link>
          <Cards Immagine="airnotecop.svg" Titolo="Airnote" Descrizione="Logo per una marca di auricolari bluetooth.">
          </Cards>


          <Link className="border-2 border-[#213a46] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1000px] xl:ml-[-1950px]" to="/GreenThreads">
            <div className="border-2 border-[#213a46] w-[260px] h-[575px] ml-[24px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[770px] min-[1400px]:mt-[217px]
            xl:ml-[1920px]">
              <div className=" w-[200px] h-[30px] border-[3px] border-[#db8f8f] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#db8f8f] rounded-full
              hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4>
              </div>
            </div>
          </Link>
          <Cards Immagine="green1.svg" Titolo="GreenThreads" Descrizione="Logo per un negozio di abbigliamento che vende capi realizzati con materiali sostenibili.">
          </Cards>


          <Link className="border-2 border-[#213a46] w-10 h-[200px] ml-[-100px] border-none  min-[1400px]:ml-[-1500px] xl:ml-[-1950px]" to="/Agenda 2024">
            <div className="border-2 border-[#213a46] w-[260px] h-[575px] ml-[24px] absolute mt-[215px] z-10 rounded-br-[130px] min-[1400px]:ml-[1270px] min-[1400px]:mt-[217px]
            xl:ml-[1920px]">
              <div className=" w-[200px] h-[30px] border-[3px] border-[#db8f8f] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#db8f8f] rounded-full
              hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
            </div>
          </Link>
          <Cards Immagine="agenda.svg" Titolo="Agenda 2024" Descrizione="Illustrazione per la copertina di un'agenda per il 2024.">
          </Cards>


          <Link className="border-2 border-[#213a46] w-10 h-[200px] ml-[-100px] border-none min-[1400px]:ml-[-1800px] xl:ml-[-1950px]" to="/The Thing under the bed">
            <div className="border-2 border-[#213a46] w-[260px] h-[575px] ml-[24px] absolute mt-[215px] z-10 rounded-br-[130px]  min-[1400px]:ml-[1570px] min-[1400px]:mt-[217px]
            xl:ml-[1920px]">
              <div className=" w-[200px] h-[30px] border-[3px] border-[#db8f8f] bg-transparent z-50 mt-[450px] ml-[10px] hover:bg-[#db8f8f] rounded-full
              hover:text-black transition-colors duration-150"><h4 className=" mt-[-1px] text-[17px] text-white  hover:text-black">Vedi progetto</h4></div>
            </div>
          </Link>
          <Cards Immagine="la cosacop.svg" Titolo="The Thing under the bed" Descrizione="Illustrazione per la copertina di un libro horror.">
          </Cards>

        </div>


        <div className="flex justify-start items-start sm:mt-96 mt-[150px] 2xl:ml-[-240px] xl:ml-[-50px] ml-[-40px]">
            <p className=" text-[#db8f8f] text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] font-medium absolute p-5">
              Vorresti che i tuoi progetti siano funzionali, accattivanti e interessanti?</p>
              <a href="mailto:francesco16convertini@gmail.com"  className="flex justify-center items-center bg-[#db8f8f] w-[115px] h-[40px] rounded-full mt-48 animate-Bottone ml-5 xl:w-[180px] xl:h-[60px]">   
             
                
               <span className="absolute mt-[1px] ml-[-1px] text-[14px] xl:text-[18px] text-[#2e1d1d]">CONTATTAMI </span>
               
                
                </a>
                
          </div>
      
                    

        <div className="w-2 h-[900px] mt-[-500px] xl:mt-[-600px]"></div>


      <FooterWeb></FooterWeb>


    </>
    
  );
    
}
    


export default Portfolio;