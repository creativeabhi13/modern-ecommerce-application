import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Blogcard from '../components/Blogcard';

const Blog = () => {
    return (
        <>
            <Meta title={"Blogs"}></Meta>
            <BreadCrumb title="Blogs" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className='filter-card mb-3'>
                                <h3 className="filter-title">
                                    Find By Categories
                                </h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Home</li>
                                        <li>Our Store</li>
                                        <li>Blogs</li>
                                        <li>Contact</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="d-flex gap-10">
                                <Blogcard />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Blog