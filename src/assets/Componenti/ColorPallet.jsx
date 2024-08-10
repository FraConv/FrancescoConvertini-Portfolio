function ColorPallet ({className,code}){

    return(

        <>
        
<div className={`border-2 border-black w-20 h-20 rounded-full mt-10 min-[1400px]:ml-[-250px] xl:ml-[50px] min-[768px]:ml-[10px] ${className}`}></div>
<ul  className=" w-[240px] h-[30px]  border-transparent border-[2px] ml-[-20px] mt-[50px] min-[1400px]:ml-[-250px] xl:ml-[50px] xl:w-[700px] min-[768px]:ml-[10px]">
<li className='text-black text-[18px] ml-5 text-left '>{code}</li>
</ul> 

        </>

    );

};


export default ColorPallet;