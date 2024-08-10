import { useEffect, useState } from "react"
import FooterWeb from "./FooterWeb"

function Appluckyroll (){

    const [diceNumber, setDiceNumber] = useState("");
    const [rolling, setRolling] = useState(false);
    const [statusMessage, setStatusMessage] = useState('Roll the dice!');
  
    const rollDice = () => {
      setRolling(true);
      setStatusMessage('Rolling...');
      setTimeout(() => {
        setRolling(false);
        setStatusMessage('Roll again!' );
        setDiceNumber(Math.floor(Math.random() * 6) + 1);
      }, 1000);
    };
  
    return (
      <>
        <header className="shadow-lg min-[1400px]:w-[100%] min-[500px]:w-[100%] h-[80px] top-0 bg-[#ffcb3c] absolute left-0  min-[412px]:w-[100%] min-[414px]:w-[100%] min-[430px]:w-[100%] min-[375px]:w-[100%] min-[390px]:w-[100%]">
          <div className='w-[250px] h-[50px] mt-[15px] ml-[75px] min-[375px]:ml-14 min-[412px]:ml-[80px] min-[1400px]:ml-[800px] xl:ml-[520px]'>
            <img className="mt-[-140px] " src="Roll v22.svg" />
          </div>
        </header>
  
        <h1 className="text-black mt-[200px] leading-[70px] min-[1400px]:ml-[10px]">Do you feel lucky?</h1>
  
        <div className={`border-[4px] border-black w-16 h-16 mt-24 ml-[126px] min-[1400px]:ml-[200px] rounded-[10px] ${rolling ? 'animate-Roll' : ''} flex items-center 
          xl:ml-[202px] justify-center min-[414px]:ml-[147px] min-[412px]:ml-[146px] min-[390px]:ml-[137px] min-[430px]:ml-[157px]`}>
          <span className="text-2xl text-black">{diceNumber}</span>
        </div>
  
        <div className=" text-black text-center mt-4 text-xl min-[1400px]:ml-[-15px]">
          {statusMessage}
        </div>
  
        <div className="w-[180px] h-[100px] ml-[70px] mt-[45px] min-[1400px]:ml-[112px]  xl:ml-[115px]">
          <div className="ml-[10px] bg-[#d46767] w-[154px] h-[60px] rounded-full mt-10 xl:hover:shadow-red-300 xl:hover:shadow-2xl min-[414px]:ml-[30px] min-[412px]:ml-[30px] min-[390px]:ml-[21px] min-[430px]:ml-[41px]" onClick={rollDice}>
            <h6 className="mt-[-6px] p-5 pt-[18px] text-white hover:text-white cursor-pointer">Roll</h6>
          </div>
        </div>
  
        <div className="w-2 h-[400px]"></div>
        <FooterWeb></FooterWeb>
      </>
    );
  }
<FooterWeb></FooterWeb>




export default Appluckyroll