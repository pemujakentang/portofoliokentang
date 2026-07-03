export function HelloMyNameIs({className = ""}){
    const component = (
        <div className={`${className} hello-my-name-is w-36 h-24 bg-red-500 rounded-lg flex flex-col items-center text-white leading-4 font-sans pt-0.5`}>
            <p className="font-bold">HELLO</p>
            <p className="font-normal">my name is</p>
            <div className={`flex justify-center items-center align-middle bg-white w-full h-1/2 text-center text-black font-normal mt-1.5 text-xl font-margarine`}>
            Boni / Martin
            </div>
        </div>
    )
    return component;
}