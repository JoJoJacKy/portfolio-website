import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap');
    
    scroll-behavior: smooth;
    @font-face {
    font-family: 'Calibre Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Calibre Regular'), url('/fonts/Calibre-Regular.woff') format('woff');
    }
    
    @font-face {
    font-family: 'Calibre Semibold';
    font-style: normal;
    font-weight: normal;
    src: local('Calibre Semibold'), url('/fonts/Calibre-Semibold.woff') format('woff');
    }
    
    @font-face {
    font-family: 'Calibre Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Calibre Medium'), url('/fonts/Calibre-Medium.woff') format('woff');
    }
    @font-face {
    font-family: 'Calibre Light';
    font-style: normal;
    font-weight: normal;
    src: local('Calibre Light'), url('/fonts/Calibre-Light.woff') format('woff');
    }
    
   
    `}
  />
)

export default Fonts
