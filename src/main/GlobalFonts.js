import { createGlobalStyle } from 'styled-components';

import Proxima from './ProximaNova.woff';

export default createGlobalStyle`
  @font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova'), local('Proxima Nova'),
    url(${Proxima}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
`;