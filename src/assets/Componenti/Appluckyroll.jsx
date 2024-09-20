import {useState } from "react"

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
       
    
        <div className=" w-[100%] left-0 top-0 h-[188%] absolute bg-gradient-to-bl from-[#001743] via-[#060d1a] to-[black] z-10"></div>


        <div className="flex justify-center items-center">
        <img className="absolute z-30 scale-[.52] top-[-190px] min-[1400px]:scale-[.13] min-[]: min-[1400px]:mt-[-1040px] xl:scale-[.20] xl:mt-[-640px] flex justify-center items-center
        min-[768px]:mt-[-260px] min-[768px]:scale-[.35]" 
        src="Roll v2.svg" alt="" />
        </div>


        <img className="absolute z-30 scale-[.17] min-[1400px]:scale-[.1] min-[1400px]:ml-[-1500px] ml-[-220px]  min-[1400px]:mt-[-10px] mt-140px] 
        rotate-45 xl:ml-[250px] xl:mt-[350px] min-[768px]:mt-[-180px] min-[768px]:ml-[-420px] min-[768px]:scale-[.1]" src="dado.svg" alt="" />
        <img className="absolute z-30 scale-[.17] min-[1400px]:scale-[.2] min-[1400px]:ml-[400px] min-[1400px]:mt-[400px] ml-[-30px] xl:ml-[-1000px] 
        xl:mt-[150px] xl:scale-[.1] mt-[110px] rotate-[-45deg] min-[768px]:mt-[80px] min-[768px]:ml-[-20px] min-[768px]:scale-[.1]" src="dado.svg" alt="" />
        

              <br />
                <br />
                  <br />
                    <br />
                  <br />
                <br />
              <br />
              
            
        <div className="flex justify-center items-center mt-[300px]">
          <h1 className="text-white text-center  absolute z-30">Do you feel lucky?</h1>
        </div>
    

        <div className="flex justify-center items-center mt-[200px]">
          <div className={`flex justify-center items-center border-[4px] border-[#D7E0FF] w-16 h-16 rounded-[19px] ${rolling ? 'animate-Roll' : ''} absolute z-30`}>
            <span className="text-2xl text-white font-normal">{diceNumber}</span>
          </div>
        </div>

        
        <div className="flex justify-center items-center mt-[100px]">
          <div className="text-white flex justify-center items-center text-center text-xl absolute z-30">
            {statusMessage}
          </div>
        </div>


        <div className="flex justify-center items-center mt-[10px]">
          <div className="w-[180px] h-[100px] flex justify-center items-center relative z-30">
            <div className="bg-[#D7E0FF] w-[154px] h-[40px] rounded-full flex justify-center items-center cursor-pointer" onClick={rollDice}>
              <span className="text-black hover:text-black cursor-pointer font-bold">Roll</span> 
            </div>
          </div>
        </div>


      </>
    );
  }


export default Appluckyroll