
import { logo } from '../assets';


function SpotifyBanner() {
  return (
    <div className=' flex flex-col top-10 w-full h-20 absolute'>
      <img src={logo} className="w-full h-14 object-contain"/>
      <h2 className='text-white flex justify-center mt-5 text-2xl'>Personal Spotify Clone</h2>
    </div>
  )
}

export default SpotifyBanner