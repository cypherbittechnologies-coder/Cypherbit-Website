import React, { useState, useEffect } from 'react';

// Theme and components
import { theme } from '../theme/theme';
import Button from '../components/Button';
import Icon from '../components/Icon';

// Assets - using local imports from assets index
import { icons, images } from '../assets';

// Image assets - using local assets
const imgUnsplashGrvom8XykEw = images.heroBackground;
const imgHeroImage1 = images.heroImage1;
const imgHeroImage2 = images.heroImage2;
const imgHeroImage3 = images.heroImage3;
const imgArrowOutward = icons.arrowOutward;
const imgLogoPharmaZen = icons.logoPharmaZen;
const imgProjectImage = images.projectImage;
const imgAboutHero = images.aboutHero;
const imgMissionBackground = images.missionBackground;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const heroImages = [
    { src: imgHeroImage1, alt: 'Hero Image 1', width: 'flex-1 max-w-[752px]' },
    { src: imgHeroImage2, alt: 'Hero Image 2', width: 'w-[277px]' },
    { src: imgHeroImage3, alt: 'Hero Image 3', width: 'w-[277px]' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
    <div className="relative w-full" style={{ backgroundColor: '#E7F0FA' }}>
      {/* Hero Section */}
      <section id="home" className="p-4 sm:p-6 md:p-8 lg:p-[40px] flex flex-col gap-4 md:gap-6 lg:gap-[28px]">
        {/* Hero Banner */}
        <div className="relative min-h-[200px] sm:min-h-[220px] md:h-[180px] w-full rounded-[18px] md:rounded-[28px] overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 rounded-[18px] md:rounded-[28px]"
            style={{
              backgroundImage: `url(${imgUnsplashGrvom8XykEw})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              width: '100%',
              height: '100%'
            }}
          />
          {/* Gradient overlay for better text contrast */}
          <div 
            className="absolute inset-0 rounded-[18px] md:rounded-[28px]" 
            style={{ 
              background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.6) 100%)'
            }} 
          />
          {/* Blue tint overlay from Figma */}
          <div 
            className="absolute inset-0 rounded-[18px] md:rounded-[28px]" 
            style={{ 
              backgroundColor: theme.colors.overlay,
              opacity: 0.7
            }} 
          />

          {/* Content */}
          <div className="relative h-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 md:gap-8 lg:gap-[94px] p-4 md:p-5">
            <div className="w-full lg:w-[751px] max-w-full z-10">
              <h1 
                className="font-montserrat font-bold text-xl sm:text-2xl md:text-3xl lg:text-[36px] leading-tight lg:leading-[1.219] text-white mb-0 text-center lg:text-left"
                style={{
                  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5), 1px 1px 3px rgba(0, 0, 0, 0.8)',
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6))'
                }}
              >
                Building Intelligent Software & Scalable Apps for the{' '}
                <span 
                  className="text-[#7BA4D0]"
                  style={{
                    textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3), 0 0 10px rgba(0, 0, 0, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.4)',
                    filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3))'
                  }}
                >
                  Digital Future
                </span>
              </h1>
            </div>
            
            <div className="w-full lg:w-[567px] lg:h-[150px] flex flex-col gap-2 md:gap-[10px] px-2 md:px-[10px] py-2 md:py-[18px] z-10">
              <p 
                className="font-montserrat font-medium text-xs md:text-sm lg:text-[14px] leading-snug lg:leading-[1.219] text-center lg:text-left"
                style={{ 
                  color: '#FFFFFF',
                  textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 0, 0, 0.6), 1px 1px 2px rgba(0, 0, 0, 0.9)',
                  filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.7))'
                }}
              >
                At <span style={{ color: theme.colors.accent, fontWeight: 600, textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)' }}>Cypherbit</span>, we transform ideas into powerful digital
                products — from concept to code, we craft seamless software and mobile experiences that
                drive business growth.
              </p>
              <div className="flex gap-[2px] justify-center lg:justify-start">
                <Button variant="primary" size="md" onClick={() => scrollToSection('projects')} className="transition-smooth">
                  See Our Works
                </Button>
                <Button variant="primary" size="icon" className="transition-smooth">
                  <Icon src={imgArrowOutward} alt="Arrow" width={24} height={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Images - Side by Side with Elastic Sliding Animation */}
        <div className="w-full relative overflow-hidden">
          <div 
            className="flex flex-row gap-3 md:gap-4"
            style={{
              transform: `translateX(-${currentSlide * (100 / heroImages.length)}%)`,
              transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
              width: `${heroImages.length * 100}%`,
              display: 'flex'
            }}
          >
          {heroImages.map((image, index) => (
            <div
              key={index}
                className="flex-1 min-w-0 rounded-[12px] md:rounded-[18px] overflow-hidden relative h-[160px] sm:h-[200px] md:h-[240px] lg:h-[280px] image-hover"
                style={{
                  width: `${100 / heroImages.length}%`,
                  flexShrink: 0
                }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                  className="w-full h-full object-cover"
              />
            </div>
          ))}
          </div>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
            {heroImages.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? 'w-8 bg-[#27438E]'
                    : 'w-2 bg-white/60'
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Cypherbit */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-[120px] py-6 md:py-10">
        <h2 className="font-montserrat font-bold text-2xl md:text-3xl lg:text-[32px] text-black text-center mb-4 md:mb-7">Why Choose Cypherbit</h2>
        <div className="flex flex-col items-center gap-6 md:gap-9 p-4 md:p-5">
          <h3 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-center max-w-[930px]" style={{ color: theme.colors.secondary }}>
            Empowering Businesses Through Intelligent Software Solutions
          </h3>
          <p className="font-montserrat font-normal text-sm md:text-base lg:text-[16px] text-black text-center max-w-[688px]">
            At Cypherbit, we build reliable, high-performance software and mobile apps that empower businesses to
            scale. Our team combines innovation, precision, and technology expertise to deliver solutions that drive
            real growth.
          </p>
          <div className="flex gap-2 md:gap-[8px]">
            <Button variant="primary" size="md" onClick={() => scrollToSection('about')} className="transition-smooth">
              view more
            </Button>
            <Button variant="primary" size="icon" className="transition-smooth">
              <Icon src={imgArrowOutward} alt="Arrow" width={24} height={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects - Exact Figma Specs */}
      <section 
        id="projects"
        className="flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-[120px] py-6 md:py-8 lg:py-[40px] w-full"
        style={{ gap: '28px' }}
      >
        {/* Title - Exact Figma Specs */}
        <h2 
          className="font-montserrat font-bold text-2xl md:text-3xl lg:text-[32px] text-black text-center"
          style={{ 
            lineHeight: '1.218999981880188em',
            color: '#000000'
          }}
        >
          Featured Projects
        </h2>

        {/* Main Container - Frame 37 - Exact Figma Specs */}
        <div 
          className="bg-[#232323] rounded-[18px] lg:rounded-[28px] relative w-full overflow-hidden p-4 lg:p-[40px_29px]"
          style={{
            borderRadius: '28px',
            minHeight: '575px'
          }}
        >
          {/* Content Container - Responsive Layout */}
          <div className="flex flex-col lg:flex-row relative w-full gap-6 lg:gap-[48px]">
            {/* Left Content Section - Frame 49 - Exact Figma Specs */}
            <div 
              className="flex flex-col flex-shrink-0 z-10 w-full lg:w-auto gap-6 lg:gap-[48px]"
            >
              {/* Logo - Exact Figma Specs */}
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                <img 
                  src={imgLogoPharmaZen} 
                  alt="PharmaZen Logo" 
                  className="h-7 md:h-9 w-auto"
                />
              </div>

              {/* Text Container - Frame 31 - Exact Figma Specs */}
              <div 
                className="flex flex-col flex-shrink-0 w-full lg:w-[587px] gap-4 lg:gap-[16px]"
                style={{ 
                  height: 'auto',
                  minHeight: '187px'
                }}
              >
                {/* Heading - Exact Figma Specs */}
                <h3 
                  className="font-montserrat font-bold text-white text-xl sm:text-2xl md:text-3xl lg:text-[32px]"
                  style={{ 
                    fontWeight: 700,
                    lineHeight: '1.218999981880188em',
                    color: '#FFFFFF',
                    textAlign: 'left'
                  }}
                >
                  Empowering Businesses Through Intelligent Software Solutions
                </h3>

                {/* Paragraph - Exact Figma Specs */}
                <p 
                  className="font-montserrat font-normal text-white text-sm md:text-base lg:text-[16px]"
                  style={{
                    fontWeight: 400,
                    lineHeight: '1.218999981880188em',
                    color: '#FFFFFF',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  At Cypherbit, we build reliable, high-performance software and mobile apps that empower businesses
                  to scale. Our team combines innovation, precision, and technology expertise to deliver solutions that
                  drive real growth.
                </p>

                {/* Buttons Container - Frame 74 - Exact Figma Specs */}
                <div 
                  className="flex items-center"
                  style={{ gap: '2px' }}
                >
                  {/* Visit Site Button - Frame 32 - Exact Figma Specs */}
                  <Button variant="secondary" size="md">
                      Visit Site
                  </Button>

                  {/* Arrow Button - Frame 8 - Exact Figma Specs */}
                  <Button variant="secondary" size="icon">
                    <Icon src={imgArrowOutward} alt="Arrow" width={24} height={24} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Project Image - Mobile: Below content, Desktop: Corner position */}
            {/* Mobile View - Below content */}
            <div className="block lg:hidden w-full mt-4">
              <img 
                src={imgProjectImage} 
                alt="Project Screenshot" 
                className="w-full h-auto object-cover rounded-lg image-hover"
                style={{ 
                  boxShadow: 'none'
                }}
              />
            </div>

            {/* Desktop View - Corner position */}
            <div 
              className="hidden lg:block absolute lg:left-[653px] lg:top-[120px] z-0 lg:w-[919px]"
              style={{
                height: 'auto',
                aspectRatio: '919 / 509'
              }}
            >
              <img 
                src={imgProjectImage} 
                alt="Project Screenshot" 
                className="w-full h-full object-cover image-hover"
                style={{ 
                  boxShadow: 'none'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative w-full">
        {/* Hero Section - Exact Figma Specs */}
        <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-[40px] py-4 sm:py-5 md:py-6 lg:py-6">
          <div 
            className="relative rounded-[18px] md:rounded-[28px] overflow-hidden w-full h-[120px] sm:h-[150px] md:h-[180px]"
            style={{
              maxWidth: '900px',
              borderRadius: '28px',
              position: 'relative'
            }}
          >
            {/* Background Image - Full image with all elements including spheres */}
            <img
              src={imgAboutHero}
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
              className="absolute font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-[1.219] z-10"
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
        <div className="py-4 sm:py-5 md:py-6 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-[40px]">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 max-w-[900px] mx-auto">
            <div className="flex justify-center items-center w-full">
              <h2 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-[1.219]" style={{ color: theme.colors.black }}>
                Our Story
              </h2>
            </div>
            <div className="flex justify-center items-center w-full">
              <p className="font-montserrat font-light text-sm sm:text-base md:text-lg lg:text-[20px] leading-[1.219] text-center max-w-[850px] px-2" style={{ color: theme.colors.black }}>
                Cypherbit was founded with a simple mission — to create technology that solves real-world problems.
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                From startups to enterprises, we help businesses transform their ideas into digital success stories through smart, scalable, and user-friendly software solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section - Exact Figma Specs */}
        <div className="py-4 sm:py-5 md:py-6 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-[40px]">
          <div className="flex justify-center items-center">
            <div 
              className="relative w-full max-w-[850px] rounded-[18px] md:rounded-[28px] overflow-hidden min-h-[120px] sm:min-h-[150px] md:aspect-[850/160]"
              style={{
                opacity: 0.88
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 rounded-[18px] md:rounded-[28px]"
                style={{
                  backgroundImage: `url(${imgMissionBackground})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Black Transparent Overlay for better text readability */}
              <div 
                className="absolute inset-0 rounded-[18px] md:rounded-[28px]"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.85)'
                }}
              />
              
              {/* Content Container */}
              <div 
                className="relative flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-4 lg:gap-5 p-3 sm:p-4 md:p-5 lg:p-5 min-h-[120px] sm:min-h-[150px]"
                style={{ 
                  zIndex: 10,
                  position: 'relative'
                }}
              >
                <h2 
                  className="font-montserrat font-bold text-xl sm:text-2xl lg:text-[28px] leading-[1.219] text-center text-white"
                  style={{ 
                    margin: 0,
                    padding: 0,
                    color: '#FFFFFF'
                  }}
                >
                  Our Mission
                </h2>
                <p 
                  className="font-montserrat font-normal text-sm sm:text-base md:text-lg lg:text-[20px] leading-[1.4] sm:leading-[1.5] text-center text-[#DCE4F7] max-w-[650px] px-4"
                  style={{ 
                    margin: 0,
                    padding: 0
                  }}
                >
                  To empower businesses with innovative digital tools that enhance productivity, engagement, and growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section - Exact Figma Specs */}
        <div className="py-4 sm:py-5 md:py-6 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-[40px]">
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 max-w-[900px] mx-auto">
            <div className="flex justify-center items-center w-full">
              <h2 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-[1.219]" style={{ color: theme.colors.black }}>
                Our Vision
              </h2>
            </div>
            <div className="flex justify-center items-center w-full">
              <p className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-[32px] leading-[1.219] text-center max-w-[850px] px-2" style={{ color: theme.colors.secondary }}>
                To be a global leader in IT innovation, known for building technology that inspires progress.
              </p>
            </div>
          </div>
        </div>

        {/* 
          ============================================
          OUR VALUES SECTION (COMMENTED OUT - FOR LATER USE)
          ============================================
          
          To re-enable this section, uncomment the code below.
          
          <div className="py-4 sm:py-5 md:py-6 lg:py-6 px-4 sm:px-6 md:px-8 lg:px-[40px]">
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 items-center max-w-[900px] mx-auto">
              <div className="flex justify-center items-center w-full">
                <h2 className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-[28px] leading-[1.219]" style={{ color: theme.colors.black }}>
                  Our Values
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-[300px] sm:max-w-[950px]">
                {[
                  { title: "Innovation", description: "We push boundaries with creativity and technology.", gradient: 'linear-gradient(135deg, #E7F0FA 0%, #7BA4D0 100%)' },
                  { title: "Integrity", description: "We believe in transparency and trust.", gradient: 'linear-gradient(135deg, #7BA4D0 0%, #2E5E99 100%)' },
                  { title: "Excellence", description: "Quality and precision in every line of code.", gradient: 'linear-gradient(135deg, #2E5E99 0%, #0D2440 100%)' },
                  { title: "Collaboration", description: "Together, we create impactful solutions.", gradient: 'linear-gradient(135deg, #0D2440 0%, #2E5E99 100%)' }
                ].map((value, index) => {
                  const textColors = ['#0D2440', '#0D2440', '#FFFFFF', '#FFFFFF'];
                  return (
                    <div key={index} className="flex flex-col justify-between items-center gap-3 sm:gap-4 md:gap-5 p-3 sm:p-5 md:p-6 w-full max-w-[280px] sm:w-auto sm:max-w-[300px] min-h-[110px] sm:min-h-[180px] md:h-[200px] rounded-[12px] sm:rounded-[18px] md:rounded-[28px] card-hover" style={{ background: value.gradient }}>
                      <div className="flex justify-center items-center">
                        <h3 className="font-montserrat font-bold text-base sm:text-xl md:text-2xl lg:text-[28px] leading-[1.3] sm:leading-[1.4] text-center w-full" style={{ color: textColors[index] }}>
                          {value.title}
                        </h3>
                      </div>
                      <p className="font-montserrat font-normal text-xs sm:text-sm md:text-[15px] leading-[1.5] sm:leading-[1.6] md:leading-[1.7] text-center px-2 sm:px-3 md:px-4 w-full" style={{ color: textColors[index] }}>
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        */}
      </section>

      {/* Careers Section */}
      <section id="careers" className="relative w-full">
        <div className="flex flex-col items-center">
          {/* Hero Section - Exact Figma Specs */}
          <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-[40px] py-4 sm:py-5 md:py-6 lg:py-6">
            <div 
              className="relative rounded-[18px] md:rounded-[28px] overflow-hidden w-full h-[120px] sm:h-[150px] md:h-[180px]"
              style={{
                maxWidth: '900px',
                borderRadius: '28px',
                position: 'relative'
              }}
            >
              {/* Background Image - Full image with all elements including spheres */}
              <img
                src={imgAboutHero}
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
                className="absolute font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-[1.219] z-10"
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
          <div className="flex flex-col gap-3 md:gap-4 py-0 px-4 sm:px-6 md:px-8 lg:px-[40px] w-full" style={{ paddingTop: '0', paddingBottom: '20px' }}>
            <div className="flex justify-center items-center w-full">
              <p 
                className="font-montserrat font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-center max-w-[800px] mx-auto"
                style={{ color: theme.colors.secondary }}
              >
                We're always looking for passionate developers, designers, and innovators
              </p>
            </div>
          </div>

          {/* Benefits Section - Exact Figma Specs */}
          <div className="flex flex-col gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-[40px] py-0 w-full" style={{ paddingTop: '0', paddingBottom: '20px' }}>
            <div className="flex flex-col lg:flex-row justify-between gap-4 md:gap-5 w-full max-w-[900px] mx-auto">
              <div 
                className="flex flex-col gap-2 items-center w-full lg:w-[377px] p-4 md:p-5 rounded-[16px] md:rounded-[20px] transition-smooth cursor-pointer card-hover"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(0, 0, 0, 0.25)',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.08)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0px 8px 30px rgba(0, 0, 0, 0.2), 0px 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                <h3 
                  className="font-montserrat font-bold text-lg md:text-xl lg:text-[20px] text-center"
                  style={{ color: '#2E5E99' }}
                >
                  Flexible remote options
                </h3>
                <p 
                  className="font-montserrat font-normal text-xs md:text-sm lg:text-[14px] text-center"
                  style={{ color: theme.colors.black }}
                >
                  At Cypherbit, learning never stops. We encourage curiosity, upskilling, and continuous improvement through mentorship, real-world projects, and exposure to modern technologies. Every project is a chance to grow your skills and push creative boundaries.
                </p>
              </div>
              <div 
                className="flex flex-col gap-2 items-center w-full lg:w-[376px] p-4 md:p-5 rounded-[16px] md:rounded-[20px] transition-smooth cursor-pointer card-hover"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(0, 0, 0, 0.25)',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.08)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0px 8px 30px rgba(0, 0, 0, 0.2), 0px 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                <h3 
                  className="font-montserrat font-bold text-lg md:text-xl lg:text-[20px] text-center"
                  style={{ color: '#2E5E99' }}
                >
                  Growth-focused culture
                </h3>
                <p 
                  className="font-montserrat font-normal text-xs md:text-sm lg:text-[14px] text-center"
                  style={{ color: theme.colors.black }}
                >
                  We believe great ideas come from teamwork. Our culture values open communication, shared ownership, and mutual respect. From developers to designers, everyone's voice matters — because innovation happens when ideas connect.
                </p>
              </div>
              <div 
                className="flex flex-col gap-2 items-center w-full lg:w-[387px] p-4 md:p-5 rounded-[16px] md:rounded-[20px] transition-smooth cursor-pointer card-hover"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(0, 0, 0, 0.25)',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.08)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0px 8px 30px rgba(0, 0, 0, 0.2), 0px 4px 12px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.1), 0px 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                <h3 
                  className="font-montserrat font-bold text-lg md:text-xl lg:text-[20px] text-center"
                  style={{ color: '#2E5E99' }}
                >
                  Meaningful Projects
                </h3>
                <p 
                  className="font-montserrat font-normal text-xs md:text-sm lg:text-[14px] text-center"
                  style={{ color: theme.colors.black }}
                >
                  Work on projects that make an impact. At Cypherbit, you'll build products that power real businesses — from enterprise platforms to consumer apps — using technologies that shape the digital future.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center w-full">
              <h2 
                className="font-montserrat font-bold text-center text-xl md:text-2xl lg:text-[28px]"
                style={{ color: theme.colors.black }}
              >
                Why Work With Us?
              </h2>
            </div>
          </div>

          {/* Open Positions - Colorful and Optimized */}
          {/*
          <div 
            className="flex flex-col gap-5 md:gap-6 items-center px-4 sm:px-6 md:px-8 lg:px-[40px] py-6 md:py-8 w-full"
            style={{ 
              backgroundColor: '#E7F0FA',
              paddingTop: '32px',
              paddingBottom: '32px'
            }}
          >
            <div className="flex justify-center items-center w-full">
              <h2 
                className="font-montserrat font-bold text-xl md:text-2xl lg:text-[28px] text-center"
                style={{ color: '#0D2440' }}
              >
                Open Positions:
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:gap-5 w-full max-w-[900px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full">
                <div 
                  className="flex flex-col gap-3 md:gap-4 p-4 md:p-5 rounded-[16px] md:rounded-[20px] card-hover transition-smooth"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3 
                    className="font-montserrat font-bold text-base md:text-lg lg:text-[20px] text-center"
                    style={{ color: '#0D2440' }}
                  >
                    Frontend Developer
                  </h3>
                  <Button variant="primary" size="md" className="w-full">
                    Apply Now
                  </Button>
                </div>
                <div 
                  className="flex flex-col gap-3 md:gap-4 p-4 md:p-5 rounded-[16px] md:rounded-[20px] card-hover transition-smooth"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3 
                    className="font-montserrat font-bold text-base md:text-lg lg:text-[20px] text-center"
                    style={{ color: '#0D2440' }}
                  >
                    UI/UX Designer
                  </h3>
                  <Button variant="primary" size="md" className="w-full">
                    Apply Now
                  </Button>
                </div>
                <div 
                  className="flex flex-col gap-3 md:gap-4 p-4 md:p-5 rounded-[16px] md:rounded-[20px] card-hover transition-smooth"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3 
                    className="font-montserrat font-bold text-base md:text-lg lg:text-[20px] text-center"
                    style={{ color: '#0D2440' }}
                  >
                    Mobile Developer
                  </h3>
                  <Button variant="primary" size="md" className="w-full">
                    Apply Now
                  </Button>
                </div>
                <div 
                  className="flex flex-col gap-3 md:gap-4 p-4 md:p-5 rounded-[16px] md:rounded-[20px] card-hover transition-smooth"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3 
                    className="font-montserrat font-bold text-base md:text-lg lg:text-[20px] text-center"
                    style={{ color: '#0D2440' }}
                  >
                    QA Engineer
                  </h3>
                  <Button variant="primary" size="md" className="w-full">
                    Apply Now
                  </Button>
                </div>
                <div 
                  className="flex flex-col gap-3 md:gap-4 p-4 md:p-5 rounded-[16px] md:rounded-[20px] card-hover transition-smooth"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3 
                    className="font-montserrat font-bold text-base md:text-lg lg:text-[20px] text-center"
                    style={{ color: '#0D2440' }}
                  >
                    Full Stack Developer
                  </h3>
                  <Button variant="primary" size="md" className="w-full">
                    Apply Now
                  </Button>
                </div>
                <div 
                  className="flex flex-col gap-3 md:gap-4 p-4 md:p-5 rounded-[16px] md:rounded-[20px] card-hover transition-smooth"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(0, 0, 0, 0.2)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <h3 
                    className="font-montserrat font-bold text-base md:text-lg lg:text-[20px] text-center"
                    style={{ color: '#0D2440' }}
                  >
                    DevOps
                  </h3>
                  <Button variant="primary" size="md" className="w-full">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* Contact Us Section */}
      <section id="contact" className="relative w-full h-full">
        {/* Hero Section - Exact Figma Specs */}
        <div className="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-[40px] py-4 sm:py-5 md:py-6 lg:py-6">
          <div 
            className="relative rounded-[18px] md:rounded-[28px] overflow-hidden w-full h-[120px] sm:h-[150px] md:h-[180px]"
            style={{
              maxWidth: '900px',
              borderRadius: '28px',
              position: 'relative'
            }}
          >
            {/* Background Image - Full image with all elements including spheres */}
            <img
              src={imgAboutHero}
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
              className="absolute font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-[36px] leading-[1.219] z-10"
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
        <div className="py-0 px-4 sm:px-6 md:px-8 lg:px-[40px]" style={{ paddingTop: '0', paddingBottom: '20px' }}>
          <div className="flex justify-center items-center w-full">
            <p 
              className="font-montserrat font-bold text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-center max-w-[1166px] mx-auto"
              style={{ color: theme.colors.secondary }}
            >
              Let's talk about your next digital project.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              We'd love to help you bring your ideas to life.
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-black min-h-[500px] md:min-h-[600px] w-full relative" style={{ marginBottom: '0', zIndex: 1 }}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8 max-w-[900px] mx-auto py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-0">
            {/* Contact Info */}
            <div className="flex flex-col gap-5 md:gap-6 w-full md:w-[500px] overflow-visible">
              <div className="flex flex-col gap-3 md:gap-4">
                <h2 className="font-montserrat font-light text-xl md:text-2xl lg:text-[28px] text-white">
                  Get in Touch
                </h2>
                <p className="font-montserrat text-lg md:text-xl lg:text-[24px] text-[#7794E2]">
                  <span className="font-bold">Let's talk</span> about your next digital project.
                </p>
              </div>

              <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 overflow-visible">
                <div className="flex flex-col gap-2 md:gap-2.5">
                  <h3 className="font-montserrat font-light text-sm md:text-base lg:text-[18px] text-white">Email</h3>
                  <p className="font-montserrat font-medium text-base md:text-lg lg:text-[20px] text-[#7794E2] break-all">Hr@cypherbit.in</p>
                </div>
                <div className="flex flex-col gap-2 md:gap-2.5">
                  <h3 className="font-montserrat font-light text-sm md:text-base lg:text-[18px] text-white">Phone</h3>
                  <p className="font-montserrat font-medium text-base md:text-lg lg:text-[20px] text-[#7794E2]">+91 8919216351</p>
                </div>
                <div className="flex flex-col gap-2 md:gap-2.5">
                  <h3 className="font-montserrat font-light text-sm md:text-base lg:text-[18px] text-white">Address</h3>
                  <p className="font-montserrat font-medium text-base md:text-lg lg:text-[20px] text-[#5D80DB]">
                    IT tower, Padma Nagar, Nalgonda, Telangana 508001
                  </p>
                </div>
                <div className="flex flex-col gap-2 md:gap-2.5">
                  <h3 className="font-montserrat font-light text-sm md:text-base lg:text-[18px] text-white">Follow us</h3>
                  <div className="flex gap-3 md:gap-3.5 font-montserrat font-medium text-base md:text-lg lg:text-[20px] text-[#5D80DB]">
                    <a href="#" className="hover:text-[#7794E2] transition-colors cursor-pointer">Instagram</a>
                    <a href="#" className="hover:text-[#7794E2] transition-colors cursor-pointer">Linked In</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5 w-full md:w-[678px]">
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <div className="flex flex-col gap-2 md:gap-2.5 w-full md:w-[326px]">
                  <label className="font-montserrat font-light text-sm md:text-base lg:text-[18px] text-white">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-[#EAEAEA] h-[38px] px-2 md:px-[8px] py-[4px] rounded-[8px] font-montserrat font-medium text-sm md:text-base lg:text-[16px] text-black outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2 md:gap-2.5 w-full md:w-[330px]">
                  <label className="font-montserrat font-light text-sm md:text-base lg:text-[18px] text-white">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="bg-[#EAEAEA] h-[38px] px-2 md:px-[8px] py-[4px] rounded-[8px] font-montserrat font-medium text-sm md:text-base lg:text-[16px] text-black outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:gap-2.5">
                <label className="font-montserrat font-light text-sm md:text-base lg:text-[18px] text-white">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write something......"
                  className="bg-[#EAEAEA] h-[100px] md:h-[130px] p-3 md:p-4 rounded-[8px] font-montserrat font-medium text-sm md:text-base lg:text-[16px] text-black resize-none outline-none"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="h-[42px] rounded-[10px] font-semibold text-sm md:text-base lg:text-[18px] w-full md:w-auto transition-smooth"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
