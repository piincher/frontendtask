import "./HomePage.styles.css";
import { ReactComponent as Logo } from "../../assets/Landing page image.svg";
import {
  FaSignal,
  FaWifi,
  FaBatteryFull,
  FaLock,
  FaUndo,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Images } from "../../constant/Images";
const HomePage = () => {
  return (
    <>
      <div className='status-container'>
        <p>9:41</p>
        <div className='status-icons-container'>
          <FaSignal />
          <FaWifi />
          <FaBatteryFull />
        </div>
      </div>
      <div className='header-container'>
        <h1 className='headline'>
          Imagine if <span className='snapchat-text'>Snapchat</span>
          <br /> had events.
        </h1>
        <p className='header-paragraph'>
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <span className='landing-page-image-container margin-auto'>
        <Logo />
      </span>

      <button className='button'>
        <Link to='/events'>🎉 Create my event</Link>
      </button>

      <div className='bottom-container'>
        <div className='input-border-container background-container margin-auto'>
          <img src={Images.aA} alt='text' className='icon-style' />

          <div className='domain'>
            <FaLock />
            <p className='domain-text'>domain.com</p>
          </div>
          <FaUndo className='icon-style' />
        </div>
        <div className='input-border-container'>
          <img src={Images.arrowLeft} alt='text' className='icon-style' />
          <img src={Images.arrowRight} alt='text' className='icon-style' />
          <img src={Images.upload} alt='text' className='icon-style' />
          <img src={Images.book} alt='text' className='icon-style' />
          <img src={Images.frame} alt='text' className='icon-style' />
        </div>

        <div className='line-dashed margin-auto'></div>
      </div>
    </>
  );
};

export default HomePage;
