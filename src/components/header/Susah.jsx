import Leaderbar from "./Leaderbar";

const Susah = () => {
  return (
    <div className="grid grid-cols-2 gap-2 w-full space-x-3">
      <Leaderbar judul={"Bill To"} title={"Who is ths invoice to?"} />

      <Leaderbar judul={"Ship To"} title={"(Optional)"} />
    </div>
  );
};

export default Susah;
