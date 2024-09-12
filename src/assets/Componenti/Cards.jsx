function Cards ({Immagine,Titolo,Descrizione}){

    return(

        <>

  
    <div className=" border-[2px] border-transparent w-[260px] h-[365px] bg-[#443e3e] mt-[400px] pt-32 ml-[-20px] text-[20px] rounded-br-[130px] min-[1400px]:ml-[-550px]
    xl:ml-[-350px] xl:mt-[425px] ">
    <div className=" mt-[-340px] w-[262px] ml-[-75px] h-[212px] border-2 border-transparent absolute ">    
    <img className="ml-[72px]" src={Immagine} alt="" />
    </div>   
        <h3 className=" text-[#db8f8f] text-[22px] ml-2 text-left mt-[-110px]">{Titolo}</h3>
        <p className="text-white text-[16px] ml-2 text-left mt-5">{Descrizione}</p>
       
    </div>

        </>

    );

};


export default Cards;