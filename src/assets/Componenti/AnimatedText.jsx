
import { useInView } from 'react-intersection-observer';

const AnimatedText = () => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Quando l'elemento è visibile al 10%
    triggerOnce: true, // L'animazione si attiva solo una volta
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <h1
        ref={ref}
        className={`text-4xl font-bold transition-all duration-1000 transform text-black ${
          inView ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
        }`}
      >
        Testo animato
      </h1>
    </div>
  );
};

export default AnimatedText;
