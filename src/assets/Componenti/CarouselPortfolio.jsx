import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const CARD_WIDTH = 260;

// --------------------------
// ✅ Dati Portfolio
// --------------------------

const designProjects = [
  {
    id: 1,
    title: "Portfolio Francesco Convertini",
    description: "Portfolio personale per far conoscere le proprie abilità di Design e programmazione.",
    image: "coperportfolio.svg",
    link: "/FrancescoConvertini Portfolio",
  },
  {
    id: 2,
    title: "MimmoSoftWeb",
    description: "Sito web di guide tech su vari progetti con Raspberry, MySQL e Python.",
    image: "sfondoMimmo.svg",
    link: "/MimmoSoftWeb",
  },
  {
    id: 3,
    title: "Lucky Roll",
    description: "Applicazione web che simula il lancio dei dadi a sei faccie.",
    image: "copapp.svg",
    link: "/Lucky Roll",
  },
  {
    id: 4,
    title: "Chatbot",
    description: "Piccolo chatbot che risponde a varie domande.",
    image: "falsa ai.svg",
    link: "/Chatbot",
  },
  {
    id: 5,
    title: "Redesign di Crunchyroll",
    description: "Redesign dimostrativo del sito Crunchyroll che punta ad avere una UI migliore.",
    image: "CrunchyrollCards.svg",
    link: "/Redesign Crunchyroll",
  },
];

const codingProjects = [
  {
    id: 1,
    title: "Dice Simulator",
    description: "Simulatore di dado in React",
    image: "falsa ai.svg",
    link: "/progetti/dice-simulator",
  },
  {
    id: 2,
    title: "Todo App",
    description: "App per gestire task",
    image: "/images/todo-app.png",
    link: "/progetti/todo-app",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Meteo con API esterne",
    image: "/images/weather.png",
    link: "/progetti/weather",
  },
];

// --------------------------
// ✅ Carousel Component
// --------------------------

const Carousel = ({ title, projects }) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        setCardsPerView(4);
      } else if (width >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const maxIndex = Math.max(0, projects.length - cardsPerView);

  const scrollLeft = () => {
    if (index > 0) setIndex(index - 1);
  };

  const scrollRight = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  return (
    <div className="absolute mb-12 overflow-hidden xl:w-[100%] ml-[-17%] xl:ml-[-7%] 2xl:ml-[-18.3%] min-[400px]:w-[101.5%] w-full">
      <h2 className="text-3xl font-bold text-[#173b3d] mb-4">{title}</h2>

      {/* Frecce */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronLeft color="black" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronRight color="black" />
      </button>

      {/* Contenitore visibile */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${index * CARD_WIDTH}px)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigate(project.link)}
              className="min-w-[250px] max-w-[250px] h-[24rem] rounded-br-[120px] translate-x-[5.3rem] bg-[#76ABAE] p-4 mx-1 cursor-pointer hover:scale-90 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-xl mb-2"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-[#173b3d]">{project.title}</h3>
                <p className="text-sm text-[#173b3d] font-medium">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ✅ PropTypes
Carousel.propTypes = {
  title: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// --------------------------
// ✅ Componente principale
// --------------------------

const CarouselPortfolio = () => {
  return (
    <>
      <div className="p-6 md:p-12 max-w-7xl mx-auto mt-9">
        <p className="px-10 text-[25px] ml-[-63px] 2xl:ml-[-61%] font-medium text-white">Developer</p>
        <Carousel projects={designProjects} />
      </div>
     {/* <div className="mt-[26rem] p-6 md:p-12 max-w-7xl mx-auto">
        <p className="px-10 text-[25px] ml-[-63px] font-medium text-white 2xl:ml-[-61%]">Design</p>
        <Carousel projects={codingProjects} />
      </div>
      */}
    </>
  );
};

export default CarouselPortfolio;
