
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
      const triggerHeight = 2120; // Altezza di scroll in pixel per attivare l'animazione
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
    
    <Navbar></Navbar>


    <div className="  w-[330px] h-[80px]  border-transparent border-[2px] ml-[-20px] mt-[200px] min-[1400px]:ml-[-150px] min-[1400px]:w-[360px] min-[768px]:ml-[-150px] min-[768px]:w-[500px]">
<h1 ref={ref} className={` text-black scale-120 ml-5 text-left min-[1400px]:text-[70px] transition-all duration-1000 ${inView ? 'translate-x-0 opacity-100' : 
'-translate-x-20 opacity-0'}`}>Chi sono.</h1>
</div>

<div className="  w-[330px] h-[670px]  border-transparent border-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-150px] min-[1400px]:w-[600px] min-[768px]:ml-[-150px] min-[768px]:w-[500px]">

<p  ref={ref} className={` text-black text-[20px]  ml-5 text-left min-[1400px]:text-[22px] min-[768px]:text-[22px]transition-all duration-1000 ${inView ? 'translate-x-0 opacity-100' : 
'-translate-x-20 opacity-0'}`}>Sono nato il 16 Marzo del 2002 e attualmente vivo in Puglia a Palo Del Colle(BA).
  <br />
Ho frequentato il liceo artistico De Nittis di Bari diplomandomi in industrial design, in cui progettavo oggetti di vario tipo con diverse complessità.

<br />
<br />

Sono specializzato principalmente nello sviluppo front-end di applicazioni e siti web, nel Logo Design,   
nell' Illustration Design, modellazione 3D e UX/UI Design.

<br />
<br />

Nel tempo libero mi dedico alla lettura, al mondo videoludico, all'allenamento a corpo libero, al graphic design e alla programmazione.

<br />
<br />

Sono una persona abbastanza riservata, tranquilla e collaborativa, che cerca sempre di migliorarsi e di realizzare le proprie idee.
</p>
</div>

<div className={`transform transition-all duration-1000 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} w-[330px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[300px] min-[1400px]:ml-[-550px] min-[1400px]:w-[400px] xl:ml-[-360px] min-[768px]:ml-[-150px] min-[768px]:w-[500px]`}>
<h3 className=" text-black text-[30px] ml-5 text-left min-[1400px]:text-[35px]">Skill web designer:</h3>
</div>

<ul  className={`transform transition-all duration-1000 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}  w-[240px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[10px] min-[1400px]:ml-[-550px] min-[1400px]:w-[400px] xl:ml-[-360px] min-[768px]:ml-[-150px] min-[768px]:w-[500px]`}>

<li className='text-black text-[18px] ml-5 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
HTML5
</li>
<li className='text-black text-[18px] ml-5 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
CSS3
</li>
<li className='text-black text-[18px] ml-5 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
Javascript
</li>
<li className='text-black text-[18px] ml-5 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
Git
</li>
<li className='text-black text-[18px] ml-5 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
Tailwind css
</li>
<li className='text-black text-[18px] ml-5 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
React
</li>
<li className='text-black text-[18px] ml-5 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
Boostrap 5
</li>
<li className='text-black text-[18px] ml-5 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
TypeScript
</li>
<li className='text-black text-[18px] ml-5 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
WordPress
</li>
<li className='text-black text-[18px] ml-5 text-left  min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
Responsive Design
</li>


<div className=" grid grid-cols-2  min-[1400px]:grid-cols-4  min-[1400px]:gap-52 gap-20 min-[1400px]:ml-[550px] min-[1400px]:mt-[-250px] xl:grid-cols-4 xl:gap-52 xl:ml-[260px]
xl:mt-[-200px]">

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-[110px] ml-4 '>

<img src="htmlv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90]" alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-[110px] ml-4 '>

<img src="cssv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90]" alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-4 ml-4 min-[1400px]:mt-[159px] xl:mt-[159px]'>

<img src="Javascriptv2.svg" className=" scale-[.80] mt-[-50px] min-[1400px]:scale-[.90]" alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-[-27px] ml-4 min-[1400px]:mt-[109px] xl:mt-[109px]'>

<img src="git.svg" className=" scale-[1.30] mt-[-50px] min-[1400px]:scale-[1.50]" alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-6 xl:mt-[-100px]  ml-4 '>

<img src="rectv2.svg" className=" scale-[.80] mt-[-70px] ml-[-5px] min-[1400px]:scale-[.90]" alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-4 xl:mt-[-120px] ml-4 '>

<img src="telv2.svg" className=" scale-[.80] mt-[-60px] ml-[-5px] min-[1400px]:scale-[.90]" alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-4 xl:mt-[-120px] ml-4 '>

<img src="boostrap.svg" className=" scale-[.80] mt-[-60px] ml-[-5px] min-[1400px]:scale-[.90]" alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-4 xl:mt-[-120px] ml-4 '>

<img src="ts.svg" className=" scale-[.60] mt-[-60px] ml-[-5px] min-[1400px]:scale-[.70] rounded-xl"  alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-6 xl:mt-[-100px]  ml-4 '>

<img src="w.svg" className=" scale-[.80] mt-[-70px] ml-[-5px] min-[1400px]:scale-[.90]" alt="" />

</div>

</div>


</ul>

<div className={`transform transition-all duration-1000 ${visible2 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}  w-[330px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[1500px] min-[1400px]:ml-[-550px]  min-[1400px]:mt-[950px]  xl:mt-[950px] min-[1400px]:w-[400px] xl:ml-[-360px] min-[768px]:ml-[-150px] min-[768px]:w-[500px]`}>
<h3 className=" text-black text-[30px] ml-5 text-left  min-[1400px]:text-[35px]">Skill graphic designer:</h3>
</div>
    
<ul  className={`transform transition-all duration-1000 ${visible2 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}  w-[240px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[10px] min-[1400px]:ml-[-550px] min-[1400px]:w-[400px] xl:ml-[-360px] min-[768px]:ml-[-150px] min-[768px]:w-[500px]`}>

<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
Illustrator
</li>
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
Photoshop
</li>
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
Indesign
</li>
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
Figma
</li>
<li className='text-black text-[18px] ml-5 text-left min-[1400px]:text-[22px] min-[768px]:text-[20px]'>
UX/UI Design
</li>

<div className=" grid grid-cols-2 gap-20 min-[1400px]:grid-cols-4  min-[1400px]:gap-52 min-[1400px]:ml-[550px] min-[1400px]:mt-[-178px] xl:grid-cols-4 xl:gap-52 xl:ml-[250px]
xl:mt-[-150px]">

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-[110px] ml-4 '>

<img src="aiv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90] " alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-[110px] ml-4 '>

<img src="idv2.svg" className=" scale-[.80] min-[1400px]:scale-[.90]" alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparentborder-[2px] mt-4 ml-[-5px] min-[1400px]:mt-[180px] xl:mt-[180px]'>

<img src="psv2.svg" className=" scale-[.80] mt-[-70px] ml-[20px] min-[1400px]:scale-[.90]" alt="" />

</div>

<div className=' w-[150px] h-[150px] border-transparent border-[2px] mt-4 ml-4 min-[1400px]:mt-[160px] xl:mt-[180px]'>

<img src="figmav2.svg" className=" scale-[.80] mt-[-70px] min-[1400px]:scale-[1.20]" alt="" />

</div>

</div>


</ul>

            <div className="w-[330px] h-[160px]  border-transparent border-[2px] ml-[-20px] mt-[800px] min-[1400px]:ml-[-520px]  min-[1400px]:w-[1000px] xl:ml-[-330px] xl:w-[800px] xl:h-[180px]
              min-[768px]:ml-[-150px] min-[768px]:w-[500px] pt-[100px] min-[1400px]:mt-[500px] xl:mt-[500px]">
                <p className=" text-black text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] font-medium ">
                  Vorresti che i tuoi progetti siano funzionali, accattivanti e 
                    
                  interessanti?</p>
            </div>


              <div className="w-[300px] h-[330px]  border-transparent border-[2px] ml-[-13px] mt-[70px]  min-[1400px]:ml-[-600px]  min-[1400px]:w-[300px] xl:ml-[-410px] min-[768px]:ml-[-232px]
              min-[1400px]:mt-[15px] xl:mt-[25px] ">
                <div  className="ml-[80px] bg-[#d46767] w-[170px] h-[60px] rounded-full mt-10 animate-Bottone" >     
                  <a href="mailto:francesco16convertini@gmail.com" className=" p-10 pt-[30px] text-white hover:text-white">
                    <h6 className="mt-[-6px]">CONTATTAMI</h6></a>
                </div>
              </div>


<div className="mt-[316px] :w-[375px] h-[80px] xl:mt-[200px] bg-transparent]"></div>
    
  <FooterWeb></FooterWeb>

    </>
    
    );
    
    };
    
    export default Chisono;