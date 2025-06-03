import { useState, useEffect } from "react";

function Loader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 1000);
    }, 3000); // 3 secondi

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-40 flex items-center justify-center  bg-[#181c20] transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      <div className="relative w-24 h-24 rotate-45 bg-[#76ABAE] animate-Loaderr rounded-[2px] flex items-center justify-center"></div>
      <div className="w-9 h-9 rotate-45 absolute bg-[#325464] animate-Loaderr2 rounded-[2px]"></div>
    </div>
  );
}

export default Loader;
