import React from 'react'
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <div className='col-4'>
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img src="/images/watch.jpg" alt="watch" />
          </div>
          <div className="special-product-content">
            <h5 className='brand'>Havells</h5>
            <h6 className="title">Samsung Galaxy Note 10+ Mobile Phone;Sim.....</h6>
            <ReactStars
    count={5}
     value="4.5"
     size={24}
     activeColor="#ffd700"
     isHalf={true}
     edit={false}

/>
<p className="price"> 
<span className="red-p">₹3600</span> &nbsp; 
<strike>₹4500</strike>
</p>
<div className='discount-till'>
  <p>
    <b>
      5 days
    </b>
  </p>
<div className="d-flex gap-10">
  <span className='badge rounded-circle p-3 bg-warning'>1</span>
  <span className='badge rounded-circle p-3 bg-warning'>1</span>
  <span className='badge rounded-circle p-3 bg-warning'>1</span>
</div>
</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct;