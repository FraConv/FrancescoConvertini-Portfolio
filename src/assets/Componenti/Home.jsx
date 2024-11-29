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
      const triggerHeight = 1190; // Altezza di scroll in pixel per attivare l'animazione
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
      const triggerHeight = 2900; // Altezza di scroll in pixel per attivare l'animazione
      if (position > triggerHeight) {
        setVisible2(true);
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
      const triggerHeight = 4300; // Altezza di scroll in pixel per attivare l'animazione
      if (position > triggerHeight) {
        setVisible3(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return(
    
    <>

      <Loader></Loader>
       

        <div className="grid grid-cols-1 sm:grid-cols-2 absolute top-0 left-0 w-[100%] z-20">
          <div className="col-span-1 sm:col-span-2 h-[100px]">
            <Navbarhome></Navbarhome>
          </div>
          <div className=""><h1 className=" text-white text-[48px] text-left min-[1400px]:text-[70px] transition-all duration-1000 transform pt-24 p-10">
            SALVE A TUTTI, SONO UN GRAPHIC DESIGNER E FRONT-END DEVELOPER.👋</h1>
              <p className=" text-white text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] transition-all duration-1000 pt-5 p-10">
              Ciao, sono Francesco Convertini. Mi occupo di progettare loghi, illustrazioni, siti e applicazioni web, creando soluzioni semplici, funzionali e 
              su misura per soddisfare ogni esigenza🚀</p>
          </div>
          <div className=""> 
            <img  className="rounded-tl-[100px] rounded-br-[100px] w-[530px] transition-all duration-1000 p-6 sm:mt-[300px] sm:ml-[100px] min-[768px]:w-[300px] xl:w-[530px]" 
            src="foto mia.svg" alt=""/>
          </div>
        </div>


        <div className={`transform transition-all duration-1000 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
        grid  grid-cols-1 absolute left-0 w-[100%] z-10 mt-[1260px] bg-[#213a46] rounded-tl-[180px] rounded-br-[180px]`}>
          <div className="mt-[180px]"></div>
          <div className={`transform transition-all duration-1000 ${visible ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
            <h2 className=" text-[#db8f8f] text-[30px] text-left min-[1400px]:text-[35px] flex justify-center items-center font-bold p-10">
              L'importanza del UI e UX Design.🤯</h2>
          </div>
          <div className="flex justify-center items-center">
            <img className={`transform transition-all duration-1000 ${visible ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} w-[450px] mt-20 rounded-[50px] p-10`} 
              src="Home2.svg" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <p className=" text-white text-[17px] text-left min-[1400px]:text-[23px] min-[768px]:text-[22px] font-normal p-10 sm:pl-96 sm:pr-96 pt-10">
              Il UX e il UI Design sono due 
                    
              discipline molto importanti, utili
                
              per la progettazione di prodotti
                    
              digitali come siti web e
                 
              applicazioni web e non.
                <br /> 
                <br />
              Nonostante siano due discipline
                   
              che vanno a braccetto sono 
                   
              diverse tra di loro.
                <br /> 
                <br />
              Il UI Design (User Interface Design) 
                  
              si occupa dell'interfaccia utente.
                <br />
                   
              Un UI designer ha il compito di creare interfacce grafiche
                    
              piacevoli ed efficaci.
                <br />
                <br />
              Il UI Design si occupa di varie cose 
                   
              come il layout, i colori, elementi interattivi, tipografia e coerenza visiva.
                <br />
                <br />
              Il UX Design (User Experience Design)
              si occupa dell'esperienza utente.
                <br />
                <br />
              Un UX designer ha il compito
                  
              di rendere l'esperienza dell'utente
                  
              su un prodotto digitale il più fluida, intuitiva e piacevole possibile.
                <br />
                <br />
              Il UX Design si occupa di aspetti come ricerca sugli utenti, architettura dell'informazione, prototipazione, test di usabilità e wireframing. 
            </p>
          </div>
          <div className="mt-[400px]"></div>
          <div className="flex justify-center items-center">
            <h2 className={`transform transition-all duration-1000 ${visible2 ? '-translate-x-0 opacity-100' : '-translate-x-full opacity-0'} text-[#db8f8f] text-[30px] 
            text-left min-[1400px]:text-[35px] p-10 font-bold`}>
              Cosa vuol dire progettare un logo funzionale.👌</h2>
          </div>
          <div className={`transform transition-all duration-1000 ${visible2 ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} 
          flex justify-center items-center`}>
            <img className= "w-[450px] mt-20 rounded-[50px] p-10" 
              src="Home1.svg" alt="" />
          </div>
          <div className={`transform transition-all duration-1000 ${visible2 ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} flex 
          justify-center items-center`}>
            <p className=" text-white text-[17px] text-left min-[1400px]:text-[23px] min-[768px]:text-[22px] font-normal p-10 sm:pl-96 sm:pr-96 pt-10">
              Un logo non è soltato un disegno a caso bello da vedere, ma è una cosa molto più complessa.
                <br /> 
                <br />
              Molto probabilmente è l'elemento più importante per rapresentare un branding.
                <br /> 
                <br />
              Un logo progettato come si deve ha come compito quello di racconatere una storia, comunicare i sentimenti e i valori del brend a cui si riferisce.
                <br />
                <br />
              Per avere un logo che comunichi le giuste cose bisogna informarsi tanto sul brend e
              In oltre bisogna saper scegliere la tipografia, i colori e le forme giuste.
                <br />
                <br />
              Come ultima cosa bisogna sapere che esistono 7 tipologie di logo, il giusto tipo deve essere utilizzato in base all'obiettivo del marchio. 
            </p>
          </div>
          <div className="mt-[400px]"></div>
          <div className=" flex justify-center items-center">
            <h2 className={`transform transition-all duration-1000 ${visible3 ? '-translate-x-0 opacity-100' : '-translate-x-full opacity-0'} text-[#db8f8f] text-[30px] 
            text-left min-[1400px]:text-[35px] p-10 font-bold`}>
               Cosa fa un Web Designer.🤓</h2>
          </div>
          <div className={`transform transition-all duration-1000 ${visible3 ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          flex justify-center items-center`}>
            <img className= "w-[450px] mt-20 rounded-[50px] p-10" 
              src="Home3.svg" alt="" />
          </div>
          <div className={`transform transition-all duration-1000 ${visible3 ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} flex 
          justify-center items-center`}>
            <p className=" text-white text-[17px] text-left min-[1400px]:text-[23px] min-[768px]:text-[22px] font-normal p-10 sm:pl-96 sm:pr-96 pt-10">
            Il Web Designer si occupa sia della progettazione estetica ma anche funzionale del Front-End di un sito o app web.
                  <br />
                  <br />
                Il Front-End è la parte visibile di un sito o un'applicazione web, quella con cui l'utente interagisce direttamente, e include diversi elementi, come pulsanti, immagini, form, menu, ecc.
                  <br />
                  <br />
                Il Web Designer deve saper fare un buon lavoro con il UI/UX Design, saper scegliere i colori giusti, la tipografia adeguata, le giuste forme, implementare i giusti spazi bianchi e sapere la base dei linguaggi di programmazione, HTML, CSS e JavaScript.
                  <br />
                  <br />
                Prima di tutto un Web Designer deve avere in mente la struttura dell'interfaccia utente che si vuole creare.
                  <br />
                  <br />
                Progettare il design dell'interfaccia utente su un foglio di carta può aiutare, ma molto meglio utilizzare Figma, il miglior software (per ora) per progettare le interfaccie utente.
                  <br />
                  <br />
                In oltre bisogna progettare il prodotto in questione per tutti i dispositivi, telefoni, tablet e pc in modo tale che ogni persona che utilizza un dispositivo diverso possa usufruire del prodotto su ogni piattaforma.
                  <br />
                  <br />
                Questa pratica si chiama Responsive Design ed è utile per l'esperienza utente.
                  <br />
                  <br />
                Deve assolutamente essere applicata se si vuole che il sito o applicazione web sia visto in maniera chiara su più dispositivi.
                  <br />
                  <br />
                Dopo che il Web Designer avrà progettato su Figma l'interfaccia utente con il menu, i form, i testi, i pulsanti, le immagini ecc, mettendo in pratica le regole citate prima, 
                si darà la responsabilità al Front-End Developer che si occuperà di realizzare il prodotto con i vari linguaggi di programazzione.  
            </p>
          </div>
          <div className="mt-[400px]"></div>
          <div className="flex justify-start items-start">
            <p className=" text-[#db8f8f] text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] font-medium absolute z-10 p-10">
              Vorresti che i tuoi progetti siano funzionali, accattivanti e interessanti?</p>
              <a href="mailto:francesco16convertini@gmail.com"  className="flex justify-center items-center bg-[#db8f8f] w-[115px] h-[40px] rounded-full mt-40 
              animate-Bottone ml-10 xl:w-[180px] xl:h-[60px]">
            
               <span className="absolute mt-[1px] ml-[-1px] text-[14px] xl:text-[18px] text-[#2e1d1d]">CONTATTAMI </span>
                </a>
                <div className="mt-[360px]"></div>
          </div>
          
               
          </div>
            
        
        
        


        <div className="grid grid-cols-1  absolute mt-[9976px] 2xl:mt-[7806px]  left-0 w-[100%] z-20">
          <div className=""><FooterWeb></FooterWeb></div>
        </div>


<div className="h-[9970px] 2xl:h-[7800px]"></div>



          

    </>
    
  );
    
}
   


export default Home;