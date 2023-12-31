import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';


const OurStore = () => {
  const [grid,setGrid]=useState(4);
 
  return(  <>
    <Meta title={"Our Store"}></Meta>
    <BreadCrumb title="Our Store" />
    <div className="store-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3">
            <div className='filter-card mb-3'>
              <h3 className="filter-title">
                Shop By Categories
              </h3>
              <div>
                <ul className='ps-0'>
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Cameras</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title"> Filter By</h3>
              <div>
                <h5 className='sub-title'>Availability</h5>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id="" />
                    <label className='form-check-label' htmlFor="">
                      In Stock (15)
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id="" />
                    <label className='form-check-label' htmlFor="">
                      Out Of Stock (40)
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id="" />
                    <label className='form-check-label' htmlFor="">
                      Deliver in 1 day (20)
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id="" />
                    <label className='form-check-label' htmlFor="">
                      Deliver in 2 days (10)
                    </label>
                  </div>
                </div>
                <h5 className='sub-title'>Price</h5>
                <div className='d-flex align-items-center gap-10'>
                  <div className="form-floating ">
                    <input type="email"
                      className="form-control "
                      id="floatingInput"
                      placeholder="From" />
                    <label htmlFor="floatingInput">
                      From
                    </label>
                  </div>
                  <div className="form-floating ">
                    <input type="email"
                      className="form-control "
                      id="floatingInput"
                      placeholder="To" />
                    <label htmlFor="floatingInput">
                      To
                    </label>
                  </div>
                </div>
                <h5 className='sub-title'>Colors</h5>
                <div>
                  <div className="d-flex flex-wrap">
                    <ul className='colors ps-0'>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                      <li></li>
                    </ul>

                  </div>
                </div>
                <h5 className='sub-title'>Size</h5>
                <div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id="color-1" />
                    <label className='form-check-label' htmlFor="color-1">
                      S (250)
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id="color-2" />
                    <label className='form-check-label' htmlFor="color-2">
                      M (350)
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id="color32" />
                    <label className='form-check-label' htmlFor="color-3">
                      L (400)
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id="color-4" />
                    <label className='form-check-label' htmlFor="color-4">
                      XL (505)
                    </label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' value="" id="color-5" />
                    <label className='form-check-label' htmlFor="color-5">
                      XXL (260)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title">
                Product Tags
              </h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphone  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Tablet  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Spaeaker  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Watch  </span>
                </div>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className="filter-title">
                Random Product
              </h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img src="/images/watch.jpg" className='img-fluid' alt="watch" />
                  </div>
                  <div className="w-50">
                    <h5>Kids Headphone Bulk 10 Pack Multi Coloured For Student</h5>
                    <ReactStars
                      count={5}
                      value="4.4"
                      size={24}
                      activeColor="#ffd700"
                      isHalf={true}
                      edit={false}

                    />
                    <b>₹8500.00</b>
                  </div>
                </div>
                <div className="random-products  d-flex">
                  <div className="w-50">
                    <img src="/images/watch.jpg" className='img-fluid' alt="watch" />
                  </div>
                  <div className="w-50">
                    <h5>Kids Headphone Bulk 10 Pack Multi Coloured For Student</h5>
                    <ReactStars
                      count={5}
                      value="4.4"
                      size={24}
                      activeColor="#ffd700"
                      isHalf={true}
                      edit={false}

                    />
                    <b>₹8500.00</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
              <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className='mb-0 d-block' >Sort By:</p> 
                    <select name="sort_by" id="SortBy" className='facet-filters__sort select__select' aria-aria-describedby='ally-refresh-page-message'>
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">Best Selling</option>
                      <option value="title-ascending">Albhabetically, A-Z</option>
                      <option value="title-descending">Albhabetically, Z-A</option>
                      <option value="price-ascending">Price, low to high</option>
                      <option value="price-descending">Price, high to low</option>
                      <option value="created-ascending">Date, old to new</option>
                      <option value="created-descending">Date, new to old</option>
                    </select> 
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex align-items-center grid gap-10 grid">
                    <img onClick={()=>{setGrid(3);}} src="/images/gr4.svg"  className="d-block img-fluid" alt="grid" />
                    <img onClick={()=>{setGrid(4);}} src="/images/gr3.svg" className="d-block img-fluid" alt="grid" />
                    <img onClick={()=>{setGrid(6);}} src="/images/gr2.svg" className="d-block img-fluid" alt="grid" />
                    <img onClick={()=>{setGrid(12);}} src="/images/gr.svg" className="d-block img-fluid" alt="grid" />
                  </div>
                </div>
                </div>
              </div>
              <div className='products-list pb-5'>
            <div className="d-flex gap-10 flex-wrap ">
              <ProductCard grid={grid}/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default OurStore;