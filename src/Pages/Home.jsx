import React from 'react';
import img1 from '../Images/9.png';
import img2 from '../Images/s.jpg';
import img3 from '../Images/fenty.jpg';
import img4 from '../Images/2.png';
import img5 from '../Images/j.webp';
import img6 from '../Images/4.png';
import Footer from '../Component/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className='home-container'>
        
        <h1 >Categories</h1>
      </div>
      <div className='section-title'>
        <p className='section-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />  eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <button className='section-button'>Button</button>
      </div>
      <div className='image-section'>
        <img src={img1} alt="" className='image-wrapper' style={{ width: '250px', height: '350px' }} />
        <img src={img4} alt="" className='image-wrapper' style={{ width: '250px', height: '350px' }} />
        <img src={img5} alt="" className='image-wrapper' style={{ width: '250px', height: '350px' }} />
      </div>
      <div className='section'>
        <h1 className='section-title'>Our latest arrivals</h1>
      </div>
      <div className='flex justify-center items-center'>
        <p className='section-description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />  eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className='image-section'>
        <img src={img2} alt="" className='image-wrapper' style={{ width: '250px', height: '350px' }} />
        <img src={img3} alt="" className='image-wrapper' style={{ width: '250px', height: '350px' }} />
        <img src={img6} alt="" className='image-wrapper' style={{ width: '250px', height: '350px' }} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
