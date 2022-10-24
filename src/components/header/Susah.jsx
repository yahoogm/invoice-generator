import Leaderbar from "./Leaderbar";


const Susah = () => {
  return (
    <div className="grid grid-cols-2 gap-4 ">
      <Leaderbar judul={"Bill To"} title={"Who is ths invoice to?"} />


      <Leaderbar judul={"Ship To"} title={"(Optional)"} />
    </div>
  );
};

export default Susah;
