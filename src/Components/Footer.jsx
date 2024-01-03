import fb from '../assets/facebook.png';
import ig from '../assets/instagram.png';
import yt from '../assets/youtube.png';


export const Footer = () => {
  return (
    <>
      <footer className="foo text-center text-lg-start ">
        <div className="d-flex justify-content-center pt-3 pb-3">

        <a href="https://www.facebook.com/profile.php?id=100078777939889" target="_blank" rel="noreferrer" className='mx-2'>
          <button type="button" className=" iconfoo btn btn-info p-0">
            <img src={fb} alt="FaceBook" height={40} />
          </button>
          </a>

          <a href="https://www.youtube.com/channel/UCwy77PQLPjylWiKZBs0I1pA" target="_blank" rel="noreferrer" className='mx-2'>
          <button type="button" className="iconfoo btn btn-info p-0">
            <img src={yt} alt="Youtube" height={40} />
          </button>
          </a>

          <a href="https://www.instagram.com/ascolar_cordoba/" target="_blank" rel="noreferrer" className='mx-2'>
          <button type="button" className=" iconfoo btn btn-info p-0">
            <img src={ig} alt="Instagram" height={40} />
          </button>
          </a>

        </div>
        <div className="text-center text-white p-3">
          © 2023 Copyright
          <p className="text-white">ASCOLAR</p>
        </div>
      </footer>
    </>
  )
}
