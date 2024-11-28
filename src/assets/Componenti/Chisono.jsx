
import FooterWeb from "./FooterWeb";
import Navbar from "./NavBar";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from "react";


function Chisono () {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const triggerHeight = 950; // Altezza di scroll in pixel per attivare l'animazione
      if (position > triggerHeight) {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const triggerHeight = 2120; 
      if (position > triggerHeight) {
        setVisible2(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const { ref, inView } = useInView({
    threshold: 0.1, // Quando l'elemento è visibile al 10%
    triggerOnce: true, // L'animazione si attiva solo una volta
  });

  return(
    
    <>
  

  <div className="grid grid-cols-1 sm:grid-cols-2 absolute top-0 left-0 w-[100%] z-20">
          <div className="border-black border-[2px] col-span-1 sm:col-span-2 h-[100px]">
           <Navbar></Navbar>
          </div>
          <div className="border-black border-[2px]"><h1 ref={ref} className={` text-white scale-120  pt-24 p-10 text-[48px] text-left min-[1400px]:text-[70px] transition-all duration-1000 ${inView ? 
          'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>Chi sono.🧐</h1>
              <p ref={ref} className={` text-white text-[17px]   pt-5 p-10 text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]transition-all duration-1000 
          ${inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>Sono nato il 16 Marzo del 2002 e attualmente vivo in Puglia a Palo Del Colle(BA).
            <br />
          Ho frequentato il liceo artistico De Nittis di Bari diplomandomi in industrial design, in cui progettavo oggetti di vario tipo con diverse complessità.
            <br />
            <br />
          Sono specializzato principalmente nel Web Design, nello sviluppo Front-End in ambito web, nella progettazione di loghi e 
          illustrazioni, nella modellazione 3D e nel UX/UI Design.

            <br />
            <br />

            Nel tempo libero mi dedico alla lettura, al mondo videoludico, all'allenamento a corpo libero, al graphic design e alla programmazione.

            <br />
            <br />

            Sono una persona abbastanza riservata, tranquilla e collaborativa, che cerca sempre di migliorarsi e di realizzare le proprie idee.
          </p>
          </div>
        </div>


        <div className={`transform transition-all duration-1000 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} border-black border-[2px] 
        grid  grid-cols-1 absolute left-0 w-[100%] mt-[1300px] p-10`}>
          <h2 className=" text-white text-[30px] text-left min-[1400px]:text-[35px] font-bold">Skill Front-End Developer:</h2>
          <ul  className={`transform transition-all duration-1000 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} pt-5`}>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          HTML5
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          CSS3
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          Javascript
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          Git
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          Tailwind css
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          React
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          Boostrap 5
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          TypeScript
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          Dart
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          WordPress
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          MySQL
          </li>
          <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
          Responsive Design
          </li>
    

          <div className="grid sm:grid-cols-4 sm:gap-28 grid-cols-1 mt-24">
            <div className=' w-[150px] h-[150px] border-transparent border-[2px]  '>
              <img src="htmlv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90]" alt="" />
            </div>
            <div className=' w-[150px] h-[150px] border-transparent border-[2px] '>
              <img src="cssv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90]" alt="" />
            </div>
            <div className=' w-[150px] h-[150px] border-transparent border-[2px] '>
              <img src="Javascriptv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90]" alt="" />
            </div>
            <div className=' w-[150px] h-[150px] border-transparent border-[2px]'>
              <img src="rectv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90]" alt="" />
            </div>
            <div className=' w-[150px] h-[150px] border-transparent border-[2px]'>
              <img src="telv2.svg" className=" scale-[.80]  min-[1400px]:scale-[.90]" alt="" />
            </div>
            <div className=' w-[150px] h-[150px] border-transparent border-[2px]'>
              <img src="ts.svg" className=" scale-[.60]  min-[1400px]:scale-[.70] rounded-xl"  alt="" />
            </div>
            </div>
          
        </ul>
        </div>


       


        <div className={`transform transition-all duration-1000 ${visible2 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} border-black border-[2px] 
        grid  grid-cols-1 absolute left-0 w-[100%] mt-[2850px] p-10`}>
          <h2 className=" text-white text-[30px] ml-5 text-left  min-[1400px]:text-[35px] font-bold">Skill Graphic e Web Designer:</h2>

          <ul  className={`transform transition-all duration-1000 ${visible2 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} p-5`}>
          <li className='text-white text-[17px] ml-12 text-left mt-11 min-[768px]:mt-1 min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
            Illustrator
            </li>
            <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
            Photoshop
            </li>
            <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
            InDesign
            </li>
            <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
            Figma
            </li>
            <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
            Blender
            </li>
            <li className='text-white text-[17px] ml-12 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px] list-disc'>
            UI/UX Design
            </li>

            <div className=" grid sm:grid-cols-4 sm:gap-28 grid-cols-1  mt-24">
            <div className=' w-[150px] h-[150px]'>
              <img src="aiv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90] " alt="" />
            </div>
            <div className=' w-[150px] h-[150px]'>
              <img src="idv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90]" alt="" />
            </div>


          <div className=' w-[150px] h-[150px]'>
            <img src="psv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90]" alt="" />
          </div>


          <div className=' w-[150px] h-[150px]'>
            <img src="figmav2.svg" className=" scale-[.80] min-[1400px]:scale-[.90]" alt="" />
          </div>

          

        
          <div className="flex justify-start items-start sm:mt-72 ml-[-40px] mt-28">
            <p className=" text-[#db8f8f] text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] font-medium absolute p-5">
              Vorresti che i tuoi progetti siano funzionali, accattivanti e interessanti?</p>
              <a href="mailto:francesco16convertini@gmail.com" className="flex justify-center items-center bg-[#db8f8f] w-[115px] h-[40px] rounded-full mt-48 animate-Bottone ml-5 xl:w-[180px] xl:h-[60px]">
                
               <span className="absolute mt-[1px] ml-[-1px] text-[14px] xl:text-[18px] text-[#2e1d1d]">CONTATTAMI </span>
                </a>
          </div>
          </div>
        </ul>
        </div>
                
    


          


          <div className="mt-[5000px] xl:mt-[4500px] "></div>
    

        <FooterWeb></FooterWeb>


    </>
    
  );
    
}
  


export default Chisono;