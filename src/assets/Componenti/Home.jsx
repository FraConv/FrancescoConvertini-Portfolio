import FooterWeb from "./FooterWeb";
import Loader from "./Loader";
import Navbarhome from "./Navbarhome";
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";



function Home () {

  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const triggerHeight = 900; // Altezza di scroll in pixel per attivare l'animazione
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
      const triggerHeight = 4900; // Altezza di scroll in pixel per attivare l'animazione
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
        <Navbarhome></Navbarhome>


          <div className="w-[330px] h-[300px]  border-transparent border-[2px] ml-[-20px] mt-[200px] min-[1400px]:ml-[-200px] min-[1400px]:w-[700px] xl:ml-[10px] xl:w-[500px] xl:h-[150px]
          min-[1400px]:h-[300px] min-[768px]:ml-[30px] min-[768px]:w-[500px] min-[768px]:h-[100px] ab">
            <h1 className=" text-black text-[46px] text-left min-[1400px]:text-[70px] transition-all duration-1000 transform">
                    SALVE A TUTTI SONO UN WEB DESIGNER E GRAPHIC DESIGNER.<h2 className="min-[1400px]:ml-[690px] min-[768px]:ml-[452px] xl:ml-[452px] ml-[238px] min-[1400px]:mt-[-58px] mt-[-52px] text-[40px]">👋</h2>
            </h1>
          </div>


          <div className="w-[330px] h-[160px]  border-transparentborder-[2px] ml-[-20px] mt-[30px] min-[1400px]:ml-[-200px] min-[1400px]:mt-[120px] min-[1400px]:w-[700px] xl:ml-[10px] xl:w-[500px] xl:h-[180px]
          min-[768px]:ml-[30px] min-[768px]:w-[500px] min-[768px]:mt-[120px]">
            <p className=" text-black text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] transition-all duration-1000">
            Il mio nome è Francesco Convertini, progetto loghi, siti web e applicazioni web semplici e funzionali per ogni tipo di situazione.😀</p>
          </div>


          <div className="w-[300px] h-[300px] mt-[100px] ml-[-20px] xl:w-[350px] xl:h-[350px] xl:ml-[700px] xl:mt-[-300px] min-[1400px]:w-[500px] min-[1400px]:h-[500px] min-[1400px]:ml-[700px]
          min-[1400px]:mt-[-400px] min-[768px]:ml-[30px]">
            <img  className="rounded-tl-[100px] rounded-br-[100px] shadow-2xl transition-all duration-1000" src="foto mia.svg" alt=""/>
          </div>


          <div className="mt-[400px]"></div>


          <div className={`transform transition-all duration-1000 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} left-0 absolute h-[7778px]  min-[1400px]:h-[7240px]  bg-[#443e3e] w-[100%] rounded-tr-[160px] rounded-bl-[160px] min-[1400px]:rounded-tr-[280px]  
          min-[1400px]:rounded-bl-[280px] xl:mt-[460px] xl:h-[6400px]  min-[1400px]:mt-[279px] min-[768px]:mt-[180px] min-[768px]:h-[7080px] min-[768px]:rounded-tr-[260px] min-[768px]:rounded-bl-[260px]`}></div>


          <div className={`transform transition-all duration-1000 ${visible ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} w-[310px] h-[160px]  border-transparent border-[2px] ml-[-35px] mt-[-50px] min-[1400px]:ml-[-200px]  min-[1400px]:w-[1200px] xl:ml-[-15px] xl:w-[500px] xl:h-[180px]
              min-[768px]:ml-[10px] min-[768px]:mt-[150px] min-[768px]:w-[500px] pt-[100px] min-[1400px]:mt-[250px] absolute z-10  xl:mt-[450px]`}>
                <h2 className=" text-[#db8f8f] text-[30px] ml-5 text-left min-[1400px]:text-[35px] min-[1400px]:ml-[67vh] font-bold">
                  L'importanza del
                    <br />
                  UI e UX Design.🤯
                </h2>
            </div>


            <img className={`transform transition-all duration-1000 ${visible ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} scale-75 mt-[560px] ml-[-60px] pl-[10px] 
             min-[1400px]:scale-[.40] min-[1400px]:ml-[-22px] min-[1400px]:mt-[700px] xl:ml-[-420px] xl:scale-[.30]
            xl:mt-[850px] min-[768px]:scale-[0.50] min-[768px]:ml-[-152px] min-[768px]:mt-[710px] rounded-[50px]  `} src="Home2.svg" alt=""/>
       

            <div  className={`transform transition-all duration-1000 ${visible ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} w-[310px] h-[160px]  border-transparent border-[2px] ml-[-15px] mt-[-40px] min-[1400px]:ml-[-200px]  min-[1400px]:w-[1300px] xl:ml-[10px] xl:w-[800px] xl:h-[180px]
              min-[768px]:ml-[30px] min-[768px]:w-[500px] min-[768px]:mt-[-80px] pt-[100px] min-[1400px]:mt-[-170px] absolute z-10 xl:mt-[-260px]`}>
                <p className=" text-white text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] font-normal min-[1400px]:ml-[40vh]">
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


            <div className="w-[310px] h-[160px]  border-transparent border-[2px] ml-[-35px] mt-[1300px] min-[1400px]:ml-[-200px]  min-[1400px]:w-[500x] xl:ml-[-15px] xl:w-[800px] xl:h-[180px]
              min-[768px]:ml-[10px] min-[768px]:w-[500px] pt-[100px] min-[1400px]:mt-[900px] absolute z-10 min-[768px]:mt-[950px] xl:mt-[600px]">
                <h2 className={`transform transition-all duration-1000 ${visible2 ? '-translate-x-0 opacity-100' : '-translate-x-full opacity-0'} text-[#db8f8f] text-[30px] ml-5 text-left min-[1400px]:text-[35px] min-[1400px]:ml-[-1px] font-bold`}>
                  Cosa vuol dire progettare un logo funzionale.👌
                </h2>
            </div>


            <img className={`transform transition-all duration-1000 ${visible2 ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} scale-75 mt-[1560px] ml-[-60px] pl-[10px] min-[1400px]:scale-[.55] min-[1400px]:ml-[-430px] min-[1400px]:mt-[1050px] xl:ml-[-320px]  xl:scale-[.35]
            xl:mt-[630px] min-[768px]:scale-[0.50] rounded-[50px] min-[768px]:ml-[-152px] min-[768px]:mt-[1110px]`} src="Home1.svg" alt=""/>


            <div className="w-[310px] h-[160px]  border-transparent border-[2px] ml-[-15px] mt-[-30px] min-[1400px]:ml-[-200px]  min-[1400px]:w-[800px] xl:ml-[10px] xl:w-[800px] xl:h-[180px]
              min-[768px]:ml-[30px] min-[768px]:w-[500px] pt-[100px] min-[768px]:mt-[-80px]  min-[1400px]:mt-[-80px] absolute z-10  xl:mt-[-200px]">
                <p className={`transform transition-all duration-1000 ${visible2 ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} text-white text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] font-normal`}>
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

                <ul  className="  w-[300px] h-[130px]  border-transparent border-[2px] ml-[-20px] mt-[35px]  min-[1400px]:w-[1000px] xl:ml-[-1px] 
                min-[768px]:ml-[1px] min-[768px]:w-[500px] absolute z-10 list-disc min-[1400px]:ml-[-338px]">
                  <li className=' min-[1400px]:ml-[360px] text-white  text-[18px] text-left ml-[20px] min-[1400px]:text-[22px] min-[768px]:text-[20px] font-normal'>Logotipo: Loghi creati con solo testo usando font caratteristici.</li>
                  <br />
                  <li className=' min-[1400px]:ml-[360px] text-white text-[18px] text-left ml-[20px] min-[1400px]:text-[22px] min-[768px]:text-[20px] font-normal'>Monogramma: Utilizzano le iniziali di un brend per creare il logo.</li>
                  <br />
                  <li className=' min-[1400px]:ml-[360px] text-white text-[18px] text-left ml-[20px] min-[1400px]:text-[22px] min-[768px]:text-[20px] font-normal'>Pittogramma: Loghi che rappresentano il brend con solo un'immagine o simbolo.</li>
                  <br />
                  <li className=' min-[1400px]:ml-[360px] text-white text-[18px] text-left ml-[20px] min-[1400px]:text-[22px] min-[768px]:text-[20px] font-normal'>Logo astratto: Sono elementi astratti usati per evocare le emozioni del brend. </li>
                  <br />
                  <li className=' min-[1400px]:ml-[360px] text-white text-[18px] text-left ml-[20px] min-[1400px]:text-[22px] min-[768px]:text-[20px] font-normal'>Stemma: Questi loghi incorporano font e immagini in forme che richiamano antichi simboli di nobiltà come per esempio degli scudi.</li>
                  <br />
                  <li className=' min-[1400px]:ml-[360px] text-white text-[18px] text-left ml-[20px] min-[1400px]:text-[22px] min-[768px]:text-[20px] font-normal' >Logo combinato: Questi sono loghi che combinano pittogramma e logotipo.</li>
                  <br />
                  <li className=' min-[1400px]:ml-[360px] text-white text-[18px] text-left ml-[20px] min-[1400px]:text-[22px] min-[768px]:text-[20px] font-normal'>Mascotte: Loghi basati su personaggi che danno vita al brend.</li>
                </ul>
                
            </div>


            <div className="w-[310px] h-[160px]  border-transparent border-[2px] ml-[-35px] mt-[1800px] min-[1400px]:ml-[-60px] min-[1400px]:mt-[1500px]  min-[1400px]:w-[1200px] xl:ml-[-15px] xl:w-[800px] xl:h-[180px]
              min-[768px]:ml-[10px]  min-[768px]:mt-[1360px] min-[768px]:w-[500px] pt-[100px] absolute z-10 xl:mt-[1200px]">
                <h2 className={`transform transition-all duration-1000 ${visible3 ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} text-[#db8f8f] text-[30px] ml-5 text-left min-[1400px]:text-[35px] min-[1400px]:ml-[43vh] font-bold`}>
                  Cosa fa un Web Designer.🤓
                </h2>
            </div>

            <img className={`transform transition-all duration-1000 ${visible3 ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} scale-75 mt-[2020px] ml-[-60px] pl-[10px] min-[1400px]:scale-[.30] min-[1400px]:ml-[-15px] min-[1400px]:mt-[1420px] xl:ml-[-420px]  xl:scale-[.30]
            xl:mt-[1100px] min-[768px]:scale-[0.50] rounded-[50px] min-[768px]:ml-[-160px] min-[768px]:mt-[1460px]`} src="Home3.svg" alt=""/>


            <div className="w-[310px] h-[160px]  border-transparent border-[2px] ml-[-15px] mt-[-20px] min-[1400px]:ml-[-200px]  min-[1400px]:w-[1300px] xl:ml-[10px] xl:w-[800px] xl:h-[180px]
              min-[768px]:ml-[10px] min-[768px]:w-[500px] pt-[100px] absolute z-10 min-[1400px]:mt-[-280px] min-[768px]:mt-[-120px] xl:mt-[-330px]">
                <p className={`transform transition-all duration-1000 ${visible3 ? '-translate-y-0 opacity-100' : 'translate-y-full opacity-0'} text-white text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] font-normal min-[1400px]:ml-[30vh]`}>
                Il Web Designer si occupa sia della progettazione estetica ma anche funzionale del Front-End di un sito o app web.
                  <br />
                  <br />
                Il Front-End è la parte visibile di un sito o un'applicazione web, quella con cui l'utente interagisce direttamente, e include diversi elementi, come pulsanti, immagini, form, menu, ecc.
                  <br />
                  <br />
                Il Web Designer deve saper fare un buon lavoro con il UI/UX Design, saper scegliere i colori giusti, la tipografia adeguata, le giuste forme, creare i giusti spazi bianchi e usare i vari linguaggi di programmazione.
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
                Dopo aver creato su carta o su Figma l'interfaccia utente con il menu, i form, i testi, i pulsanti, le immagini ecc, mettendo in pratica le regole citate prima, 
                si può iniziare a programmare.
                  <br />
                  <br />
                I linguaggi di programmazione da usare sono HTML, CSS (anche se questi non sono linguaggi di programmazione) JavaScript e TypeScript.
                  <br />
                  <br />
                In oltre si usano per semplificare il lavoro i vari framework/librerie come React, Angular, Vue.js, Tailwind, Bootstrap ecc.
                  <br />
                  <br />
                L'HTML viene usato per la struttura del sito, il CSS per dare lo stile, colori, forme, font ecc, invece il JavaScript serve a rendere interattiva e dinamica l'applicazione o il sito web.
                  <br />
                  <br />
                Il JavaScript viene usato se si deve lavorare con i form, creare bottoni che causano eventi o funzioni specifiche o semplicemente per eventi che accadono automaticamente se si fa qualcosa nella pagina.
              

                  
              
                  
                </p>
            </div>






            <div className="w-[330px] h-[160px]  border-transparent border-[2px] ml-[-20px] mt-[2850px] min-[1400px]:ml-[-200px]  min-[1400px]:w-[1000px] xl:ml-[100px] xl:w-[800px] xl:h-[180px]
              min-[768px]:ml-[10px] min-[768px]:mt-[2350px] min-[768px]:w-[500px] pt-[100px] min-[1400px]:mt-[1750px] xl:mt-[1500px]">
                <p className=" text-[#db8f8f] text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px] font-medium absolute z-10">
                  Vorresti che i tuoi progetti siano funzionali, accattivanti e 
                    <br />
                  interessanti?</p>
            </div>

           
              <div className="w-[300px] h-[330px]  border-transparent border-[2px] ml-[-13px] mt-[70px]  min-[1400px]:ml-[-279px]  min-[1400px]:w-[300px] xl:ml-[10px] min-[768px]:ml-[-65px]
              min-[1400px]:mt-[75px] xl:mt-[25px]">
                 <a href="mailto:francesco16convertini@gmail.com" className="  text-[#000000] hover:text-[#000000]">
                <div  className="ml-[80px] bg-[#db8f8f] w-[170px] h-[60px] rounded-full mt-10 animate-Bottone" >     
               <span className="absolute mt-[18px] ml-[-51px]">CONTATTAMI </span>
                </div></a>
              </div>
            

              <div className="mt-[300px]  min-[1400px]:mt-[400px] xl:mt-[500px]"></div>
      

      <FooterWeb></FooterWeb>
  
    </>
    
  );
    
}
    
export default Home;