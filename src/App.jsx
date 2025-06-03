import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/Componenti/Home';
import LuckRollDescription from './assets/Componenti/LuckyRollDescription';
import Appluckyroll from './assets/Componenti/Appluckyroll';
import FrancescoConvertiniPortfolioDescription from './assets/Componenti/FrancescoConvertiniPortfolioDescription';
import MimmoSoftWebDescription from './assets/Componenti/MimmoSoftWebDescription';
import Moon from './assets/Componenti/Moon';
import Cactus from './assets/Componenti/Cactus';
import Thing from './assets/Componenti/Thing';
import Cartoons from './assets/Componenti/Cartoons';
import Note from './assets/Componenti/Note';
import SuperCounter from './assets/Componenti/SuperCounter';
import ScrollToTop from './assets/Componenti/Scrolltop';
import ChatbotDescription from './assets/Componenti/ChatbotDescription';
import RedesignCrunchyrollDescription from './assets/Componenti/RedesignCrunchyrollDescription';

function App() {
  return (
    <>

      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lucky Roll" element={<LuckRollDescription />} />
          <Route path="/App Lucky Roll" element={<Appluckyroll />} />
          <Route path="/FrancescoConvertini Portfolio" element={<FrancescoConvertiniPortfolioDescription/>} />
          <Route path="/MimmoSoftWeb" element={<MimmoSoftWebDescription/>} />
          <Route path="/Super Counter" element={<SuperCounter/>} />
          <Route path="/Wanderlust Adventures" element={<Moon/>} />
          <Route path="/Agenda 2024" element={<Cactus/>} />
          <Route path="/The Thing under the bed" element={<Thing/>} />
          <Route path="/GreenThreads" element={<Cartoons/>} />
          <Route path="/Airnote" element={<Note/>} />
          <Route path="/Chatbot" element={<ChatbotDescription/>} />
          <Route path="/Redesign Crunchyroll" element={<RedesignCrunchyrollDescription/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
