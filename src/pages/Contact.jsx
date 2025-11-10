import React, { useState } from 'react';

// Theme and components
import { theme } from '../theme/theme';
import Button from '../components/Button';

// Assets - using local imports from assets index
import { images } from '../assets';

// Image assets - using local assets (same background for all hero sections)
const imgUnsplashQ173EpbpFck = images.aboutHero;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className=" relative w-full h-full">
      {/* Hero Section - Exact Figma Specs */}
      <div className="flex justify-center items-center w-full" style={{ padding: '40px' }}>
        <div 
          className="relative rounded-[28px] overflow-hidden"
          style={{
            width: '1360px',
            maxWidth: '100%',
            height: '305px',
            borderRadius: '28px',
            position: 'relative'
          }}
        >
          {/* Background Image - Full image with all elements including spheres */}
          <img
            src={imgUnsplashQ173EpbpFck}
            alt="Contact Hero Background"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%',
              display: 'block',
              borderRadius: '28px'
            }}
          />
          {/* Overlay - Blue tint from Figma */}
          <div 
            className="absolute inset-0 rounded-[28px]" 
            style={{ 
              backgroundColor: 'rgba(39, 67, 142, 0.2)',
              mixBlendMode: 'normal',
              pointerEvents: 'none'
            }}
          />
          {/* Contact Us Text - Exact Figma positioning */}
          <h1 
            className="absolute font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.219] z-10"
            style={{ 
              color: theme.colors.primary,
              fontWeight: 600,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              pointerEvents: 'none',
              width: 'auto',
              height: 'auto'
            }}
          >
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Intro */}
      <div className="py-0 px-4 sm:px-6 md:px-8 lg:px-[40px]" style={{ paddingTop: '0', paddingBottom: '28px' }}>
        <div className="flex justify-center items-center w-full">
          <p 
            className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center max-w-[1166px] mx-auto"
            style={{ color: theme.colors.secondary }}
          >
            Let's talk about your next digital project.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            We'd love to help you bring your ideas to life.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-black min-h-[600px] md:h-[741px] w-full">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-[110px] max-w-[1288px] mx-auto py-8 md:py-12 lg:py-15 px-4 sm:px-6 md:px-8 lg:px-0">
          {/* Contact Info */}
          <div className="flex flex-col gap-8 md:gap-11 w-full md:w-[500px]">
            <div className="flex flex-col gap-4 md:gap-[26px]">
              <h2 className="font-montserrat font-light text-2xl md:text-3xl lg:text-[36px] text-white">
                Get in Touch
              </h2>
              <p className="font-montserrat text-xl md:text-2xl lg:text-[32px] text-[#7794E2]">
                <span className="font-bold">Let's talk</span> about your next digital project.
              </p>
            </div>

            <div className="flex flex-col gap-6 md:gap-10 lg:gap-[44px]">
              <div className="flex flex-col gap-2 md:gap-3.5">
                <h3 className="font-montserrat font-light text-base md:text-lg lg:text-[20px] text-white">Email</h3>
                <p className="font-montserrat font-medium text-lg md:text-xl lg:text-[24px] text-[#7794E2] break-all">Hr@cypherbit.in</p>
              </div>
              <div className="flex flex-col gap-2 md:gap-3.5">
                <h3 className="font-montserrat font-light text-base md:text-lg lg:text-[20px] text-white">Phone</h3>
                <p className="font-montserrat font-medium text-lg md:text-xl lg:text-[24px] text-[#7794E2]">+91 9000248502</p>
              </div>
              <div className="flex flex-col gap-2 md:gap-3.5">
                <h3 className="font-montserrat font-light text-base md:text-lg lg:text-[20px] text-white">Address</h3>
                <p className="font-montserrat font-medium text-lg md:text-xl lg:text-[24px] text-[#5D80DB]">
                  IT tower, Padma Nagar, Nalgonda, Telangana 508001
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-3.5">
                <h3 className="font-montserrat font-light text-base md:text-lg lg:text-[20px] text-white">Follow us</h3>
                <div className="flex gap-3 md:gap-3.5 font-montserrat font-medium text-lg md:text-xl lg:text-[24px] text-[#5D80DB]">
                  <a href="#" className="hover:text-[#7794E2] transition-colors">Instagram</a>
                  <a href="#" className="hover:text-[#7794E2] transition-colors">Linked In</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-[27px] w-full md:w-[678px]">
            <div className="flex flex-col md:flex-row gap-4 md:gap-5.5">
              <div className="flex flex-col gap-2 md:gap-3.5 w-full md:w-[326px]">
                <label className="font-montserrat font-light text-base md:text-lg lg:text-[20px] text-white">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="bg-[#EAEAEA] h-[40px] px-2 md:px-[8px] py-[4px] rounded-[8px] font-montserrat font-medium text-sm md:text-base lg:text-[16px] text-black outline-none"
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-3.5 w-full md:w-[330px]">
                <label className="font-montserrat font-light text-base md:text-lg lg:text-[20px] text-white">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className="bg-[#EAEAEA] h-[40px] px-2 md:px-[8px] py-[4px] rounded-[8px] font-montserrat font-medium text-sm md:text-base lg:text-[16px] text-black outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-3.5">
              <label className="font-montserrat font-light text-base md:text-lg lg:text-[20px] text-white">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write something......"
                className="bg-[#EAEAEA] h-[150px] md:h-[205px] p-3 md:p-4 rounded-[8px] font-montserrat font-medium text-sm md:text-base lg:text-[16px] text-black resize-none outline-none"
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="h-[47px] rounded-[10px] font-semibold text-base md:text-lg lg:text-[20px] w-full md:w-auto"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;