import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ( props, song, isPlaying, activeSong, i, data ) => {
    // console.log(props.isPlaying);
    // console.log(song.title);
    // console.log(song.images?.coverart)

    const dispatch = useDispatch();

    const handlePauseClick = () => {
        dispatch(playPause(false));
    };

    const handlePlayClick = () => {
        dispatch(setActiveSong(props, song, data, i));
        dispatch(playPause(true));
    };
    console.log();
    return (
        <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
            <div className="relative w-full h-55 group">
                <div
                    className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
                        props.activeSong?.title === props.song.title
                            ? 'flex bg-black bg-opacity-70'
                            : 'hidden'
                    }`}>
                    <PlayPause
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        song={song}
                        handlePause={handlePauseClick}
                        handlePlay={handlePlayClick}
                    />
                </div>
                <img alt="song_img" src={props.song.images?.coverart} />
            </div>
            <div className="mt-4 flex flex-col">
                <p className="font-semibold text-lg text-white truncate">
                    <Link to={`/songs/${props.song?.key}`}>
                        {props.song.title}
                    </Link>
                </p>
                <p className="text-sm truncate text-gray-300 mt-1">
                    <Link
                        to={
                            props.song.artist
                                ? `/artist/${props.song?.artists[0]?.adamid}`
                                : '/top-artists'
                        }>
                        {props.song.subtitle}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SongCard;
