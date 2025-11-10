import React from 'react';
/*
  Design source (Figma):
  https://www.figma.com/design/6qnNvzYV38YbEuxmjXiPpq/CYPHERBIT-TECHNOLOGIES-PRIVATE-LIMITED?node-id=217-154
*/

// Theme and components
import { theme } from '../theme/theme';

// Assets - using local imports from assets index
import { images } from '../assets';

// Image assets - using local assets
const imgUnsplashQ173EpbpFck = images.aboutHero;
const imgFrame61 = images.missionBackground;
const imgUnsplashPAtA8XeIVm = images.teamMember1;
const imgUnsplash7YvzyZeITc8 = images.teamMember3;
const imgUnsplashPAtA8XeIVm1 = images.teamMember2;

const About = () => {
  return (
    <div className="bg-white relative w-full">
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
            alt="About Hero Background"
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
          {/* About Us Text - Exact Figma positioning */}
          <h1 
            className="absolute font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-[48px] leading-[1.219] z-10"
            style={{ 
              color: '#27438E',
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
            About Us
          </h1>
        </div>
      </div>

      {/* Our Story Section - Exact Figma Specs */}
      <section className="py-[40px] px-4 sm:px-6 md:px-8 lg:px-[40px]">
        <div className="flex flex-col gap-[28px] max-w-[1360px] mx-auto">
          <div className="flex justify-center items-center w-full">
            <h2 className="font-montserrat font-bold text-[32px] leading-[1.219]" style={{ color: theme.colors.black }}>
              Our Story
            </h2>
          </div>
          <div className="flex justify-center items-center w-full">
            <p className="font-montserrat font-light text-[24px] leading-[1.219] text-center max-w-[1208px]" style={{ color: theme.colors.black }}>
              Cypherbit was founded with a simple mission — to create technology that solves real-world problems.
              <br />
              From startups to enterprises, we help businesses transform their ideas into digital success stories through smart, scalable, and user-friendly software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Exact Figma Specs */}
      <section className="py-[40px] px-4 sm:px-6 md:px-8 lg:px-[40px]">
        <div className="flex justify-center items-center">
          <div 
            className="relative w-full max-w-[1200px] rounded-[28px] overflow-hidden"
            style={{
              aspectRatio: '1200 / 268',
              borderRadius: '28px',
              opacity: 0.88,
              backgroundImage: `url(${imgFrame61})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }}
          >
            <div className="relative flex flex-col justify-center gap-4 sm:gap-6 md:gap-7 lg:gap-[28px] p-6 sm:p-8 md:p-10 lg:p-[40px] h-full z-10">
              <div className="flex justify-center items-center w-full">
                <h2 className="font-montserrat font-bold text-2xl sm:text-3xl lg:text-[32px] leading-[1.219]" style={{ color: theme.colors.white }}>
                  Our Mission
                </h2>
              </div>
              <div className="flex justify-center items-center w-full">
                <p 
                  className="font-montserrat font-normal text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-[1.219] text-center max-w-[788px] px-4" 
                  style={{ color: '#DCE4F7' }}
                >
                  To empower businesses with innovative digital tools that enhance productivity, engagement, and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Exact Figma Specs */}
      <section className="py-[40px] px-4 sm:px-6 md:px-8 lg:px-[40px]">
        <div className="flex flex-col gap-[28px] max-w-[1360px] mx-auto">
          <div className="flex justify-center items-center w-full">
            <h2 className="font-montserrat font-bold text-[32px] leading-[1.219]" style={{ color: theme.colors.black }}>
              Our Vision
            </h2>
          </div>
          <div className="flex justify-center items-center w-full">
            <p className="font-montserrat font-bold text-[40px] leading-[1.219] text-center max-w-[1208px]" style={{ color: theme.colors.secondary }}>
              To be a global leader in IT innovation, known for building technology that inspires progress.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section - Exact Figma Specs */}
      <section className="py-[40px] px-4 sm:px-6 md:px-8 lg:px-[40px]">
        <div className="flex flex-col gap-[28px] items-center max-w-[1360px] mx-auto">
          <div className="flex justify-center items-center w-full">
            <h2 className="font-montserrat font-bold text-[32px] leading-[1.219]" style={{ color: theme.colors.black }}>
              Our Values
            </h2>
          </div>
          <div className="flex flex-wrap justify-between items-center gap-[40px] w-full max-w-[1200px]">
            {[
              { title: "Innovation", description: "We push boundaries with creativity and technology." },
              { title: "Integrity", description: "We believe in transparency and trust." },
              { title: "Excellence", description: "Quality and precision in every line of code." },
              { title: "Collaboration", description: "Together, we create impactful solutions." }
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-center gap-[28px] p-0 w-[255px] h-[238px] rounded-[28px]" style={{ backgroundColor: theme.colors.black }}>
                <div className="flex justify-center items-center pt-[40px]">
                  <h3 className="font-montserrat font-bold text-[32px] leading-[1.219] text-center" style={{ color: theme.colors.secondary }}>
                    {value.title}
                  </h3>
                </div>
                <p className="font-montserrat font-bold text-[16px] leading-[1.219] text-center px-0 max-w-[250px]" style={{ color: theme.colors.white }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Exact Figma Specs */}
      {/* 
        Our Team section
        - Displays team member cards with photos, roles, and names
        - Images are currently linked to Figma-hosted assets (see constants above)
        - To use local images, add them to `src/assets/` and replace `member.image` with an import
        - Uncomment below to show the team section
        
      <section className="bg-black py-[40px] px-4 sm:px-6 md:px-8 lg:px-[40px]">
        <div className="flex flex-col gap-[28px] max-w-[1360px] mx-auto">
          <div className="flex justify-center items-center w-full">
            <h2 className="font-montserrat font-bold text-[32px] leading-[1.219]" style={{ color: theme.colors.white }}>
              Our Team
            </h2>
          </div>
          
          <div className="flex justify-center items-center w-full">
            <p className="font-montserrat font-bold text-[40px] leading-[1.219] text-center max-w-[1208px]" style={{ color: theme.colors.secondary }}>
              Introduce leadership & team members
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-[45px] w-full max-w-[1400px] mx-auto overflow-x-auto">
            {[
              {
                role: "Founder & CEO",
                name: "Karthik",
                image: images.teamMember1
              },
              {
                role: "Clinical Advisor",
                name: "Dr. Dilip Kumar Macherla",
                qualifications: "MBBS(OSMANIA), DNB(NEUROSURGERY) FELLOWSHIP- Eplilepsy & Skull Base Surgory",
                image: images.teamMember2
              },
              {
                role: "HR Manager",
                name: "K.Siri Chandana Reddy",
                image: images.teamMember3
              },
              {
                role: "CTO",
                name: "Khaja mohiddin Shaik",
                qualifications: "MBBS(OSMANIA), DNB(NEUROSURGERY) FELLOWSHIP- Eplilepsy & Skull Base Surgory",
                image: images.teamMember4,
                qualificationsVisible: false
              },
              {
                role: "Automation Engineer",
                name: "Nagaraju",
                qualifications: "MBBS(OSMANIA), DNB(NEUROSURGERY) FELLOWSHIP- Eplilepsy & Skull Base Surgory",
                image: images.teamMember5,
                qualificationsVisible: false
              }
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-[22px] p-5 w-[370px] rounded-[18px] flex-shrink-0" style={{ backgroundColor: theme.colors.black }}>
                <div className="h-[386px] w-full relative rounded-[18px] overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.backgroundColor = '#1a1a1a';
                    }}
                  />
                </div>

                <div className="w-full text-center flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <p className="font-montserrat font-medium text-[14px] leading-[1.219]" style={{ color: theme.colors.white }}>
                      {member.role}
                    </p>
                    <p className="font-montserrat font-medium text-[14px] leading-[1.219]" style={{ color: theme.colors.white }}>
                      {member.name}
                    </p>
                  </div>
                  {member.qualifications && member.qualificationsVisible !== false && (
                    <p className="font-montserrat font-medium text-[10px] leading-[1.219] mt-2" style={{ color: theme.colors.white }}>
                      {member.qualifications}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  );
};

export default About;
