import { useState, useEffect } from "react";

const roles = [
  "Graphic Designer",
  "Web Designer",
  "Front-End Developer",
];

const AnimatedText2 = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 2000); // Cambia la scritta ogni 2 secondi

    return () => clearInterval(intervalId); // Pulisce l'intervallo quando il componente si smonta
  }, []);

  return (
    <div className="text-4xl font-bold text-center min-[1400px]:ml-[-200px]">
      <h1>&nbsp;</h1>
      <span
        className="transition duration-500 ease-in-out transform  ml-0]"
      >
        {roles[currentRole]}
      </span>
    </div>
  );
};

export default AnimatedText2;
