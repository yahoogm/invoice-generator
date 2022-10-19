import Leaderbar from "./Leaderbar";

const Susah =() => {
    return (
        <>
        <div className="grid grid-cols-2 gap-2 w-full " >
        <Leaderbar judul={"bill to"} title={"Who is ths invoice to?"}/>
        
        <Leaderbar  judul={"ship to"} title={"(optional)"}/>
        </div>
        </>

    )
}

export default Susah