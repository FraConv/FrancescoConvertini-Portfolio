
import { Link } from 'react-router-dom';
import { useState} from 'react';



function Navbar() {

  const [Comparsa, setComparsa]= useState (  "mt-[5000px]");
  const [MovimentoGiu, setMovimentoGiu]= useState ("mt-[-40px]");
  const [MovimentoSu, setMovimentoSu]= useState ("mt-[-40px]");

  const clickMouse= () => {
  
    setComparsa(prevComparsa => prevComparsa ===  "mt-[5000px]" ? "mt-[24px]":   "mt-[5000px]");

    setMovimentoGiu(prevMovimentoGiu => prevMovimentoGiu === "mt-[-40px]" ? "translate-y-[6px]" : "mt-[-40px]");

    setMovimentoSu(prevMovimentoSu => prevMovimentoSu === "mt-[-40px]" ? "translate-y-[-6px]" : "mt-[-40px]");

  }
    

  return (
  
    <>
      {/*  NavBar */}

 

 
      <header className=" shadow-lg min-[500px]:w-[375px] h-[80px]  bg-[#8bd3dd] fixed top-4 left-4 xl:w-[97%] xl:ml-[4px]  
      min-[768px]:w-[96%] min-[412px]:w-[382px] min-[414px]:w-[382px] min-[430px]:w-[399px] min-[375px]:w-[343px] min-[390px]:w-[359px] rounded-tl-full rounded-br-full 
      z-30 min-[1400px]:w-[98%]">


        <div className=' w-[50px] h-[50px] mt-4 ml-7 '>
          <Link to="/">
            <img alt="Logo Francesco Convertini" src="Logo mio.svg" />
          </Link>
        </div>


        <div className='  min-[414px]:ml-[15px] ml-[-30px]   min-[412px]:ml-[5px] xl:hidden mt-1 min-[768px]:ml-[365px]'>
          <div className= {` bg-black w-7 h-[6px] ml-[270px] mt-[-40px] rounded-t-[100px]   transition-transform duration-700 ${MovimentoGiu} `} onClick={clickMouse}></div>
            <div className=' bg-black w-9 h-1 ml-[266px] mt-[5px] rounded-[100px]' onClick={clickMouse} ></div>
          <div className={` bg-black w-7 h-[6px] ml-[270px] mt-[5px] rounded-b-[100px]  transition-transform duration-700 ${MovimentoSu}`}  onClick={clickMouse}></div>
        </div>


        <ul className={` shadow-lg grid grid-rows mt-[-200px] w-[105px]   pt-[50px] transition-all duration-700 xl:hidden bg-[#8bd3dd] rounded-bl-[100px] h-[300px]
        ${Comparsa}  `}>
          <li className=' bg-black w-[85px] h-8 mt-[-22px] p-1 ml-[10px] rounded-full'>
            <Link to="/" className='text-white '>Home</Link>
          </li>
          <li className='mt-[-40px] bg-black w-[85px] h-8 p-1 ml-[10px] rounded-full'>
            <Link to="/Chi sono" className='text-white'>Chi sono</Link>
          </li>
          <li className='mt-[-50px] bg-black w-[85px] h-8 p-1 ml-[10px] rounded-full'>
            <Link to="/Portfolio" className='text-white'>Portfolio</Link>
          </li>
        </ul>
        

        <nav>
          <ul className='xl:grid xl:grid-cols-3 hidden mt-[-40px] ml-[1050px] xl:gap-360 xl:ml-[650px] min-[1400px]:gap-10 min-[1400px]:ml-[960px]'>
            <li className=''>
              <Link to="/" className='text-black hover:text-black text-[20px]'>Home</Link>
            </li>
            <li className=''>
              <Link to="/Chi sono" className='text-black hover:text-black text-[20px]'>Chi sono</Link>
            </li>
            <li className=''>
              <Link to="/Portfolio" className='text-black hover:text-black text-[20px]'>Portfolio</Link>
            </li>
          </ul>
              </nav>


      </header>


      <div className="border-2 border-transparent w-[100%] h-[96px] left-0 top-0 z-20 fixed bg-[#faf5eb]"></div>


    </>
  
  );

}



export default Navbar;