import React from "react";
import "./Featured.css";
import Carousel from "react-multi-carousel";
import Product from "../productcard/Product_card.js";

const Featured = () => {
  return (
    <div className="featured">
      <div className="box-model">
        <h2 className="box-title">The Most Popular Cars</h2>
        <div className="inner-box-model">
          <div className="box-inner"> <img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380816.jpg?width=540" alt="" /> </div>
          <div className="caption-box">
            Car Name<span className="caption-box-title">4,48,888</span>
          </div>
          <div className="detail-box">
           Check More Details
          </div>
        </div>
        <div className="inner-box-model">
        <div className="box-inner"><img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380522.jpg?width=540" alt=""/></div>
        <div className="caption-box">
            Car Name<span className="caption-box-title">4,48,888</span>
          </div>
          <div className="detail-box">
           Check More Details
          </div>
        </div>
        <div className="inner-box-model">
        <div className="box-inner"><img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662382205.jpg?width=540" alt=""/></div>
        <div className="caption-box">
            Car Name<span className="caption-box-title">4,48,888</span>
          </div>
          <div className="detail-box">
           Check More Details
          </div>
        </div>
        <div className="inner-box-model">
          <div className="box-inner"><img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/></div>
          <div className="caption-box">
            Car Name<span className="caption-box-title">4,48,888</span>
          </div>
          <div className="detail-box">
           Check More Details
          </div>
        </div>
       
       
      </div>
      <div className="box-model">
        <h2 className="box-title">Get trusted used trucks nearby</h2>
        <div className="inner-content-modal">
        <div className="inner-content">
        <img className="img"  src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        <div className="box-inner-title">Pune</div>
        </div>
        <div className="inner-content">
        <img  className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        <div className="box-inner-title">Banglore</div>
        </div>
      
        <div className="inner-content">
        <img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        <div className="box-inner-title">Jaipur</div>
        </div>
        
        <div className="inner-content">
        <img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        <div className="box-inner-title">Mumbai</div>
        </div>
   
        <div className="inner-content">
        <img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        <div className="box-inner-title">Dehli</div>
        </div>
        <div className="inner-content">
        <img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        <div className="box-inner-title">Maharastra</div>
        </div>
        </div>
        </div>

        <div className="box-model">
        <h2 className="box-title"> Popular Brands</h2>
        <div className="inner-content-modal">
        <div className="inner-content">
        <img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        </div>
      
        <div className="inner-content">
        <img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        </div>
        
        <div className="inner-content">
        <img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        </div>
   
        <div className="inner-content">
        <img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        </div>
        <div className="inner-content">
        <img className="img" src="https://images.91wheels.com//assets/b_images/main/models/profile/profile1662380769.jpg?width=540" alt=""/>
        </div>
        </div>
        </div>
    </div>
  );
};

export default Featured;
