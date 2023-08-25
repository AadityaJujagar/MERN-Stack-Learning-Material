import Tag from "./components/Tag";
import Random from "./components/Random";

export default function App() {
  return (
    <div className="w-full h-screen flex items-center flex-col background overflow-x-hidden">
      <h1 className="bg-white py-2 px-10 rounded-lg w-11/12 text-center font-bold text-4xl mt-[40px]">
        RANDOM GIFS
      </h1>
      <div className="w-full flex flex-col items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
