import { useNavigate } from "react-router-dom";


const ArtistCard = ({ track }) => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col w-[300px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-full cursor-pointer">
      <img alt="artist" src={track?.images?.coverart} className="w-full h-70 rounded-full" />
      <p className="whitespace-no-wrap overflow-hidden flex justify-center mt-4 font-semibold text-lg text-white truncate">{track?.subtitle}</p>
    </div>
  )
};

export default ArtistCard;
