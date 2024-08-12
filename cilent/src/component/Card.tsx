interface SomeComponenProps {
    im:string
    total:number
    name:string
}


const Card :React.FC<SomeComponenProps>= ({im,total,name}) => {
    return (
        <div className="bg-[#ECEDEE] rounded-2xl shadow-slate-400 shadow-md h-[200px] w-[280px] flex flex-col gap-[12px] pl-[15px] justify-center text-black ">
            <div>
                <img src={im} alt="" />
            </div>
            <div>
                <span className="font-semibold text-[18px] text-[grey]">
                  {name}
                </span>
            </div>
            <div className="text-[34px] font-bold">
                {total}
            </div>
        </div>
    )
}

export default Card

