function ColorPallet ({className,code}){

    return(
        <>
        

            <div className={`border-2 border-white w-20 h-20 rounded-full mt-10 ${className}`}></div>
                <ul  className=" w-[240px] h-[30px]  border-transparent border-[2px]  mt-[50px]  xl:w-[700px] flex justify-center items-center ">
                    <li className='text-white text-[18px] flex justify-center items-center '>{code}</li>
                </ul> 


        </>
    
    );

}



export default ColorPallet;