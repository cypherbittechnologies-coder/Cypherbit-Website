import React from 'react';
import { Link } from 'react-router-dom';

// Theme and components
import { theme } from '../theme/theme';
import Button from '../components/Button';

// Assets - using local imports from assets index
import { images } from '../assets';

// Image assets - using local assets (same background for all hero sections)
const imgHero = images.aboutHero;

const Career = () => {
  return (
    <div className="bg-white relative w-full">
      <div className="flex flex-col items-center">
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
              src={imgHero}
              alt="Career Hero Background"
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
            {/* Careers Text - Exact Figma positioning */}
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
              Careers
            </h1>
          </div>
        </div>

        {/* Career Intro - Exact Figma Specs */}
        <div className="flex flex-col gap-4 md:gap-7 py-0 px-4 sm:px-6 md:px-8 lg:px-[40px] w-full" style={{ paddingTop: '0', paddingBottom: '28px' }}>
          <div className="flex justify-center items-center w-full">
            <p 
              className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center max-w-[1166px] mx-auto"
              style={{ color: theme.colors.secondary }}
            >
              We're always looking for passionate developers, designers, and innovators
            </p>
          </div>
        </div>

        {/* Benefits Section - Exact Figma Specs */}
        <div className="flex flex-col gap-6 md:gap-7 px-4 sm:px-6 md:px-8 lg:px-[40px] py-0 w-full" style={{ paddingTop: '0', paddingBottom: '28px' }}>
          <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-[63px] w-full max-w-[1360px] mx-auto">
            <div className="flex flex-col gap-3 items-center w-full lg:w-[377px]">
              <h3 
                className="font-montserrat font-bold text-xl md:text-2xl lg:text-[24px] text-center"
                style={{ color: theme.colors.black }}
              >
                Flexible remote options
              </h3>
              <p 
                className="font-montserrat font-normal text-sm md:text-base lg:text-[16px] text-center"
                style={{ color: theme.colors.black }}
              >
                At Cypherbit, learning never stops. We encourage curiosity, upskilling, and continuous improvement through mentorship, real-world projects, and exposure to modern technologies. Every project is a chance to grow your skills and push creative boundaries.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center w-full lg:w-[376px]">
              <h3 
                className="font-montserrat font-bold text-xl md:text-2xl lg:text-[24px] text-center"
                style={{ color: theme.colors.black }}
              >
                Growth-focused culture
              </h3>
              <p 
                className="font-montserrat font-normal text-sm md:text-base lg:text-[16px] text-center"
                style={{ color: theme.colors.black }}
              >
                We believe great ideas come from teamwork. Our culture values open communication, shared ownership, and mutual respect. From developers to designers, everyone's voice matters — because innovation happens when ideas connect.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center w-full lg:w-[387px]">
              <h3 
                className="font-montserrat font-bold text-xl md:text-2xl lg:text-[24px] text-center"
                style={{ color: theme.colors.black }}
              >
                Meaningful Projects
              </h3>
              <p 
                className="font-montserrat font-normal text-sm md:text-base lg:text-[16px] text-center"
                style={{ color: theme.colors.black }}
              >
                Work on projects that make an impact. At Cypherbit, you'll build products that power real businesses — from enterprise platforms to consumer apps — using technologies that shape the digital future.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <h2 
              className="font-montserrat font-bold text-center text-2xl md:text-3xl lg:text-[32px]"
              style={{ color: theme.colors.black }}
            >
              Why Work With Us?
            </h2>
          </div>
        </div>

        {/* Open Positions - Exact Figma Specs */}
        <div 
          className="flex flex-col gap-6 md:gap-7 items-center px-4 sm:px-6 md:px-8 lg:px-[40px] py-0 w-full"
          style={{ 
            backgroundColor: theme.colors.black,
            paddingTop: '40px',
            paddingBottom: '40px'
          }}
        >
          <div className="flex justify-center items-center w-full">
            <h2 
              className="font-montserrat font-bold text-2xl md:text-3xl lg:text-[32px] text-center"
              style={{ color: theme.colors.white }}
            >
              Open Positions:
            </h2>
          </div>
          <div className="flex flex-col gap-4 md:gap-7 w-full max-w-[1200px]">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-[5px] w-full flex-wrap">
              <div className="flex flex-col sm:flex-row gap-2 md:gap-[10px] items-center w-full sm:w-auto sm:flex-1 sm:max-w-[399px]">
                <h3 
                  className="font-montserrat font-bold text-lg md:text-xl lg:text-[24px] text-center sm:text-left"
                  style={{ color: theme.colors.white }}
                >
                  Frontend Developer
                </h3>
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  Apply Now
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-[10px] items-center w-full sm:w-auto sm:flex-1">
                <h3 
                  className="font-montserrat font-bold text-lg md:text-xl lg:text-[24px] text-center sm:text-left"
                  style={{ color: theme.colors.white }}
                >
                  UI/UX Designer
                </h3>
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  Apply Now
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-[10px] items-center w-full sm:w-auto sm:flex-1">
                <h3 
                  className="font-montserrat font-bold text-lg md:text-xl lg:text-[24px] text-center sm:text-left"
                  style={{ color: theme.colors.white }}
                >
                  Mobile Developer
                </h3>
                <Button variant="primary" size="md" className="w-full sm:w-auto">
                  Apply Now
                </Button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-[10px] items-center w-full sm:justify-start">
              <h3 
                className="font-montserrat font-bold text-lg md:text-xl lg:text-[24px] text-center sm:text-left"
                style={{ color: theme.colors.white }}
              >
                QA Engineer
              </h3>
              <Button variant="primary" size="md" className="w-full sm:w-auto">
                Apply Now
              </Button>
            </div>
          </div>
          <Button variant="primary" size="lg" className="w-full sm:w-[180px]" style={{ height: '45px' }}>
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Career;