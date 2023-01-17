import { Link } from 'react-router-dom';

const DetailsHeader = ({ artistId, artistData, songData }) => {
    const artist = artistData?.artists[artistId]?.attributes;

    return (
        <div className="relative w-full h-80">
            <div className="absolute inset-0 flex items-center">
                <img
                    alt="art"
                    src={
                        artistId
                            ? artist.artwork?.url
                                  .replace('{w}', '500')
                                  .replace('{h}', '500')
                            : songData?.images?.coverart
                    }
                    className="sm:w-48 w-40 sm:h-48 h-40 rounded-full object-cover border-2 shadow-xl shadow-black"
                />
                <div className="ml-5">
                    <p className="font-bold sm:text-2xl text-xl text-white">
                        {artistId ? artist?.name : songData?.title}
                    </p>
                    {!artistId && (
                        <Link to={`/artists/${songData?.artists[0].adamid}`}>
                            <p className="text-base text-gray-400 mt-2">
                                {songData?.subtitle}
                            </p>
                        </Link>
                    )}
                    <p className="text-base text-gray-400 mt-2">
                        {artistId
                            ? artist?.genreNames[0]
                            : songData?.genres?.primary}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DetailsHeader;
