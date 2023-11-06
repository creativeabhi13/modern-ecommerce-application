import React from 'react'

const ProductCard = () => {
  return (
    <div className='col-3'>
        <div className="product-card">
                <div className="product-img">
                    <img src="/images/watch.jpg" alt="watch" />
                </div>
                <div className="product-details">
                    <h6 className='brand'>Havells</h6>
                    <h5 className='product-title'>Kids Headphone bulk 10 pack multi coloured for students</h5>
                </div>
        </div>
        
    </div>
  )
}

export default ProductCard;