import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address..."
                  aria-label="Your Email Address... "
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 277 Lucknow Airport, <br />
                  Amausi, Lucknow, Uttar Pradesh <br />
                  Pincode: 226009 India
                </address>
                <a
                  href="tel:+918683945898"
                  className="mt-3 d-block mb-1 text-white text-decoration-none"
                >
                  +91 8683945898
                </a>
                <a
                  href="mailto:contact@creativeabhi13.in"
                  className="mt-2 d-block mb-0 text-white text-decoration-none"
                >
                  contact@creativeabhi13.in
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-3">
                  <a className="text-white" href="">
                    <BsLinkedin className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsTwitter className="fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information </h4>
              <div className="footer-Links d-flex flex-column">
                <Link className="text-white py-2 mb-1 text-decoration-none">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">Refund Policy</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">Terms Of Service</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-Links d-flex flex-column">
                <Link className="text-white py-2 mb-1 text-decoration-none">Search</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">About Us</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">Faq</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">Contact</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links </h4>
              <div className="footer-Links d-flex flex-column">
                <Link className="text-white py-2 mb-1 text-decoration-none">Laptops</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">Headphones</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">Tablets</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none">Mobiles</Link>
                <Link className="text-white py-2 mb-1 text-decoration-none" >Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by Creativeabhi13
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
