import { useState } from "react"
import FooterWeb from "./FooterWeb";


function SuperCounterApp (){

    const[count, setCount]=useState(0)
    const [Animation, setAnimation] = useState(false);
    const [AnimationM, setAnimationM] = useState(false);

    const clickmouse = () => { 
        
        setAnimation(true);
        setAnimationM(true);
        setTimeout(() => {
          setAnimation(false);
          setAnimationM(false);
          setCount(count + 1)
        }, 500);


        

  

       
    }

    return(

        <>
 
        <div className=" bg-[#213a46] top-0 left-0 w-[90%] ml-[5%] h-[80px] absolute justify-center rounded-b-[180px]">

        <div className="w-[365px] mt-[-60px]  min-[412px]:ml-[3px] min-[375px]:ml-[-15px] min-[1400px]:ml-[650px] min-[1400px]:mt-[-80px] min-[1400px]:w-[420px] 
       min-[390px]:ml-[-7px] min-[430px]:ml-[13px]">
        <img className=" xl:ml-[415px] min-[1400px]:ml-[-20px] min-[768px]:ml-[150px]" src="super counter cop.svg" alt="" />
        </div>

         </div>

        <div className="bg-amber-400 w-14 h-14 rounded-full mt-[200px] ml-[-50px] absolute">
        <div className="bg-amber-500 w-3 h-10 ml-[22px] mt-2 absolute rounded-sm "></div>
        </div>

        <h1 className="text-white absolute mt-[200px] ml-[20px] "> {count}</h1>

        <div className={`bg-amber-400 w-16 h-16 rounded-full mt-[510px] ml-[-23px] absolute ${AnimationM ? "animate-Jump2" : ""}`}>
        <div className="bg-amber-500 w-3  h-12 ml-[26px] mt-2 absolute rounded-sm  "></div>
        </div>

        <div className={` w-[100px] h-[103px] border-transparent border-2 ml-[-42px] mt-[490px] rounded-[15px] cursor-pointer  absolute ${Animation ? "animate-Jump" : ""}  `} onClick={clickmouse}>

            <div className=" justify-center w-[49px] h-[33px]  border-black border-2 bg-orange-600 rounded-tl-[19px] "></div>
            <div className=" justify-center w-[20px] h-[33px]  border-black border-2 bg-orange-600"></div>
            <div className=" justify-center w-[49px] h-[33px] border-black border-2   bg-orange-600 rounded-bl-[19px]"></div>
            <div className=" justify-center border-black border-2 w-[47px] h-[33px] ml-[49px] mt-[-33px]  rounded-br-[19px] bg-orange-600"></div>
            <div className=" justify-center border-black border-2 w-[47px] h-[33px] ml-[49px] mt-[-99px]  rounded-tr-[19px] bg-orange-600"></div>
            <div className=" justify-center w-[20px] h-[33px] ml-[76px]  border-black border-2 bg-orange-600"></div>
            <div className=" justify-center  border-black border-2 w-[56px] h-[33px] ml-[21%] mt-[-33px]   bg-orange-600"></div>
         
     

        </div>

        <div className="w-2 h-[1000px] min-[768px]:h-[1400px]"></div>

        <FooterWeb></FooterWeb>
        
        </>

    )

}

export default SuperCounterApp