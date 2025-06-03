import { useState, useEffect } from 'react';

function Navbarhome() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrollChanged, setScrollChanged] = useState(false);

  // Disabilita lo scroll della pagina quando il menu è aperto
  useEffect(() => {
    document.body.style.overflow = menuVisible ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuVisible]);

  // Cambia sfondo navbar su scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollChanged(window.scrollY > 1190);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scrolla verso la sezione e chiude il menu
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuVisible(false);
    }
  };

  return (
    <>
      <nav className="fixed top-[1rem] gap-40 2xl:gap-[60rem] xl:gap-[27rem] xl:w-[95%] flex flex-row justify-center left-1/2 -translate-x-1/2 w-[90%] 2xl:w-[97%] z-30 h-[80px] bg-[#76ABAE] rounded-tl-full rounded-br-full">
        <div className='w-12 h-12 mt-[1rem] flex items-start justify-start'>
          <img className='w-full h-full' src="Logo mio.svg" alt="Logo" onClick={() => scrollToSection('home')} />
        </div>

        <div
          className="w-12 h-12 mt-[1rem] flex items-center justify-center cursor-pointer 2xl:hidden xl:hidden"
          onClick={() => setMenuVisible(prev => !prev)}
        >
          {/* ANIMAZIONE HAMBURGER → X */}
          <div className="flex flex-col justify-between items-center w-[60%] h-[50%]">
            <div
              className={`w-full h-[4px] bg-black rounded-full transition-all duration-300 ease-in-out  rounded-b-[50px] ${
                menuVisible ? 'rotate-45 translate-y-[10px] h-[4px] rounded-b-[0px]' : 'rotate-0'
              }`}
            />
            <div
              className={`w-[40px] h-[4px] bg-black rounded-full transition-all duration-300 ease-in-out ${
                menuVisible ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <div
              className={`w-full h-[4px] bg-black rounded-full transition-all duration-300 ease-in-out rounded-t-[50px] ${
                menuVisible ? '-rotate-45 -translate-y-[10px] h-[4px] rounded-b-[0px]' : 'rotate-0'
              }`}
            />
          </div>
        </div>

        <div className='grid grid-cols-4 gap-10 mt-4  max-[500px]:hidden text-black'>
          <div>
            <button className='w-[8rem] rounded-full hover:border-black bg-transparent font-medium border-[2px] border-black' onClick={() => scrollToSection('home')}>Home</button>
          </div>
          <div>
            <button className='w-[8rem] h-auto rounded-full hover:border-black bg-transparent font-medium border-[2px] border-black' onClick={() => scrollToSection('chi-sono')}>Chi sono</button>
          </div>
          <div>
            <button className='w-[8rem] h-auto rounded-full hover:border-black bg-transparent font-medium border-[2px] border-black' onClick={() => scrollToSection('portfolio')}>Portfolio</button>
          </div>
          <div>
            <button className='w-[8rem] h-auto rounded-full hover:border-black bg-black font-medium text-white' onClick={() => scrollToSection('Contatti')}>Contatti</button>
          </div>
        </div>
      </nav>

      {/* Menu a tendina */}
      <div className={`fixed left-0 top-0 w-full h-full bg-[#76ABAE] z-[29] transition-transform duration-300 
        ${menuVisible ? "translate-x-0" : "translate-x-[-100%]"}`}>

        {/* Voci di menu */}
        <div className="flex flex-col items-center justify-center h-full gap-10 text-black text-2xl">
          <button className='w-48 rounded-full bg-transparent font-medium border-[2px] border-black' onClick={() => scrollToSection('home')}>Home</button>
          <button className='w-48 rounded-full bg-transparent font-medium border-[2px] border-black' onClick={() => scrollToSection('chi-sono')}>Chi sono</button>
          <button className='w-48 rounded-full bg-transparent font-medium border-[2px] border-black' onClick={() => scrollToSection('portfolio')}>Portfolio</button>
          <button className='w-48 rounded-full text-white font-medium bg-black' onClick={() => scrollToSection('Contatti')}>Contatti</button>
        </div>
      </div>

      {/* Overlay colore top su scroll */}
      <div className={`fixed top-0 left-0 z-20 w-full h-[96px] border-2 border-transparent transition-colors duration-500 
        ${scrollChanged ? 'bg-[#213a46]' : 'bg-[#181c20]'}`} />
    </>
  );
}

export default Navbarhome;
