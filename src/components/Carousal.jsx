import React from 'react';
import { Carousel } from 'react-carousel3';

const style = {
  width: 297,
  height: 296,
};

const Carousal=() => (
  <div className=' bg-gray-100 mx-40 flex justify-center my-20 rounded py-10'  >
    

    <Carousel height={320} width={1380} yOrigin={42} yRadius={48} autoPlay={true}>
      <div key={1} style={style}>
        <img className='rounded shadow-2xl' alt="" src="/images/SOU.jpg" />
      </div>
      <div key={2} style={style}>
        <img className='rounded shadow-2xl' alt="" src="/images/Rani-Ki-Vav.jpg" />
      </div>
      <div key={3} style={style}>
        <img className='rounded shadow-2xl' alt="" src="/images/Khaman (1).png" />
      </div>
      <div key={4} style={style}>
        <img className='rounded shadow-2xl' alt="" src="/images/Saputara Hill station.jpg" />
      </div>
      <div key={5} style={style}>
        <img className='rounded shadow-2xl' alt="" src="/images/Somnath-Temple.jpg" />
      </div>
      <div key={6} style={style}>
        <img className='rounded shadow-2xl' alt="" src="/images/Handhwo (2).png" />
      </div>
    
      <div key={7} style={style}>
        <img className='rounded shadow-2xl' alt="" src="/images/Polo.jpg" />
      </div>
      <div key={8} style={style}>
        <img className='rounded shadow-2xl' alt="" src="/images/Great Rann Of Kutch (14).jpg" />
      </div>
      <div key={9} style={style}>
        <img className='rounded shadow-2xl' alt="" src="/images/undhiyu.jpg" />
      </div>
    </Carousel>
  </div>
);
export default Carousal