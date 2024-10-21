
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

 

 
      <header className=" shadow-lg min-[500px]:w-[375px] h-[80px]  bg-[#76ABAE] fixed top-4 left-4 xl:w-[97%] xl:ml-[4px]  
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


        <ul className={` shadow-lg grid grid-rows mt-[-200px] w-[105px]   pt-[50px] transition-all duration-700 xl:hidden bg-[#76ABAE] rounded-bl-[100px] h-[300px]
        ${Comparsa}  `}>
          <li className=' border-black border-[3px] w-[85px] h-8 mt-[-20px] p-[1px] ml-[10px] rounded-full'>
            <Link to="/" className='text-black '>Home</Link>
          </li>
          <li className='mt-[-45px] border-black border-[3px] w-[85px] h-8 p-[1px] ml-[10px] rounded-full'>
            <Link to="/Chi sono" className='text-black'>Chi sono</Link>
          </li>
          <li className='mt-[-55px] border-black border-[3px] w-[85px] h-8 p-[1px] ml-[10px] rounded-full'>
            <Link to="/Portfolio" className='text-black'>Portfolio</Link>
          </li>
          <li className='mt-[-68px] bg-black w-[85px] h-8 p-1 ml-[10px] rounded-full'>
            <a href="mailto:francesco16convertini@gmail.com" className='text-white'>Contatti</a>
          </li>
        </ul>
        

        <nav>
          <ul className='xl:grid xl:grid-cols-4 hidden mt-[-40px] ml-[1050px]  xl:ml-[500px] min-[1400px]:gap-10 min-[1400px]:ml-[960px] '>
            <div className='ml-[-30px] flex justify-left items-left'>
              <Link to="/" className='text-black hover:text-black text-[20px] '>
                <li className='border-black border-[2px] w-[130px] h-9 rounded-full '>
                Home
                </li>
              </Link>
            </div>
            <div className='ml-[-30px] flex justify-left items-left'>
              <Link to="/Chi sono" className='text-black hover:text-black text-[20px]'>
                <li className='border-black border-[2px] w-[130px] h-9 rounded-full'>
                Chi sono
                </li>
              </Link>
            </div>
            <div className='ml-[-30px] flex justify-left items-left'>
              <Link to="/Portfolio" className='text-black hover:text-black text-[20px]'>
                <li className='border-black border-[2px] w-[130px] h-9 rounded-full'>
                Portfolio
                </li>
              </Link>
            </div>
            <div className='ml-[-30px] flex justify-left items-left'>
              <a href="mailto:francesco16convertini@gmail.com" className='text-white hover:text-white text-[20px]'>
                <li className='bg-black w-[130px] h-9 rounded-full p-[3px]'>
                Contatti
                </li>
              </a>
            </div>
          </ul>
        </nav>


      </header>


      <div className="border-2 border-transparent w-[100%] h-[96px] left-0 top-0 z-20 fixed bg-[#181c20]"></div>


    </>
  
  );

}



export default Navbar;