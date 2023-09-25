// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './contact.css'

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  
  

  const content = {
    city: ['Manama', 'Dubai','Houston'] ,
    desc: ['Level 22 , West Tower, Bahrain Financial Harbour, Manama, Bahrain', '1901, AA1, Mazaya Business Avenue, Jumeirah Lake Towers Dubai, UAE','4201 Main St STE 200, Houston, TX 77002'],
    location: ['https://www.google.com/maps/place//data=!4m2!3m1!1s0x3e49a54f349d4ae7:0x4ef3a7ddba1e7880?source=g.page.m._', 'https://www.google.com/maps/place/Mobile+App+Development+Company+In+Dubai/@25.0777397,55.1462488,19z/data=!4m6!3m5!1s0x3e5f6daba25d1257:0xf8e37e969426072a!8m2!3d25.0779276!4d55.1466577!15sCjhSNSBSZXRhaWwgTGV2ZWwsIENsdXN0ZXIgRCwgSnVtZWlyYWggTGFrZXMgVG93ZXJzLCBEdWJhaZIBEHNvZnR3YXJlX2NvbXBhbnk?shorturl=1', 'Cooking'],
    imgs: ['https://www.tekrevol.com/assets/images-new/pages/cantact_new/mm.png','https://www.tekrevol.com/assets/images-new/pages/cantact_new/dubai_location.png','https://www.tekrevol.com/assets/images-new/pages/cantact_new/Houston_img.png']
  };

  
  return (
    <div className="main">
      <div className="cl">
      <div class="form-container">
        <h1 className='container-h1'>Let’s talk about your project</h1>
        <div class="input-group">
            <div class="input">
                <input type="text" id="name" name="name" placeholder="Your Name" required/>
            </div>
            <div class="input">
                <input type="email" id="email" name="email" placeholder="Your Email" required/>
            </div>
        </div>
        <div class="input">
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number"/>
        </div>
        <div class="input">
            <textarea id="description" name="description" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Get in Touch</button>
    </div>
      </div>
    <div className="carousel-container">
      <Slider {...settings}>
        <div className='content'>
          <h1>{content.city[0]}</h1>
          <p>{content.desc[0]}</p>
          <a href="{content.location[0]}">View Location</a>
          <div className="center-image">
          <img src={content.imgs[0]} alt="Image 1" /></div>
        </div>
        <div className='content'>
        <h1>{content.city[1]}</h1>
        <p>{content.desc[1]}</p>
        <a href="{content.location[1]}">View Location</a>
        <div className="center-image">
        <img src={content.imgs[1]} alt="Image 2" /></div>
        </div>
        <div className='content'>
        <h1>{content.city[2]}</h1>
        <p>{content.desc[2]}</p>
        <a href="{content.location[2]}">View Location</a>
        <div className="center-image">
        <img src={content.imgs[2]} alt="Image 3" />
        </div>
        </div>
        
        {/* Add more slides as needed */}
      </Slider>
      <div className="small">
          <p>Hou</p>
          <p>SF</p>
          <p>MIA</p>
          <p>WA</p>
          <p>KHI</p>
          <p>DTX</p>
          <p>KHI</p>
          <p>DTX</p>
          <p>KHI</p>
          
        </div>
    </div>
    <div className="cl2">
    <div class="form-container">
        <h1 className='container-h1'>Let’s talk about your project</h1>
        <div class="input-group">
            <div class="input">
                <input type="text" id="name" name="name" placeholder="Your Name" required/>
            </div>
            <div class="input">
                <input type="email" id="email" name="email" placeholder="Your Email" required/>
            </div>
        </div>
        <div class="input">
            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number"/>
        </div>
        <div class="input">
            <textarea id="description" name="description" rows="4" placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Get in Touch</button>
    </div>
    </div>
    </div>
  );
};


export default Carousel;
