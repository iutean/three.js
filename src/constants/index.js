export const navLinks = [
  {
    id: "home",
    href: "#home",
    name: "Home"
  },
  {
    id: "about",
    href: "#about",
    name: "About"
  },
  {
    id: "work",
    href: "#work",
    name: "Work"
  }
];
  
  
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -3.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-4, 2, 0] : isMobile ? [-5, 2, 0] : isTablet ? [-6, 2, 0] : [-50, -10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
      headsetPosition: isSmall ? [3, 1, 0] : isMobile ? [5, 1.5, 0] : isTablet ? [5, 4, 0] : [12, 2, 0],
      speakersPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [10, -5.5, 0],
      vinylPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-19, 6, -15],
      maudioPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-19, -10, -15],
      racksPosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [-10.7, -5.7, 0],
    };
  };
  
