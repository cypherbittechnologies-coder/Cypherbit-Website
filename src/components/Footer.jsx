import React from 'react';
/*
  Design source (Figma):
  https://www.figma.com/design/6qnNvzYV38YbEuxmjXiPpq/CYPHERBIT-TECHNOLOGIES-PRIVATE-LIMITED?node-id=210-105

  NOTE:
  - The constants below reference Figma-hosted image asset URLs used during design export.
  - These links are intended for design preview only and should not appear in the shipped app.
  - Before production, move images into `src/assets/` and import them, or host them on a stable CDN.
*/
import CypherbitLogoFull from './CypherbitLogoFull';
const imgUnsplashGrvom8XykEw = 'https://www.figma.com/api/mcp/asset/88041e66-c2b1-4fb3-b7ff-1135a3070488';
const imgHeroImage1 = 'https://www.figma.com/api/mcp/asset/bff08128-00dc-4611-b331-263b05ddcebc';
const imgHeroImage2 = 'https://www.figma.com/api/mcp/asset/33a9ce8c-026d-4e34-96df-ab9df0daf9a0';
const imgHeroImage3 = 'https://www.figma.com/api/mcp/asset/6326c8cc-b847-4416-aa16-4b4dac73bc9a';
const imgArrowOutward = 'https://www.figma.com/api/mcp/asset/a54b67d8-1e6c-4c39-b404-d9fd6b9c2dad';
const imgLogoPharmaZen = 'https://www.figma.com/api/mcp/asset/1bf9f5c0-4149-4a56-a1bd-54af0290e7bc';
const imgProjectImage = 'https://www.figma.com/api/mcp/asset/3df3bf32-4c51-4960-9304-cef3f6ca46d7';
const imgTestimonial1 = 'https://www.figma.com/api/mcp/asset/7cff23db-38e5-4b0c-8069-4f5801587f2c';
const imgTestimonial2 = 'https://www.figma.com/api/mcp/asset/d3e3b22c-4398-4e1f-bee7-b4f4121b8002';
const imgTestimonial3 = 'https://www.figma.com/api/mcp/asset/8fcc8a4e-7a99-418f-b196-30f7d28f8839';
const Footer = () => {
  return (
    

          <footer className="bg-gradient-to-b from-black via-[#1a1a1a] to-[#27438E] p-4 sm:p-6 md:p-8 lg:p-10 text-white relative" style={{ marginTop: '0', zIndex: 2 }}>
            <div className="mb-6 sm:mb-8 md:mb-10 pt-6 sm:pt-8 md:pt-10 border-t-0">
              <h2 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[48px] text-white text-center px-2 py-4 sm:py-6">
                Building <span className="text-[#5D80DB]">Intelligent Software</span> &amp; <span className="text-[#5D80DB]">Scalable Apps</span> for the Digital Future
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-[231px] mb-6 sm:mb-8 px-2 sm:px-4">
              <div className="w-full lg:w-[382px] max-w-full">
                <CypherbitLogoFull className="mb-4 sm:mb-6 md:mb-8 w-full max-w-[200px] sm:max-w-[250px] md:max-w-none" />
                <p className="font-montserrat text-sm sm:text-base md:text-[16px] leading-relaxed">
                  <span className="font-light">At </span>
                  <span className="font-bold text-[#DCE4F7]">Cypherbit</span>
                  <span className="font-light">, we transform ideas into powerful digital products — from concept to code, we craft seamless software and mobile experiences that drive business growth.</span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-[103px]">
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-[18px] font-montserrat font-light text-base sm:text-lg md:text-xl lg:text-[24px]">
                  <a href="#about" className="hover:text-[#7794E2] transition-colors cursor-pointer">About Us</a>
                  <a href="#projects" className="hover:text-[#7794E2] transition-colors cursor-pointer">Services</a>
                  <a href="#" className="hover:text-[#7794E2] transition-colors cursor-pointer">Blog</a>
                  <a href="#careers" className="hover:text-[#7794E2] transition-colors cursor-pointer">Career</a>
                </div>
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-[18px] font-montserrat font-light text-base sm:text-lg md:text-xl lg:text-[24px]">
                  <a href="#about" className="hover:text-[#7794E2] transition-colors cursor-pointer">Team</a>
                  <a href="#" className="hover:text-[#7794E2] transition-colors cursor-pointer">Privacy Policy</a>
                  <a href="#" className="hover:text-[#7794E2] transition-colors cursor-pointer">Terms &amp; conditions</a>
                </div>
              </div>
            </div>
            <p className="font-montserrat font-normal text-sm sm:text-base md:text-lg lg:text-[20px] text-center px-2">Copyright: © 2025 Cypherbit Technologies. All rights reserved.</p>
          </footer>
  );
};

export default Footer;