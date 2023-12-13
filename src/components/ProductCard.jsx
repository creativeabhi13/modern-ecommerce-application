import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
const ProductCard = (props) => {
  const { grid}=props;
let location=useLocation();
console.log(location);
  return (
  <>
    <div className={` ${location.pathname = "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className="product-card position-relative text-decoration-none">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="/images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-img">
          <img src="/images/watch.jpg" className='im' alt="watch" />
          <img src="/images/watch-1.jpg" className='im' alt="watch" />
        </div>
        <div className="product-details">
          <h6 className='brand'>Havells</h6>
          <h5 className='product-title'>Kids Headphone bulk 10 pack multi coloured for students</h5>
          <ReactStars
            count={5}
            value="3.5"
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}

          />
          <p className="price">₹4500.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="/images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="/images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="/images/add-cart.svg" alt="add-cart" />
            </Link>


          </div>
        </div>
      </Link>
    </div>
    <div className={` ${location.pathname = "/store" ? `gr-${grid}`: "col-3"}`}>
      <Link className="product-card position-relative text-decoration-none">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="/images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-img">
          <img src="/images/watch.jpg" className='im' alt="watch" />
          <img src="/images/watch-1.jpg" className='im' alt="watch" />
        </div>
        <div className="product-details">
          <h6 className='brand'>Havells</h6>
          <h5 className='product-title'>Kids Headphone bulk 10 pack multi coloured for students</h5>
          <ReactStars
            count={5}
            value="3.5"
            size={24}
            activeColor="#ffd700"
            isHalf={true}
            edit={false}

          />
          <p className="price">₹4500.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="/images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="/images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="/images/add-cart.svg" alt="add-cart" />
            </Link>


          </div>
        </div>
      </Link>
    </div>
   
  </>
  )
}

export default ProductCard;