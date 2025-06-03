import CarouselPortfolio from "./CarouselPortfolio";
import FooterWeb from "./FooterWeb";
import Loader from "./Loader";
import Navbarhome from "./Navbarhome";
import { useEffect, useState } from "react";

function Home () {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 1190) setVisible(true);
      if (position > 2900) setVisible2(true);
      if (position > 4300) setVisible3(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Loader />

      {/* Navbar */}
      <Navbarhome />

      {/* Sezione Home */}
      <div className="h-[5000px]">
      <section id="home" className="pt-40 pb-20 px-2 absolute left-0 w-[100%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 overflow-hidden px-10">
          <div>
            <h1 className="text-white text-[40px] min-[1400px]:text-[70px] transition-all duration-1000 text-left font-semibold">
              SALVE A TUTTI, SONO UN DESIGNER E DEVELOPER.👋
            </h1>
            <p className="text-white text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] transition-all duration-1000 pt-5">
              Ciao, sono Francesco Convertini. Progetto siti web e applicazioni, sia native che web, curando anche la UI/UX, i loghi e l’identità visiva del brand. Il mio obiettivo è creare soluzioni semplici, funzionali e su misura, pensate per soddisfare ogni esigenza. 🚀
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              className="rounded-full mt-10 w-[530px] transition-all duration-1000 p-6 min-[768px]:w-[300px] 2xl:w-[500px] 2xl:mt-[-2%] xl:w-[400px] xl:mt-[-3%]"
              src="foto mia.svg"
              alt="Francesco Convertini"
            />
          </div>
          <div className="flex justify-center items-center mt-10 2xl:justify-start xl:justify-start">
            <button className="animate-Bottone bg-[#76ABAE] text-[#173b3d] w-auto rounded-full mb-[7%] font-semibold focus:outline-none hover:border-[#76ABAE]">CONTATTAMI</button>
          </div>
        </div>
      </section>

      {/* Sezione Chi Sono */}
<section id="chi-sono" className="min-h-screen py-32 absolute left-0 w-[100%] bg-[#213a46] mt-[80rem] rounded-tl-[140px] rounded-br-[140px] xl:mt-[60%] 2xl:mt-[50%] ">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-10 text-left 2xl:ml-[10px]">
    <div>
      <h2 className="text-white text-4xl mb-4 font-semibold">Chi sono</h2>
      <p className="text-white text-lg">
      Sono nato il 16 marzo 2002 e attualmente vivo a Palo del Colle, in provincia di Bari, in Puglia.
      <br />
      <br />
      Ho frequentato il Liceo Artistico "De Nittis" di Bari, dove mi sono diplomato in Industrial Design. Questo percorso mi ha permesso di progettare oggetti di varia natura e complessità, sviluppando un solido approccio al problem solving creativo.
      <br />
      <br />
      Sono specializzato nello sviluppo di siti e applicazioni web e native, concentrandomi principalmente sul Frontend, utilizzando le tecnologie più moderne e performanti. 
      <br />
      <br />
      Oltre allo sviluppo, mi occupo anche della progettazione del design, curando sia l’aspetto UI (User Interface) che l’esperienza utente UX (User Experience).
      <br />
      <br />
      Parallelamente, mi dedico alla creazione di loghi, alla definizione della brand identity, alla realizzazione di illustrazioni e alla modellazione 3D.
      <br />
      <br />
      Nel tempo libero coltivo diverse passioni: amo la lettura, il mondo videoludico, l’allenamento a corpo libero, il design e la programmazione, affrontando ogni interesse con curiosità e voglia di migliorarmi.
      <br />
      <br />
      Mi considero una persona riservata, tranquilla e collaborativa, sempre alla ricerca di nuovi stimoli per crescere e trasformare le mie idee in progetti concreti.
      </p>
    </div>
    <div>
      <h3 className="text-white text-2xl mt-14 font-medium xl:ml-24 2xl:ml-60">Skill Developer:</h3>
      <ul className="gap-3 grid grid-cols-2 mt-6 pl-5 xl:ml-24 2xl:ml-60 text-white">
        <li className="list-disc">HTML5</li>
        <li className="list-disc">CSS3</li>
        <li className="list-disc">Javascript</li>
        <li className="list-disc">Git</li>
        <li className="list-disc">Tailwind css</li>
        <li className="list-disc">React</li>
        <li className="list-disc">Ionic</li>
        <li className="list-disc">Python</li>
        <li className="list-disc">TypeScript</li>
        <li className="list-disc">Dart</li>
        <li className="list-disc">SQL</li>
        <li className="list-disc">CustomTkinter</li>
        <li className="list-disc">Boostrap 5</li>
        <li className="list-disc">Responsive Design</li>
      </ul>
      <div className="grid grid-cols-2 2xl:ml-60 xl:ml-24">
        <img className="scale-[57%]" src="htmlv2_256x256.svg" alt="" />
        <img className="scale-[60%]" src="cssv2_256x256.svg" alt="" />
        <img className="scale-[60%]" src="Javascriptv2_256x256.svg" alt="" />
        <img className="scale-[57%]" src="rectv2_256x256.svg" alt="" />
        <img className="scale-[60%]" src="py.svg" alt="" />
      </div>
        <h3 className="text-white text-2xl mt-2 font-medium xl:ml-24 2xl:ml-60">Skill Designer:</h3>
      <ul className="gap-3 grid grid-cols-2 mt-6 pl-5 xl:ml-24 2xl:ml-60 text-white">
        <li className="list-disc">Illustrator</li>
        <li className="list-disc">Photoshop</li>
        <li className="list-disc">InDesign</li>
        <li className="list-disc">Figma</li>
        <li className="list-disc">Blender</li>
        <li className="list-disc">UI/UX Design</li>
        <li className="list-disc">Graphic Design</li>
      </ul>
      <div className="grid grid-cols-2 2xl:ml-60 xl:ml-24">
        <img className="scale-[57%]" src="aiv2.5.svg" alt="" />
        <img className="scale-[60%]" src="psv2.5.svg" alt="" />
        <img className="scale-[60%]" src="idv2.5.svg" alt="" />
        <img className="scale-[60%]" src="figmav2.5.svg" alt="" />
      </div>
    </div>
    </div>
     <div>
    
  </div>
</section>


      {/* Sezione Portfolio */}
      <section id="portfolio" className="h-[1500px] px-10 py-32 absolute left-0 w-[100%] bg-[#415e5f] mt-[270rem] rounded-tr-[140px] rounded-bl-[140px] xl:top-[-80rem] 2xl:mt-[250rem]">
         <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
        <div>
      <h2 className="text-white text-4xl mb-4 font-semibold 2xl:ml-[-240px]">Portfolio</h2>
      <p className="text-white text-lg 2xl:ml-[-240px]">
        Qui potete trovare alcuni dei miei lavori più recenti e importanti che ho realizzato.
      </p>
<CarouselPortfolio></CarouselPortfolio>
    </div>
  </div>
      </section>
      </div>

      
    </>
  );
}

export default Home;
