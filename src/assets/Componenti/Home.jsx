

import FooterWeb from "./FooterWeb";
import Loader from "./Loader";
import Navbar from "./NavBar";

function Home () {

    return(
    
    <>

<Loader></Loader>

<Navbar></Navbar>


<div className="  w-[330px] h-[300px]  border-transparent border-[2px] ml-[-20px] mt-[200px] min-[1400px]:ml-[-200px] min-[1400px]:w-[700px] xl:ml-[-100px] xl:w-[500px] xl:h-[150px]
min-[1400px]:h-[300px] min-[768px]:ml-[-150px] min-[768px]:w-[500px] min-[768px]:h-[100px]">

<h1 className=" text-black text-[46px] text-left min-[1400px]:text-[70px]">SALVE A TUTTI SONO UN WEB DESIGNER E GRAPHIC DESIGNER.</h1>
</div>

<div className="  w-[330px] h-[160px]  border-transparentborder-[2px] ml-[-20px] mt-[100px] min-[1400px]:ml-[-200px] min-[1400px]:w-[700px] xl:ml-[-100px] xl:w-[500px] xl:h-[180px]
min-[768px]:ml-[-150px] min-[768px]:w-[500px]">

    <p className=" text-black text-[20px] text-left min-[1400px]:text-[26px] min-[768px]:text-[22px]">Il mio nome è Francesco Convertini, realizzo siti web, loghi e illustrazioni grafiche semplici e funzionali per ogni tipo di situazione.</p>

</div>

<div className="w-[300px] h-[300px] mt-[100px] ml-[-20px] xl:w-[350px] xl:h-[350px] xl:ml-[600px] xl:mt-[-300px] min-[1400px]:w-[500px] min-[1400px]:h-[500px] min-[1400px]:ml-[700px]
min-[1400px]:mt-[-400px] min-[768px]:ml-[-150px]">
  <img className="rounded-tl-[100px] rounded-br-[100px] shadow-2xl" src="foto mia.svg" alt="" />
</div>

<div className="  w-[330px] h-[330px]  border-transparent border-[2px] ml-[-80px] mt-[200px]  min-[1400px]:ml-[740px] min-[1400px]:w-[300px] xl:ml-[600px] min-[768px]:ml-[-200px]">

<div  className=" ml-[80px] bg-[#d46767] w-[170px] h-[60px] rounded-full mt-10 animate-Bottone z-10  " >     
    
<a href= "mailto:francesco16convertini@gmail.com" className=" p-10 pt-[30px] text-white hover:text-white"><h6 className=" mt-[-6px]">CONTATTAMI</h6></a>

</div>

</div>



    
  <FooterWeb></FooterWeb>
 
    



    </>
    
    );
    
    };
    
    export default Home;