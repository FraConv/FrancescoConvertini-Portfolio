import { useState, useEffect } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // Nuovo stato per gestire la dissolvenza

  useEffect(() => {
    // Simula un'operazione di caricamento
    const timer = setTimeout(() => {
      setFadeOut(true); // Attiva la dissolvenza
      setTimeout(() => setLoading(false), 1000); // Nasconde il loader dopo la dissolvenza
    }, 3000); // 3 secondi

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Nascondi il loader una volta terminato


  return (
    <>
      <div
        className={`transform transition-all duration-1000 grid grid-cols-1 w-[100%] h-[100%]  bg-[#181c20]  z-40 fixed left-0 top-0 
          ${fadeOut ? "opacity-0" : "opacity-100"}`} 
>
        <div className="z-40 col-span-1 flex items-center  justify-center ">
        <div className="w-20 h-20 bg-[#76ABAE]  mt-[-200px]  rotate-45  
        animate-Loaderr rounded-[4px] relative">  </div>
   <div className="z-40 col-span-1 flex items-center  justify-center ">
        <div className="w-20 h-20 bg-[#325464]  mt-[-200px]  rotate-45  
        animate-Loaderr2 rounded-[4px] relative">  </div>
  
        </div>
        </div>

      
      </div>
    </>
  );
}

export default Loader;