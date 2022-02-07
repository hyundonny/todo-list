import lightDesktopImg from 'assets/images/bg-desktop-light.jpg';
import darkDesktopImg from 'assets/images/bg-desktop-dark.jpg';
import lightMobileImg from 'assets/images/bg-mobile-light.jpg';
import darkMobileImg from 'assets/images/bg-mobile-dark.jpg';

export const commonTheme = {
  common: {
    color: {
      primary: 'hsl(220, 98%, 61%)',
      gradientFrom: 'hsl(192, 100%, 67%)',
      gradientTo: 'hsl(280, 87%, 65%)',
      gradient: 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));',
    },
  },
};

export const lightTheme = {
  conditional: {
    color: {
      background: 'hsl(0, 0%, 98%)',
      container: 'hsl(0, 0%, 100%)',
      text: 'hsl(235, 19%, 35%)',
      'text-hover': 'hsl(233, 25%, 28%)',
      completed: 'hsl(236, 33%, 92%)',
      muted: 'hsl(236, 9%, 61%)',
      shadow: '0px 35px 50px -15px rgba(194, 195, 214, 0.5);',
      border: '#E3E4F1',
    },
    'desktop-img': lightDesktopImg,
    'mobile-img': lightMobileImg,
  },
};

export const darkTheme = {
  conditional: {
    color: {
      background: 'hsl(235, 21%, 11%)',
      container: 'hsl(235, 24%, 19%)',
      text: 'hsl(234, 39%, 85%)',
      'text-hover': 'hsl(236, 33%, 92%)',
      completed: 'hsl(234, 11%, 52%)',
      muted: 'hsl(233, 14%, 35%)',
      shadow: '0px 35px 50px -15px rgba(0, 0, 0, 0.5);',
      border: '#393A4B',
    },
    'desktop-img': darkDesktopImg,
    'mobile-img': darkMobileImg,
  },
};
