import React from 'react'
import Meta from '../components/Meta';
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall,BiInfoCircle} from 'react-icons/bi';
import BreadCrumb from '../components/BreadCrumb';


const Contact = () => {

  return <>
    <Meta title={"Contact Us"}></Meta>
    <BreadCrumb title="Contact Us" />
    <div className="contact-wrapper py-5 home-wrapper-2">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113996.13302777533!2d80.74095579893687!3d26.76418129992728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf95d395901bf%3A0xbd56014d1c1634f0!2sAmausi%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1702963628359!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        className="border:0 w-100" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">

        </iframe>
        </div>
        <div className="col-12">
          <div className="mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div >
                <h3 className='contact-title'>Contact</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text" className="form-control" placeholder='Name'/>
                  </div>
                  <div>
                    <input type="email" className="form-control" placeholder='Email' />
                  </div>
                  <div>
                    <input type="tel" className="form-control" placeholder='Mobile Number'/>
                  </div>
                  <div>
                    <textarea name="" id="" cols="30" rows="3" className='w-100 form-control' placeholder='Comments'></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div >
                <h3 className='contact-title'>
                Get in Touch With Us
                </h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineHome className='fs-5'/><address className='mb-0'>Hno: 277 Lucknow Airport,
Amausi, Lucknow, Uttar Pradesh
Pincode: 226009 India</address></li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BiPhoneCall className='fs-5'/><a href="tel:+918683945898">+98683945898</a></li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5'/><a href="mailto:contact@creativeabhi13.in">contact@creativeabhi13.in</a></li>
                    <li className='mb-3 d-flex gap-15 align-items-center'><BiInfoCircle className='fs-5'/><p className='mb-0'>Monday - Friday 10 Am - 7 Pm </p></li>
                  </ul>
                </div>
            
              </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>


  </>;
};

export default Contact