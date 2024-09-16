import { useState, useEffect } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); // Nuovo stato per gestire la dissolvenza

  useEffect(() => {
    // Simula un'operazione di caricamento
    const timer = setTimeout(() => {
      setFadeOut(true); // Attiva la dissolvenza
      setTimeout(() => setLoading(false), 1000); // Nasconde il loader dopo la dissolvenza
    }, 300000); // 3 secondi

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null; // Nascondi il loader una volta terminato


  return (
    <>
      <div
        className={`transform transition-all duration-1000 grid grid-cols-5 w-[100vw] right-0 h-[700vw] bg-[#faf5eb] z-40 fixed ml-[-33px] mt-[-100px] min-[414px]:ml-[-32px] 
        min-[390px]:ml-[-32px] min-[430px]:ml-[-32px] 
        min-[412px]:ml-[-32px] min-[1400px]:w-[110%] min-[1400px]:left-0 xl:w-[110%] xl:left-0 min-[768px]:left-0 min-[768px]:w-[120%] ${fadeOut ? "opacity-0" : "opacity-100"}`} // Aggiungi transizione opacità
      >
        <div className="w-20 h-20 bg-[#80c6cf] ml-[153px] mt-[250px] min-[1400px]:ml-[925px] rotate-45 min-[1400px]:mt-[450px] min-[390px]:ml-[160px] min-[414px]:ml-[170px] 
        animate-Loaderr min-[430px]:ml-[178px] min-[412px]:ml-[164px] xl:ml-[670px] xl:mt-[350px] min-[768px]:ml-[430px] min-[768px]:mt-[420px]"></div>

        <div className="w-5 h-5 bg-black ml-[108px] mt-[280px] min-[1400px]:ml-[536px] min-[1400px]:mt-[480px] rotate-45 animate-Loaderr2 min-[414px]:ml-[117px] min-[390px]:ml-[112px] 
        min-[430px]:ml-[122px] min-[412px]:ml-[112px] xl:mt-[380px] xl:ml-[403px] min-[768px]:ml-[268px] min-[768px]:mt-[450px] min-[820px]:ml-[400px]"></div>
      </div>
    </>
  );
}

export default Loader;